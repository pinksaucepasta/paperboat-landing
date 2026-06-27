import { HugeiconsIcon } from "@hugeicons/react";
import {
  ArrowRight01Icon,
  ArrowUpRight01Icon,
  SquareIcon,
} from "@hugeicons/core-free-icons";

import { Button } from "@/components/ui/button";

export function HeroContent() {
  return (
    <div className="flex max-w-2xl flex-col items-center gap-8 lg:items-start">
      <a
        href="#announcement"
        className="text-eyebrow flex items-center gap-2 text-white lg:text-primary"
      >
        <HugeiconsIcon icon={SquareIcon} className="size-2.5 shrink-0 fill-white lg:fill-primary" />
        Persistent agent workspaces
        <HugeiconsIcon icon={ArrowRight01Icon} className="size-3.5 shrink-0" />
      </a>

      <h1 className="text-h1 text-balance text-white lg:text-primary">
        Run AI Agents
        <br />
        in the <span className="font-pixel-dots">Cloud</span>
      </h1>

      <p className="text-lead text-white/70 lg:text-muted-foreground text-pretty">
        Isolated compute, durable storage, and extensible tunnels.
      </p>

      <div className="flex flex-wrap items-center gap-3">
        <Button size="lg" render={<a href="#get-started" />} className="bg-background text-primary hover:bg-background/90 lg:bg-primary lg:text-primary-foreground lg:hover:bg-primary/80">
          Get started
          <HugeiconsIcon icon={ArrowRight01Icon} data-icon="inline-end" />
        </Button>
        <Button variant="outline" size="lg" render={<a href="#byoc" />} className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 hover:text-primary-foreground lg:border-border lg:text-foreground lg:hover:bg-input/50 lg:hover:text-foreground">
          Bring Your Own Compute
          <HugeiconsIcon icon={ArrowUpRight01Icon} data-icon="inline-end" />
        </Button>
      </div>
    </div>
  );
}
