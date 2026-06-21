"use client";

import { ScrollReveal } from "@/components/effects/ScrollReveal";
import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { Card } from "@/components/ui/Card";
import { expertiseItems } from "@/lib/constants";
import {
  Zap,
  Cpu,
  TrendingUp,
  BrainCircuit,
  BarChart3,
  Activity,
} from "lucide-react";

const iconMap: Record<string, React.ReactNode> = {
  Zap: <Zap size={24} />,
  Cpu: <Cpu size={24} />,
  TrendingUp: <TrendingUp size={24} />,
  BrainCircuit: <BrainCircuit size={24} />,
  BarChart3: <BarChart3 size={24} />,
  Activity: <Activity size={24} />,
};

export function CoreExpertise() {
  return (
    <SectionWrapper id="expertise" className="bg-bg-secondary/50">
      <ScrollReveal>
        <div className="mb-14 text-center">
          <h2 className="text-3xl font-bold md:text-4xl">
            Core <span className="text-accent">Expertise</span>
          </h2>
          <p className="mt-4 text-text-secondary">
            Six pillars that power every growth system we build
          </p>
        </div>
      </ScrollReveal>

      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {expertiseItems.map((item, i) => (
          <Card key={item.title} index={i}>
            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-accent/10 text-accent">
              {iconMap[item.icon]}
            </div>
            <h3 className="text-lg font-semibold">{item.title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-text-secondary">
              {item.description}
            </p>
          </Card>
        ))}
      </div>
    </SectionWrapper>
  );
}
