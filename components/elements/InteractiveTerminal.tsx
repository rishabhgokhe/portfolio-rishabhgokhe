"use client";
import { Terminal } from "@/components/ui/terminal";

export default function TerminalSection() {
  return (
    <section className="w-full">
      <Terminal
        interactive
        enableSound
        welcomeLines={[
          "Type 'help' to see available commands.",
          "Tip: try 'projects' or 'contact'.",
        ]}
        commandResponses={{
          whoami: ["rishabh-gokhe"],
          projects: ["TaskFlow", "SkillWave", "Animease"],
          "projects --top": ["TaskFlow", "SkillWave", "Animease"],
          skills: ["React · Next.js · TypeScript · Node.js"],
          contact: ["email: rishabhgokhe20contact@gmail.com"],
          resume: ["downloads/PortFolioRishabh.pdf"],
          location: ["Nagpur, IN"],
        }}
      />
    </section>
  );
}
