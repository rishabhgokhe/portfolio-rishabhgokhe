"use client";

import React, { createContext, useCallback, useContext, useEffect, useRef, useState } from "react";

export type AIBotMessage = {
  role: "user" | "assistant";
  content: string;
};

type AIBotContextValue = {
  messages: AIBotMessage[];
  loading: boolean;
  error: string | null;
  mode: "bro" | "hr" | "tech";
  sendMessage: (text: string, mode?: "bro" | "hr" | "tech") => Promise<void>;
  setMode: (mode: "bro" | "hr" | "tech") => void;
  clearChat: () => void;
};

const AIBotContext = createContext<AIBotContextValue | null>(null);

export function AIBotProvider({ children }: { children: React.ReactNode }) {
  const [mode, setMode] = useState<"bro" | "hr" | "tech">("bro");
  const [persist, setPersist] = useState(true);
  const [messages, setMessages] = useState<AIBotMessage[]>([
    {
      role: "assistant",
      content: "Hey! Rishu here, Ask me anything..",
    },
  ]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const messagesRef = useRef(messages);
  useEffect(() => {
    messagesRef.current = messages;
  }, [messages]);

  useEffect(() => {
    if (typeof window === "undefined") return;
    const saved = window.localStorage.getItem("ai-bot-state");
    if (!saved) return;
    try {
      const parsed = JSON.parse(saved) as {
        mode?: "bro" | "hr" | "tech";
        messages?: AIBotMessage[];
        persist?: boolean;
      };
      if (parsed.mode) setMode(parsed.mode);
      if (Array.isArray(parsed.messages) && parsed.messages.length > 0) {
        setMessages(parsed.messages);
      }
    } catch {
      // ignore invalid cache
    }
  }, []);

  useEffect(() => {
    if (typeof window === "undefined") return;
    window.localStorage.setItem(
      "ai-bot-state",
      JSON.stringify({ mode, messages })
    );
  }, [mode, messages]);

  const sendMessage = useCallback(async (text: string, overrideMode?: "bro" | "hr" | "tech") => {
    const trimmed = text.trim();
    if (!trimmed || loading) return;

    setError(null);
    const history = messagesRef.current;
    setMessages((prev) => [...prev, { role: "user", content: trimmed }]);
    setLoading(true);

    try {
      const response = await fetch("/api/ai", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          message: trimmed,
          mode: overrideMode || mode,
          history,
        }),
      });

      const payload = (await response.json()) as { reply?: string; error?: string };
      if (!response.ok) {
        throw new Error(payload.error || "AI request failed.");
      }

      const reply = payload.reply?.trim() || "Hmm, I didn’t get that. Try again?";
      setMessages((prev) => [...prev, { role: "assistant", content: reply }]);
    } catch (err) {
      const message = err instanceof Error ? err.message : "Something went wrong.";
      setError(message);
    } finally {
      setLoading(false);
    }
  }, [loading, mode]);

  const clearChat = useCallback(() => {
    setMessages([
      {
        role: "assistant",
        content: "Chat cleared. Hey! Rishu here, Ask me anything..",
      },
    ]);
    setError(null);
  }, []);

  return (
    <AIBotContext.Provider
      value={{
        messages,
        loading,
        error,
        mode,
        sendMessage,
        setMode,
        clearChat,
      }}
    >
      {children}
    </AIBotContext.Provider>
  );
}

export function useAIBot() {
  const context = useContext(AIBotContext);
  if (!context) {
    throw new Error("useAIBot must be used within AIBotProvider.");
  }
  return context;
}
