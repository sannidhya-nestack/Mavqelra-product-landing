import { Brain, Cpu, Calculator, ShieldCheck, BarChart3, GitFork, ArrowUpRight } from "lucide-react";
import { PRODUCT } from "@/lib/product";

const aiCapabilities = [
  {
    rank: "#1",
    signal: "Support Triage AI (825 Signals)",
    location: "Embedded in Service",
    formula: "Intent × Order History × Carrier SLA → Next-Best Action",
    desc: "Ingests customer messages, classifies dispute risk, correlates real-time carrier scans, and drafts policy-compliant responses with one-click actions: issue return label, cancel order, or trigger replacement.",
  },
  {
    rank: "#2",
    signal: "Product Ingestion AI (569 Signals)",
    location: "Embedded in Catalog",
    formula: "OCR Parsing + Multi-Feed Normalization + GTIN Validation",
    desc: "Converts messy supplier PDFs, XLSX files, and image archives into normalized product records. Automatically resolves duplicate SKUs, converts metric/imperial units, and establishes parent-child variant trees.",
  },
  {
    rank: "#3",
    signal: "Inventory Forecasting (353 Signals)",
    location: "Embedded in Inventory",
    formula: "ROP = (Lead Time × Avg Daily Demand) + Safety Stock",
    desc: "Calculates Days of Supply (DOS) and Reorder Points (ROP) across every warehouse node. Predicts stockout probabilities 14 days in advance and recommends automated stock rebalancing transfers.",
  },
  {
    rank: "#4",
    signal: "Personalized Recommendations (256 Signals)",
    location: "Embedded in Merchandising",
    formula: "Score = Affinity × Availability × MarginFactor × Context",
    desc: "Eliminates the flaw of recommending out-of-stock or low-margin items. Combines clickstream behavior, customer category affinity, and real-time ATP inventory to maximize contribution profit.",
  },
  {
    rank: "#5",
    signal: "Listing Copy Generator (147 Signals)",
    location: "Embedded in Catalog",
    formula: "Spec Sheet + Target Channel Guidelines → Validated Copy",
    desc: "Generates high-converting titles, bullet points, SEO descriptions, and alt text while strictly enforcing brand style guides, character limits, category guidelines, and banned health or marketing claims.",
  },
  {
    rank: "#6",
    signal: "Returns Intelligence (119 Signals)",
    location: "Embedded in Returns",
    formula: "Return Cost = Reverse Freight + Inspection + Markdown Loss",
    desc: "Classifies returned merchandise into condition grades (A Resellable through D Liquidation). Detects chronic return abusers and triggers upstream catalog alerts when sizing returns exceed category baselines.",
  },
];

export default function Intelligence() {
  return (
    <section id="intelligence" className="border-b border-[var(--line)] bg-[var(--paper)]">
      <div className="mx-auto max-w-[1320px] px-5 py-20 sm:px-8 sm:py-28">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="max-w-[58ch]">
            <span className="eyebrow">Embedded AI &amp; Commerce Mathematics</span>
            <h2 className="h-section mt-5 text-[clamp(1.9rem,3.6vw,3rem)] text-[var(--ink)]">
              Real Decision Intelligence. Embedded Where Work Happens.
            </h2>
            <p className="mt-5 text-[16px] leading-[1.6] text-[var(--ink-soft)]">
              We don&apos;t sell disconnected AI chatbots. {PRODUCT.name} embeds machine intelligence directly inside the core operational workflows — converting commercial signals into high-margin operational execution.
            </p>
          </div>
        </div>

        {/* AI Grid */}
        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {aiCapabilities.map((c) => (
            <div
              key={c.signal}
              className="flex flex-col justify-between rounded-2xl border border-[var(--line)] bg-white p-7 shadow-xs transition hover:border-blue-500/40 hover:shadow-md"
            >
              <div>
                <div className="flex items-center justify-between">
                  <span className="rounded-md bg-blue-100 text-blue-800 px-2 py-0.5 text-[11px] font-bold">
                    {c.rank} Commercial Signal
                  </span>
                  <span className="text-[12px] font-semibold text-blue-600">
                    {c.location}
                  </span>
                </div>
                <h3 className="mt-4 text-[17px] font-bold text-[var(--ink)]">
                  {c.signal}
                </h3>
                <div className="mt-3 rounded-lg bg-black/[0.03] px-3 py-2 font-mono text-[11.5px] text-blue-900 border border-black/[0.04]">
                  {c.formula}
                </div>
                <p className="mt-4 text-[14px] leading-[1.6] text-[var(--ink-soft)]">
                  {c.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Operational Mathematics Callout Banner */}
        <div className="mt-12 rounded-2xl border border-[var(--line)] bg-[var(--paper-2)] p-7 sm:p-9">
          <div className="flex items-center gap-2.5 text-[12px] font-bold uppercase tracking-wider text-blue-700 mb-4">
            <Calculator className="h-4 w-4" />
            <span>Built-In Operational Calculation Engines</span>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="rounded-xl border border-[var(--line)] bg-white p-5">
              <div className="text-[12px] font-bold text-[var(--ink-mute)] uppercase">Available-to-Sell</div>
              <div className="font-mono text-[13px] text-blue-700 font-semibold mt-1">ATS = On Hand - Reserved - Safety</div>
              <p className="text-[12.5px] text-[var(--ink-soft)] mt-2">Guarantees zero overselling across storefronts during flash promotions.</p>
            </div>
            <div className="rounded-xl border border-[var(--line)] bg-white p-5">
              <div className="text-[12px] font-bold text-[var(--ink-mute)] uppercase">Order Routing Score</div>
              <div className="font-mono text-[13px] text-blue-700 font-semibold mt-1">0.3(Avail) + 0.25(SLA) + 0.2(Cost)...</div>
              <p className="text-[12.5px] text-[var(--ink-soft)] mt-2">Selects closest fulfillment node while eliminating split-shipment penalties.</p>
            </div>
            <div className="rounded-xl border border-[var(--line)] bg-white p-5">
              <div className="text-[12px] font-bold text-[var(--ink-mute)] uppercase">Days of Supply (DOS)</div>
              <div className="font-mono text-[13px] text-blue-700 font-semibold mt-1">DOS = Available / Avg Daily Demand</div>
              <p className="text-[12.5px] text-[var(--ink-soft)] mt-2">Continuously identifies stockout risks and excess capital stagnation.</p>
            </div>
            <div className="rounded-xl border border-[var(--line)] bg-white p-5">
              <div className="text-[12px] font-bold text-[var(--ink-mute)] uppercase">Gross Margin ROI</div>
              <div className="font-mono text-[13px] text-blue-700 font-semibold mt-1">GMROI = Gross Margin / Avg Inv Cost</div>
              <p className="text-[12.5px] text-[var(--ink-soft)] mt-2">Measures profitability generated for every dollar invested in warehouse stock.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
