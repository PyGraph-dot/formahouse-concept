import type { ReactNode } from "react";

export function SectionHeading({ eyebrow, title, copy, number, light = false, className = "" }: { eyebrow: string; title: ReactNode; copy?: string; number?: string; light?: boolean; className?: string }) {
  return (
    <div className={`section-heading${light ? " section-heading--light" : ""} ${className}`}>
      <div className="section-heading-main"><span className="eyebrow">{eyebrow}</span><h2>{title}</h2></div>
      {copy && <p>{copy}</p>}
      {number && <span className="section-number">{number}</span>}
    </div>
  );
}
