"use client";
import React, { useEffect, useMemo, useRef, useState } from "react";
import { cn } from "@/lib/utils";
import { useAIBot } from "@/components/elements/AIBotContext";

const KEY_SOUNDS_DOWN: Record<string, [number, number]> = {
  A: [31542, 85],
  B: [40621, 107],
  C: [39632, 95],
  D: [32492, 85],
  E: [23317, 83],
  F: [32973, 87],
  G: [33453, 94],
  H: [33986, 93],
  I: [25795, 91],
  J: [34425, 88],
  K: [34932, 90],
  L: [35410, 95],
  M: [41610, 93],
  N: [41103, 90],
  O: [26309, 84],
  P: [26804, 83],
  Q: [22245, 95],
  R: [23817, 92],
  S: [32031, 88],
  T: [24297, 92],
  U: [25313, 95],
  V: [40136, 94],
  W: [22790, 89],
  X: [39148, 76],
  Y: [24811, 93],
  Z: [38694, 80],
  " ": [51541, 144],
  "-": [42594, 90],
  "@": [23317, 83],
  "/": [42594, 90],
  ".": [42594, 90],
  ":": [42594, 90],
  "0": [26309, 84],
  "1": [25313, 95],
  "2": [23317, 83],
  "3": [23817, 92],
  "4": [24297, 92],
  "5": [24811, 93],
  "6": [25313, 95],
  "7": [25795, 91],
  "8": [26309, 84],
  "9": [26804, 83],
  Enter: [19065, 110],
};

const KEY_SOUNDS_UP: Record<string, [number, number]> = {
  A: [31632, 80],
  B: [40736, 95],
  C: [39732, 85],
  D: [32577, 80],
  E: [23402, 80],
  F: [33063, 80],
  G: [33553, 85],
  H: [34081, 85],
  I: [25890, 85],
  J: [34515, 85],
  K: [35027, 85],
  L: [35510, 85],
  M: [41710, 85],
  N: [41198, 85],
  O: [26394, 80],
  P: [26889, 80],
  Q: [22345, 85],
  R: [23912, 85],
  S: [32121, 80],
  T: [24392, 85],
  U: [25413, 85],
  V: [40236, 85],
  W: [22880, 85],
  X: [39228, 70],
  Y: [24911, 85],
  Z: [38779, 75],
  " ": [51691, 130],
  "-": [42689, 85],
  "@": [23402, 80],
  "/": [42689, 85],
  ".": [42689, 85],
  ":": [42689, 85],
  "0": [26394, 80],
  "1": [25413, 85],
  "2": [23402, 80],
  "3": [23912, 85],
  "4": [24392, 85],
  "5": [24911, 85],
  "6": [25413, 85],
  "7": [25890, 85],
  "8": [26394, 80],
  "9": [26889, 80],
  Enter: [19180, 100],
};

function useAudio(enabled: boolean) {
  const ctxRef = useRef<AudioContext | null>(null);
  const bufferRef = useRef<AudioBuffer | null>(null);
  const readyRef = useRef(false);

  useEffect(() => {
    if (!enabled) return;
    const init = async () => {
      try {
        ctxRef.current = new AudioContext();
        const res = await fetch("/sounds/sound.ogg");
        if (!res.ok) return;
        bufferRef.current = await ctxRef.current.decodeAudioData(
          await res.arrayBuffer(),
        );
        readyRef.current = true;
      } catch {}
    };
    init();
    return () => {
      ctxRef.current?.close();
    };
  }, [enabled]);

  const playSound = (sound: [number, number] | undefined) => {
    if (!readyRef.current || !ctxRef.current || !bufferRef.current || !sound)
      return;
    if (ctxRef.current.state === "suspended") ctxRef.current.resume();
    const src = ctxRef.current.createBufferSource();
    src.buffer = bufferRef.current;
    src.connect(ctxRef.current.destination);
    src.start(0, sound[0] / 1000, sound[1] / 1000);
  };

  const down = (key: string) =>
    playSound(KEY_SOUNDS_DOWN[key.toUpperCase()] || KEY_SOUNDS_DOWN[key]);
  const up = (key: string) =>
    playSound(KEY_SOUNDS_UP[key.toUpperCase()] || KEY_SOUNDS_UP[key]);

  return { down, up };
}

