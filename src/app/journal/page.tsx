import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ArrowUpRight, Clock3 } from "lucide-react";
import { articles } from "@/lib/journal";

export const metadata: Metadata = {
  title: "Field notes",
  description: "Practical notes for people navigating a home purchase in Nigeria.",
};



export default function JournalPage() {
  return (
    <>
      <section className="page-hero page-hero--journal"><div className="page-hero-meta"><Link href="/" className="breadcrumb"><ArrowLeft size={13} /> HOME</Link><span>NOTES FOR THE HOMEBOUND</span></div><div className="page-hero-content"><div><span className="eyebrow">THE FORMA FIELD NOTES</span><h1>Know a little<br /><em>before you go.</em></h1></div><div className="page-hero-description"><p>Practical thoughts on buying well: the questions to ask, the details to notice and the costs to understand before you make a decision.</p><span className="page-hero-aside">GOOD QUESTIONS.<br />BETTER DECISIONS.</span></div></div><div className="page-hero-bottom"><span>NOTES / 001—003</span><span><i /> BUYER EDUCATION</span><span>TAKE WHAT HELPS <ArrowUpRight size={13}/></span></div></section>
      <section className="journal-listing section-pad"><div className="journal-listing-head"><span className="eyebrow">THE READING ROOM</span><p>Not legal or financial advice. Just a useful place to begin your own research.</p></div><div className="journal-grid">{articles.map((story, index) => <article className={`journal-card${index === 0 ? " journal-card--featured" : ""}`} key={story.slug}><Link href={`/journal/${story.slug}`} className="journal-card-image"><Image src={story.image} alt="Residential interior used to illustrate a home-buying guide" fill sizes="(max-width: 760px) 100vw, 50vw"/><span className="journal-card-number">{story.date.replace("FIELD NOTE / ", "NOTE ")}</span><span className="journal-card-arrow"><ArrowUpRight size={19}/></span></Link><div className="journal-card-content"><span className="eyebrow">{story.category}</span><h2><Link href={`/journal/${story.slug}`}>{story.title}</Link></h2><p>{story.excerpt}</p><div className="journal-card-footer"><span><Clock3 size={14}/> {story.time}</span><Link href={`/journal/${story.slug}`} className="text-link">Read note <ArrowUpRight size={14}/></Link></div></div></article>)}</div><div className="journal-disclaimer">FIELD NOTE  /  <span>Created as buyer-education content for a fictional portfolio website. Always obtain independent legal, valuation and financial advice for a real purchase.</span></div></section>
    </>
  );
}
