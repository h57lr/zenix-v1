"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { useScrollPosition } from "@/hooks/useScrollPosition";
import { navItems } from "@/lib/constants";
import { Button } from "@/components/ui/Button";

export function Header() {
  const { isScrolled } = useScrollPosition();
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  const handleNavClick = (href: string) => {
    setIsMobileOpen(false);
    const el = document.querySelector(href);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? "bg-bg-primary/80 shadow-[0_1px_0_rgba(255,255,255,0.05)] backdrop-blur-xl"
          : "bg-transparent"
      }`}
    >
      <nav className="container-section flex h-16 items-center justify-between md:h-20">
        <a
          href="#"
          className="text-lg font-bold tracking-tight"
        >
          Zenix<span className="text-accent"> AI</span>
        </a>

        <div className="hidden items-center gap-8 md:flex">
          {navItems.map((item) => (
            <button
              key={item.href}
              onClick={() => handleNavClick(item.href)}
              className="text-sm text-text-secondary transition-colors hover:text-text-primary"
            >
              {item.label}
            </button>
          ))}
          <Button variant="primary" className="px-5 py-2.5">
            Contact Us
          </Button>
        </div>

        <button
          onClick={() => setIsMobileOpen(!isMobileOpen)}
          className="relative z-50 text-text-primary md:hidden"
          aria-label="Toggle menu"
        >
          {isMobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      <AnimatePresence>
        {isMobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="absolute top-0 left-0 right-0 border-b border-white/10 bg-bg-primary pt-20 pb-8 md:hidden"
          >
            <div className="container-section flex flex-col gap-4">
              {navItems.map((item) => (
                <button
                  key={item.href}
                  onClick={() => handleNavClick(item.href)}
                  className="py-3 text-lg text-text-secondary transition-colors hover:text-text-primary"
                >
                  {item.label}
                </button>
              ))}
              <Button variant="primary" className="mt-4 w-full py-3">
                Contact Us
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
