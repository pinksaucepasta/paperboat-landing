import { useState } from "react";
import { motion } from "motion/react";

import { cn } from "@/lib/utils";
import { container, item, viewportOnce } from "@/components/site/motion";

// Show, don't tell. A tabbed terminal that demonstrates the surface area before
// the visitor reads a word of prose — the spin-up, the durable resume, the
// tunnel — each as a short, real-looking session.
type Line = { text: string; tone?: "prompt" | "muted" | "accent" | "ok" };

const TABS: { id: string; label: string; lines: Line[] }[] = [
  {
    id: "run",
    label: "Launch an agent",
    lines: [
      { text: "$ paperboat run claude-code", tone: "prompt" },
      { text: "→ provisioning isolated workspace…", tone: "muted" },
      { text: "✓ sandbox ready in 0.8s — 4 vCPU · 8 GB", tone: "ok" },
      { text: "✓ claude-code attached on your credentials", tone: "ok" },
      { text: "  workspace ws_7f3a · streaming logs", tone: "muted" },
    ],
  },
  {
    id: "resume",
    label: "Resume a session",
    lines: [
      { text: "$ paperboat resume ws_7f3a", tone: "prompt" },
      { text: "→ restoring snapshot…", tone: "muted" },
      { text: "✓ filesystem + processes rehydrated", tone: "ok" },
      { text: "  branch feat/payments · 3 agents idle", tone: "muted" },
      { text: "  picked up exactly where you left off", tone: "accent" },
    ],
  },
  {
    id: "tunnel",
    label: "Open a tunnel",
    lines: [
      { text: "$ paperboat tunnel 3000", tone: "prompt" },
      { text: "→ establishing secure route…", tone: "muted" },
      { text: "✓ https://ws-7f3a.agentunnel.dev", tone: "ok" },
      { text: "  forwarding → localhost:3000", tone: "muted" },
      { text: "  scoped, encrypted, revocable", tone: "accent" },
    ],
  },
];

const TONE: Record<NonNullable<Line["tone"]>, string> = {
  prompt: "text-primary-foreground",
  muted: "text-primary-foreground/55",
  accent: "text-primary-foreground/90",
  ok: "text-primary-foreground/80",
};

export function TerminalShowcase() {
  const [active, setActive] = useState(TABS[0].id);
  const tab = TABS.find((t) => t.id === active) ?? TABS[0];

  return (
    <motion.div
      variants={container}
      initial="hidden"
      whileInView="show"
      viewport={viewportOnce}
      className="mx-auto max-w-3xl"
    >
      <motion.div
        variants={item}
        className="overflow-hidden rounded-2xl border border-border bg-card shadow-sm"
      >
        {/* Tab bar — switch between the three short sessions */}
        <div
          role="tablist"
          aria-label="Example sessions"
          className="flex flex-wrap gap-1 border-b border-border bg-muted/40 p-2"
        >
          {TABS.map((t) => (
            <button
              key={t.id}
              role="tab"
              aria-selected={t.id === active}
              onClick={() => setActive(t.id)}
              className={cn(
                "text-nav rounded-md px-3 py-1.5 transition-colors duration-150",
                t.id === active
                  ? "bg-background text-foreground shadow-sm"
                  : "text-muted-foreground hover:bg-background/60 hover:text-foreground",
              )}
            >
              {t.label}
            </button>
          ))}
        </div>

        {/* Terminal body — indigo field, the one fixed-white zone (DESIGN §7) */}
        <div className="bg-primary px-5 py-5 sm:px-6 sm:py-6">
          <div className="mb-4 flex items-center gap-1.5" aria-hidden="true">
            <span className="size-3 rounded-full bg-primary-foreground/25" />
            <span className="size-3 rounded-full bg-primary-foreground/25" />
            <span className="size-3 rounded-full bg-primary-foreground/25" />
          </div>
          <motion.pre
            key={tab.id}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.25 }}
            className="font-mono text-sm leading-[1.9] sm:text-base"
          >
            {tab.lines.map((line, i) => (
              <div key={i} className={TONE[line.tone ?? "muted"]}>
                {line.text}
              </div>
            ))}
          </motion.pre>
        </div>
      </motion.div>
    </motion.div>
  );
}
