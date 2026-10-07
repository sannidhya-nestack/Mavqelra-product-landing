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
      "Tracks real-time Net Sales, Accepted Orders, and margin performance across all active storefronts and retail channels.",
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

        {/* ── Operational Impact Rail (KPIs) ── */}
        <div className="border-t border-white/12 pt-14 mt-20 flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4">
          <div>
            <span className="eyebrow on-dark">Operational Telemetry</span>
            <h3 className="h-section mt-2 text-[clamp(1.5rem,2.8vw,2.2rem)] text-white">
              Engineered for Working Capital &amp; Margin Velocity.
            </h3>
          </div>
          <p className="max-w-[46ch] text-[14.5px] leading-relaxed text-white/70">
            Real enterprise benchmark metrics measured across active storefronts, multi-node fulfillment routing, and automated exception queues.
          </p>
        </div>

        <div className="mt-12 border-t border-white/10 pt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {/* KPI 1 */}
          <div>
            <div className="text-[36px] sm:text-[42px] font-extrabold tracking-tight text-[#00e5ff] leading-none">
              9.6 / 10
            </div>
            <h4 className="mt-3.5 text-[15px] sm:text-[16px] font-bold tracking-[-0.01em] text-white">
              AI Confidence Score
            </h4>
            <p className="mt-2 text-[13px] leading-[1.55] text-white/60">
              High-confidence consensus across inventory routing, margin guards &amp; exception rules
            </p>
          </div>

          {/* KPI 2 */}
          <div>
            <div className="text-[36px] sm:text-[42px] font-extrabold tracking-tight text-[#00e5ff] leading-none">
              32.5h
            </div>
            <h4 className="mt-3.5 text-[15px] sm:text-[16px] font-bold tracking-[-0.01em] text-white">
              Operator Time Saved
            </h4>
            <p className="mt-2 text-[13px] leading-[1.55] text-white/60">
              Average weekly hours saved per operator on order exceptions &amp; manual reconciliation
            </p>
          </div>

          {/* KPI 3 */}
          <div>
            <div className="text-[36px] sm:text-[42px] font-extrabold tracking-tight text-[#00e5ff] leading-none">
              4.5x
            </div>
            <h4 className="mt-3.5 text-[15px] sm:text-[16px] font-bold tracking-[-0.01em] text-white">
              Workflow Efficiency Gain
            </h4>
            <p className="mt-2 text-[13px] leading-[1.55] text-white/60">
              End-to-end turnaround acceleration from customer checkout to carrier dispatch
            </p>
          </div>

          {/* KPI 4 */}
          <div>
            <div className="text-[36px] sm:text-[42px] font-extrabold tracking-tight text-[#00e5ff] leading-none">
              2.8x
            </div>
            <h4 className="mt-3.5 text-[15px] sm:text-[16px] font-bold tracking-[-0.01em] text-white">
              Order Fulfillment Capacity
            </h4>
            <p className="mt-2 text-[13px] leading-[1.55] text-white/60">
              More qualified order packages dispatched per team without adding operational overhead
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
