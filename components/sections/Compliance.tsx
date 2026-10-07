import { ShieldCheck, Lock, FileCheck2, Scale, AlertCircle } from "lucide-react";
import { COMPLIANCE } from "@/lib/showcase";
import { PRODUCT } from "@/lib/product";

export default function Compliance() {
  if (!COMPLIANCE.length) return null;

  return (
    <section id="compliance" className="border-b border-[var(--line)] bg-[var(--paper-2)]">
      <div className="mx-auto max-w-[1320px] px-5 py-20 sm:px-8 sm:py-28">
        <div className="max-w-[56ch]">
          <span className="eyebrow">Enterprise Governance &amp; Regulatory Defense</span>
          <h2 className="h-section mt-5 text-[clamp(1.9rem,3.6vw,3rem)] text-[var(--ink)]">
            Built for Global E-Commerce Compliance.
          </h2>
          <p className="mt-6 text-[16px] leading-[1.6] text-[var(--ink-soft)]">
            Modern commerce spans payment networks, international privacy jurisdictions, consumer shipment regulations, and marketplace transparency statutes. {PRODUCT.name} enforces auditable compliance rules natively.
          </p>
        </div>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {COMPLIANCE.map((item) => (
            <div
              key={item.code}
              className="flex flex-col justify-between rounded-2xl border border-[var(--line)] bg-white p-7 shadow-xs transition hover:border-blue-500/30 hover:shadow-md"
            >
              <div>
                <div className="flex items-center justify-between">
                  <span className="font-mono text-[12px] font-bold text-blue-700 bg-blue-50 border border-blue-200/60 rounded-md px-2.5 py-1">
                    {item.code}
                  </span>
                  <ShieldCheck className="h-4 w-4 text-emerald-600" />
                </div>
                <h3 className="mt-4 text-[16.5px] font-bold tracking-tight text-[var(--ink)]">
                  {item.name}
                </h3>
                <p className="mt-3 text-[14px] leading-[1.6] text-[var(--ink-soft)]">
                  {item.note}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 rounded-2xl border border-[var(--line)] bg-white p-6 sm:p-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div className="flex items-start gap-4">
            <div className="rounded-xl bg-blue-50 p-3 text-blue-700 shrink-0 border border-blue-100">
              <Scale className="h-6 w-6" />
            </div>
            <div>
              <h4 className="text-[16px] font-bold text-[var(--ink)]">
                Jurisdiction-Independent Compliance Configuration
              </h4>
              <p className="mt-1 text-[14px] text-[var(--ink-soft)] max-w-[62ch]">
                Whether trading exclusively across North America, exporting to the European Union, or operating a multi-vendor marketplace, {PRODUCT.name} allows compliance policies to be calibrated without custom engineering.
              </p>
            </div>
          </div>
          <a
            href="#walkthrough"
            className="inline-flex h-10 items-center justify-center rounded-xl border border-[var(--line-2)] bg-[var(--paper-2)] px-5 text-[13.5px] font-semibold text-[var(--ink)] hover:bg-black/[0.04] transition shrink-0"
          >
            Review Security Architecture ↗
          </a>
        </div>
      </div>
    </section>
  );
}
