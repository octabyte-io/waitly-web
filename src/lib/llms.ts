/**
 * `/llms.txt` and `/llms-full.txt` (https://llmstxt.org): the site in plain
 * Markdown for AI assistants, built from the same content the pages render.
 */
import { pages, type PageEntry } from "@/config/pages";
import { siteConfig } from "@/config/site";
import { FAQ } from "@/content/faq";
import { COMPARISON, formatCount, LEVEL_NAMES, PLANS, type Level } from "@/content/plans";

const url = (path: string) => new URL(path, siteConfig.url).toString();
const link = (page: PageEntry) => `- [${page.title}](${url(page.path)}): ${page.description}`;

const price = (value: number) => (value === 0 ? "$0" : `$${value} a month`);

function header() {
  const plans = PLANS.map((plan) => `${plan.name} (${price(plan.price)})`).join(", ");
  const trial = PLANS.filter((plan) => plan.trialDays)
    .map((plan) => plan.name)
    .join(" and ");
  const trialDays = PLANS.find((plan) => plan.trialDays)?.trialDays;

  return `# ${siteConfig.name}

> ${siteConfig.description}

${siteConfig.name} is a Shopify app made by ${siteConfig.company}. Key facts:

- Works with any Shopify Online Store 2.0 theme through theme app blocks. No code or theme edits.
- Restock alerts are sent by email only. There is no SMS or push today.
- Restocks are detected automatically from Shopify inventory changes.
- Preorders are paid in full at checkout through Shopify selling plans. Deposits and partial payments are not supported.
- Plans: ${plans}. ${trial} start with a ${trialDays}-day free trial. Billed monthly on the merchant's Shopify invoice, in US dollars. No annual plan.
- No Klaviyo or Shopify Flow integration today. Waitlists export as CSV on Growth and Pro.
- Install: ${siteConfig.installUrl}
- Support: ${siteConfig.supportEmail}`;
}

export function llmsTxt() {
  return `${header()}

## Features

${[pages.backInStock, pages.preorders, pages.restockRelease, pages.analytics, pages.comingSoon].map(link).join("\n")}

## Plans and setup

${[pages.pricing, pages.setup, pages.faq].map(link).join("\n")}

## Legal

${[pages.privacy, pages.dpa].map(link).join("\n")}

## Optional

- [Full product reference](${url("/llms-full.txt")}): every plan, limit, feature and answer on this site in one file.
`;
}

const cell = (value: boolean | string) => (value === true ? "yes" : value === false ? "no" : value);

export function llmsFullTxt() {
  const plans = PLANS.map(
    (plan) => `### ${plan.name}: ${price(plan.price)}${plan.trialDays ? `, ${plan.trialDays}-day free trial` : ""}

${plan.pitch}

- Restock alerts per billing cycle: ${formatCount(plan.alerts)}
- Preorders per billing cycle: ${formatCount(plan.preorders)}
- Signup confirmations per billing cycle: ${formatCount(plan.confirmations)}
${plan.adds.map((line) => `- ${line}`).join("\n")}`,
  ).join("\n\n");

  const levels = Object.keys(LEVEL_NAMES) as Level[];
  const comparison = COMPARISON.map(
    (group) => `### ${group.title}

${group.rows
  .map((row) => {
    const values = levels.map((level) => `${LEVEL_NAMES[level]}: ${cell(row[level])}`).join(", ");
    return `- ${row.label}. ${values}.${row.note ? ` ${row.note}` : ""}`;
  })
  .join("\n")}`,
  ).join("\n\n");

  const faq = FAQ.map(
    (group) => `### ${group.title}

${group.items.map((item) => `**${item.q}**\n\n${item.a.join("\n\n")}`).join("\n\n")}`,
  ).join("\n\n");

  return `${header()}

## Pages

${Object.values(pages).map(link).join("\n")}

## Plans

Prices are in US dollars, billed monthly through Shopify. Allowances reset every billing cycle. At 100% of an allowance, further restock alerts are held back rather than sent, and shoppers stay on the waitlist.

${plans}

## Every feature, by plan

${comparison}

## Questions and answers

${faq}
`;
}
