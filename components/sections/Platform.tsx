import Figure, { type CalloutPin } from "./Figure";
import { PRODUCT } from "@/lib/product";
import { shellFor } from "@/lib/shell";

const pins: CalloutPin[] = [
  {
    id: "p1-pulse",
    label: "Operations Pulse & WIP",
    anchor: { x: 0.45, y: 0.22 },
    label_at: { x: 0.55, y: 0.18 },
    side: "right",
    description:
      "Continuous telemetry across Catalog, Inventory, Orders, Fulfillment, Returns, and Service. Surfaces work-in-progress volumes, active exceptions, and SLA health.",
  },
  {
    id: "p2-kpis",
    label: "Live Financial & Margin Metrics",
    anchor: { x: 0.28, y: 0.42 },
    label_at: { x: 0.18, y: 0.42 },
    side: "left",
    description:
      "Tracks real-time Net Sales ($4.82M), Contribution Margin (31.4%), and GMROI across all active storefronts and regional fulfillment centers.",
  },
  {
    id: "p3-ai-priorities",
    label: "AI Priority & Intervention Queue",
    anchor: { x: 0.72, y: 0.75 },
    label_at: { x: 0.58, y: 0.75 },
    side: "left",
    description:
      "Surfaces high-leverage exceptions: 17 high-risk stockout SKUs, 41 orders approaching delivery SLA deadlines, and sizing return spikes requiring catalog updates.",
  },
];

export default function Platform() {
  return (
    <section id="platform" className="bg-[var(--navy)] text-white">
      <div className="mx-auto max-w-[1320px] px-5 py-20 sm:px-8 sm:py-28">
        <div className="grid gap-8 lg:grid-cols-2 lg:items-end lg:gap-16">
          <div className="max-w-[54ch]">
            <span className="eyebrow on-dark">The Commerce Command Center</span>
            <h2 className="h-section mt-5 text-[clamp(1.9rem,4vw,3.1rem)] text-white">
              Every order, every SKU, every exception — on one screen.
            </h2>
          </div>
          <p className="max-w-[54ch] text-[16.5px] leading-[1.65] text-white/70">
            E-commerce operators waste hours copying order IDs between Shopify admin, ERP spreadsheets, WMS portals, and helpdesk tickets. {PRODUCT.name} eliminates the workflow tax by establishing a single operational truth connecting product readiness, inventory positions, order releases, and customer resolutions.
          </p>
        </div>

        <div className="mt-12">
          <Figure
            src="/assets/p1.jpg"
            alt={`${PRODUCT.name} — Command Center dashboard with Net Sales, inventory health, fulfillment SLA, and AI priorities queue`}
            url="app.mavqelra.com/dashboard"
            actions="LIVE · DASHBOARD"
            callouts={pins}
            shell={shellFor(1, "Dashboard")}
            priority
          />
        </div>

        {/* ── Operational Impact Rail ── */}
        <div className="border-b border-white/12 pb-6 mt-16 flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4">
          <div>
            <span className="eyebrow on-dark">Operational Telemetry</span>
            <h3 className="h-section mt-2 text-[clamp(1.5rem,2.8vw,2.2rem)] text-white">
              Engineered for Working Capital &amp; Margin Velocity.
            </h3>
          </div>
          <p className="max-w-[46ch] text-[14.5px] leading-relaxed text-white/70">
            Prevent margin leakage from overselling, late carrier deliveries, uninspected returns, and manual exception handling.
          </p>
        </div>

        <div className="mx-auto mt-10 max-w-[1120px] grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {/* Metric 1 */}
          <div className="flex flex-col border border-white/10 bg-white/[0.04] p-6 rounded-xl relative overflow-hidden">
            <div className="flex items-start justify-between gap-3 border-b border-white/10 pb-5">
              <span className="inline-flex items-center rounded-full border border-sky-400/30 bg-sky-500/10 px-2.5 py-0.5 text-[11px] font-semibold uppercase tracking-wider text-sky-300">
                Revenue
              </span>
              <span className="font-display tnum text-[24px] font-bold text-white">
                $4.82M
              </span>
            </div>
            <h4 className="mt-5 text-[15px] font-semibold tracking-[-0.01em] text-white">
              Net Order Revenue
            </h4>
            <p className="mt-2 text-[13.5px] leading-[1.55] text-white/60">
              Gross sales minus discounts, promotional allowances, and returns reconciled in real time across all storefront channels.
            </p>
          </div>

          {/* Metric 2 */}
          <div className="flex flex-col border border-emerald-500/20 bg-emerald-500/[0.05] p-6 rounded-xl relative overflow-hidden">
            <div className="flex items-start justify-between gap-3 border-b border-emerald-500/20 pb-5">
              <span className="inline-flex items-center rounded-full border border-emerald-400/30 bg-emerald-500/10 px-2.5 py-0.5 text-[11px] font-semibold uppercase tracking-wider text-emerald-300">
                Profitability
              </span>
              <span className="font-display tnum text-[24px] font-bold text-white">
                31.4%
              </span>
            </div>
            <h4 className="mt-5 text-[15px] font-semibold tracking-[-0.01em] text-white">
              Contribution Margin
            </h4>
            <p className="mt-2 text-[13.5px] leading-[1.55] text-white/60">
              Continuously balances customer acquisition cost, landed COGS, freight costs, and reverse logistics handling fees.
            </p>
          </div>

          {/* Metric 3 */}
          <div className="flex flex-col border border-white/10 bg-white/[0.04] p-6 rounded-xl relative overflow-hidden">
            <div className="flex items-start justify-between gap-3 border-b border-white/10 pb-5">
              <span className="inline-flex items-center rounded-full border border-sky-400/30 bg-sky-500/10 px-2.5 py-0.5 text-[11px] font-semibold uppercase tracking-wider text-sky-300">
                Inventory
              </span>
              <span className="font-display tnum text-[24px] font-bold text-white">
                86 / 100
              </span>
            </div>
            <h4 className="mt-5 text-[15px] font-semibold tracking-[-0.01em] text-white">
              Inventory Health Index
            </h4>
            <p className="mt-2 text-[13.5px] leading-[1.55] text-white/60">
              Composite score measuring Days of Supply (DOS), stockout probability, and excess stock depreciation risk across hubs.
            </p>
          </div>

          {/* Metric 4 */}
          <div className="flex flex-col border border-emerald-500/20 bg-emerald-500/[0.05] p-6 rounded-xl relative overflow-hidden">
            <div className="flex items-start justify-between gap-3 border-b border-emerald-500/20 pb-5">
              <span className="inline-flex items-center rounded-full border border-emerald-400/30 bg-emerald-500/10 px-2.5 py-0.5 text-[11px] font-semibold uppercase tracking-wider text-emerald-300">
                Execution
              </span>
              <span className="font-display tnum text-[24px] font-bold text-white">
                96.2%
              </span>
            </div>
            <h4 className="mt-5 text-[15px] font-semibold tracking-[-0.01em] text-white">
              On-Time Delivery SLA
            </h4>
            <p className="mt-2 text-[13.5px] leading-[1.55] text-white/60">
              Percentage of shipments delivered on or before the advertised customer promise date under FTC 30-day compliance guidelines.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
