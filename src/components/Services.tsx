"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { ScrollReveal } from "@/components/effects/ScrollReveal";
import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { servicesList } from "@/lib/constants";

function AccordionItem({
  title,
  description,
  index,
}: {
  title: string;
  description: string;
  index: number;
}) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-white/5">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex w-full items-center justify-between py-5 text-left transition-colors hover:text-accent md:py-6"
      >
        <span className="text-lg font-medium md:text-xl">
          <span className="mr-3 text-sm text-accent/60">0{index + 1}</span>
          {title}
        </span>
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.2 }}
          className="shrink-0 text-text-secondary"
        >
          <ChevronDown size={20} />
        </motion.div>
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <p className="pb-6 leading-relaxed text-text-secondary md:pl-10 md:pr-20">
              {description}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export function Services() {
  return (
    <SectionWrapper id="services" className="bg-bg-secondary/30">
      <ScrollReveal>
        <div className="mb-14">
          <h2 className="text-3xl font-bold md:text-4xl">
            Full <span className="text-accent">Services</span>
          </h2>
          <p className="mt-4 text-text-secondary">
            Everything you need to build a complete growth system
          </p>
        </div>
      </ScrollReveal>

      <ScrollReveal delay={0.1}>
        <div className="rounded-xl border border-white/5 bg-bg-secondary/50 px-6 md:px-10">
          {servicesList.map((service, i) => (
            <AccordionItem
              key={service.title}
              title={service.title}
              description={service.description}
              index={i}
            />
          ))}
        </div>
      </ScrollReveal>
    </SectionWrapper>
  );
}
