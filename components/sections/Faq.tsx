"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { PRODUCT } from "@/lib/product";

const faqs = [
  {
    q: `What distinguishes ${PRODUCT.name} from storefront platforms like Shopify Plus or BigCommerce?`,
    a: `Storefront platforms excel at consumer-facing themes and cart checkouts, but they treat operations as disconnected administrative records. ${PRODUCT.name} is a dedicated Commerce Operating System (Commerce OS) that manages the deep operational machinery: multi-feed supplier intake, dynamic ATP inventory calculation across multiple fulfillment nodes, algorithmic order routing, reverse logistics condition grading, and omnichannel service triage.`,
  },
  {
    q: "How does the platform eliminate overselling during high-volume sales events?",
    a: `Mavqelra maintains an atomic Available-to-Promise (ATP) ledger calculated as On Hand + Confirmed Inbound - Reserved - Allocated. During checkout, inventory reservations are locked with millisecond TTL tokens, preventing inventory racing and overselling across Shopify, Amazon, and wholesale channels simultaneously.`,
  },
  {
    q: "Do we need to replace our current ERP (NetSuite / SAP) or WMS (ShipBob / Manhattan)?",
    a: `No. ${PRODUCT.name} is designed as an intelligent orchestration layer. It syncs with your ERP for financial accounting and general ledger data, communicates with your WMS/3PL for wave picking and tracking updates via webhooks, and serves as the single operational workspace where your operations, catalog, and support teams manage exceptions.`,
  },
  {
    q: "How does the Customer Service Triage engine resolve delivery disputes?",
    a: `Unlike generic LLM chatbots that hallucinate static FAQ answers, Mavqelra's triage engine cross-references the customer's identity, order ID, real-time carrier tracking events, and account value tier. If a parcel is marked delivered but disputed, the AI calculates SLA risk, checks photo delivery proof, and drafts a policy-compliant response with one-click actions: open a carrier investigation, trigger an expedited replacement, or authorize a refund.`,
  },
  {
    q: "What Human-in-the-Loop (HITL) safeguards protect pricing and automated order releases?",
    a: `Mavqelra uses confidence threshold gates. Clear orders with low fraud scores (>95% confidence) auto-release instantly. Any transaction with address mismatches, unusual velocity, or gross margin breaches below configured floors are held in an exception queue for one-click human review. Pricing optimizations enforce hard margin floors that cannot be bypassed algorithmically.`,
  },
  {
    q: "How does the closed loop between Returns and Catalog operate in practice?",
    a: `When a customer returns an item, warehouse inspection logs condition grades (A Resellable through D Liquidation) and records root-cause reason codes. When return rates for a SKU spike by 2.5× category baseline due to fit issues, the system automatically alerts the catalog team with recommended sizing adjustment notes, stopping recurring returns before additional inventory ships.`,
  },
  {
    q: "How does Mavqelra support global privacy and regulatory standards?",
    a: `Mavqelra includes built-in compliance frameworks for PCI DSS v4.0.1 (tokenized payments and script attack defense), GDPR/CCPA (purpose limitation, consent state separation, automated right-to-be-forgotten deletion workflows), CAN-SPAM (decoupling transactional order updates from commercial marketing), and the FTC 30-Day Mail Order Rule (automated customer delay consent clocks).`,
  },
  {
    q: "What is the typical deployment timeline for high-growth brands?",
    a: `Most mid-market and enterprise brands go live within 30 to 45 days. Phase 1 focuses on supplier intake, catalog normalization, and sandbox verification. Phase 2 activates order release policies and customer service triage. Phase 3 enables multi-node inventory rebalancing and closed-loop return intelligence.`,
  },
];

export default function Faq() {
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  return (
    <section id="faq" className="border-b border-[var(--line)] bg-[var(--paper)]">
      <div className="mx-auto max-w-[960px] px-5 py-20 sm:px-8 sm:py-28">
        <div className="text-center">
          <span className="eyebrow">Frequently Asked Questions</span>
          <h2 className="h-section mt-5 text-[clamp(1.9rem,3.6vw,3rem)] text-[var(--ink)]">
            Everything You Need to Know About {PRODUCT.name}.
          </h2>
          <p className="mt-5 text-[16px] leading-[1.6] text-[var(--ink-soft)] max-w-[58ch] mx-auto">
            Practical architectural and operational answers for VPs of E-Commerce, Directors of Supply Chain, and Operations Executives.
          </p>
        </div>

        <div className="mt-14 space-y-4">
          {faqs.map((faq, idx) => {
            const isOpen = openIdx === idx;
            return (
              <div
                key={faq.q}
                className="rounded-2xl border border-[var(--line)] bg-white overflow-hidden transition"
              >
                <button
                  type="button"
                  onClick={() => setOpenIdx(isOpen ? null : idx)}
                  className="w-full px-6 py-5 text-left flex items-center justify-between gap-4 font-semibold text-[16px] text-[var(--ink)] hover:text-blue-600 transition"
                  aria-expanded={isOpen}
                >
                  <span>{faq.q}</span>
                  <ChevronDown
                    className={`h-5 w-5 shrink-0 transition-transform duration-200 text-[var(--ink-mute)] ${
                      isOpen ? "rotate-180 text-blue-600" : ""
                    }`}
                  />
                </button>
                {isOpen && (
                  <div className="px-6 pb-6 pt-1 text-[14.5px] leading-[1.65] text-[var(--ink-soft)] border-t border-black/[0.04]">
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
