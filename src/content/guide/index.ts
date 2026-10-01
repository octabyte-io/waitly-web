/**
 * The user guide: its sections, in reading order, and every article.
 *
 * To add an article, write `articles/<slug>.ts` and list it in ARTICLES.
 * The hub, the sidebar, the sitemap and llms.txt all read from here.
 */
import type { PageEntry } from "@/config/pages";
import type { GuideArticle, GuideSectionKey } from "./types";
import { article as installWaitly } from "./articles/install-waitly";
import { article as findYourWayAround } from "./articles/find-your-way-around";
import { article as addNotifyMeBlock } from "./articles/add-notify-me-block";
import { article as testNotifyMe } from "./articles/test-notify-me";
import { article as customizeNotifyMeBlock } from "./articles/customize-notify-me-block";
import { article as variantOrWholeProduct } from "./articles/variant-or-whole-product";
import { article as howRestockAlertsWork } from "./articles/how-restock-alerts-work";
import { article as checkStorefrontConnection } from "./articles/check-storefront-connection";
import { article as browseWaitlists } from "./articles/browse-waitlists";
import { article as seeWhosWaiting } from "./articles/see-whos-waiting";
import { article as exportWaitlist } from "./articles/export-waitlist";
import { article as removeAShopper } from "./articles/remove-a-shopper";
import { article as createPreorderPolicy } from "./articles/create-preorder-policy";
import { article as preorderRules } from "./articles/preorder-rules";
import { article as preorderTimingAndLimits } from "./articles/preorder-timing-and-limits";
import { article as preorderMessageAndShipEstimate } from "./articles/preorder-message-and-ship-estimate";
import { article as addPreorderBlock } from "./articles/add-preorder-block";
import { article as preorderFromProductPage } from "./articles/preorder-from-product-page";
import { article as managePreorders } from "./articles/manage-preorders";
import { article as changeShipDate } from "./articles/change-ship-date";
import { article as turnOffOrDeletePolicy } from "./articles/turn-off-or-delete-policy";
import { article as waitlistPriority } from "./articles/waitlist-priority";
import { article as releaseInBatches } from "./articles/release-in-batches";
import { article as reserveUnits } from "./articles/reserve-units";
import { article as markComingSoon } from "./articles/mark-coming-soon";
import { article as comingSoonBlockAndFields } from "./articles/coming-soon-block-and-fields";
import { article as createAProposal } from "./articles/create-a-proposal";
import { article as addVotingBlock } from "./articles/add-voting-block";
import { article as promoteAProposal } from "./articles/promote-a-proposal";
import { article as analyticsOverview } from "./articles/analytics-overview";
import { article as demandScore } from "./articles/demand-score";
import { article as demandOverTime } from "./articles/demand-over-time";
import { article as restockAlertLog } from "./articles/restock-alert-log";
import { article as preorderVolume } from "./articles/preorder-volume";
import { article as brandYourEmails } from "./articles/brand-your-emails";
import { article as customizeEmailText } from "./articles/customize-email-text";
import { article as notificationRules } from "./articles/notification-rules";
import { article as dataRetention } from "./articles/data-retention";
import { article as tagRecoveredCustomers } from "./articles/tag-recovered-customers";
import { article as chooseAPlan } from "./articles/choose-a-plan";
import { article as allowancesAndUsage } from "./articles/allowances-and-usage";
import { article as shopperJoinsWaitlist } from "./articles/shopper-joins-waitlist";
import { article as shopperRestockAlert } from "./articles/shopper-restock-alert";
import { article as shopperUnsubscribes } from "./articles/shopper-unsubscribes";
import { article as shopperPreorders } from "./articles/shopper-preorders";
import { article as shopperCancelsPreorder } from "./articles/shopper-cancels-preorder";
import { article as shopperVotes } from "./articles/shopper-votes";

export type GuideSection = { key: GuideSectionKey; title: string; blurb: string };

export const GUIDE_SECTIONS: GuideSection[] = [
  { key: "getting-started", title: "Getting started", blurb: "Install Waitly, find your way round, and test it." },
  { key: "back-in-stock", title: "Back in stock", blurb: "The Notify me button and the restock alert." },
  { key: "waitlists", title: "Waitlists", blurb: "Who’s waiting, for what, and what happened next." },
  { key: "preorders", title: "Preorders", blurb: "Keep selling while stock is on its way." },
  { key: "restock-release", title: "Restock release and priority", blurb: "Decide who hears first, and how stock goes out." },
  { key: "coming-soon", title: "Coming Soon and voting", blurb: "Collect demand before a product exists." },
  { key: "analytics", title: "Analytics", blurb: "What Waitly recovered, and what to restock next." },
  { key: "emails-settings", title: "Emails and settings", blurb: "Your brand, your words, your rules." },
  { key: "billing", title: "Plans and billing", blurb: "Change plan, trials and limits." },
  { key: "shoppers", title: "What shoppers see", blurb: "Emails, manage links and cancelling a preorder." },
];

export const ARTICLES: GuideArticle[] = [
  installWaitly,
  findYourWayAround,
  addNotifyMeBlock,
  testNotifyMe,
  customizeNotifyMeBlock,
  variantOrWholeProduct,
  howRestockAlertsWork,
  checkStorefrontConnection,
  browseWaitlists,
  seeWhosWaiting,
  exportWaitlist,
  removeAShopper,
  createPreorderPolicy,
  preorderRules,
  preorderTimingAndLimits,
  preorderMessageAndShipEstimate,
  addPreorderBlock,
  preorderFromProductPage,
  managePreorders,
  changeShipDate,
  turnOffOrDeletePolicy,
  waitlistPriority,
  releaseInBatches,
  reserveUnits,
  markComingSoon,
  comingSoonBlockAndFields,
  createAProposal,
  addVotingBlock,
  promoteAProposal,
  analyticsOverview,
  demandScore,
  demandOverTime,
  restockAlertLog,
  preorderVolume,
  brandYourEmails,
  customizeEmailText,
  notificationRules,
  dataRetention,
  tagRecoveredCustomers,
  chooseAPlan,
  allowancesAndUsage,
  shopperJoinsWaitlist,
  shopperRestockAlert,
  shopperUnsubscribes,
  shopperPreorders,
  shopperCancelsPreorder,
  shopperVotes,
];

export const articleBySlug = (slug: string) => ARTICLES.find((a) => a.slug === slug);

export const articlesIn = (section: GuideSectionKey) => ARTICLES.filter((a) => a.section === section);

export const sectionOf = (article: GuideArticle) =>
  GUIDE_SECTIONS.find((s) => s.key === article.section)!;

/** Articles in guide order: by section, then as listed. */
export const ORDERED_ARTICLES = GUIDE_SECTIONS.flatMap((s) => articlesIn(s.key));

export const guidePath = (slug: string) => `/guide/${slug}/`;

/** Each article as a site page, for metadata, share cards and the sitemap. */
export const guideEntries: PageEntry[] = ORDERED_ARTICLES.map((a) => ({
  path: guidePath(a.slug),
  title: a.title,
  description: a.summary,
}));
