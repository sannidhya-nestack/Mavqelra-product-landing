export interface ModuleItem {
  id: string;
  page: number;
  navTitle: string;
  name: string;
  eyebrow: string;
  tagline: string;
  copy: string;
  tags: string[];
  lean?: "left" | "right";
  metrics?: { label: string; value: string }[];
}

export const MODULES: ModuleItem[] = [
  {
    id: "module-catalog",
    page: 2,
    navTitle: "Catalog",
    name: "Catalog Ingestion & Enrichment",
    eyebrow: "Product Data Ingestion & Enrichment",
    tagline: "Automated OCR intake, taxonomy normalization, variant matrices, and listing copy generation.",
    copy: "Convert raw supplier catalogs, PDF spec sheets, XLSX line sheets, and image archives into validated, channel-ready product records in minutes. AI parses unstructured attributes, standardizes size and color taxonomies, infers parent-child variant relationships, validates GTIN/MPN identifiers, and generates SEO-compliant listings while enforcing strict brand style guardrails and banned-claim filters.",
    tags: ["OCR & Feed Extraction", "Taxonomy Normalization", "Variant Inference", "Listing Copy Generation"],
    lean: "left",
    metrics: [
      { label: "Intake Speed", value: "12× Faster" },
      { label: "Attribute Accuracy", value: "99.4%" },
    ],
  },
  {
    id: "module-merchandising",
    page: 3,
    navTitle: "Merchandising",
    name: "Merchandising & Pricing Studio",
    eyebrow: "Merchandising & Price Elasticity",
    tagline: "Dynamic price elasticity modeling, automated markdown schedules, and personalized recommendations.",
    copy: "Govern commercial presentation and margin protection across all sales channels from an integrated studio. Simulate price elasticity against unit demand and inventory exit schedules before publishing. AI continuously evaluates customer browsing context, historical purchase affinity, and margin thresholds to deliver high-converting personalized product recommendations without pushing out-of-stock SKUs.",
    tags: ["Demand Elasticity Matrix", "Assortment Planning", "Personalized Recommendations", "Margin Floor Guardrails"],
    lean: "right",
    metrics: [
      { label: "Gross Margin Lift", value: "+3.8%" },
      { label: "Exit Velocity", value: "-28% Days" },
    ],
  },
  {
    id: "module-inventory",
    page: 4,
    navTitle: "Inventory",
    name: "Inventory Planning & Positioning",
    eyebrow: "Inventory Intelligence & Multi-Node Balancing",
    tagline: "Real-time Available-to-Promise (ATP) tracking, stockout risk prediction, and automated transfer recommendations.",
    copy: "Bridge commercial demand and physical warehouse execution. Track live inventory across On Hand, Reserved, Allocated, Inbound, and Safety Stock tiers. The predictive forecasting engine models Days of Supply (DOS) and Reorder Points (ROP) per SKU and node, automatically recommending stock rebalancing between fulfillment hubs to protect regional customer promise dates before stockouts occur.",
    tags: ["Available-to-Promise (ATP)", "Stockout Risk Scoring", "Multi-Hub Rebalancing", "Reorder Point Optimization"],
    lean: "left",
    metrics: [
      { label: "Stockout Reduction", value: "-44%" },
      { label: "Working Capital", value: "+18% Turnover" },
    ],
  },
  {
    id: "module-orders",
    page: 5,
    navTitle: "Orders",
    name: "Order Management & Routing",
    eyebrow: "Order Processing Automation & Fraud Defense",
    tagline: "Autonomous order acceptance, multi-variable fraud scoring, and dynamic inventory reservation.",
    copy: "Accelerate accepted orders from checkout authorization through warehouse release. Multi-signal fraud detection evaluates transaction velocity, billing mismatches, and historical disputes to auto-release 94% of clean orders in seconds. When inventory shortages or payment exceptions arise, AI routes orders to substitute fulfillment nodes and triggers automated customer resolution workflows.",
    tags: ["Autonomous Order Release", "Multi-Signal Fraud Review", "Reservation Locking", "Exception Automation"],
    lean: "right",
    metrics: [
      { label: "Auto-Release Rate", value: "94.2%" },
      { label: "Exception Cycle", value: "< 8 Mins" },
    ],
  },
  {
    id: "module-fulfillment",
    page: 6,
    navTitle: "Fulfillment",
    name: "Fulfillment & Carrier Operations",
    eyebrow: "Warehouse Routing & Carrier Optimization",
    tagline: "Cost-optimized node routing, pick-pack wave generation, and real-time carrier SLA countdowns.",
    copy: "Direct physical execution from allocation to carrier manifest. The dynamic routing algorithm balances freight cost, delivery SLA promises, warehouse capacity, and split-shipment penalties to select the optimal distribution center. Live telemetry tracks pick rates, cartonization, scan verification, and carrier cutoff countdowns to guarantee on-time delivery across domestic and regional carriers.",
    tags: ["Dynamic Node Routing", "Wave & Pick Generation", "Carrier Manifest Handoff", "On-Time Delivery (OTD)"],
    lean: "left",
    metrics: [
      { label: "On-Time Delivery", value: "98.6%" },
      { label: "Freight Cost/Order", value: "-14.2%" },
    ],
  },
  {
    id: "module-returns",
    page: 7,
    navTitle: "Returns",
    name: "Returns & Reverse Logistics",
    eyebrow: "Reverse Commerce & Disposition Intelligence",
    tagline: "Self-service RMA portal, automated condition grading, disposition routing, and catalog root-cause learning.",
    copy: "Turn high-friction reverse logistics into an operational learning loop. Inspect returns with image-assisted condition grading across Restock, Refurbish, Open-Box, and Liquidation tiers. AI detects return abuse patterns and clusters return reasons — feeding fit and size discrepancies directly back into catalog size charts to eliminate repeat returns at the source.",
    tags: ["Disposition Routing (A-E)", "Return Fraud Screening", "Instant Exchange Engine", "Root-Cause Catalog Feedback"],
    lean: "right",
    metrics: [
      { label: "Recovery Rate", value: "+26%" },
      { label: "Refund Cycle Time", value: "< 24 Hours" },
    ],
  },
  {
    id: "module-service",
    page: 8,
    navTitle: "Service",
    name: "Customer Service Triage",
    eyebrow: "Unified Triage & Next-Best Action Engine",
    tagline: "Omnichannel case triage, unified order timelines, AI suggested responses, and one-click dispute resolution.",
    copy: "Eliminate the six-tab workflow tax for customer support agents. The triage engine ingests customer inquiries across email, chat, and tickets, instantly extracting order IDs, tracking events, and sentiment. Agents receive a unified customer timeline and AI-generated, policy-compliant resolutions — enabling one-click refunds, replacement shipments, and carrier claim investigations in seconds.",
    tags: ["Omnichannel Intent Triage", "Unified Order Timeline", "Policy-Compliant Reply Drafts", "One-Click Resolution"],
    lean: "left",
    metrics: [
      { label: "First Contact Resolution", value: "81%" },
      { label: "Average Handle Time", value: "-62%" },
    ],
  },
];
