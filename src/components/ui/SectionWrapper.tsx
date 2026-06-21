"use client";

import { useInView } from "@/hooks/useInView";
import { motion } from "framer-motion";

interface SectionWrapperProps {
  children: React.ReactNode;
  id?: string;
  className?: string;
  containerClassName?: string;
}

export function SectionWrapper({
  children,
  id,
  className = "",
  containerClassName = "",
}: SectionWrapperProps) {
  const { ref, isInView } = useInView({ threshold: 0.05 });

  return (
    <section
      id={id}
      ref={ref}
      className={`py-20 md:py-28 ${className}`}
    >
      <div className={`container-section ${containerClassName}`}>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          {children}
        </motion.div>
      </div>
    </section>
  );
}
