import { motion } from "motion/react";
import { HugeiconsIcon } from "@hugeicons/react";
import type { IconSvgElement } from "@hugeicons/react";
import {
  ServerStack01Icon,
  Robot01Icon,
  Database01Icon,
} from "@hugeicons/core-free-icons";

import { container, item, viewportOnce } from "@/components/site/motion";

// Makes the BYOC mechanism legible: three steps, left to right. The differentiator
// — run on compute and credentials you already pay for, no token resale — lives here,
// not buried in a logo caption.
const STEPS: {
  icon: IconSvgElement;
  step: string;
  title: string;
  detail: string;
}[] = [
  {
    icon: ServerStack01Icon,
    step: "01",
    title: "Connect your compute",
    detail:
      "Bring your own cloud or machines, or use ours. Agents run on the credentials you already pay for — no token resale, no markup, no lock-in.",
  },
  {
    icon: Robot01Icon,
    step: "02",
    title: "Launch any agent",
    detail:
      "Claude Code, Codex, OpenCode, Cursor, or your own. Each spins up in an isolated, network-sandboxed workspace in under a second.",
  },
  {
    icon: Database01Icon,
    step: "03",
    title: "Persist & resume",
    detail:
      "Snapshot a workspace and pick it back up later — or fan out dozens in parallel. State is durable, so long-running work survives across sessions.",
  },
];

export function HowItWorks() {
  return (
    <motion.div
      variants={container}
      initial="hidden"
      whileInView="show"
      viewport={viewportOnce}
      className="relative grid gap-10 sm:grid-cols-3 sm:gap-6 lg:gap-10"
    >
      {STEPS.map((s) => (
        <motion.div key={s.step} variants={item} className="relative">
          <div className="flex items-center gap-3">
            <div className="flex size-11 items-center justify-center rounded-lg border border-border bg-card text-primary">
              <HugeiconsIcon icon={s.icon} className="size-5.5" />
            </div>
            <span className="text-eyebrow text-muted-foreground">{s.step}</span>
          </div>
          <h3 className="text-h4 mt-5 text-foreground">{s.title}</h3>
          <p className="text-body mt-3 text-muted-foreground">{s.detail}</p>
        </motion.div>
      ))}
    </motion.div>
  );
}
