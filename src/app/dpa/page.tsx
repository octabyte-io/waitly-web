import { LegalPage } from "@/components/sections/legal-page";
import { pages } from "@/config/pages";
import { JsonLd, pageMetadata, webPageJsonLd } from "@/lib/seo";

export const metadata = pageMetadata(pages.dpa);

export default function DpaPage() {
  return (
    <>
      <JsonLd data={webPageJsonLd(pages.dpa)} />
      <LegalPage
        file="dpa"
        title="Waitly data protection agreement"
        intro="The terms under which OctaByte processes personal data for merchants who install Waitly."
        other={{ href: "/privacy/", label: "Privacy policy" }}
      />
    </>
  );
}
