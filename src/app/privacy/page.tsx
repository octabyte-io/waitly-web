import type { Metadata } from "next";
import { LegalPage } from "@/components/sections/legal-page";

export const metadata: Metadata = {
  title: "Privacy policy",
  description: "What data Waitly collects, why, where it is processed, how long it is kept and how to have it removed.",
  alternates: { canonical: "/privacy/" },
};

export default function PrivacyPage() {
  return (
    <LegalPage
      file="privacy"
      title="Waitly privacy policy"
      intro="What Waitly collects from merchants and their shoppers, why, who else handles it, and how to have it removed."
      other={{ href: "/dpa/", label: "Data protection agreement" }}
    />
  );
}
