import { AdminFrame, Panel } from "@/components/mocks/admin";
import { EmailMock, muted } from "@/components/mocks/email";
import { ComingSoonBlock, ProductFrame } from "@/components/mocks/storefront";
import type { Scene } from "../scenes";

const SIZES = {
  label: "Size",
  value: "Medium",
  values: [
    { name: "Small", soldOut: true },
    { name: "Medium", soldOut: true },
    { name: "Large", soldOut: true },
  ],
};

const MOST_WANTED = [
  { variant: "Oat / Medium", waiting: 31 },
  { variant: "Oat / Large", waiting: 22 },
  { variant: "Oat / Small", waiting: 16 },
];

/** The theme's own button for a product with no stock. Waitly doesn't draw it. */
function ThemeSoldOut() {
  return (
    <p className="flex min-h-11 items-center justify-center rounded-md border border-[#c5ccd4] px-4 py-2 text-center text-[0.9375rem] leading-tight font-semibold text-[#9aa2ab]">
      Sold out
    </p>
  );
}

/** The mocks for the “coming-soon-product-waitlist” post. */
export const scenes = {
  "soon-product-page": {
    alt: "A product page for Waxed field jacket at $148.00, every size sold out and the theme’s button reading Sold out. Under it, Waitly’s Coming soon block: a Coming soon badge, “Want this when it launches?”, “You’re asking for Oat / Medium.”, an “Any size or color is fine” checkbox, an Email field, How many? set to 2, “Shopping from Canada”, a ticked “Email me once when this goes on sale.” and an I want this button.",
    render: () => (
      <ProductFrame title="Waxed field jacket" price="$148.00" options={SIZES}>
        <ThemeSoldOut />
        <ComingSoonBlock />
      </ProductFrame>
    ),
  },
  "soon-demand": {
    alt: "Waitly’s Coming Soon page for an example store. Marked products: Waxed field jacket, Form showing, 86 waiting, 112 units wanted, potential revenue about $2,800. Below, the product’s Coming Soon card lists the most wanted options: Oat / Medium 31, Oat / Large 22, Oat / Small 16.",
    render: () => (
      <AdminFrame title="Coming Soon">
        <Panel title="Marked products">
          <div className="relative overflow-x-auto">
            <table className="w-full min-w-[26rem] text-left text-[0.875rem]">
              <caption className="sr-only">Marked products, example store</caption>
              <thead className="text-ink-soft">
                <tr className="border-b border-line">
                  <th scope="col" className="py-2 pr-3 font-medium">Product</th>
                  <th scope="col" className="py-2 pr-3 font-medium">Form</th>
                  <th scope="col" className="py-2 pr-3 text-right font-medium">Waiting</th>
                  <th scope="col" className="py-2 pr-3 text-right font-medium">Units wanted</th>
                  <th scope="col" className="py-2 text-right font-medium">Potential revenue</th>
                </tr>
              </thead>
              <tbody className="tnum">
                <tr>
                  <th scope="row" className="py-2.5 pr-3 font-medium text-[#1f6feb]">Waxed field jacket</th>
                  <td className="py-2.5 pr-3">
                    <span className="inline-flex h-6 items-center rounded-full bg-[#dcf5e4] px-2.5 text-[0.75rem] font-semibold whitespace-nowrap text-[#14532d]">
                      Form showing
                    </span>
                  </td>
                  <td className="py-2.5 pr-3 text-right">86</td>
                  <td className="py-2.5 pr-3 text-right">112</td>
                  <td className="py-2.5 text-right">About $2,800</td>
                </tr>
              </tbody>
            </table>
          </div>
        </Panel>
        <Panel title="Coming Soon">
          <p className="text-[0.8125rem] text-ink-soft">Most wanted</p>
          <ul className="mt-2 space-y-1.5 text-[0.9375rem] tnum">
            {MOST_WANTED.map((row) => (
              <li key={row.variant} className="flex justify-between gap-4 border-b border-line pb-1.5 last:border-0">
                <span>{row.variant}</span>
                <span>{row.waiting}</span>
              </li>
            ))}
          </ul>
        </Panel>
      </AdminFrame>
    ),
  },
  "soon-launch-email": {
    alt: "An email from Harbor Supply with the subject “Waxed field jacket is now available”: “Waxed field jacket / Oat / Medium is now available at Harbor Supply.”, “You were number 12 in line for this one.”, a Buy it now button and “This alert does not hold one for you, so it is first come, first served.”",
    render: () => (
      <EmailMock
        subject="Waxed field jacket is now available"
        heading="Waxed field jacket is now available"
        button="Buy it now"
        after={<p className={muted}>This alert does not hold one for you, so it is first come, first served.</p>}
        item="Waxed field jacket / Oat / Medium"
        joinedBy="coming_soon"
      >
        <p>
          <strong>Waxed field jacket / Oat / Medium</strong> is now available at Harbor Supply.
        </p>
        <p className={muted}>You were number 12 in line for this one.</p>
      </EmailMock>
    ),
  },
} satisfies Record<string, Scene>;
