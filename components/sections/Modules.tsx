import Figure from "./Figure";
import SliderDots from "@/components/ui/SliderDots";
import { PRODUCT } from "@/lib/product";
import { MODULES } from "@/lib/modules";
import { shellFor } from "@/lib/shell";

export default function Modules() {
  return (
    <section id="modules" className="border-b border-[var(--line)] bg-[var(--paper)]">
      <div className="mx-auto max-w-[1320px] px-5 py-20 sm:px-8 sm:py-28">
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6">
          <div className="max-w-[56ch]">
            <span className="eyebrow">The 8 Core Operational Modules</span>
            <h2 className="h-section mt-5 text-[clamp(1.9rem,3.6vw,3rem)] text-[var(--ink)]">
              Purpose-built for every phase of modern commerce execution.
            </h2>
            <p className="mt-6 text-[16px] leading-[1.6] text-[var(--ink-soft)]">
              From automated supplier intake and demand elasticity to multi-node fulfillment routing, condition-based returns, and AI support triage, {PRODUCT.name} establishes a unified operational rhythm across all business units.
            </p>
          </div>

          {/* Dots control on mobile/tablet */}
          <div className="lg:hidden flex flex-col items-start sm:items-end gap-2 shrink-0">
            <span className="text-[12px] font-medium text-[var(--ink-mute)]">
              Swipe or tap dots to browse
            </span>
            <SliderDots targetId="modules-main" count={MODULES.length} size="lg" />
          </div>
        </div>

        {/* Main Modules Stack */}
        <div id="modules-main" className="slider-lg mt-10 lg:mt-16 gap-6 space-y-0 lg:space-y-24">
          {MODULES.map((m, i) => {
            const isEven = i % 2 === 1;
            return (
              <article
                key={m.id}
                id={m.id}
                className={`scroll-mt-24 grid gap-8 lg:items-center lg:gap-10 ${
                  isEven
                    ? "lg:grid-cols-[0.7fr_2fr]"
                    : "lg:grid-cols-[2fr_0.7fr]"
                }`}
              >
                <div className={isEven ? "lg:order-2" : ""}>
                  <Figure
                    src={`/assets/p${m.page}.jpg`}
                    alt={`${m.eyebrow} — ${PRODUCT.name}`}
                    url={`app.mavqelra.com/${m.navTitle.toLowerCase()}`}
                    actions="LIVE · DASHBOARD"
                    lean={m.lean}
                    shell={shellFor(m.page, m.navTitle)}
                  />
                </div>

                <div className={isEven ? "lg:order-1" : ""}>
                  <div className="flex items-center gap-2">
                    <span className="rounded-md bg-blue-100 text-blue-700 px-2 py-0.5 text-[11px] font-bold uppercase tracking-wider">
                      Module {String(m.page - 1).padStart(2, "0")}
                    </span>
                    <span className="eyebrow">{m.eyebrow}</span>
                  </div>
                  <h3 className="mt-4 text-[clamp(1.3rem,2.2vw,1.75rem)] font-semibold tracking-[-0.02em] text-[var(--ink)]">
                    {m.name}
                  </h3>
                  <p className="mt-2 text-[14px] font-medium text-blue-600">
                    {m.tagline}
                  </p>
                  <p className="mt-4 max-w-[46ch] text-[15.5px] leading-[1.6] text-[var(--ink-soft)]">
                    {m.copy}
                  </p>

                  {/* Highlights / Tags */}
                  <ul className="mt-6 flex flex-wrap gap-2">
                    {m.tags.map((t) => (
                      <li
                        key={t}
                        className="rounded-full bg-[var(--brand)] px-3 py-1 text-[12px] font-medium text-white shadow-xs"
                      >
                        {t}
                      </li>
                    ))}
                  </ul>

                  {/* Metrics */}
                  {m.metrics && (
                    <div className="mt-6 pt-6 border-t border-[var(--line)] grid grid-cols-2 gap-4">
                      {m.metrics.map((metric) => (
                        <div key={metric.label}>
                          <div className="text-[11.5px] uppercase font-semibold text-[var(--ink-mute)]">
                            {metric.label}
                          </div>
                          <div className="text-[20px] font-bold text-[var(--ink)]">
                            {metric.value}
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </article>
            );
          })}
        </div>

        {/* Bottom dots for mobile view */}
        <div className="lg:hidden mt-8 flex flex-col items-center gap-2">
          <SliderDots targetId="modules-main" count={MODULES.length} size="lg" />
          <span className="text-[11.5px] text-[var(--ink-mute)]">
            Tap dot to view module
          </span>
        </div>
      </div>
    </section>
  );
}
