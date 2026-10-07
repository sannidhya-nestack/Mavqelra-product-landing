/* Config for the Onboarding section (below Pricing). */

export const ONBOARDING_FEES = {
  essential: "$1,000+",
  plus: "$2,500+",
  enterprise: "$5,000+",
} as const;

export type OnboardingTier = {
  key: "Essential" | "Plus" | "Enterprise";
  fee: string;
  featured: boolean;
  opener: string | null;
  features: string[];
};

export const ONBOARDING = {
  description:
    "A structured white-glove deployment that gets your e-commerce operations, merchandising, inventory, and support teams running Mavqelra AI in under 30 days. We map your supplier feeds, configure automated order routing rules, connect your storefronts (Shopify Plus, commercetools, BigCommerce) and warehouse systems, and tune AI triage thresholds before going live.",
  essential: {
    key: "Essential",
    fee: ONBOARDING_FEES.essential,
    featured: false,
    opener: null,
    features: [
      "Kickoff call and technical discovery scoped to your catalog and order operations leads",
      "Workspace provisioning, security controls, and admin access setup",
      "Supplier feed mapping & automated catalog ingestion schema tuning for primary vendors",
      "Command Center Dashboard, Operations Pulse, and AI Exception Queue activation",
      "Order management auto-release policies and fraud risk thresholds configured",
      "Customer Service intent classification & suggested response templates tuned",
      "Sandbox testing and validation run on historical order batches before go-live",
      "Operational playbook, agent quickstart guide, and standard workflow SOPs",
    ],
  } satisfies OnboardingTier,
  plus: {
    key: "Plus",
    fee: ONBOARDING_FEES.plus,
    featured: true,
    opener: "Everything in Essential, plus:",
    features: [
      "Guided multi-channel catalog migration and variant relationship normalization",
      "Two deep ERP/WMS/Helpdesk integrations (e.g., NetSuite, ShipBob, Gorgias, Zendesk)",
      "Multi-node inventory Available-to-Promise (ATP) and rebalancing transfer rules configured",
      "Returns inspection workflow, condition grading matrix, and reverse logistics routing setup",
      "Interactive training sessions for catalog managers, inventory planners, and CS leads",
      "Dedicated e-commerce solutions architect assigned throughout the entire deployment",
    ],
  } satisfies OnboardingTier,
  enterprise: {
    key: "Enterprise",
    fee: ONBOARDING_FEES.enterprise,
    featured: false,
    opener: "Everything in Plus, plus:",
    features: [
      "Multi-brand and international localized rollout across regional distribution centers",
      "Bespoke ERP, WMS, and TMS enterprise integrations via high-throughput webhooks & APIs",
      "Custom compliance governance for PCI DSS v4.0.1, GDPR, CCPA, and FTC 30-day rules",
      "Closed-loop telemetry feedback linking returns inspection data directly to catalog size charts",
      "Executive reporting dashboards, GMROI models, and demand elasticity simulation tuning",
      "Named enterprise customer success director with guaranteed 99.95% SLA and 24/7 coverage",
    ],
  } satisfies OnboardingTier,
  deployment: {
    cloud: {
      label: "Cloud (SaaS)",
      note: "Hosted in SOC 2 Type II and PCI DSS compliant cloud infrastructure. High-availability multi-region clusters ensure zero order lag during peak BFCM volume surges, with automatic model fine-tuning handled transparently.",
    },
    private: {
      label: "Private Cloud / VPC",
      note: "Deploy directly inside your organization's dedicated AWS or Azure Virtual Private Cloud (VPC), ensuring proprietary customer profiles, vendor cost books, and transactional records never leave your firewall.",
    },
  },
};
