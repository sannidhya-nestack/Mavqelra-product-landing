/* The single identity edit-point for this landing page. Every section reads
   PRODUCT.insubId / PRODUCT.name from here — never a per-file INSUB_ID and
   never a hard-coded product name. */

export const PRODUCT = {
  insubId: "insub_RET001",
  name: "Mavqelra AI",
  tagline: "Autonomous Commerce Operations Platform connecting product intake, merchandising, inventory, orders, fulfillment, returns, and customer service",
  industry: "Retail & E-Commerce",
  subIndustry: "E-commerce",
  agentsUrl: "https://nestackagents.com/industries/retail-ecommerce",
} as const;

export const NAME_PARTS = {
  base: PRODUCT.name.replace(/(\.AI| AI)$/i, ""),
  suffix: " AI",
};
