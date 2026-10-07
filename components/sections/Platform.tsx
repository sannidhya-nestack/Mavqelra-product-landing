import Figure, { type CalloutPin } from "./Figure";
import { PRODUCT } from "@/lib/product";
import { shellFor } from "@/lib/shell";

const pins: CalloutPin[] = [
  {
    id: "p1-pulse",
    label: "Operations Pulse & WIP",
    anchor: { x: 0.44, y: 0.22 },
    label_at: { x: 0.54, y: 0.22 },
    side: "right",
    description:
      "Continuous telemetry across Catalog, Inventory, Orders, Fulfillment, Returns, and Service. Surfaces work-in-progress volumes, active exceptions, and SLA health.",
  },
  {
    id: "p2-kpis",
    label: "Live Financial & Margin Metrics",
    anchor: { x: 0.25, y: 0.45 },
    label_at: { x: 0.36, y: 0.45 },
    side: "right",
    description:
      "Tracks real-time Net Sales ($24,580), Accepted Orders (428), and margin performance across all active storefronts and retail channels.",
  },
  {
    id: "p3-ai-priorities",
    label: "AI Priority & Intervention Queue",
    anchor: { x: 0.66, y: 0.75 },
    label_at: { x: 0.75, y: 0.75 },
    side: "right",
    description:
      "Surfaces high-leverage exceptions: inventory stockout risks, SKU velocity anomalies, delivery SLA countdowns, and returns spikes requiring catalog updates.",
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
                Weekly Sales
              </span>
              <span className="font-display tnum text-[24px] font-bold text-white">
                $24,580
              </span>
            </div>
            <h4 className="mt-5 text-[15px] font-semibold tracking-[-0.01em] text-white">
              Total Sales Volume (+12%)
            </h4>
            <p className="mt-2 text-[13.5px] leading-[1.55] text-white/60">
              Net revenue reconciled across web store, mobile channels, and retail points of sale over the trailing 7 days.
            </p>
          </div>

          {/* Metric 2 */}
          <div className="flex flex-col border border-emerald-500/20 bg-emerald-500/[0.05] p-6 rounded-xl relative overflow-hidden">
            <div className="flex items-start justify-between gap-3 border-b border-emerald-500/20 pb-5">
              <span className="inline-flex items-center rounded-full border border-emerald-400/30 bg-emerald-500/10 px-2.5 py-0.5 text-[11px] font-semibold uppercase tracking-wider text-emerald-300">
                Order Flow
              </span>
              <span className="font-display tnum text-[24px] font-bold text-white">
                428 Orders
              </span>
            </div>
            <h4 className="mt-5 text-[15px] font-semibold tracking-[-0.01em] text-white">
              Accepted Orders (+18%)
            </h4>
            <p className="mt-2 text-[13.5px] leading-[1.55] text-white/60">
              Live status tracking: 128 Processing, 96 Packed, 102 Shipped, 82 Delivered, with minimal exception holds.
            </p>
          </div>

          {/* Metric 3 */}
          <div className="flex flex-col border border-white/10 bg-white/[0.04] p-6 rounded-xl relative overflow-hidden">
            <div className="flex items-start justify-between gap-3 border-b border-white/10 pb-5">
              <span className="inline-flex items-center rounded-full border border-sky-400/30 bg-sky-500/10 px-2.5 py-0.5 text-[11px] font-semibold uppercase tracking-wider text-sky-300">
                Merchandise
              </span>
              <span className="font-display tnum text-[24px] font-bold text-white">
                1,264 Units
              </span>
            </div>
            <h4 className="mt-5 text-[15px] font-semibold tracking-[-0.01em] text-white">
              Units Sold (+15%)
            </h4>
            <p className="mt-2 text-[13.5px] leading-[1.55] text-white/60">
              Product velocity led by Footwear (38%), Apparel (28%), Bags &amp; Luggage (16%), and Accessories (10%).
            </p>
          </div>

          {/* Metric 4 */}
          <div className="flex flex-col border border-emerald-500/20 bg-emerald-500/[0.05] p-6 rounded-xl relative overflow-hidden">
            <div className="flex items-start justify-between gap-3 border-b border-emerald-500/20 pb-5">
              <span className="inline-flex items-center rounded-full border border-emerald-400/30 bg-emerald-500/10 px-2.5 py-0.5 text-[11px] font-semibold uppercase tracking-wider text-emerald-300">
                Audience
              </span>
              <span className="font-display tnum text-[24px] font-bold text-white">
                892 Active
              </span>
            </div>
            <h4 className="mt-5 text-[15px] font-semibold tracking-[-0.01em] text-white">
              Active Customers (+9%)
            </h4>
            <p className="mt-2 text-[13.5px] leading-[1.55] text-white/60">
              Unique transacting accounts with verified consent profiles, zero chargeback flags, and positive purchase affinity.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
