import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import type { Faq } from "@/content/faq";

/**
 * Questions that open one at a time. Closed answers stay in the page, hidden
 * with `hidden="until-found"`, so they are in the static HTML for search
 * engines and the browser's find-in-page can open them.
 */
export function FaqList({ items }: { items: Faq[] }) {
  return (
    <Accordion hiddenUntilFound className="border-t border-current/15">
      {items.map((item) => (
        <AccordionItem key={item.q} value={item.q} className="border-b border-current/15">
          <AccordionTrigger className="rounded-md py-5 text-[1.125rem] font-semibold hover:no-underline **:data-[slot=accordion-trigger-icon]:size-5 **:data-[slot=accordion-trigger-icon]:text-current">
            {item.q}
          </AccordionTrigger>
          <AccordionContent className="pb-6 text-body text-current/80">
            <div className="measure space-y-3">
              {item.a.map((p) => (
                <p key={p}>{p}</p>
              ))}
            </div>
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
}
