import { motion } from "motion/react";

import { container, item, viewportOnce } from "@/components/site/motion";

// A quiet credibility strip — three numbers that make the capability claims
// concrete. Sits above the logo loop so the trust signals read together.
const STATS: { value: string; label: string }[] = [
  { value: "0.8s", label: "Median workspace cold start" },
  { value: "5+", label: "Agents supported out of the box" },
  { value: "100%", label: "Your credentials — no token resale" },
];

export function StatStrip() {
  return (
    <motion.dl
      variants={container}
      initial="hidden"
      whileInView="show"
      viewport={viewportOnce}
      className="grid grid-cols-1 divide-y divide-border border-y border-border sm:grid-cols-3 sm:divide-x sm:divide-y-0"
    >
      {STATS.map((s) => (
        <motion.div
          key={s.label}
          variants={item}
          className="px-6 py-8 text-center sm:py-10"
        >
          <dt className="sr-only">{s.label}</dt>
          <dd>
            <span className="font-heading block text-4xl font-semibold tracking-[-0.025em] text-primary lg:text-5xl">
              {s.value}
            </span>
            <span className="text-body-sm mt-2 block text-muted-foreground">
              {s.label}
            </span>
          </dd>
        </motion.div>
      ))}
    </motion.dl>
  );
}
