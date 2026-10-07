/**
 * Dashboard shell configuration for Mavqelra AI.
 * Sidebar (140px) + Topbar (50px) drawn around cropped dashboard screenshots.
 */
import {
  LayoutDashboard,
  Tag,
  Percent,
  Box,
  ShoppingCart,
  Truck,
  RotateCcw,
  Headphones,
  Mail,
  MessageSquare,
  Bell,
  type LucideIcon,
} from "lucide-react";

export const SHELL = {
  /** Size of original screenshot design canvas. */
  source: { w: 1024, h: 576 },
  sidebarW: 140,
  topbarH: 50,
  divider: 1,
  /** Cropped plate rectangle inside public/assets/shell/p<N>.jpg */
  content: { x: 141, y: 51, w: 883, h: 525 },
  avatar: { x: 965, y: 10, size: 30 },
  avatarSrc: "/assets/shell/avatar.jpg",
  searchPlaceholder: "Search orders, SKUs, customers, tickets...",

  wordmark: { x: 18, y: 32 },
  title: { x: 162, y: 32 },

  nav: {
    firstCy: 82,
    pitch: 38,
    iconCx: 22,
    iconSize: 14,
    stroke: 1.5,
    strokeActive: 1.75,
    labelX: 38,
    baseline: 3.5,
  },

  pill: { x: 6, w: 128, h: 30, r: 6 },

  search: {
    x: 425,
    y: 11,
    w: 280,
    h: 28,
    r: 6,
    border: 1,
    icon: {
      cx: 438,
      cy: 25,
      size: 13,
      stroke: 1.4,
    },
    placeholder: { x: 452, y: 29 },
  },

  topbarIcon: { size: 16, stroke: 1.4 },

  type: {
    wordmark: { size: 15, weight: 700, sx: 0.98 },
    title: { size: 14, weight: 600, sx: 0.98 },
    nav: { size: 11, weight: 450, sx: 0.96 },
    navActive: { size: 11, weight: 600, sx: 0.96 },
    placeholder: { size: 10, weight: 400, sx: 0.98 },
  },

  color: {
    header: "#ffffff",
    sidebarFrom: "#ffffff",
    sidebarTo: "#ffffff",
    seam: "#ffffff",
    divider: "#eceef2",
    wordmark: "#090d16",
    title: "#090d16",
    nav: "#475569",
    navActive: "#2563eb",
    pill: "#eff6ff",
    searchBorder: "#e2e8f0",
    searchIcon: "#64748b",
    placeholder: "#64748b",
    topbarIcon: "#334155",
  },
} as const;

export type ShellNavItem = {
  key: string;
  label: string;
  icon: LucideIcon;
  iconSrc?: string;
  scale?: number;
};

export const SHELL_NAV: ShellNavItem[] = [
  { key: "dashboard", label: "Dashboard", icon: LayoutDashboard },
  { key: "catalog", label: "Catalog", icon: Tag },
  { key: "merchandising", label: "Merchandising", icon: Percent },
  { key: "inventory", label: "Inventory", icon: Box },
  { key: "orders", label: "Orders", icon: ShoppingCart },
  { key: "fulfillment", label: "Fulfillment", icon: Truck },
  { key: "returns", label: "Returns", icon: RotateCcw },
  { key: "service", label: "Service", icon: Headphones },
];

export const SHELL_TOPBAR_ICONS: { key: "mail" | "chat" | "alerts"; icon: LucideIcon; cx: number; cy: number }[] = [
  { key: "mail", icon: Mail, cx: 860, cy: 25 },
  { key: "chat", icon: MessageSquare, cx: 895, cy: 25 },
  { key: "alerts", icon: Bell, cx: 930, cy: 25 },
];

export const shellFor = (page: number, title: string) => {
  const normTitle = title.toLowerCase();
  const match = SHELL_NAV.find(
    (n) => n.label.toLowerCase() === normTitle || normTitle.includes(n.label.toLowerCase())
  );
  return {
    active: match?.key ?? "dashboard",
    title: match?.label ?? title,
    contentSrc: `/assets/shell/p${page}.jpg`,
  };
};
