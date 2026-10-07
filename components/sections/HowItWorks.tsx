import { ArrowRight, Layers, ShieldCheck, Zap } from "lucide-react";
import { PRODUCT } from "@/lib/product";

const steps = [
  {
    phase: "Phase 01",
    title: "Supplier Intake & Catalog Readiness",
    desc: "Ingests CSV, XLSX line sheets, XML feeds, and PDF spec sheets. Normalizes taxonomies, generates size-run variant matrices, checks mandatory attributes, and generates SEO-compliant listing copy.",
    artifact: "Synthetic SKU Master · PRD-84271",
  },
  {
    phase: "Phase 02",
    title: "Merchandising & Multi-Node Inventory",
    desc: "Calculates real-time Available-to-Sell (ATS = On Hand - Reserved - Safety Stock) and projected ATP. Dynamic price elasticity matrices model margin thresholds and stockout risks per warehouse node.",
    artifact: "Inventory Ledger · Multi-Hub ATP",
  },
  {
    phase: "Phase 03",
    title: "Cart, Checkout & Fraud Defense",
    desc: "Enforces atomic inventory reservation locks during checkout. Multi-signal fraud scoring auto-releases 94%+ of orders while flagging suspicious address velocities for secondary review.",
    artifact: "Sales Order · Tokenized Authorization",
  },
  {
    phase: "Phase 04",
    title: "Dynamic Fulfillment & Carrier Handoff",
    desc: "Minimizes landed freight cost while protecting delivery promises. Balances node distance, carrier cutoffs, carton capacity, and split-shipment penalties to generate optimized pick/pack waves.",
    artifact: "Pick Manifest · Carrier Tracking Event",
  },
  {
    phase: "Phase 05",
    title: "Reverse Commerce & Grade Disposition",
    desc: "Self-service returns portal issues carrier labels and tracks return packages. Inspection grading routes returned items to Restock (A), Open-Box (B), Refurbish (C), or Liquidation (D).",
    artifact: "RMA Record · Restock Authorization",
  },
  {
    phase: "Phase 06",
    title: "Closed-Loop Triage & Upstream Learning",
    desc: "Omnichannel customer support triage bot resolves disputes in seconds. Sizing returns feed directly back into catalog size guides, completing the feedback loop that prevents future returns.",
    artifact: "Triage Resolution · Catalog Fit Update",
  },
];

export default function HowItWorks() {
  return (
    <section id="how" className="border-b border-[var(--line)] bg-[var(--paper-2)]">
      <div className="mx-auto max-w-[1320px] px-5 py-20 sm:px-8 sm:py-28">
        <div className="max-w-[56ch]">
          <span className="eyebrow">The Continuous Lifecycle</span>
          <h2 className="h-section mt-5 text-[clamp(1.9rem,3.6vw,3rem)] text-[var(--ink)]">
            A Closed Operational Loop, Not a Linear Funnel.
          </h2>
          <p className="mt-6 text-[16px] leading-[1.6] text-[var(--ink-soft)]">
            Returns modify inventory. Customer service interactions update customer profiles. Sales alter replenishment forecasts. Pricing influences demand. {PRODUCT.name} synchronizes every link in the chain.
          </p>
        </div>

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {steps.map((s, idx) => (
            <div
              key={s.phase}
              className="flex flex-col justify-between rounded-2xl border border-[var(--line)] bg-white p-7 shadow-xs transition hover:border-blue-500/30 hover:shadow-md"
            >
              <div>
                <div className="flex items-center justify-between">
                  <span className="text-[12px] font-bold text-blue-600 uppercase tracking-wider">
                    {s.phase}
                  </span>
                  <span className="rounded-full bg-blue-50 px-2.5 py-0.5 text-[11px] font-semibold text-blue-700">
                    Step {idx + 1}
                  </span>
                </div>
                <h3 className="mt-4 text-[18px] font-semibold tracking-[-0.01em] text-[var(--ink)]">
                  {s.title}
                </h3>
                <p className="mt-3 text-[14px] leading-[1.6] text-[var(--ink-soft)]">
                  {s.desc}
                </p>
              </div>

              <div className="mt-6 pt-5 border-t border-[var(--line)] flex items-center justify-between">
                <span className="text-[11.5px] font-mono text-[var(--ink-mute)]">
                  {s.artifact}
                </span>
                <ArrowRight className="h-4 w-4 text-blue-600" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
