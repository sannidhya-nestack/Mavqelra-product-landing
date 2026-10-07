"use client";

import Image from "next/image";
import { ArrowUpRight, CheckCircle2, Sparkles, TrendingUp, ShieldCheck, Zap } from "lucide-react";
import { PRODUCT } from "@/lib/product";

export default function Hero() {
  return (
    <section id="top" className="relative isolate overflow-hidden border-b border-[var(--line)] bg-[var(--paper)]">
      {/* Hero Background: E-commerce operations team with orders & parcels */}
      <div className="absolute inset-0 -z-20 overflow-hidden pointer-events-none select-none">
        <Image
          src="/assets/hero-ecommerce-ops.jpg"
          alt="E-commerce operations team managing orders and parcel shipments"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center opacity-25 sm:opacity-30"
        />
        {/* Soft overlay ensuring high-contrast readability across all devices */}
        <div className="absolute inset-0 bg-gradient-to-b from-white/75 via-white/88 to-[var(--paper)]" />
      </div>

      {/* Decorative background glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] bg-gradient-to-b from-blue-500/15 via-sky-400/8 to-transparent blur-3xl pointer-events-none -z-10" />

      <div className="mx-auto max-w-[1320px] px-5 pt-16 pb-20 sm:px-8 sm:pt-24 sm:pb-28 relative">
        <div className="flex flex-col items-center text-center max-w-[920px] mx-auto">
          {/* Eyebrow badge */}
          <div className="inline-flex items-center gap-2 rounded-full border border-blue-600/20 bg-blue-50/80 px-3.5 py-1.5 text-[12.5px] font-semibold text-blue-700 backdrop-blur-sm">
            <Sparkles className="h-3.5 w-3.5 text-blue-600" />
            <span>Retail &amp; E-Commerce Operations OS</span>
            <span className="h-1 w-1 rounded-full bg-blue-600" />
            <span className="text-blue-900 font-bold">Closed-Loop Intelligence</span>
          </div>

          {/* Main Headline */}
          <h1 className="h-hero mt-6 text-[clamp(2.4rem,5.2vw,4.4rem)] font-extrabold tracking-[-0.03em] text-[var(--ink)] leading-[1.08]">
            E-Commerce Is Not a Storefront. <br className="hidden sm:inline" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-700 via-blue-600 to-sky-600">
              It&apos;s a Continuous Operational System.
            </span>
          </h1>

          {/* Subtitle */}
          <p className="mt-6 max-w-[760px] text-[17px] sm:text-[19px] leading-[1.6] text-[var(--ink-soft)]">
            {PRODUCT.name} unites supplier intake, catalog enrichment, inventory positioning, order routing, warehouse fulfillment, returns disposition, and customer support triage into one unified autonomous operations platform.
          </p>

          {/* CTAs */}
          <div className="mt-9 flex flex-wrap items-center justify-center gap-4">
            <a
              href="#walkthrough"
              className="inline-flex h-12 items-center justify-center rounded-xl bg-blue-600 px-7 text-[15px] font-semibold text-white shadow-md shadow-blue-600/20 transition hover:bg-blue-700 hover:shadow-lg focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
            >
              Schedule Live Walkthrough <ArrowUpRight className="ml-1.5 h-4 w-4" />
            </a>
            <a
              href="#platform"
              className="inline-flex h-12 items-center justify-center rounded-xl border border-[var(--line-2)] bg-white px-6 text-[15px] font-semibold text-[var(--ink)] shadow-xs transition hover:bg-black/[0.02]"
            >
              Explore Command Center ↓
            </a>
          </div>

          {/* Micro Trust Proofs */}
          <div className="mt-10 flex flex-wrap items-center justify-center gap-6 sm:gap-8 text-[13px] text-[var(--ink-mute)]">
            <div className="flex items-center gap-1.5">
              <CheckCircle2 className="h-4 w-4 text-emerald-600" />
              <span>PCI DSS v4.0.1 Ready</span>
            </div>
            <div className="flex items-center gap-1.5">
              <CheckCircle2 className="h-4 w-4 text-emerald-600" />
              <span>FTC 30-Day Delay Guardrails</span>
            </div>
            <div className="flex items-center gap-1.5">
              <CheckCircle2 className="h-4 w-4 text-emerald-600" />
              <span>Shopify Plus &amp; ERP Connectors</span>
            </div>
          </div>
        </div>

        {/* Operational Flow Strip */}
        <div className="mt-16 rounded-2xl border border-[var(--line)] bg-white/80 p-5 shadow-xs backdrop-blur-xs">
          <div className="text-center text-[12px] font-semibold uppercase tracking-wider text-[var(--ink-mute)] mb-4">
            The Closed-Loop E-Commerce Operating Cycle
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-2.5 text-center">
            {[
              { step: "01", label: "Product Intake", desc: "OCR & Feeds" },
              { step: "02", label: "Catalog Ready", desc: "Taxonomy & Copy" },
              { step: "03", label: "Merchandising", desc: "Elasticity & Offers" },
              { step: "04", label: "Inventory ATP", desc: "Multi-Node Balance" },
              { step: "05", label: "Order Acceptance", desc: "Fraud & Reservation" },
              { step: "06", label: "Fulfillment", desc: "Wave & Routing" },
              { step: "07", label: "Returns Flow", desc: "Grade & Restock" },
              { step: "08", label: "Service Triage", desc: "1-Click Resolution" },
            ].map((s) => (
              <div
                key={s.step}
                className="flex flex-col items-center rounded-xl border border-black/[0.04] bg-black/[0.015] p-3 transition hover:border-blue-500/30 hover:bg-blue-50/30"
              >
                <span className="text-[10px] font-bold text-blue-600">{s.step}</span>
                <span className="text-[13px] font-semibold text-[var(--ink)] mt-0.5">{s.label}</span>
                <span className="text-[11px] text-[var(--ink-mute)]">{s.desc}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
