import type { GuideArticle } from "../types";

export const article: GuideArticle = {
  slug: "create-a-proposal",
  section: "coming-soon",
  title: "Let shoppers vote on a product idea",
  summary:
    "Describe a product that doesn’t exist yet, open it for votes, and close, reopen or delete it later.",
  level: "pro",
  before: [
    "Your store is on the Pro plan.",
    "To take votes, the Product voting block is on your store. See “Add the voting block to your store”.",
  ],
  steps: [
    {
      title: "Open Voting and add a proposal",
      body: [
        "In Waitly, choose **Voting** in the menu, then select **Add proposal**.",
        "A proposal is a product you might make: a title, a short description, one image and, if you like, a planned price.",
      ],
      shot: {
        src: "/guide/create-a-proposal/01-voting-page.jpg",
        width: 1470,
        height: 757,
        alt: "The Voting page in Waitly, with the Add proposal button at the top right, a Proposals table listing five ideas with their state, votes, last 7 days and potential revenue, and the Promoted list below.",
        frame: "admin",
        highlights: [
          { x: 0.1, y: 82.9, w: 16.1, h: 4.9, label: "Open **Voting**" },
          { x: 88.4, y: 8.9, w: 8.1, h: 4.9, label: "Add a proposal" },
        ],
      },
    },
    {
      title: "Write the title and description",
      body: [
        "Enter a **Title**, up to 80 characters. Shoppers see it on the Voting block.",
        "Add a **Description** of one or two sentences, up to 300 characters.",
      ],
      shot: {
        src: "/guide/create-a-proposal/02-proposal-fields.jpg",
        width: 1230,
        height: 757,
        alt: "The Add proposal page with the Title and Description filled in, the Image and Planned price fields below, a State card on the right showing Draft, and the Discard and Save bar at the top.",
        frame: "admin",
        highlights: [
          { x: 10.9, y: 19.9, w: 50.5, h: 11.1, label: "Title, up to 80 characters" },
          { x: 10.9, y: 32.0, w: 50.5, h: 19.8, label: "One or two sentences" },
          { x: 62.7, y: 17.5, w: 26.6, h: 18.1, label: "New proposals start as a **Draft**" },
        ],
      },
    },
    {
      title: "Add an image",
      body: [
        "Drop a JPG, PNG, GIF or WebP file on **Image** to upload it to your Shopify files. The first time, Shopify asks you to let Waitly upload files.",
        "Or select **Choose from Shopify files** to pick an image you’ve already uploaded. Search your files, then select an image. **Change image** and **Remove** let you swap it later.",
      ],
      shot: {
        src: "/guide/create-a-proposal/03-choose-image.jpg",
        width: 1028,
        height: 632,
        alt: "The Choose an image window, with a search field and a grid of images from the store’s Shopify files.",
        frame: "admin",
        highlights: [
          { x: 3.3, y: 13.0, w: 92.4, h: 6.1, label: "Search your files" },
          { x: 3.3, y: 21.1, w: 22.8, h: 35.1, label: "Select an image" },
        ],
      },
    },
    {
      title: "Set a planned price and save",
      body: [
        "**Planned price (optional)** is shown to shoppers as a rough figure, like “About $150”. Waitly also uses it to work out **Potential revenue**.",
        "Select **Save** in the bar at the top. The proposal is saved as a **Draft**, which shoppers can’t see yet.",
      ],
    },
    {
      title: "Open it for votes",
      body: [
        "Select **Open** at the top of the proposal. You’ll see **Proposal opened**, and the **State** card reads **Open**: it’s now shown on the Voting block.",
        "The **Votes** card shows **Votes**, votes in the **Last 7 days** and **Potential revenue**. **Export voters** downloads the voters as a CSV file.",
      ],
      shot: {
        src: "/guide/create-a-proposal/04-open-proposal.jpg",
        width: 1230,
        height: 701,
        alt: "An open proposal in Waitly, with Close, Link to existing product, Delete and Promote actions at the top, the State card reading Open and the Votes card with 40 votes, +9 in the last 7 days, potential revenue and an Export voters button.",
        frame: "admin",
        highlights: [
          { x: 64.7, y: 1.7, w: 31.0, h: 5.2, label: "Close, link, delete or promote" },
          { x: 62.7, y: 11.0, w: 26.6, h: 19.5, label: "The proposal is **Open**" },
          { x: 62.7, y: 33.8, w: 26.6, h: 25.7, label: "Votes so far" },
        ],
      },
      aside: {
        kind: "note",
        text: "Up to 50 proposals can be open at once. Close one before you open another.",
      },
    },
    {
      title: "Close or reopen voting",
      body: [
        "Select **Close** to take the proposal off the Voting block. Its votes are kept, and shoppers can’t vote until you select **Reopen**.",
        "You can edit the title, description, image and planned price at any time. If shoppers have voted already, a banner reminds you that they aren’t told about a new name.",
      ],
    },
    {
      title: "Delete a proposal you won’t make",
      body: [
        "Select **Delete**, then **Delete proposal** in the window that opens. Every vote on it ends, and voters aren’t told.",
      ],
      shot: {
        src: "/guide/create-a-proposal/05-delete-proposal.jpg",
        width: 1230,
        height: 701,
        alt: "The Delete Splitboard 2027? window, warning that its 40 votes end, the voters are not told and this cannot be undone, with Cancel and Delete proposal buttons.",
        frame: "admin",
        highlights: [
          { x: 15.2, y: 49.5, w: 49.0, h: 6.9, label: "What deleting does" },
          { x: 53.7, y: 59.9, w: 10.5, h: 5.2, label: "Confirm with **Delete proposal**" },
        ],
      },
      aside: {
        kind: "warning",
        text: "Deleting can’t be undone. To stop voting and keep the votes, close the proposal instead.",
      },
    },
  ],
  faqs: [
    {
      q: "Can shoppers see how many votes a proposal has?",
      a: "No. The Voting block never shows counts, so early leaders don’t sway the result. It lists open proposals with the most recently opened first. You see the ranking by votes in Waitly.",
    },
    {
      q: "Can I move a proposal back to Draft?",
      a: "No. Once a proposal is open, you can close and reopen it, but it never goes back to Draft.",
    },
  ],
  related: ["add-voting-block", "promote-a-proposal", "shopper-votes"],
};
