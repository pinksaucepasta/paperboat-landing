import { motion } from "motion/react";
import { HugeiconsIcon } from "@hugeicons/react";
import type { IconSvgElement } from "@hugeicons/react";
import {
  CpuIcon,
  Database01Icon,
  ConnectIcon,
} from "@hugeicons/core-free-icons";

import { container, item, viewportOnce } from "@/components/site/motion";

// Expands the hero's promise — "isolated compute, durable storage, and
// extensible tunnels" — into three first-class capabilities. One card per noun,
// in the same order the hero says them, so the page reads as a single thought.
const FEATURES: {
  icon: IconSvgElement;
  title: string;
  detail: string;
}[] = [
  {
    icon: CpuIcon,
    title: "Isolated compute",
    detail:
      "Every agent runs in its own sandbox — dedicated CPU and memory, network-isolated by default. Run untrusted code without it touching anything else.",
  },
  {
    icon: Database01Icon,
    title: "Durable storage",
    detail:
      "Workspaces persist across runs. Snapshot a session and resume it exactly where you left off — filesystem, processes, and context intact.",
  },
  {
    icon: ConnectIcon,
    title: "Extensible tunnels",
    detail:
      "Expose a port, reach a private service, or wire an agent to your stack through AgenTunnel — secure connectivity without standing up infrastructure.",
  },
];

export function FeatureTriad() {
  return (
    <motion.div
      variants={container}
      initial="hidden"
      whileInView="show"
      viewport={viewportOnce}
      className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8"
    >
      {FEATURES.map((f) => (
        <motion.div
          key={f.title}
          variants={item}
          className="group rounded-xl border border-border bg-card p-6 transition-shadow duration-150 hover:shadow-sm lg:p-8"
        >
          <div className="flex size-11 items-center justify-center rounded-lg bg-primary/10 text-primary">
            <HugeiconsIcon icon={f.icon} className="size-5.5" />
          </div>
          <h3 className="text-h4 mt-6 text-foreground">{f.title}</h3>
          <p className="text-body mt-3 text-muted-foreground">{f.detail}</p>
        </motion.div>
      ))}
    </motion.div>
  );
}
