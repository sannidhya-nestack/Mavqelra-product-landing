import { ArrowUpRight, Check, Network, ShieldCheck, Zap } from "lucide-react";
import { PRODUCT } from "@/lib/product";

const ecosystem = [
  {
    category: "Commerce Storefronts",
    desc: "Bi-directional product publishing, inventory ATP webhooks, and sub-second checkout order ingestion.",
    items: ["Shopify Plus", "commercetools", "BigCommerce", "Adobe Commerce", "WooCommerce"],
  },
  {
    category: "Marketplaces & Social Channels",
    desc: "Unified order ingestion, catalog feed syndication, and multi-channel inventory reservation locks.",
    items: ["Amazon Seller Central", "TikTok Shop", "Mirakl Marketplaces", "Walmart Marketplace", "eBay"],
  },
  {
    category: "ERP & Financial Systems",
    desc: "Automated general ledger reconciliations, landed COGS posting, and supplier purchase order generation.",
    items: ["NetSuite", "SAP Business One", "Microsoft Dynamics 365", "Sage Intacct", "QuickBooks Online"],
  },
  {
    category: "WMS, 3PL & Fulfillment",
    desc: "Automated wave generation, pick manifest dispatch, serial scan audits, and carrier tracking webhooks.",
    items: ["ShipBob", "Manhattan Associates", "ShipHero", "Extensiv 3PL", "Blue Yonder"],
  },
  {
    category: "Customer Support & Triage",
    desc: "Bi-directional ticket context injection, 1-click RMA label generation, and automated order updates.",
    items: ["Gorgias", "Zendesk Support", "Kustomer", "Gladly", "Freshdesk"],
  },
  {
    category: "Payments, Fraud & Carriers",
    desc: "Tokenized payment capture, multi-signal fraud defense, and multi-carrier rate shopping.",
    items: ["Stripe", "Adyen", "Signifyd", "FedEx & UPS APIs", "EasyPost"],
  },
];

export default function Connectivity() {
  return (
    <section id="connectivity" className="border-b border-[var(--line)] bg-[var(--paper-2)]">
      <div className="mx-auto max-w-[1320px] px-5 py-20 sm:px-8 sm:py-28">
        <div className="max-w-[56ch]">
          <span className="eyebrow">Enterprise Ecosystem Connectivity</span>
          <h2 className="h-section mt-5 text-[clamp(1.9rem,3.6vw,3rem)] text-[var(--ink)]">
            Connects Directly to Your Existing Tech Stack.
          </h2>
          <p className="mt-6 text-[16px] leading-[1.6] text-[var(--ink-soft)]">
            {PRODUCT.name} sits as an intelligent orchestration brain above your storefronts, ERP, warehouses, and customer support channels — eliminating manual copy-pasting across disparate systems.
          </p>
        </div>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {ecosystem.map((cat) => (
            <div
              key={cat.category}
              className="flex flex-col justify-between rounded-2xl border border-[var(--line)] bg-white p-7 shadow-xs transition hover:border-blue-500/30 hover:shadow-md"
            >
              <div>
                <h3 className="text-[17px] font-bold text-[var(--ink)]">
                  {cat.category}
                </h3>
                <p className="mt-2 text-[13.5px] leading-[1.55] text-[var(--ink-soft)]">
                  {cat.desc}
                </p>
              </div>

              <div className="mt-6 pt-5 border-t border-[var(--line)]">
                <div className="text-[11px] font-bold uppercase tracking-wider text-[var(--ink-mute)] mb-2.5">
                  Native Connectors
                </div>
                <div className="flex flex-wrap gap-1.5">
                  {cat.items.map((item) => (
                    <span
                      key={item}
                      className="rounded-md bg-blue-50/70 border border-blue-100/80 px-2.5 py-1 text-[12px] font-medium text-blue-900"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
