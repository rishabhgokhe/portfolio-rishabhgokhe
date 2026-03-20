import { NextResponse } from "next/server";
import { promises as fs } from "node:fs";
import path from "node:path";

export const runtime = "nodejs";

type Mode = "bro" | "hr" | "tech";

type HistoryMessage = {
  role: "user" | "assistant";
  content: string;
};

type BotData = {
  about: string;
  skills: string;
  achievements: string;
  resume: string;
  projects: string;
  personality: string;
};

let cachedData: BotData | null = null;

async function loadBotData(): Promise<BotData> {
  if (cachedData) return cachedData;
  const base = path.join(process.cwd(), "lib", "ai-bot");
  const [about, skills, achievements, resume, projects, personality] =
    await Promise.all([
      fs.readFile(path.join(base, "about.txt"), "utf8"),
      fs.readFile(path.join(base, "skills.txt"), "utf8"),
      fs.readFile(path.join(base, "achievements.txt"), "utf8"),
      fs.readFile(path.join(base, "resume.txt"), "utf8"),
      fs.readFile(path.join(base, "projects.json"), "utf8"),
      fs.readFile(path.join(base, "personality.md"), "utf8"),
    ]);

  cachedData = {
    about: about.trim(),
    skills: skills.trim(),
    achievements: achievements.trim(),
    resume: resume.trim(),
    projects: projects.trim(),
    personality: personality.trim(),
  };

  return cachedData;
}

function normalizeMode(mode?: string): Mode {
  const value = (mode || "bro").toLowerCase();
  if (value === "hr" || value === "tech") return value;
  return "bro";
}

function modeInstructions(mode: Mode): string {
  if (mode === "hr") {
    return "Mode: HR. Be polished, professional, and concise. Emphasize impact and clarity.";
  }
  if (mode === "tech") {
    return "Mode: Tech. Go deeper technically, use structure and precise terms.";
  }
  return "Mode: Bro. Casual Hinglish, friendly, slightly witty.";
}

function buildSystemPrompt(data: BotData, mode: Mode): string {
  return [
    "You are Rishabh Gokhe, a real human portfolio owner.",
    "Follow the personality and rules strictly.",
    modeInstructions(mode),
    "\nPersonality rules:",
    data.personality,
    "\nPrimary context:",
    `ABOUT:\n${data.about}`,
    `\nSKILLS:\n${data.skills}`,
    `\nACHIEVEMENTS:\n${data.achievements}`,
    `\nRESUME:\n${data.resume}`,
    `\nPROJECTS(JSON):\n${data.projects}`,
  ].join("\n");
}

type GroqChoice = {
  message?: {
    content?: string;
  };
};

type GroqResponse = {
  choices?: GroqChoice[];
  error?: {
    message?: string;
  };
};

function extractGroqText(payload: GroqResponse): string {
  const choices = payload.choices ?? [];
  const content = choices[0]?.message?.content;
  return (content || "").trim();
}

export async function POST(req: Request) {
  const apiKey = process.env.GROQ_API_KEY;
  if (!apiKey) {
    return NextResponse.json(
      { error: "Missing GROQ_API_KEY environment variable." },
      { status: 500 }
    );
  }

  let body: {
    message?: string;
    mode?: string;
    history?: HistoryMessage[];
  } = {};

  try {
    body = await req.json();
  } catch (error) {
    return NextResponse.json(
      { error: "Invalid JSON payload." },
      { status: 400 }
    );
  }

  const message = body.message?.trim();
  if (!message) {
    return NextResponse.json(
      { error: "message is required." },
      { status: 400 }
    );
  }

  const mode = normalizeMode(body.mode);
  const data = await loadBotData();
  const systemPrompt = buildSystemPrompt(data, mode);

  const history = Array.isArray(body.history) ? body.history : [];
  const input = [
    ...history.map((item) => ({ role: item.role, content: item.content })),
    { role: "user", content: message },
  ];

  const model = process.env.GROQ_MODEL || "llama-3.3-70b-versatile";

  const response = await fetch("https://api.groq.com/openai/v1/chat/completions", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      model,
      messages: [
        { role: "system", content: systemPrompt },
        ...input,
      ],
    }),
  });

  const payload = (await response.json()) as GroqResponse;
  if (!response.ok) {
    const message = payload.error?.message || "Groq API error.";
    return NextResponse.json({ error: message }, { status: response.status });
  }

  const reply = extractGroqText(payload);
  return NextResponse.json({ reply: reply || "" });
}
