"use client";

import { motion } from "framer-motion";
import { useInView } from "@/hooks/useInView";

interface CardProps {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
  index?: number;
}

export function Card({
  children,
  className = "",
  hover = true,
  index = 0,
}: CardProps) {
  const { ref, isInView } = useInView({ threshold: 0.1 });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
      transition={{ duration: 0.5, delay: index * 0.1, ease: "easeOut" }}
      whileHover={
        hover
          ? { scale: 1.02, y: -4 }
          : undefined
      }
      className={`rounded-xl border border-white/5 bg-bg-secondary p-6 transition-colors duration-300 md:p-8 ${
        hover ? "hover:border-accent/20 hover:bg-bg-tertiary" : ""
      } ${className}`}
    >
      {children}
    </motion.div>
  );
}
