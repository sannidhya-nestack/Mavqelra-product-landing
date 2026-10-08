import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Instrument_Sans } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";

const display = Plus_Jakarta_Sans({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["500", "600", "700", "800"],
});
const body = Instrument_Sans({ variable: "--font-body", subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://mavqelra.nestack.ai"),
  alternates: { canonical: "/" },
  title: "Mavqelra AI — Autonomous Commerce Operations Platform",
  description:
    "Mavqelra AI is the connected operations platform connecting product intake, merchandising, inventory, orders, fulfillment, returns, and customer service into one continuous closed loop.",
  keywords: [
    "e-commerce operations platform",
    "order management system",
    "inventory forecasting",
    "reverse logistics AI",
    "customer service triage",
    "catalog enrichment AI",
    "retail operations",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className={`${display.variable} ${body.variable} antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
