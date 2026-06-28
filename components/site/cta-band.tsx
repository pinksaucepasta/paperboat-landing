import { motion } from "motion/react";
import { HugeiconsIcon } from "@hugeicons/react";
import { ArrowRight01Icon, ArrowUpRight01Icon } from "@hugeicons/core-free-icons";

import { Button } from "@/components/ui/button";
import { container, item, viewportOnce } from "@/components/site/motion";

// The closing band, mirroring the reference sites: a full-width indigo panel that
// resolves the page to a single action instead of dead-ending at the logo loop.
// Indigo field → the one fixed-white zone (DESIGN §7).
export function CtaBand() {
  return (
    <motion.div
      variants={container}
      initial="hidden"
      whileInView="show"
      viewport={viewportOnce}
      className="relative overflow-hidden rounded-3xl bg-primary px-6 py-16 text-center sm:px-12 lg:px-16 lg:py-24"
    >
      <motion.span
        variants={item}
        className="text-eyebrow block text-primary-foreground/70"
      >
        Ready when you are
      </motion.span>
      <motion.h2
        variants={item}
        className="text-h2 mx-auto mt-4 max-w-3xl text-balance text-primary-foreground"
      >
        Ship your agents to the cloud
      </motion.h2>
      <motion.p
        variants={item}
        className="text-lead mx-auto mt-4 max-w-xl text-pretty text-primary-foreground/70"
      >
        Isolated compute, durable storage, and extensible tunnels — on the
        credentials you already pay for. Spin up your first workspace in seconds.
      </motion.p>
      <motion.div
        variants={item}
        className="mt-8 flex flex-wrap items-center justify-center gap-3"
      >
        <Button
          size="lg"
          nativeButton={false}
          render={<a href="#get-started" />}
          className="bg-background text-primary hover:bg-background/90"
        >
          Get started
          <HugeiconsIcon icon={ArrowRight01Icon} data-icon="inline-end" />
        </Button>
        <Button
          variant="outline"
          size="lg"
          nativeButton={false}
          render={<a href="#docs" />}
          className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 hover:text-primary-foreground"
        >
          Read the docs
          <HugeiconsIcon icon={ArrowUpRight01Icon} data-icon="inline-end" />
        </Button>
      </motion.div>
    </motion.div>
  );
}
