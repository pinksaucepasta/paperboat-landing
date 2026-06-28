import { motion } from "motion/react";
import { HugeiconsIcon } from "@hugeicons/react";
import type { IconSvgElement } from "@hugeicons/react";
import {
  Timer01Icon,
  WorkflowSquare01Icon,
  Shield01Icon,
} from "@hugeicons/core-free-icons";

import { container, item, viewportOnce } from "@/components/site/motion";

// Lets a visitor self-identify by workflow rather than by feature. Three shapes
// of work that map directly to the durable-compute primitives above.
const CASES: {
  icon: IconSvgElement;
  title: string;
  detail: string;
}[] = [
  {
    icon: Timer01Icon,
    title: "Long-running refactors",
    detail:
      "Hand an agent a multi-hour migration and walk away. Durable workspaces keep the job alive across restarts — no babysitting a terminal.",
  },
  {
    icon: WorkflowSquare01Icon,
    title: "Parallel agent fleets",
    detail:
      "Fan a task across dozens of isolated workspaces at once. Each runs independently, and you collect the results when they land.",
  },
  {
    icon: Shield01Icon,
    title: "Sandboxed untrusted code",
    detail:
      "Run generated or third-party code behind hard isolation. Network-restricted by default, with nothing shared between workspaces.",
  },
];

export function UseCases() {
  return (
    <motion.div
      variants={container}
      initial="hidden"
      whileInView="show"
      viewport={viewportOnce}
      className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8"
    >
      {CASES.map((c) => (
        <motion.div
          key={c.title}
          variants={item}
          className="rounded-xl border border-border bg-card p-6 transition-shadow duration-150 hover:shadow-sm lg:p-8"
        >
          <HugeiconsIcon icon={c.icon} className="size-6 text-primary" />
          <h3 className="text-h4 mt-5 text-foreground">{c.title}</h3>
          <p className="text-body mt-3 text-muted-foreground">{c.detail}</p>
        </motion.div>
      ))}
    </motion.div>
  );
}
