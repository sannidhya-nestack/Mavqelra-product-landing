import { ShieldCheck, Info } from "lucide-react";
import { COMPLIANCE } from "@/lib/showcase";
import { PRODUCT } from "@/lib/product";

export default function Compliance() {
  if (!COMPLIANCE.length) return null;

  return (
    <section id="compliance" className="border-b border-[var(--line)] bg-[var(--paper-2)]">
      <div className="mx-auto max-w-[1320px] px-5 py-20 sm:px-8 sm:py-28">
        <div className="max-w-[58ch]">
          <span className="eyebrow">Enterprise Governance &amp; Regulatory Defense</span>
          <h2 className="h-section mt-5 text-[clamp(1.9rem,3.6vw,3rem)] text-[var(--ink)]">
            Relatable, Feasible Standards Built for Real Workflows.
          </h2>
          <p className="mt-6 text-[16px] leading-[1.6] text-[var(--ink-soft)]">
            Compliance should protect your operations without introducing engineering friction. {PRODUCT.name} supports the foundational payment, consumer privacy, and shipping standards essential to modern retail execution.
          </p>
        </div>

        {/* Streamlined, Relatable Compliance Grid */}
        <div className="mt-14 grid gap-6 sm:grid-cols-2">
          {COMPLIANCE.map((item) => (
            <div
              key={item.code}
              className="flex flex-col justify-between rounded-2xl border border-[var(--line)] bg-white p-7 sm:p-8 shadow-xs transition hover:border-blue-500/30 hover:shadow-md"
            >
              <div>
                <div className="flex items-center justify-between">
                  <span className="font-mono text-[12px] font-bold text-blue-700 bg-blue-50 border border-blue-200/60 rounded-md px-2.5 py-1">
                    {item.code}
                  </span>
                  <ShieldCheck className="h-4 w-4 text-emerald-600" />
                </div>
                <h3 className="mt-4 text-[17px] font-bold tracking-tight text-[var(--ink)]">
                  {item.name}
                </h3>
                <p className="mt-3 text-[14px] leading-[1.6] text-[var(--ink-soft)]">
                  {item.note}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Mandatory Licensee & Counsel Disclaimer */}
        <div className="mt-8 rounded-2xl border border-amber-500/25 bg-amber-50/60 p-6 sm:p-7 flex items-start gap-4 text-amber-950">
          <Info className="h-5 w-5 text-amber-600 shrink-0 mt-0.5" />
          <p className="text-[13.5px] sm:text-[14px] leading-[1.6] text-amber-900/90 font-medium">
            These are standards the platform is built to support inside your workflows — obligations that fall on you as the licensee. They are not certifications held by us, and support in the product is not a substitute for your own counsel or compliance officer.
          </p>
        </div>
      </div>
    </section>
  );
}
