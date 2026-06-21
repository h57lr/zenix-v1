"use client";

import { Cpu } from "lucide-react";
import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { StatBlock } from "@/components/ui/StatBlock";
import { aboutContent } from "@/lib/constants";
import { ScrollReveal } from "@/components/effects/ScrollReveal";

export function About() {
  return (
    <SectionWrapper id="about">
      <div className="grid items-center gap-12 md:grid-cols-2 md:gap-16">
        <div>
          <ScrollReveal>
            <h2 className="text-3xl font-bold md:text-4xl">
              {aboutContent.headline}
            </h2>
          </ScrollReveal>

          <ScrollReveal delay={0.1}>
            <p className="mt-6 leading-relaxed text-text-secondary">
              {aboutContent.body}
            </p>
          </ScrollReveal>

          <ScrollReveal delay={0.2}>
            <div className="mt-10">
              <StatBlock stats={aboutContent.stats} />
            </div>
          </ScrollReveal>
        </div>

        <ScrollReveal delay={0.2}>
          <div className="flex items-center justify-center">
            <div className="relative flex h-64 w-64 items-center justify-center rounded-2xl border border-white/5 bg-bg-secondary md:h-80 md:w-80">
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-accent/10 to-transparent" />
              <Cpu className="relative h-16 w-16 text-accent/40 md:h-20 md:w-20" />
              <div className="absolute -top-4 -right-4 h-24 w-24 rounded-full bg-accent/10 blur-2xl" />
              <div className="absolute -bottom-4 -left-4 h-32 w-32 rounded-full bg-accent/5 blur-3xl" />
            </div>
          </div>
        </ScrollReveal>
      </div>
    </SectionWrapper>
  );
}
