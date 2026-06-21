"use client";

import { ScrollReveal } from "@/components/effects/ScrollReveal";
import { experienceContent } from "@/lib/constants";
import { MapPin } from "lucide-react";

export function ProfessionalExperience() {
  return (
    <section className="border-y border-white/5 bg-bg-secondary py-20 md:py-28">
      <div className="container-section">
        <div className="grid items-center gap-12 md:grid-cols-2 md:gap-16">
          <ScrollReveal>
            <div>
              <h2 className="text-3xl font-bold md:text-4xl">
                {experienceContent.headline}
              </h2>
              <p className="mt-6 leading-relaxed text-text-secondary">
                {experienceContent.body}
              </p>
              <blockquote className="mt-8 border-l-2 border-accent/50 pl-5 text-sm italic leading-relaxed text-text-secondary">
                &ldquo;{experienceContent.statement}&rdquo;
              </blockquote>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.2}>
            <div className="rounded-xl border border-white/5 bg-bg-tertiary p-8">
              <h3 className="mb-6 text-sm font-semibold tracking-widest text-text-secondary uppercase">
                Regions
              </h3>
              <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
                {experienceContent.regions.map((region) => (
                  <div
                    key={region}
                    className="flex items-center gap-2 rounded-lg border border-white/5 bg-bg-secondary px-3 py-2.5 text-sm text-text-primary"
                  >
                    <MapPin size={14} className="shrink-0 text-accent" />
                    <span>{region}</span>
                  </div>
                ))}
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
