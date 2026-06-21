"use client";

import { ScrollReveal } from "@/components/effects/ScrollReveal";
import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { founderContent } from "@/lib/constants";
import { Quote } from "lucide-react";

export function FounderBio() {
  return (
    <SectionWrapper id="about" className="bg-bg-secondary/50">
      <div className="mx-auto max-w-3xl text-center">
        <ScrollReveal>
          <div className="mx-auto mb-8 flex h-24 w-24 items-center justify-center rounded-full border border-white/10 bg-bg-tertiary">
            <span className="text-2xl font-bold text-accent">ZA</span>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.1}>
          <h2 className="text-3xl font-bold md:text-4xl">
            Meet the <span className="text-accent">Founder</span>
          </h2>
        </ScrollReveal>

        <ScrollReveal delay={0.15}>
          <p className="mt-4 text-lg text-text-secondary">
            {founderContent.name}
          </p>
          <p className="text-sm text-text-secondary/60">{founderContent.role}</p>
        </ScrollReveal>

        <ScrollReveal delay={0.2}>
          <p className="mt-8 leading-relaxed text-text-secondary">
            {founderContent.bio}
          </p>
        </ScrollReveal>

        <ScrollReveal delay={0.25}>
          <div className="mt-12 border-l-2 border-accent/50 pl-6 text-left">
            <Quote size={20} className="mb-2 text-accent/40" />
            <p className="text-base leading-relaxed italic text-text-secondary">
              &ldquo;{founderContent.statement}&rdquo;
            </p>
          </div>
        </ScrollReveal>
      </div>
    </SectionWrapper>
  );
}
