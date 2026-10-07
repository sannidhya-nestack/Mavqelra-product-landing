"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { PRODUCT } from "@/lib/product";

const links = [
  { href: "#platform", label: "Platform" },
  { href: "#modules", label: "Modules" },
  { href: "#how", label: "How It Works" },
  { href: "#intelligence", label: "AI Engine" },
  { href: "#compliance", label: "Compliance" },
  { href: "#pricing", label: "Pricing" },
  { href: "#faq", label: "FAQ" },
];

export default function Nav() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) setIsOpen(false);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setIsOpen(false);
    };
    if (isOpen) window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen]);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  return (
    <header className="sticky top-0 z-50">
      <div className="border-b border-[var(--line)] bg-[color:var(--paper)]/95 backdrop-blur-md">
        <div className="mx-auto flex h-16 max-w-[1320px] items-center justify-between px-5 sm:px-8">
          {/* Logo */}
          <Link href="#top" className="flex items-center" onClick={() => setIsOpen(false)}>
            <span className="whitespace-nowrap font-display text-[18px] sm:text-[19px] font-bold uppercase leading-none tracking-[0.03em] text-[var(--ink)]">
              {PRODUCT.name}
            </span>
          </Link>

          <nav className="hidden lg:flex items-center gap-7">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-[14px] font-medium text-[var(--ink-soft)] transition-colors hover:text-[var(--ink)]"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="hidden lg:flex items-center gap-3">
            <a
              href="#walkthrough"
              className="inline-flex h-[38px] items-center justify-center rounded-full bg-slate-950 px-5 text-[13.5px] font-medium text-white shadow-sm transition hover:bg-slate-800"
            >
              Book a demo
            </a>
          </div>

          <button
            type="button"
            className="inline-flex lg:hidden items-center justify-center rounded-lg p-2 text-[var(--ink)] hover:bg-black/5"
            onClick={() => setIsOpen(!isOpen)}
            aria-expanded={isOpen}
            aria-label="Toggle navigation menu"
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="lg:hidden fixed inset-x-0 top-16 bottom-0 z-40 bg-[var(--paper)] px-6 py-8 flex flex-col justify-between">
          <div className="flex flex-col gap-5">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="text-[18px] font-semibold text-[var(--ink)]"
              >
                {link.label}
              </a>
            ))}
          </div>
          <div className="pt-6 border-t border-[var(--line)]">
            <a
              href="#walkthrough"
              onClick={() => setIsOpen(false)}
              className="flex h-11 w-full items-center justify-center rounded-full bg-slate-950 font-medium text-white shadow-sm transition hover:bg-slate-800"
            >
              Book a demo
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
