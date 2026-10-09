import type { ReactNode } from "react";
import { AdminFrame, OrderCard, Panel, SendLogMock } from "@/components/mocks/admin";
import { EmailMock, muted } from "@/components/mocks/email";
import { NotifyMeBlock, ProductFrame } from "@/components/mocks/storefront";
import { scenes as soldOutVariants } from "./scene-sets/sold-out-variants-shopify";
import { scenes as continueSelling } from "./scene-sets/continue-selling-when-out-of-stock";
import { scenes as preorderDelay } from "./scene-sets/preorder-shipping-delay";
import { scenes as restockSellsOut } from "./scene-sets/restock-sells-out-before-waitlist";
import { scenes as howMuchToReorder } from "./scene-sets/how-much-to-reorder-after-selling-out";
import { scenes as preorderWindow } from "./scene-sets/preorder-window-and-limit";
import { scenes as conversionRate } from "./scene-sets/back-in-stock-email-conversion-rate";
import { scenes as comingSoonProduct } from "./scene-sets/coming-soon-product-waitlist";

/**
 * The mocks a use-case post can show, by name. A post's data holds only the
 * name, so it stays plain data that the sitemap, llms.txt and share cards can
 * read. `alt` says what the mock shows, for llms.txt and screen readers.
 *
 * The scenes here are shared. A post's own scenes live in `scene-sets/<slug>.tsx`.
 */
export type Scene = {
  alt: string;
  render: () => ReactNode;
  /** A mock too wide to sit beside the text, such as a table. It goes under it instead. */
  wide?: boolean;
};

const OVERSHIRT_SIZES = {
  label: "Size",
  value: "M",
  values: [{ name: "S" }, { name: "M", soldOut: true }, { name: "L" }, { name: "XL", soldOut: true }],
};

export const SCENES = {
  "sold-out-notify-me": {
    alt: "A product page with size M sold out. Under the sizes, a form says “Out of stock”, asks for an email and has a “Notify me when available” button.",
    render: () => (
      <ProductFrame title="Harbor overshirt" price="$68.00" options={OVERSHIRT_SIZES}>
        <NotifyMeBlock />
      </ProductFrame>
    ),
  },
  "notify-me-joined": {
    alt: "The same page after the shopper signs up. The form is replaced by “You are on the list. We will email you once this is back.”",
    render: () => (
      <ProductFrame title="Harbor overshirt" price="$68.00" options={OVERSHIRT_SIZES}>
        <NotifyMeBlock state="success" />
      </ProductFrame>
    ),
  },
  "restock-alert-email": {
    alt: "An email from Harbor Supply with the subject “Harbor overshirt is back in stock”, a “Buy it now” button and a link to stop alerts for the item.",
    render: () => (
      <EmailMock
        subject="Harbor overshirt is back in stock"
        heading="Harbor overshirt is back"
        button="Buy it now"
        after={<p className={muted}>This alert does not hold one for you, so it is first come, first served.</p>}
        item="Harbor overshirt / M"
      >
        <p>
          <strong>Harbor overshirt / M</strong> is available again at Harbor Supply.
        </p>
        <p className={muted}>You were number 3 in line for this one.</p>
      </EmailMock>
    ),
  },
  "order-after-alert": {
    alt: "A paid Shopify order for Harbor overshirt in size M, with a line under it saying Waitly counts it as Bought after alert.",
    render: () => <OrderCard />,
  },
  "send-log": {
    alt: "Waitly’s Restock alerts log for an example store: three alerts, each with how many were queued and delivered, how many shoppers bought, and the rate.",
    render: () => (
      <AdminFrame title="Restock alerts">
        <Panel>
          <SendLogMock />
        </Panel>
      </AdminFrame>
    ),
  },
  ...soldOutVariants,
  ...continueSelling,
  ...preorderDelay,
  ...restockSellsOut,
  ...howMuchToReorder,
  ...preorderWindow,
  ...conversionRate,
  ...comingSoonProduct,
} satisfies Record<string, Scene>;

export const isWide = (id: SceneId) => (SCENES[id] as Scene).wide === true;

export type SceneId = keyof typeof SCENES;
