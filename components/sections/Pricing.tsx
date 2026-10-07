import Link from "next/link";
import { ArrowUpRight, Check, ShieldCheck } from "lucide-react";
import { getPrice } from "@/lib/nestack";
import { PRODUCT } from "@/lib/product";

export default async function Pricing() {
  const price = await getPrice(PRODUCT.insubId);

  return (
    <section id="pricing" className="border-b border-[var(--line)] bg-[var(--paper)]">
      <div className="mx-auto max-w-[1240px] px-5 py-20 sm:px-8 sm:py-28">
        <div className="grid gap-10 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:items-center lg:gap-16">
          <div className="max-w-[48ch]">
            <span className="eyebrow">Enterprise Commerce Pricing</span>
            <h2 className="h-section mt-5 text-[clamp(1.9rem,3.6vw,3rem)] text-[var(--ink)]">
              One Unified Platform. No Per-Seat Penalties.
            </h2>
            <p className="mt-6 text-[15.5px] leading-[1.6] text-[var(--ink-soft)]">
              Predictable, transparent investment scaled to your order volume and warehouse footprint. Unlock full access to all 8 operational modules without artificial user seat limits that discourage cross-department collaboration.
            </p>
            <div className="mt-6 flex flex-col gap-2.5 text-[14px] text-[var(--ink-soft)]">
              <div className="flex items-center gap-2">
                <Check className="h-4 w-4 text-emerald-600 shrink-0" />
                <span>Unlimited users across catalog, inventory, orders &amp; support</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="h-4 w-4 text-emerald-600 shrink-0" />
                <span>All 8 modules included: Catalog, Inventory, Orders, Returns, Service...</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="h-4 w-4 text-emerald-600 shrink-0" />
                <span>SOC 2 Type II &amp; PCI DSS v4.0.1 compliant cloud architecture</span>
              </div>
            </div>
          </div>

          <div className="rounded-[24px] border border-[var(--line-2)] bg-[var(--card)] p-8 sm:p-10 shadow-xs">
            <span className="text-[13px] font-medium uppercase tracking-[0.14em] text-[var(--ink-mute)]">
              Starting at
            </span>
            <div className="mt-3 flex items-end gap-2">
              <span className="font-display text-[clamp(2.6rem,6vw,4rem)] font-bold leading-none text-[var(--ink)]">
                $
                <span data-price="true" data-price-source="api" className="tnum">
                  {price}
                </span>
              </span>
              <span className="pb-2 text-[16px] font-medium text-[var(--ink-mute)]">/mo</span>
            </div>
            <p className="mt-5 max-w-[42ch] text-[14.5px] leading-[1.6] text-[var(--ink-soft)]">
              Complete access to the autonomous operations engine — including automated document ingestion, multi-node inventory forecasting, dynamic order routing, reverse logistics condition grading, and omnichannel service triage.
            </p>
            <Link
              href="#walkthrough"
              className="mt-8 inline-flex h-12 w-full sm:w-auto items-center justify-center rounded-xl bg-blue-600 px-7 text-[14px] font-semibold text-white transition hover:bg-blue-700 shadow-sm"
            >
              Talk to Operations Team
              <ArrowUpRight size={16} strokeWidth={2.2} className="ml-1.5" />
            </Link>
            <p className="mt-6 border-t border-[var(--line)] pt-4 font-mono text-[10px] uppercase leading-[1.65] tracking-[0.06em] text-[var(--ink-mute)]">
              Tailored high-volume GMV tiers, dedicated private VPC deployments, and multi-brand enterprise licensing available upon consultation.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
