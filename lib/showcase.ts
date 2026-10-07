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
    name: "Payment Card Industry Data Security Standard (SAQ A & Script Defense)",
    note: "Mavqelra AI mandates tokenized payment architectures, never stores raw PAN data, and continuously audits client-side payment script integrity to prevent e-commerce digital skimming attacks.",
  },
  {
    code: "GDPR (EU 2016/679)",
    name: "General Data Protection Regulation — Consumer Profiling & Consent Separation",
    note: "Maintains auditable consent state records, purpose metadata, automated data minimization, and automated right-to-be-forgotten deletion workflows across all customer profile tables.",
  },
  {
    code: "CCPA / CPRA",
    name: "California Consumer Privacy Act & Privacy Rights Act Compliance",
    note: "Enforces consumer opt-out preferences, automated limit-use flags on sensitive personal data, and collection notices before customer discovery tracking and recommendation scoring.",
  },
  {
    code: "FTC Mail Order Rule",
    name: "Federal Trade Commission 30-Day Merchandise & Shipping Delay Rule",
    note: "Operates an autonomous tracking clock on promised shipment windows, surfacing mandatory buyer delay consent prompts and automated refund protocols before regulatory breach.",
  },
  {
    code: "CAN-SPAM Act",
    name: "Controlling the Assault of Non-Purchased Pornography & Marketing Act",
    note: "Strictly decouples operational transactional order and tracking notifications from commercial promotional marketing campaigns, maintaining instantaneous opt-out registries.",
  },
  {
    code: "INFORM Consumers Act",
    name: "Integrity, Notification, and Fairness in Online Retail Marketplaces for Consumers",
    note: "For multi-seller and marketplace deployments, automates identity, bank account, and tax verification for high-volume third-party sellers with suspicious activity reporting.",
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
