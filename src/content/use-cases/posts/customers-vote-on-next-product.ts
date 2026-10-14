import type { UseCasePost } from "../types";

export const post: UseCasePost = {
  slug: "customers-vote-on-next-product",
  title: "Let customers vote on your next product",
  metaTitle: "Let customers vote on your next product on Shopify",
  description:
    "Ask your Shopify customers which product to make next, keep their emails, and tell them when the winner goes on sale. With a poll, a form or an app.",
  cardHeadline: "Let customers vote on your next product",
  summary:
    "A poll tells you which idea people like. A vote with an email also tells you who to write to when you make it. How to run one on Shopify, and what a vote can’t tell you.",
  cover: "vote-block",
  published: "2026-10-14",
  answer: [
    "Put two to five product ideas in front of the customers you already have, each with a picture and a rough price, and ask them to tick the ones they’d buy. Take an email with each vote, so you can tell those people when the winner goes on sale. Keep the counts private until you decide, so early votes don’t steer later ones.",
    "Without an app, that is a form on a page of your store and a spreadsheet of answers. An app can show the ideas on your store, rank them for you, and email each voter when the product they voted for is in stock.",
  ],
  sections: [
    {
      id: "what-a-vote-tells-you",
      heading: "What a product vote can tell you, and what it can’t",
      voice: "neutral",
      blocks: [
        "A vote costs the shopper nothing, so it is a weak signal on its own. It is good at ranking ideas against each other among people who already like your store. It is poor at telling you how many people will pay, at what price, or in which size.",
        "The more a vote asks of the shopper, the more it tells you. A tap on a poll asks for a second. A vote with an email asks them to hear from you again. A preorder asks for money. Most stores use the cheap kinds to narrow a list down, and the expensive kind to size the first run.",
        {
          type: "list",
          items: [
            "**Show a price.** “Would you buy this?” means little without one. A rough figure, such as “about $80”, is enough.",
            "**Show a picture.** A sketch, a sample or a render. Shoppers vote on what they can see.",
            "**Keep the count private.** A running tally invites people to back the idea that’s already ahead, and the result then says more about the first day than about the idea.",
            "**Decide your bar first.** Write down how many votes would make an idea worth a first batch before the votes come in.",
          ],
        },
      ],
    },
    {
      id: "options",
      heading: "Ways to let customers vote on products",
      voice: "neutral",
      blocks: [
        "Each way below gives you a ranking. They differ in who you reach, whether you can contact the voters later, and how easy it is for one person to vote twice.",
        {
          type: "table",
          caption: "Running a product vote",
          head: ["Approach", "Good for", "What to watch"],
          rows: [
            [
              "**Instagram Story poll**",
              "A quick read from your followers on two options.",
              "Voters see [which choice is in the lead](https://about.instagram.com/blog/announcements/introducing-polls-in-instagram-stories) once they’ve voted, and the story is gone after 24 hours. You can’t email them about the result.",
            ],
            [
              "**Survey form**, such as Google Forms",
              "Several ideas, follow-up questions and an email field.",
              "Lives off your store unless you embed it. Stopping repeat answers means making voters sign in to Google.",
            ],
            [
              "**Vote with an email on your store**",
              "Customers who already shop with you, and telling voters at launch.",
              "Needs an app, or a form and a list you keep by hand.",
            ],
            [
              "**Preorder or a small test batch**",
              "Deciding how many to make once you’ve picked the idea.",
              "Takes money now, and comes with a ship date. See [how to run a preorder with a closing date and a unit limit](/use-cases/preorder-window-and-limit/).",
            ],
          ],
        },
      ],
    },
    {
      id: "without-an-app",
      heading: "How to run a product vote on Shopify without an app",
      voice: "neutral",
      blocks: [
        "A Google Form on a page of your store does the job, and the answers land in a spreadsheet.",
        {
          type: "list",
          ordered: true,
          items: [
            "**Write the form.** One checkbox question lists the ideas, each with its rough price, so shoppers can tick more than one. Add an email question, and say next to it what you’ll send: “We’ll email you if we make one you ticked.”",
            "**Decide on repeat answers.** Google Forms’ **Limit to 1 response** setting [requires respondents to sign in to their Google Account](https://support.google.com/docs/answer/2839588), which some shoppers won’t do. Without it, sort the sheet by email when you count, and count each address once.",
            "**Put it on your store.** In Google Forms, open the **More** menu and choose [**Embed HTML**](https://support.google.com/docs/answer/2839588), then copy the code. In Shopify, [add a page](https://help.shopify.com/en/manual/online-store/themes/theme-structure/pages) such as “Vote”, open the HTML view of its content and paste the code in.",
            "**Point people to it.** Link the page from your home page, your newsletter and your order confirmation, and give it a closing date.",
            "**Count, and tell the winners’ voters.** When you make the product, filter the sheet to the people who ticked it and email them on the day it goes on sale.",
          ],
        },
        "The weak point is the end. Months can pass between the vote and the launch, and the list sits in a spreadsheet you have to remember. Each shopper should hear about the products they ticked, and not the others.",
      ],
    },
    {
      id: "after-the-vote",
      heading: "After the vote: from winning idea to product",
      voice: "neutral",
      blocks: [
        "Votes rank ideas. They don’t size an order. Before you commit to a run, turn the winner into something a shopper can sign up for or pay for:",
        {
          type: "list",
          items: [
            "**A coming soon page** for the product, which takes emails and asks which size or color. See [a coming soon product with a waitlist](/use-cases/coming-soon-product-waitlist/).",
            "**A preorder** once you can name a ship date. Money in hand is the firmest count you’ll get.",
          ],
        },
        "Tell the voters what happened, even if it’s no. They left an email to hear about it.",
      ],
    },
    {
      id: "voting-block",
      heading: "With Waitly: a voting block on your store",
      voice: "waitly",
      blocks: [
        "On the Pro plan, Waitly’s **Voting** page holds your ideas, called proposals. Each one has a **Title** of up to 80 characters, a **Description** of up to 300, one image and, if you like, a **Planned price**, which shoppers see as a rough figure such as “About $150”. A proposal starts as a **Draft**, and shoppers see it once you select **Open**. Up to 50 can be open at once.",
        "The **Product voting** block goes on your home page or on a page of its own, through the theme editor. It is headed “Vote for what we make next” and lists every open proposal, most recently opened first. The shopper ticks the ones they’d buy, enters their email and selects **Vote**. The line under the email field, which you can’t change, says they agree to get emails about these products and can unsubscribe at any time.",
        "Shoppers never see how many votes a proposal has. One email address has one vote per proposal, so voting again with the same address adds nothing. Each voter gets an email with the subject “Thanks for voting at” your shop, listing what they voted for with a **Remove my vote** link beside each one.",
        {
          type: "aside",
          kind: "note",
          text: "A vote is for the idea as a whole, not a size or color, because those don’t exist yet. Ask which size a shopper wants later, on the product’s Coming Soon form.",
        },
      ],
      figure: {
        scene: "vote-block",
        caption: "Example. Waitly’s own wording; you can reword the heading, button and messages in the theme editor.",
      },
    },
    {
      id: "see-which-idea-wins",
      heading: "See which idea is winning",
      voice: "waitly",
      blocks: [
        "**Proposals** on the **Voting** page are ranked by votes. Beside each one are its votes in the **Last 7 days**, which shows whether interest is still growing, and **Potential revenue**, an estimate of what the voters could spend from the planned price and your store’s past rate of buying after an alert. Until your store has sent enough alerts to have a rate, it shows the most it could be, as “Up to”.",
        "Open a proposal to see its **Votes** card, and select **Export voters** to download them as a CSV file. **Close** takes it off the block and keeps its votes, and **Reopen** puts it back. **Delete** is for an idea you won’t make: every vote on it ends, and voters aren’t told.",
        "You can edit a proposal’s title, description, image and price while it’s open. Voters aren’t told about a new name, so keep it recognizably the same idea.",
      ],
      figure: {
        scene: "vote-ranking",
        caption: "Example. Proposals ranked by votes, as only you see them.",
      },
    },
    {
      id: "promote-and-launch",
      heading: "Make the winner, and email everyone who voted",
      voice: "waitly",
      blocks: [
        "Select **Promote** on the winning proposal and enter its price. Waitly creates the product in Shopify with one variant, your title, description and image, and 0 in stock, and marks it Coming Soon. If you’ve already made the product in Shopify, select **Link to existing product** instead. It has to be sold out and published to the Online Store.",
        "Each vote becomes a place on the product’s waitlist and keeps the date the shopper voted. Nobody is emailed at this point. While you get the product ready, its page shows the Coming Soon form, so new shoppers can sign up too, and say which size they want once you’ve added sizes in Shopify.",
        "When you add stock, the product launches. Every voter gets an email headed with the product’s name and “, which you voted for, is now available”, with a **Buy it now** button. Shoppers who signed up on the Coming Soon form get the launch email in their own wording.",
        "Voters wait on the whole product, so they hear when the first variant gets stock. If you add sizes, stock them all at the same time. The email holds no stock for anyone, so it is first come, first served.",
      ],
      figure: {
        scene: "vote-launch-email",
        caption: "Example. The launch email a voter gets.",
      },
    },
  ],
  features: ["comingSoon"],
  level: "pro",
  setup: [
    { guide: "create-a-proposal", note: "Add a planned price, or Potential revenue reads “No price”." },
    { guide: "add-voting-block", note: "Give a page of its own a template of its own if other pages share the default one." },
    { guide: "shopper-votes", note: "What the shopper sees, to check your block against." },
    { guide: "promote-a-proposal" },
    { guide: "mark-coming-soon", note: "Optional. How the Coming Soon form works on the promoted product." },
  ],
  limits: [
    "Voting is on the Pro plan only.",
    "Shoppers can’t see results. There is no public count, percentage or leaderboard.",
    "A vote is for the whole idea. Shoppers can’t pick a size or color, rank ideas in order, or leave a comment.",
    "One address has one vote per proposal, but Waitly doesn’t check who is behind an address. A shopper with several addresses can vote several times. There is no sign-in requirement and no bot protection.",
    "Voters aren’t told when you close, rename or delete a proposal, or when you promote it. They hear only when the product is in stock.",
    "Waitly doesn’t give voters a discount, early access or a reserved unit. The launch email is first come, first served.",
    "A vote that sits unchanged for longer than your data retention setting, 365 days at most, expires like any signup. See [how long Waitly keeps waitlist data](/guide/data-retention/).",
    "Waitly sends email only, no SMS, and doesn’t pass voters to Klaviyo or Mailchimp. Voters agreed to emails about the products they voted for, not to marketing.",
    "The block needs an Online Store 2.0 theme. Each launch email uses one of your plan’s restock alerts; the thank-you email doesn’t. See [pricing](/pricing/).",
  ],
  faqs: [
    {
      q: "Can customers see which product is winning?",
      a: "Not with Waitly. The voting block never shows counts, so early leaders don’t sway the result. You see the ranking on the **Voting** page. If you want a public result, post it yourself once voting closes.",
    },
    {
      q: "Can someone vote twice?",
      a: "Not with the same email address. Voting again for the same product adds nothing, and the block says “You already voted for these.” Someone with a second address can vote again.",
    },
    {
      q: "Does a vote mean the shopper will buy?",
      a: "No. A vote is interest, with no money behind it. Use votes to choose between ideas, then a Coming Soon form or a preorder to judge how many to make.",
    },
    {
      q: "How many votes are enough to make a product?",
      a: "There is no general number. Work back from your smallest worthwhile run: if only some of your voters will buy on the day, how many votes would cover it? Decide that before voting starts.",
    },
    {
      q: "What happens to votes for ideas I don’t make?",
      a: "Close the proposal to pause it and keep the votes, or delete it to end them. Voters aren’t emailed either way.",
    },
    {
      q: "Can I email voters about other products?",
      a: "They agreed to hear about the products they voted for. Ask them separately before you add them to marketing, for example through your store’s newsletter sign-up.",
    },
  ],
  related: ["coming-soon-product-waitlist", "preorder-window-and-limit"],
};
