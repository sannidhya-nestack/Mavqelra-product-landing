"use client";

import Image from "next/image";
import { ArrowUpRight, CheckCircle2 } from "lucide-react";
import { PRODUCT } from "@/lib/product";

export default function Hero() {
  return (
    <section id="top" className="relative isolate overflow-hidden border-b border-slate-800 bg-[#070b14] text-white">
      {/* Hero Background: Clearly visible e-commerce operations team with parcel shipments */}
      <div className="absolute inset-0 -z-20 overflow-hidden pointer-events-none select-none">
        <Image
          src="/assets/hero-ecommerce-ops.jpg"
          alt="E-commerce operations team managing orders and parcel shipments"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center brightness-[0.78] contrast-[1.12] opacity-75"
        />
        {/* Dark gradient overlay for rich contrast and crisp typography */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#070b14]/75 via-[#070b14]/60 to-[#070b14]" />
      </div>

      {/* Ambient background glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1100px] h-[520px] bg-gradient-to-b from-blue-600/25 via-sky-500/10 to-transparent blur-3xl pointer-events-none -z-10" />

      <div className="mx-auto max-w-[1320px] px-5 pt-16 pb-20 sm:px-8 sm:pt-24 sm:pb-28 relative">
        <div className="flex flex-col items-center text-center max-w-[920px] mx-auto">
          {/* Main Headline */}
          <h1 className="h-hero text-[clamp(2.4rem,5.2vw,4.4rem)] font-extrabold tracking-[-0.03em] text-white leading-[1.08]">
            E-Commerce Is Not a Storefront. <br className="hidden sm:inline" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-sky-300 to-blue-200">
              It&apos;s a Continuous Operational System.
            </span>
          </h1>

          {/* Subtitle */}
          <p className="mt-6 max-w-[760px] text-[17px] sm:text-[19px] leading-[1.6] text-slate-200/90">
            {PRODUCT.name} unites supplier intake, catalog enrichment, inventory positioning, order routing, warehouse fulfillment, returns disposition, and customer support triage into one unified autonomous operations platform.
          </p>

          {/* CTAs */}
          <div className="mt-9 flex flex-wrap items-center justify-center gap-4">
            <a
              href="#walkthrough"
              className="inline-flex h-12 items-center justify-center rounded-xl bg-blue-600 px-7 text-[15px] font-semibold text-white shadow-lg shadow-blue-600/30 transition hover:bg-blue-500 hover:shadow-xl focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-500"
            >
              Book Demo <ArrowUpRight className="ml-1.5 h-4 w-4" />
            </a>
            <a
              href="#platform"
              className="inline-flex h-12 items-center justify-center rounded-xl border border-white/20 bg-white/10 px-6 text-[15px] font-semibold text-white shadow-xs backdrop-blur-sm transition hover:bg-white/15"
            >
              Explore Command Center ↓
            </a>
          </div>

          {/* Micro Trust Proofs */}
          <div className="mt-10 flex flex-wrap items-center justify-center gap-6 sm:gap-8 text-[13px] text-slate-300">
            <div className="flex items-center gap-1.5">
              <CheckCircle2 className="h-4 w-4 text-emerald-400" />
              <span>PCI DSS v4.0.1 Ready</span>
            </div>
            <div className="flex items-center gap-1.5">
              <CheckCircle2 className="h-4 w-4 text-emerald-400" />
              <span>FTC 30-Day Delay Guardrails</span>
            </div>
            <div className="flex items-center gap-1.5">
              <CheckCircle2 className="h-4 w-4 text-emerald-400" />
              <span>Shopify Plus &amp; ERP Connectors</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
