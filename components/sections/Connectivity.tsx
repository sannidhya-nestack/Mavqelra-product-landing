import Image from "next/image";
import { PRODUCT } from "@/lib/product";

const integrations = [
  { name: "Salesforce", icon: "/icons/connectivity/salesforce.svg" },
  { name: "Pipedrive", icon: "/icons/connectivity/pipedrive.svg" },
  { name: "Outlook", icon: "/icons/connectivity/outlook.svg" },
  { name: "SharePoint", icon: "/icons/connectivity/sharepoint.svg" },
  { name: "OneDrive", icon: "/icons/connectivity/onedrive.svg" },
  { name: "Teams", icon: "/icons/connectivity/teams.svg" },
  { name: "MS Project", icon: "/icons/connectivity/msproject.svg" },
  { name: "Slack", icon: "/icons/connectivity/slack.svg" },
  { name: "DocuSign", icon: "/icons/connectivity/docusign.svg" },
  { name: "Monday", icon: "/icons/connectivity/monday.svg" },
  { name: "Procore", icon: "/icons/connectivity/procore.svg" },
  { name: "Fieldwire", icon: "/icons/connectivity/fieldwire.svg" },
  { name: "Acumatica", icon: "/icons/connectivity/acumatica.svg" },
  { name: "Primavera P6", icon: "/icons/connectivity/oracle.svg" },
  { name: "Smartsheet", icon: "/icons/connectivity/smartsheet.svg" },
];

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
  // Duplicate arrays for smooth continuous marquee loop
  const row1 = [...integrations, ...integrations];
  const row2Items = [...integrations.slice(7), ...integrations.slice(0, 7)];
  const row2 = [...row2Items, ...row2Items];

  return (
    <section id="connectivity" className="border-b border-[var(--line)] bg-[var(--paper-2)] py-20 sm:py-28">
      <style>{`
        @keyframes conn-scroll-left {
          0% {
            transform: translate3d(0, 0, 0);
          }
          100% {
            transform: translate3d(-50%, 0, 0);
          }
        }
        @keyframes conn-scroll-right {
          0% {
            transform: translate3d(-50%, 0, 0);
          }
          100% {
            transform: translate3d(0, 0, 0);
          }
        }
        .conn-marquee-track {
          display: flex !important;
          width: max-content !important;
          will-change: transform;
        }
        .conn-track-left {
          animation: conn-scroll-left 30s linear infinite !important;
        }
        .conn-track-right {
          animation: conn-scroll-right 30s linear infinite !important;
        }
        .conn-marquee-track:hover {
          animation-play-state: paused !important;
        }
      `}</style>

      {/* Header matching exact layout of screenshot 3 */}
      <div className="mx-auto max-w-[920px] px-5 text-center sm:px-8">
        <span className="eyebrow text-blue-600 font-semibold tracking-wider uppercase text-[12px]">
          Connectivity
        </span>
        <h2 className="h-section mt-4 text-[clamp(2rem,3.8vw,3.2rem)] font-bold text-[var(--ink)]">
          Your production stack, connected.
        </h2>
        <p className="mx-auto mt-5 max-w-[66ch] text-[16px] leading-[1.65] text-[var(--ink-soft)]">
          Shopify Plus, Amazon, NetSuite, ShipBob, Gorgias, Stripe, Salesforce, Slack, DocuSign — connecting the exact operational tools your merchandising, inventory, fulfillment, and customer support teams use every day.
        </p>
      </div>

      {/* Animated Marquee Band */}
      <div className="mt-14 overflow-hidden bg-[#102878] py-9 sm:py-11 shadow-inner">
        <div className="flex flex-col gap-7 sm:gap-9">
          {/* Row 1 - Scrolling Left */}
          <div className="overflow-hidden">
            <div
              className="conn-marquee-track conn-track-left items-center gap-10 px-4 sm:gap-14"
              aria-hidden="true"
            >
              {row1.map((item, idx) => (
                <div key={idx} className="flex shrink-0 items-center gap-3">
                  <Image
                    src={item.icon}
                    alt=""
                    width={26}
                    height={26}
                    className="h-[24px] w-[24px] shrink-0 brightness-0 invert"
                  />
                  <span className="whitespace-nowrap font-display text-[14px] font-bold uppercase tracking-[0.04em] text-white">
                    {item.name}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Row 2 - Scrolling Right */}
          <div className="overflow-hidden">
            <div
              className="conn-marquee-track conn-track-right items-center gap-10 px-4 sm:gap-14"
              aria-hidden="true"
            >
              {row2.map((item, idx) => (
                <div key={idx} className="flex shrink-0 items-center gap-3">
                  <Image
                    src={item.icon}
                    alt=""
                    width={26}
                    height={26}
                    className="h-[24px] w-[24px] shrink-0 brightness-0 invert"
                  />
                  <span className="whitespace-nowrap font-display text-[14px] font-bold uppercase tracking-[0.04em] text-white">
                    {item.name}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <p className="mx-auto mt-6 max-w-[1240px] px-5 text-center text-[12px] leading-[1.55] text-[var(--ink-mute)] sm:px-8">
        Tool names and marks belong to their respective owners. No endorsement or partnership implied.
      </p>

      {/* Deep Operational Ecosystem Connectors */}
      <div className="mx-auto max-w-[1320px] px-5 mt-16 sm:px-8">
        <div className="text-center mb-10">
          <span className="text-[12px] font-bold uppercase tracking-widest text-[var(--ink-mute)]">
            Native Closed-Loop Operational Sync
          </span>
          <h3 className="text-[20px] font-bold text-[var(--ink)] mt-2">
            Engineered for {PRODUCT.name} Workflows
          </h3>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {ecosystem.map((cat) => (
            <div
              key={cat.category}
              className="flex flex-col justify-between rounded-2xl border border-[var(--line)] bg-white p-7 shadow-xs transition hover:border-blue-500/30 hover:shadow-md"
            >
              <div>
                <h4 className="text-[17px] font-bold text-[var(--ink)]">
                  {cat.category}
                </h4>
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
