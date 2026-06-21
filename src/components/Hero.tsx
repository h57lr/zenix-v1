"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { ParticleGrid } from "@/components/effects/ParticleGrid";
import { heroContent } from "@/lib/constants";

export function Hero() {
  return (
    <section className="relative flex min-h-screen items-center overflow-hidden">
      <ParticleGrid />

      <div className="container-section relative z-10 w-full pt-24 pb-20 md:pt-32 md:pb-32">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-3xl"
        >
          <Badge className="mb-6">{heroContent.badge}</Badge>

          <h1 className="text-4xl font-bold leading-tight tracking-tight md:text-6xl lg:text-7xl">
            {heroContent.headline}
          </h1>

          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-text-secondary md:text-xl">
            {heroContent.body}
          </p>

          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <Button
              variant="primary"
              className="px-8 py-3.5 text-base"
              href="#contact"
            >
              {heroContent.cta}
              <ArrowRight size={18} />
            </Button>
            <Button
              variant="secondary"
              className="px-8 py-3.5 text-base"
              href="#services"
            >
              View Services
            </Button>
          </div>
        </motion.div>
      </div>

      <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-bg-primary to-transparent" />
    </section>
  );
}
