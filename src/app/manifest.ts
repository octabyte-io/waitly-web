import type { MetadataRoute } from "next";
import { siteConfig } from "@/config/site";

export const dynamic = "force-static";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: siteConfig.name,
    short_name: siteConfig.name,
    description: siteConfig.description,
    start_url: "/",
    display: "browser",
    background_color: "#EAF5FF",
    theme_color: "#E8F4FF",
    icons: [
      { src: "/brand/waitly-mark.svg", type: "image/svg+xml", sizes: "any" },
      { src: "/brand/waitly-mark-512.png", type: "image/png", sizes: "512x512" },
    ],
  };
}
