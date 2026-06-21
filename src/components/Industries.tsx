"use client";

import { ScrollReveal } from "@/components/effects/ScrollReveal";
import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { industries } from "@/lib/constants";
import {
  ShoppingBag,
  Smartphone,
  Briefcase,
  GraduationCap,
  LineChart,
} from "lucide-react";

const iconMap: Record<string, React.ReactNode> = {
  ShoppingBag: <ShoppingBag size={28} />,
  Smartphone: <Smartphone size={28} />,
  Briefcase: <Briefcase size={28} />,
  GraduationCap: <GraduationCap size={28} />,
  LineChart: <LineChart size={28} />,
};

export function Industries() {
  return (
    <SectionWrapper id="industries">
      <ScrollReveal>
        <div className="mb-14 text-center">
          <h2 className="text-3xl font-bold md:text-4xl">
            Industries We <span className="text-accent">Serve</span>
          </h2>
          <p className="mt-4 text-text-secondary">
            Proven growth across diverse verticals
          </p>
        </div>
      </ScrollReveal>

      <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
        {industries.map((industry, i) => (
          <ScrollReveal key={industry.name} delay={i * 0.08}>
            <div className="group flex flex-col items-center gap-4 rounded-xl border border-white/5 bg-bg-secondary p-8 text-center transition-all duration-300 hover:border-accent/20 hover:bg-bg-tertiary">
              <div className="text-text-secondary transition-colors duration-300 group-hover:text-accent">
                {iconMap[industry.icon]}
              </div>
              <span className="text-sm font-medium">{industry.name}</span>
            </div>
          </ScrollReveal>
        ))}
      </div>
    </SectionWrapper>
  );
}
