import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import type { Faq } from "@/content/faq";

export function FaqList({ items }: { items: Faq[] }) {
  return (
    <Accordion className="border-t border-current/15">
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
