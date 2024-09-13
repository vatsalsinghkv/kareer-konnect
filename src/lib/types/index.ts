import { LucideIcon } from "lucide-react";

export type LinkType = {
  name: string;
  href: string;
};

export type IconLinkType = {
  icon: string | LucideIcon;
  href: string;
};

export type FeatureType = {
  id: string;
  name: string;
  description: string;
  icon: LucideIcon;
};

export type ProductType = {
  id: string;
  name: string;
  tag?: "new" | "sale";
  image: string;
  price: number;
  rating: number;
  imageShrink?: boolean;
};
