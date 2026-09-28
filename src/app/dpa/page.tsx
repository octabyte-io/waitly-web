import type { Metadata } from "next";
import { LegalPage } from "@/components/sections/legal-page";

export const metadata: Metadata = {
  title: "Data protection agreement",
  description: "The data protection agreement between Octabyte and merchants who install Waitly.",
  alternates: { canonical: "/dpa/" },
};

export default function DpaPage() {
  return (
    <LegalPage
      file="dpa"
      title="Waitly data protection agreement"
      intro="The terms under which Octabyte processes personal data for merchants who install Waitly."
      other={{ href: "/privacy/", label: "Privacy policy" }}
    />
  );
}
