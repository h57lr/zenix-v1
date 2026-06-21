"use client";

import { ExternalLink, Mail, MapPin } from "lucide-react";
import { siteConfig, contactInfo, navItems } from "@/lib/constants";
import { BrandLogo } from "@/components/BrandLogo";

export function Footer() {
  const handleNavClick = (href: string) => {
    const el = document.querySelector(href);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="border-t border-white/5 bg-bg-primary">
      <div className="container-section py-16">
        <div className="grid gap-10 sm:grid-cols-2 md:grid-cols-4">
          <div>
            <BrandLogo imageClassName="h-10" />
            <p className="mt-3 text-sm leading-relaxed text-text-secondary">
              Intelligent growth systems for modern ecommerce brands.
            </p>
          </div>

          <div>
            <h4 className="mb-4 text-sm font-semibold tracking-widest text-text-secondary uppercase">
              Quick Links
            </h4>
            <ul className="space-y-2.5">
              {navItems.map((item) => (
                <li key={item.href}>
                  <button
                    onClick={() => handleNavClick(item.href)}
                    className="text-sm text-text-secondary transition-colors hover:text-text-primary"
                  >
                    {item.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="mb-4 text-sm font-semibold tracking-widest text-text-secondary uppercase">
              Contact
            </h4>
            <ul className="space-y-3">
              <li className="flex items-center gap-2 text-sm text-text-secondary">
                <Mail size={14} className="shrink-0 text-accent" />
                <a
                  href={`mailto:${contactInfo.email}`}
                  className="transition-colors hover:text-text-primary"
                >
                  {contactInfo.email}
                </a>
              </li>
              <li className="flex items-center gap-2 text-sm text-text-secondary">
                <MapPin size={14} className="shrink-0 text-accent" />
                {contactInfo.location}
              </li>
            </ul>
          </div>

          <div>
            <h4 className="mb-4 text-sm font-semibold tracking-widest text-text-secondary uppercase">
              Social
            </h4>
            <div className="flex gap-3">
              <a
                href={contactInfo.socials.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-10 w-10 items-center justify-center rounded-lg border border-white/10 text-text-secondary transition-all duration-300 hover:border-accent/30 hover:text-accent hover:bg-accent/5"
                aria-label="LinkedIn"
              >
                <ExternalLink size={18} />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-12 border-t border-white/5 pt-8 text-center text-xs text-text-secondary/50">
          &copy; {new Date().getFullYear()} {siteConfig.name}. All rights
          reserved.
        </div>
      </div>
    </footer>
  );
}
