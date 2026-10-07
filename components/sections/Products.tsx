import { PRODUCTS } from "@/lib/showcase";
import { ArrowUpRight, Sparkles, Layers } from "lucide-react";
import { PRODUCT } from "@/lib/product";

export default function Products() {
  if (!PRODUCTS.length) return null;

  return (
    <section id="products" className="border-b border-[var(--line)] bg-[var(--paper)]">
      <div className="mx-auto max-w-[1320px] px-5 py-20 sm:px-8 sm:py-28">
        <div className="max-w-[56ch]">
          <span className="eyebrow">Enterprise Extensions &amp; Add-Ons</span>
          <h2 className="h-section mt-5 text-[clamp(1.9rem,3.6vw,3rem)] text-[var(--ink)]">
            Tailor Mavqelra to Your Channel Complexity.
          </h2>
          <p className="mt-6 text-[16px] leading-[1.6] text-[var(--ink-soft)]">
            Scale your operations with purpose-built extension modules designed for hybrid B2B/D2C merchants, multi-hub fulfillment networks, and high-volume catalog onboarding.
          </p>
        </div>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {PRODUCTS.map((prod) => (
            <div
              key={prod.name}
              className="flex flex-col justify-between rounded-2xl border border-[var(--line)] bg-white p-7 shadow-xs transition hover:border-blue-500/30 hover:shadow-md"
            >
              <div>
                <div className="inline-flex items-center gap-1.5 rounded-md bg-blue-50 px-2.5 py-1 text-[11px] font-bold text-blue-700">
                  <Sparkles className="h-3.5 w-3.5" />
                  <span>Modular Extension</span>
                </div>
                <h3 className="mt-4 text-[18px] font-bold text-[var(--ink)]">
                  {prod.name}
                </h3>
                <p className="mt-3 text-[14px] leading-[1.6] text-[var(--ink-soft)]">
                  {prod.blurb}
                </p>
              </div>

              <div className="mt-6 pt-5 border-t border-[var(--line)] flex flex-wrap gap-2">
                {prod.tags?.map((t) => (
                  <span
                    key={t}
                    className="rounded-md bg-black/[0.04] px-2.5 py-1 text-[11px] font-medium text-[var(--ink-soft)]"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
