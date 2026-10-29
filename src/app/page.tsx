import Image from "next/image";
import Link from "next/link";
import { ArrowDownRight, ArrowUpRight, Check, Compass, Ruler, ShieldCheck, Sparkles } from "lucide-react";
import { PropertyCard } from "@/components/PropertyCard";
import { SectionHeading } from "@/components/SectionHeading";
import { properties } from "@/lib/properties";

const img = (id: string, width = 1600) => `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${width}&q=86`;

export default function HomePage() {
  return (
    <>
      <section className="home-hero">
        <div className="home-hero-copy">
          <div className="hero-kicker"><span className="eyebrow">INDEPENDENT RESIDENTIAL DEVELOPER</span><span className="kicker-rule" /></div>
          <h1>A home should<br />make <em>more sense.</em></h1>
          <p className="hero-description">Thoughtful spaces, honest information and a buying process that lets you make the decision in your own time.</p>
          <div className="hero-actions"><Link href="/homes" className="button button--dark">Find your home <ArrowUpRight size={16} /></Link><Link className="underlined-link" href="/approach">Why we do things differently <ArrowDownRight size={15} /></Link></div>
          <div className="hero-note"><span className="hero-note-mark">01</span><p>More than a floor plan.<br /><strong>A place to make a life.</strong></p></div>
        </div>
        <div className="home-hero-visual">
          <div className="hero-image-frame"><Image src={img("photo-1600585154340-be6161a56a0c", 2000)} alt="Contemporary warm-toned home with an inviting garden, used as architectural concept imagery" fill priority sizes="(max-width: 760px) 100vw, 57vw" /></div>
          <div className="hero-image-label"><span>THE FORMA POINT OF VIEW</span><span>06°35' N / 03°23' E</span></div>
          <div className="hero-image-caption"><span className="caption-index">FH / 001</span><div><strong>Considered from the outside in.</strong><span>Architecture for everyday living.</span></div><ArrowUpRight size={19} /></div>
          <div className="hero-vertical-note">A MORE CONSIDERED WAY HOME</div>
        </div>
        <div className="hero-bottom-line"><span>GOOD HOMES. THOUGHT THROUGH.</span><span><i /> RESIDENTIAL / LAGOS</span><Link href="/homes">Explore the collection <ArrowUpRight size={13} /></Link></div>
      </section>

      <section className="belief-strip" aria-label="Our principles">
        <div className="belief-intro"><span className="eyebrow">A SIMPLE BELIEF</span><p>The best kind of premium is the kind you <em>feel every day.</em></p></div>
        <div className="belief-item"><span>01</span><Compass size={19} strokeWidth={1.5} /><div><strong>Right where you need to be</strong><p>Useful locations, chosen with daily life in mind.</p></div></div>
        <div className="belief-item"><span>02</span><Ruler size={19} strokeWidth={1.5} /><div><strong>Space that works harder</strong><p>Considered layouts, not just bigger numbers.</p></div></div>
        <div className="belief-item"><span>03</span><ShieldCheck size={19} strokeWidth={1.5} /><div><strong>Clarity at every step</strong><p>Answers before pressure. Detail before decisions.</p></div></div>
      </section>

      <section className="featured-section section-pad">
        <div className="section-topline"><span className="eyebrow">A SMALL, CONSIDERED COLLECTION</span><span className="section-aside">01 — 03 / CURRENT CONCEPTS</span></div>
        <SectionHeading eyebrow="FIND YOUR PLACE" title={<>A few good places<br /><em>to begin.</em></>} copy="Different ways to live, with the same care for the details. Explore the collection and find the home that fits the life you're building." number="01" />
        <div className="property-grid property-grid--home">{properties.slice(0, 2).map((property, index) => <PropertyCard key={property.slug} property={property} index={index} />)}</div>
        <div className="featured-bottom"><span className="subtle-note"><i /> Three thoughtfully imagined homes in the current collection</span><Link className="button button--outline" href="/homes">Explore all homes <ArrowUpRight size={16} /></Link></div>
      </section>

      <section className="process-section">
        <div className="process-image"><Image src={img("photo-1600607687939-ce8a6c25118c", 1500)} alt="Quiet contemporary interior with natural light and warm materials" fill sizes="(max-width: 760px) 100vw, 50vw" /><div className="image-corner-note"><span>DETAIL / 02</span><span>LIGHT, SPACE, FLOW.</span></div></div>
        <div className="process-copy"><span className="eyebrow eyebrow--light">BUYING A HOME SHOULD FEEL CLEAR</span><h2>Good decisions<br />start with <em>good information.</em></h2><p>Buying a home is a big decision. We believe the process should give you room to think, space to ask, and a clear view of what happens next.</p><div className="process-steps"><div><span>01</span><div><strong>Get to know the home</strong><p>Explore layouts, specifications, costs and the neighbourhood.</p></div></div><div><span>02</span><div><strong>Ask every question</strong><p>Understand the paperwork, process and payment options.</p></div></div><div><span>03</span><div><strong>See it in your own time</strong><p>Arrange a visit or a guided virtual walkthrough.</p></div></div></div><Link className="button button--paper" href="/approach">See how we work <ArrowUpRight size={16} /></Link></div>
      </section>

      <section className="difference-section section-pad">
        <div className="difference-top"><span className="eyebrow">BUILT AROUND THE HUMAN SIDE OF HOME</span><span className="difference-index">02 / THE DETAILS MATTER</span></div>
        <div className="difference-layout"><div className="difference-heading"><h2>Not more noise.<br /><em>More clarity.</em></h2><p>Property marketing can make everything sound perfect. We would rather help you understand what is right for you — and what you need to know before deciding.</p><Link className="underlined-link" href="/approach">Explore our approach <ArrowUpRight size={15} /></Link></div>
          <div className="difference-list"><div><span>01</span><div><strong>Real detail, not vague promises.</strong><p>Clear specifications, practical layouts and an honest description of what's included.</p></div><Check size={17} /></div><div><span>02</span><div><strong>Costs you can actually understand.</strong><p>Illustrative payment scenarios show how the numbers fit together — with assumptions made visible.</p></div><Check size={17} /></div><div><span>03</span><div><strong>A process that respects your pace.</strong><p>Ask a question, request documents or book a visit. No pressure to commit before you're ready.</p></div><Check size={17} /></div><div><span>04</span><div><strong>Help for the details after the viewing.</strong><p>Know what to ask, what to verify and which next steps deserve attention.</p></div><Check size={17} /></div></div>
        </div>
      </section>

      <section className="fieldnotes-section">
        <div className="fieldnotes-image"><Image src={img("photo-1600566753086-00f18fb6b3ea", 1200)} alt="Warm, practical modern kitchen with natural materials" fill sizes="(max-width: 760px) 100vw, 43vw" /><span className="fieldnotes-stamp">THE FIELD NOTES<br />BY FORMA HOUSE</span></div>
        <div className="fieldnotes-copy"><span className="eyebrow">A LITTLE MORE KNOW-HOW</span><h2>Make the move<br />with <em>your eyes open.</em></h2><p>Useful questions to ask, details to look for, and guides to help you feel more prepared before you make a big decision.</p><div className="journal-teaser"><span className="journal-number">NOTE 001</span><div><span className="eyebrow">THE BUYER'S CHECKLIST</span><h3>Before you fall in love with the photos.</h3><p>A practical first pass at the things worth checking before you pay a deposit.</p><Link href="/journal/before-you-fall-for-the-photos" className="text-link">Read the note <ArrowUpRight size={14} /></Link></div></div><Link className="underlined-link fieldnotes-all" href="/journal">All field notes <ArrowUpRight size={15} /></Link></div>
      </section>

      <section className="closing-cta"><div className="closing-cta-top"><span className="eyebrow eyebrow--light">WHENEVER YOU'RE READY</span><span className="closing-mark"><Sparkles size={18} /></span></div><h2>Start with a question.<br /><em>Not a commitment.</em></h2><p>Tell us what matters to you. We’ll help you find a useful next step, even if that simply means getting more information.</p><div className="closing-actions"><Link href="/visit" className="button button--paper">Plan a visit <ArrowUpRight size={16} /></Link><Link href="/contact" className="closing-text-link">Talk to the team <ArrowUpRight size={15} /></Link></div><span className="closing-index">FH / YOUR NEXT CHAPTER</span></section>
    </>
  );
}
