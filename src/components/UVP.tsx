"use client";

import { ScrollReveal } from "@/components/effects/ScrollReveal";
import { experienceContent } from "@/lib/constants";
import { Quote } from "lucide-react";

export function UVP() {
  return (
    <section className="relative overflow-hidden bg-bg-secondary/30 py-20 md:py-28">
      <div className="container-section relative z-10 text-center">
        <ScrollReveal>
          <div className="mx-auto flex justify-center">
            <Quote size={32} className="text-accent/30" />
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.1}>
          <h2 className="mt-6 text-3xl font-bold leading-tight md:text-4xl lg:text-5xl">
            What Makes Zenix AI{" "}
            <span className="text-gradient-accent">Different</span>
          </h2>
        </ScrollReveal>

        <ScrollReveal delay={0.2}>
          <p className="mx-auto mt-8 max-w-3xl text-lg leading-relaxed text-text-secondary md:text-xl">
            &ldquo;{experienceContent.statement}&rdquo;
          </p>
        </ScrollReveal>

        <ScrollReveal delay={0.3}>
          <div className="mt-12 grid gap-6 sm:grid-cols-3">
            {[
              { label: "Technical", desc: "Engineering-grade tracking and automation" },
              { label: "Performance-Driven", desc: "Every decision backed by real data" },
              { label: "Built for Scale", desc: "Systems that grow with your business" },
            ].map((item) => (
              <div
                key={item.label}
                className="rounded-xl border border-white/5 bg-bg-secondary/50 p-6"
              >
                <div className="text-lg font-semibold text-accent">
                  {item.label}
                </div>
                <div className="mt-2 text-sm text-text-secondary">
                  {item.desc}
                </div>
              </div>
            ))}
          </div>
        </ScrollReveal>
      </div>

      <div className="pointer-events-none absolute top-1/2 left-1/2 h-64 w-64 -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent/5 blur-[100px]" />
    </section>
  );
}