function useInView(ref: React.RefObject<HTMLElement | null>, once = true) {
  const [inView, setInView] = useState(false);
  const triggered = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el || (once && triggered.current)) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !triggered.current) {
          setInView(true);
          if (once) {
            triggered.current = true;
            observer.disconnect();
          }
        }
      },
      { threshold: 0.1 },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [ref, once]);

  return inView;
}

type TokenType =
  | "command"
  | "flag"
  | "string"
  | "number"
  | "operator"
  | "path"
  | "variable"
  | "comment"
  | "default";

interface Token {
  type: TokenType;
  value: string;
}

function tokenizeBash(text: string): Token[] {
  const tokens: Token[] = [];
  const words = text.split(/(\s+)/);

  let isFirstWord = true;

  for (const word of words) {
    if (/^\s+$/.test(word)) {
      tokens.push({ type: "default", value: word });
      continue;
    }

    if (word.startsWith("#")) {
      tokens.push({ type: "comment", value: word });
      continue;
    }

    if (word.startsWith("$")) {
      tokens.push({ type: "variable", value: word });
      isFirstWord = false;
      continue;
    }

    if (word.startsWith("--") || word.startsWith("-")) {
      tokens.push({ type: "flag", value: word });
      isFirstWord = false;
      continue;
    }

    if (/^["'].*["']$/.test(word)) {
      tokens.push({ type: "string", value: word });
      isFirstWord = false;
      continue;
    }

    if (/^\d+$/.test(word)) {
      tokens.push({ type: "number", value: word });
      isFirstWord = false;
      continue;
    }

    if (/^[|>&<]+$/.test(word)) {
      tokens.push({ type: "operator", value: word });
      isFirstWord = true;
      continue;
    }

    if (word.includes("/") || word.startsWith(".") || word.startsWith("~")) {
      tokens.push({ type: "path", value: word });
      isFirstWord = false;
      continue;
    }

    if (isFirstWord) {
      tokens.push({ type: "command", value: word });
      isFirstWord = false;
      continue;
    }

    tokens.push({ type: "default", value: word });
  }

  return tokens;
}

const tokenColors: Record<TokenType, string> = {
  command: "text-emerald-400 font-mono",
  flag: "text-sky-400 font-mono",
  string: "text-amber-300 font-mono",
  number: "text-purple-400 font-mono",
  operator: "text-red-400 font-mono",
  path: "text-cyan-300 font-mono",
  variable: "text-pink-400 font-mono",
  comment: "text-neutral-500 font-mono",
  default: "text-neutral-300 font-mono",
};

function SyntaxHighlightedText({ text }: { text: string }) {
  const tokens = tokenizeBash(text);

  return (
    <>
      {tokens.map((token, i) => (
        <span key={i} className={tokenColors[token.type]}>
          {token.value}
        </span>
      ))}
    </>
  );
}

interface TerminalLine {
  type: "command" | "output";
  content: string;
}

export interface TerminalProps {
  commands?: string[];
  outputs?: Record<number, string[]>;
  username?: string;
  className?: string;
  typingSpeed?: number;
  delayBetweenCommands?: number;
  initialDelay?: number;
  enableSound?: boolean;
  interactive?: boolean;
  commandResponses?: Record<string, string[]>;
  welcomeLines?: string[];
  projectDetails?: Record<string, string[]>;
}

export function Terminal({
  commands = ["npx shadcn@latest init"],
  outputs = {},
  username = "rishabh-portfolio",
  className,
  typingSpeed = 50,
  delayBetweenCommands = 800,
  initialDelay = 500,
  enableSound = true,
  interactive = false,
  commandResponses = {},
  welcomeLines = [],
  projectDetails = {},
}: TerminalProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const inView = useInView(containerRef);
  const [soundOn, setSoundOn] = useState(enableSound);
  const { down, up } = useAudio(soundOn);
  const [aiMode, setAiMode] = useState(false);
  const { messages: aiMessages, loading: aiLoading, mode, setMode, sendMessage } =
    useAIBot();

  const [lines, setLines] = useState<TerminalLine[]>([]);
  const [currentText, setCurrentText] = useState("");
  const [commandIdx, setCommandIdx] = useState(0);
  const [charIdx, setCharIdx] = useState(0);
  const [outputIdx, setOutputIdx] = useState(-1);
  const [phase, setPhase] = useState<
    "idle" | "typing" | "executing" | "outputting" | "pausing" | "done"
  >("idle");
  const [cursorVisible, setCursorVisible] = useState(true);
  const [inputValue, setInputValue] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);

  const currentCommand = commands[commandIdx] || "";
  const currentOutputs = useMemo(
    () => outputs[commandIdx] || [],
    [outputs, commandIdx],
  );
  const isLastCommand = commandIdx === commands.length - 1;

  useEffect(() => {
    if (interactive) return;
    if (!inView || phase !== "idle") return;
    const t = setTimeout(() => setPhase("typing"), initialDelay);
    return () => clearTimeout(t);
  }, [interactive, inView, phase, initialDelay]);

  useEffect(() => {
    if (interactive) return;
    if (phase !== "typing") return;

    if (charIdx < currentCommand.length) {
      const char = currentCommand[charIdx];
      down(char);
      const t = setTimeout(
        () => {
          up(char);
          setCurrentText(currentCommand.slice(0, charIdx + 1));
          setCharIdx((c) => c + 1);
        },
        typingSpeed + Math.random() * 30,
      );
      return () => clearTimeout(t);
    } else {
      down("Enter");
      const t = setTimeout(() => {
        up("Enter");
        setPhase("executing");
      }, 80);
      return () => clearTimeout(t);
    }
  }, [interactive, phase, charIdx, currentCommand, typingSpeed, down, up]);

  useEffect(() => {
    if (interactive) return;
    if (phase !== "executing") return;

    setLines((prev) => [...prev, { type: "command", content: currentCommand }]);
    setCurrentText("");

    if (currentOutputs.length > 0) {
      setOutputIdx(0);
      setPhase("outputting");
    } else if (isLastCommand) {
      setPhase("done");
    } else {
      setPhase("pausing");
    }
  }, [interactive, phase, currentCommand, currentOutputs.length, isLastCommand]);

  useEffect(() => {
    if (interactive) return;
    if (phase !== "outputting") return;

    if (outputIdx >= 0 && outputIdx < currentOutputs.length) {
      const t = setTimeout(() => {
        setLines((prev) => [
          ...prev,
          { type: "output", content: currentOutputs[outputIdx] },
        ]);
        setOutputIdx((i) => i + 1);
      }, 150);
      return () => clearTimeout(t);
    } else if (outputIdx >= currentOutputs.length) {
      const t = setTimeout(() => {
        if (isLastCommand) {
          setPhase("done");
        } else {
          setPhase("pausing");
        }
      }, 300);
      return () => clearTimeout(t);
    }
  }, [interactive, phase, outputIdx, currentOutputs, isLastCommand]);

  useEffect(() => {
    if (interactive) return;
    if (phase !== "pausing") return;
    const t = setTimeout(() => {
      setCharIdx(0);
      setOutputIdx(-1);
      setCommandIdx((c) => c + 1);
      setPhase("typing");
    }, delayBetweenCommands);
    return () => clearTimeout(t);
  }, [interactive, phase, delayBetweenCommands]);

  useEffect(() => {
    const interval = setInterval(() => setCursorVisible((v) => !v), 530);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (contentRef.current) {
      contentRef.current.scrollTop = contentRef.current.scrollHeight;
    }
  }, [lines, phase, interactive]);

  useEffect(() => {
    if (!interactive) return;
    if (welcomeLines.length === 0) return;
    setLines(
      welcomeLines.map(
        (line): TerminalLine => ({ type: "output", content: line }),
      ),
    );
  }, [interactive, welcomeLines]);

  const modeLabel = mode === "hr" ? "HR" : mode === "tech" ? "Tech" : "Bro";
  const promptName = aiMode ? `${modeLabel} Rishu` : username;

  const prompt = (
    <span className="font-mono text-neutral-500">
      <span className="font-mono text-sky-500">{promptName}</span>
      <span className="font-mono text-emerald-600">:</span>
      <span className="font-mono text-sky-400">~</span>
      <span className="font-mono text-neutral-500">$</span>{" "}
    </span>
  );

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const trimmed = inputValue.trim();
    if (!trimmed) return;

    setLines((prev) => [
      ...prev,
      { type: "command", content: trimmed } as TerminalLine,
    ]);
    setInputValue("");

    const normalized = trimmed.toLowerCase();

    if (normalized === "help") {
      const ordered = [
        "whoami",
        "projects",
        "cd ai (enter AI mode)",
        "exit (leave AI mode)",
        "mode bro|hr|tech (only in AI mode)",
        "projects --top",
        "skills",
        "contact",
        "resume",
        "location",
      ];

      const helpLines = [
        "Available commands:",
        ...ordered.map((cmd) => `- ${cmd}`),
      ];

      setLines((prev) => [
        ...prev,
        ...helpLines.map(
          (line): TerminalLine => ({ type: "output", content: line }),
        ),
      ]);
      return;
    }

    if (normalized === "cd ai") {
      setAiMode(true);
      setMode("bro");
      setLines((prev) => [
        ...prev,
        {
          type: "output",
          content: "AI mode enabled. Bro Rishu is talking.",
        } as TerminalLine,
      ]);
      return;
    }

    if (aiMode) {
      if (normalized === "exit" || normalized === "cd .." || normalized === "cd ~") {
        setAiMode(false);
        setLines((prev) => [
          ...prev,
          { type: "output", content: "Exited AI mode." } as TerminalLine,
        ]);
        return;
      }

      if (normalized.startsWith("mode ")) {
        const next = normalized.replace("mode ", "").trim();
        if (next === "bro" || next === "hr" || next === "tech") {
          setMode(next);
          setLines((prev) => [
            ...prev,
            {
              type: "output",
              content: `Mode switched to ${next.toUpperCase()}.`,
            } as TerminalLine,
          ]);
          return;
        }
      }

      if (aiLoading) return;
      await sendMessage(trimmed, mode);
      return;
    }

    if (normalized.startsWith("cd ")) {
      const projectKey = normalized.replace("cd ", "").trim();
      const detailLines = projectDetails[projectKey];
      if (detailLines && detailLines.length > 0) {
        setLines((prev) => [
          ...prev,
          ...detailLines.map(
            (line): TerminalLine => ({ type: "output", content: line }),
          ),
        ]);
        return;
      }
    }
    if (normalized === "clear") {
      setLines([]);
      return;
    }

    const response = commandResponses[normalized];
    if (response && response.length > 0) {
      setLines((prev) => [
        ...prev,
        ...response.map(
          (line): TerminalLine => ({ type: "output", content: line }),
        ),
      ]);
      return;
    }

    setLines((prev) => [
      ...prev,
      {
        type: "output",
        content: `command not found: ${trimmed}`,
      } as TerminalLine,
    ]);
  };

  return (
    <div
      ref={containerRef}
      className={cn(
        "mx-auto w-full max-w-xl px-4 font-mono text-xs",
        className,
      )}
    >
      <div className="overflow-hidden min-h-[420px] rounded-lg border border-neutral-800 bg-neutral-900 shadow-2xl">
        {/* Title Bar */}
        <div className="flex items-center gap-2 bg-neutral-800 px-4 py-3 font-mono">
          <div className="flex items-center gap-1.5">
            <div className="h-3 w-3 rounded-full bg-red-500 transition-colors hover:bg-red-600" />
            <div className="h-3 w-3 rounded-full bg-yellow-500 transition-colors hover:bg-yellow-600" />
            <div className="h-3 w-3 rounded-full bg-green-500 transition-colors hover:bg-green-600" />
          </div>
          <div className="flex-1 text-center">
            <span className="truncate text-xs font-mono text-neutral-400">
              {username} — bash
            </span>
          </div>
          {aiMode ? (
            <span className="flex items-center gap-1 rounded-full border border-neutral-600/70 bg-neutral-900/80 px-2 py-0.5 text-[10px] uppercase tracking-[0.14em] text-neutral-200">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 shadow-[0_0_6px_rgba(16,185,129,0.8)]" />
              {modeLabel} Mode
            </span>
          ) : null}
          <button
            type="button"
            onClick={() => setSoundOn((prev) => !prev)}
            className="inline-flex h-7 w-7 items-center justify-center rounded-full border border-neutral-700 bg-neutral-900 text-neutral-300 transition hover:border-neutral-500 hover:text-neutral-100"
            aria-label={soundOn ? "Disable typing sound" : "Enable typing sound"}
          >
            {soundOn ? (
              <svg
                viewBox="0 0 24 24"
                className="h-4 w-4"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M11 5L6 9H3v6h3l5 4V5z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15.5 8.5a4 4 0 0 1 0 7"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M18.5 6a7 7 0 0 1 0 12"
                />
              </svg>
            ) : (
              <svg
                viewBox="0 0 24 24"
                className="h-4 w-4"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M11 5L6 9H3v6h3l5 4V5z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M22 9l-6 6"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M16 9l6 6"
                />
              </svg>
            )}
          </button>
        </div>

        {/* Terminal Content */}
        <div
          ref={contentRef}
          className="no-visible-scrollbar min-h-[420px] h-80 overflow-y-auto p-4 font-mono"
        >
          {lines.map((line, i) => (
            <div key={i} className="leading-relaxed whitespace-pre-wrap">
              {line.type === "command" ? (
                <span>
                  {prompt}
                  <SyntaxHighlightedText text={line.content} />
                </span>
              ) : (
                <span className="font-mono text-neutral-400">
                  {line.content}
                </span>
              )}
            </div>
          ))}

          {aiMode &&
            aiMessages.map((message, i) => (
              <div key={`ai-${i}`} className="leading-relaxed whitespace-pre-wrap">
                {message.role === "user" ? (
                  <span>
                    {prompt}
                    <span className="font-mono text-neutral-200">
                      {message.content}
                    </span>
                  </span>
                ) : (
                  <span className="font-mono text-neutral-400">
                    {message.content}
                  </span>
                )}
              </div>
            ))}

          {!interactive && phase === "typing" && (
            <div className="font-mono leading-relaxed whitespace-pre-wrap">
              {prompt}
              <SyntaxHighlightedText text={currentText} />
              <span className="ml-0.5 inline-block h-4 w-2 bg-neutral-300 align-middle" />
            </div>
          )}

          {!interactive &&
            (phase === "done" ||
              phase === "pausing" ||
              phase === "outputting") && (
            <div className="font-mono leading-relaxed whitespace-pre-wrap">
              {prompt}
              <span
                className={cn(
                  "inline-block h-4 w-2 bg-neutral-300 align-middle transition-opacity duration-100",
                  !cursorVisible && "opacity-0",
                )}
              />
            </div>
          )}

          {interactive && (
            <form onSubmit={handleSubmit} className="leading-relaxed">
              <label className="flex items-center gap-0.5 whitespace-pre-wrap font-mono">
                {prompt}
                <input
                  ref={inputRef}
                  value={inputValue}
                  onChange={(event) => setInputValue(event.target.value)}
                  onKeyDown={(event) => {
                    if (!soundOn) return;
                    if (event.key === "Enter") {
                      down("Enter");
                      return;
                    }
                    if (event.key.length === 1 || event.key === " ") {
                      down(event.key);
                    }
                  }}
                  onKeyUp={(event) => {
                    if (!soundOn) return;
                    if (event.key === "Enter") {
                      up("Enter");
                      return;
                    }
                    if (event.key.length === 1 || event.key === " ") {
                      up(event.key);
                    }
                  }}
                  className="flex-1 bg-transparent font-mono text-neutral-200 outline-none"
                  autoComplete="off"
                  spellCheck={false}
                />
              </label>
              {aiMode && aiLoading ? (
                <div className="mt-2 flex items-center gap-2 text-[10px] uppercase tracking-[0.16em] text-emerald-300/70">
                  <span className="inline-flex h-2 w-2 animate-pulse rounded-full bg-emerald-300/80" />
                  Rishu is typing...
                </div>
              ) : null}
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
