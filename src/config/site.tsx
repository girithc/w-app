import { Gauge, type LucideIcon, MessagesSquare } from "lucide-react";

export type SiteConfig = typeof siteConfig;
export type Navigation = {
  icon: LucideIcon;
  name: string;
  href: string;
};

export const siteConfig = {
  title: "VisActor Next Template",
  description: "Template for VisActor and Next.js",
};

export const navigations: Navigation[] = [
  {
    icon: Gauge,
    name: "Dashboard",
    href: "/",
  },
  {
    icon: MessagesSquare,
    name: "Ticket",
    href: "/applications",
  },
  {
    icon: MessagesSquare,
    name: "Rate Sheet",
    href: "/rate-sheet",
  },
  {
    icon: MessagesSquare,
    name: "Profile",
    href: "/profile",
  },
  {
    icon: MessagesSquare,
    name: "Auth",
    href: "/auth",}
];
