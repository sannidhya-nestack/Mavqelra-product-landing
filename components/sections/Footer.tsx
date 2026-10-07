"use client";

import Link from "next/link";
import { PRODUCT, NAME_PARTS } from "@/lib/product";

export default function Footer() {
  const scrollToTop = () => {
    if (typeof window !== "undefined") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <footer className="border-t border-[var(--line)] bg-white text-[var(--ink)]">
      <div className="mx-auto max-w-[1320px] px-5 pt-16 pb-12 sm:px-8 sm:pt-20">
        <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-[1.5fr_1fr_1fr_1fr] lg:gap-8">
          {/* Brand & Tagline */}
          <div className="max-w-[320px]">
            <Link href="#top" className="flex items-center gap-2">
              <span className="font-display text-[22px] font-bold tracking-tight text-[var(--ink)]">
                {NAME_PARTS.base}
              </span>
              <span className="rounded-md bg-blue-600 px-1.5 py-0.5 text-[11px] font-bold uppercase tracking-wider text-white">
                AI
              </span>
            </Link>
            <p className="mt-4 text-[14px] leading-relaxed text-[var(--ink-soft)]">
              The Autonomous Commerce Operations Platform for {PRODUCT.subIndustry}.
            </p>
            <div className="mt-4">
              <a
                href="mailto:info@nestack.com"
                className="text-[14px] text-[var(--ink-soft)] transition-colors hover:text-blue-600"
              >
                info@nestack.com
              </a>
            </div>
          </div>

          {/* Column 1: PLATFORM */}
          <div>
            <h3 className="font-display text-[11px] font-semibold uppercase tracking-[0.16em] text-[var(--ink-mute)]">
              Platform
            </h3>
            <ul className="mt-5 space-y-3">
              <li>
                <Link
                  href="#platform"
                  className="text-[14px] text-[var(--ink-soft)] transition-colors hover:text-[var(--ink)]"
                >
                  Command Center
                </Link>
              </li>
              <li>
                <Link
                  href="#modules"
                  className="text-[14px] text-[var(--ink-soft)] transition-colors hover:text-[var(--ink)]"
                >
                  8 Core Modules
                </Link>
              </li>
              <li>
                <Link
                  href="#how"
                  className="text-[14px] text-[var(--ink-soft)] transition-colors hover:text-[var(--ink)]"
                >
                  Closed-Loop Lifecycle
                </Link>
              </li>
              <li>
                <Link
                  href="#intelligence"
                  className="text-[14px] text-[var(--ink-soft)] transition-colors hover:text-[var(--ink)]"
                >
                  Commerce AI Engine
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 2: MODULES */}
          <div>
            <h3 className="font-display text-[11px] font-semibold uppercase tracking-[0.16em] text-[var(--ink-mute)]">
              Operational Modules
            </h3>
            <ul className="mt-5 space-y-3">
              <li>
                <Link
                  href="#module-catalog"
                  className="text-[14px] text-[var(--ink-soft)] transition-colors hover:text-[var(--ink)]"
                >
                  Catalog Ingestion
                </Link>
              </li>
              <li>
                <Link
                  href="#module-inventory"
                  className="text-[14px] text-[var(--ink-soft)] transition-colors hover:text-[var(--ink)]"
                >
                  Inventory ATP Ledger
                </Link>
              </li>
              <li>
                <Link
                  href="#module-orders"
                  className="text-[14px] text-[var(--ink-soft)] transition-colors hover:text-[var(--ink)]"
                >
                  Order Flow &amp; Routing
                </Link>
              </li>
              <li>
                <Link
                  href="#module-returns"
                  className="text-[14px] text-[var(--ink-soft)] transition-colors hover:text-[var(--ink)]"
                >
                  Reverse Logistics
                </Link>
              </li>
              <li>
                <Link
                  href="#module-service"
                  className="text-[14px] text-[var(--ink-soft)] transition-colors hover:text-[var(--ink)]"
                >
                  Customer Support Triage
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: ENTERPRISE */}
          <div>
            <h3 className="font-display text-[11px] font-semibold uppercase tracking-[0.16em] text-[var(--ink-mute)]">
              Governance &amp; Trust
            </h3>
            <ul className="mt-5 space-y-3">
              <li>
                <Link
                  href="#compliance"
                  className="text-[14px] text-[var(--ink-soft)] transition-colors hover:text-[var(--ink)]"
                >
                  PCI DSS v4.0.1 Ready
                </Link>
              </li>
              <li>
                <Link
                  href="#compliance"
                  className="text-[14px] text-[var(--ink-soft)] transition-colors hover:text-[var(--ink)]"
                >
                  GDPR &amp; CCPA Profiling
                </Link>
              </li>
              <li>
                <Link
                  href="#compliance"
                  className="text-[14px] text-[var(--ink-soft)] transition-colors hover:text-[var(--ink)]"
                >
                  FTC 30-Day Ship Guard
                </Link>
              </li>
              <li>
                <Link
                  href="#pricing"
                  className="text-[14px] text-[var(--ink-soft)] transition-colors hover:text-[var(--ink)]"
                >
                  Pricing &amp; Terms
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-16 flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-[var(--line)] pt-8 text-[13px] text-[var(--ink-mute)]">
          <p>© {new Date().getFullYear()} {PRODUCT.name}. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <button
              type="button"
              onClick={scrollToTop}
              className="text-[13px] text-[var(--ink-soft)] hover:text-[var(--ink)] transition"
            >
              Back to top ↑
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
