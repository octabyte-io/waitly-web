import { AdminFrame, Panel } from "@/components/mocks/admin";
import { EmailMock, muted } from "@/components/mocks/email";
import { VotingBlock } from "@/components/mocks/storefront";
import type { Scene } from "../scenes";

/** Potential revenue = votes × planned price × the store’s bought ÷ sent rate (25% here). */
const PROPOSALS = [
  { title: "Waxed canvas tote", state: "Open", votes: "64", week: "+11", potential: "About $1,340" },
  { title: "Brass reading lamp", state: "Open", votes: "41", week: "+3", potential: "About $1,230" },
  { title: "Trail runner, low", state: "Open", votes: "23", week: "+6", potential: "About $805" },
  { title: "Wool watch cap", state: "Closed", votes: "12", week: "+0", potential: "About $114" },
];

const STATE_TONE: Record<string, string> = {
  Open: "bg-[#dcf5e4] text-[#14532d]",
  Closed: "bg-[#eef0f3] text-[#4b5560]",
};

/** The mocks for the “customers-vote-on-next-product” post. */
export const scenes = {
  "vote-block": {
    alt: "Waitly’s Product voting block on a store page, headed “Vote for what we make next” with “Tick the ones you’d buy. We’ll only email you about those.” Three ideas, each with an image, a line of description and a planned price: Waxed canvas tote, about $84, ticked; Brass reading lamp, about $120; Trail runner, low, about $140, ticked. Below, an Email field, the line “By voting, you agree to get emails about these products. You can unsubscribe at any time.” and a Vote button. No vote counts are shown.",
    render: () => <VotingBlock />,
  },
  "vote-ranking": {
    wide: true,
    alt: "Waitly’s Voting page for an example store. Proposals ranked by votes: Waxed canvas tote, Open, 64 votes, +11 in the last 7 days, potential revenue about $1,340. Brass reading lamp, Open, 41, +3, about $1,230. Trail runner, low, Open, 23, +6, about $805. Wool watch cap, Closed, 12, +0, about $114.",
    render: () => (
      <AdminFrame title="Voting">
        <Panel title="Proposals">
          <div className="relative overflow-x-auto">
            <table className="w-full min-w-[30rem] text-left text-[0.875rem]">
              <caption className="sr-only">Proposals ranked by votes, example store</caption>
              <thead className="text-ink-soft">
                <tr className="border-b border-line">
                  <th scope="col" className="py-2 pr-3 font-medium">Proposal</th>
                  <th scope="col" className="py-2 pr-3 font-medium">State</th>
                  <th scope="col" className="py-2 pr-3 text-right font-medium">Votes</th>
                  <th scope="col" className="py-2 pr-3 text-right font-medium">Last 7 days</th>
                  <th scope="col" className="py-2 text-right font-medium">Potential revenue</th>
                </tr>
              </thead>
              <tbody className="tnum">
                {PROPOSALS.map((p) => (
                  <tr key={p.title} className="border-b border-line last:border-0">
                    <th scope="row" className="py-2.5 pr-3 font-medium text-[#1f6feb]">{p.title}</th>
                    <td className="py-2.5 pr-3">
                      <span
                        className={`inline-flex h-6 items-center rounded-full px-2.5 text-[0.75rem] font-semibold whitespace-nowrap ${STATE_TONE[p.state]}`}
                      >
                        {p.state}
                      </span>
                    </td>
                    <td className="py-2.5 pr-3 text-right font-semibold">{p.votes}</td>
                    <td className="py-2.5 pr-3 text-right text-ink-soft">{p.week}</td>
                    <td className="py-2.5 text-right">{p.potential}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Panel>
      </AdminFrame>
    ),
  },
  "vote-launch-email": {
    alt: "An email from Harbor Supply with the subject “Waxed canvas tote, which you voted for, is now available”: “Waxed canvas tote is now available at Harbor Supply.”, “You were number 7 in line for this one.”, a Buy it now button, “This alert does not hold one for you, so it is first come, first served.” and a footer saying the shopper is getting it because they voted for the tote, with a Remove my vote link.",
    render: () => (
      <EmailMock
        subject="Waxed canvas tote, which you voted for, is now available"
        heading="Waxed canvas tote, which you voted for, is now available"
        button="Buy it now"
        after={<p className={muted}>This alert does not hold one for you, so it is first come, first served.</p>}
        item="Waxed canvas tote"
        joinedBy="voted"
      >
        <p>
          <strong>Waxed canvas tote</strong> is now available at Harbor Supply.
        </p>
        <p className={muted}>You were number 7 in line for this one.</p>
      </EmailMock>
    ),
  },
} satisfies Record<string, Scene>;
