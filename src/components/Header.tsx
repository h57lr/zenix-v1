"use client";

import { useState, useSyncExternalStore } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, Moon, Sun, X } from "lucide-react";
import { useScrollPosition } from "@/hooks/useScrollPosition";
import { navItems } from "@/lib/constants";
import { Button } from "@/components/ui/Button";
import { BrandLogo } from "@/components/BrandLogo";

type Theme = "light" | "dark";

const getThemeSnapshot = (): Theme => {
  if (typeof document === "undefined") return "dark";
  return document.documentElement.classList.contains("light") ? "light" : "dark";
};

const subscribeToTheme = (callback: () => void) => {
  window.addEventListener("themechange", callback);
  window.addEventListener("storage", callback);
  return () => {
    window.removeEventListener("themechange", callback);
    window.removeEventListener("storage", callback);
  };
};

function ThemeToggle({ className = "" }: { className?: string }) {
  const theme = useSyncExternalStore(subscribeToTheme, getThemeSnapshot, () => "dark");

  const toggleTheme = () => {
    const nextTheme = theme === "dark" ? "light" : "dark";
    document.documentElement.classList.remove("light", "dark");
    document.documentElement.classList.add(nextTheme);
    localStorage.setItem("theme", nextTheme);
    window.dispatchEvent(new Event("themechange"));
  };

  return (
    <button
      type="button"
      onClick={toggleTheme}
      className={`inline-flex items-center justify-center gap-2 rounded-full border border-accent/30 bg-bg-tertiary/90 px-3.5 py-2 text-sm font-semibold text-text-primary shadow-[0_0_24px_-16px_var(--theme-accent)] backdrop-blur-xl transition-all duration-300 hover:border-accent/70 hover:bg-accent/10 ${className}`}
      aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
    >
      {theme === "dark" ? <Sun size={16} /> : <Moon size={16} />}
      <span>{theme === "dark" ? "Light" : "Dark"}</span>
    </button>
  );
}

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
          className="inline-flex items-center"
          aria-label="Zenix home"
        >
          <BrandLogo imageClassName="h-8 sm:h-9" />
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

        <div className="flex items-center gap-3">
          <ThemeToggle />
          <button
            onClick={() => setIsMobileOpen(!isMobileOpen)}
            className="relative z-50 text-text-primary md:hidden"
            aria-label="Toggle menu"
          >
            {isMobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
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
