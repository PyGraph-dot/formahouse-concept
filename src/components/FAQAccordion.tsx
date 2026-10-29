"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

export type FAQ = { question: string; answer: string };

export function FAQAccordion({ items }: { items: FAQ[] }) {
  const [active, setActive] = useState<number | null>(0);
  return (
    <div className="faq-list">
      {items.map((item, index) => {
        const isOpen = active === index;
        return <article className={`faq-item${isOpen ? " is-open" : ""}`} key={item.question}>
          <button id={`faq-trigger-${index}`} type="button" aria-expanded={isOpen} aria-controls={`faq-answer-${index}`} onClick={() => setActive(isOpen ? null : index)}><span className="faq-number">0{index + 1}</span><span className="faq-question">{item.question}</span><ChevronDown size={19} className="faq-chevron" /></button>
          {isOpen && <div className="faq-answer" id={`faq-answer-${index}`} role="region" aria-labelledby={`faq-trigger-${index}`}><p>{item.answer}</p></div>}
        </article>;
      })}
    </div>
  );
}
