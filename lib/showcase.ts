export type ComplianceItem = { code: string; name: string; note: string };
export type ProductItem = {
  name: string;
  blurb: string;
  image?: string;
  tags?: string[];
};

export const COMPLIANCE: ComplianceItem[] = [
  {
    code: "PCI DSS v4.0.1",
    name: "Payment Card Industry Data Security Standard (Tokenized Payment Flows)",
    note: "Mavqelra AI delegates card handling to certified gateways (e.g. Stripe, Adyen) via secure tokens, ensuring your servers never store raw credit card numbers or sensitive CVV data.",
  },
  {
    code: "GDPR & CCPA / CPRA",
    name: "Consumer Data Privacy & Automated Right-to-Delete Workflows",
    note: "Separates customer marketing consent from operational order tracking, and provides one-click data export and profile anonymization to fulfill consumer privacy requests simply.",
  },
  {
    code: "FTC 30-Day Mail Order Rule",
    name: "Federal Trade Commission Shipping Delay & Buyer Consent Protocols",
    note: "Monitors promised delivery windows with automated fulfillment countdowns, surfacing timely delay consent prompts or refund options before regulatory deadlines.",
  },
  {
    code: "CAN-SPAM Act",
    name: "Commercial Communications & Transactional Notification Decoupling",
    note: "Guarantees that operational transactional updates (order confirmations, carrier tracking, return receipts) remain strictly separate from commercial marketing lists.",
  },
];

export const PRODUCTS: ProductItem[] = [
  {
    name: "B2B Wholesale Quoting & Negotiated Orders Extension",
    blurb:
      "For hybrid D2C/B2B brands: automates custom RFQs, wholesale price tiers, volume-based contract margins, and credit limit validations without disrupting high-velocity retail flows.",
    tags: ["B2B Wholesale", "Quote Generator", "Contract Pricing"],
  },
  {
    name: "Multi-Node Stock Rebalancing & Transfer Agent",
    blurb:
      "Predictive inter-warehouse inventory rebalancing that calculates optimal pallet transfers between regional distribution centers to avoid split shipments and protect next-day delivery promises.",
    tags: ["Inventory Intelligence", "Transfer Optimization", "Split Avoidance"],
  },
  {
    name: "Returns-to-Catalog Quality & Fit Feedback Engine",
    blurb:
      "Automatically transforms reverse logistics inspection telemetry and customer return reasons into upstream catalog intelligence, identifying sizing anomalies and supplier spec defects before they scale.",
    tags: ["Reverse Logistics", "Root-Cause Learning", "Catalog Health"],
  },
];
