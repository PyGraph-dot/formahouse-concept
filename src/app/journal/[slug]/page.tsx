import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { articles } from "@/lib/journal";
import { ArrowLeft, ArrowUpRight, Check, Clock3 } from "lucide-react";

export function generateStaticParams() { return articles.map((article) => ({ slug: article.slug })); }

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const article = articles.find((item) => item.slug === slug);
  return { title: article?.title ?? "Field note", description: article?.excerpt };
}

export default async function ArticlePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const article = articles.find((item) => item.slug === slug);
  if (!article) notFound();
  return (
    <>
      <section className="article-top section-pad"><div className="article-breadcrumb-row"><Link href="/journal" className="breadcrumb"><ArrowLeft size={13}/> ALL FIELD NOTES</Link><span>{article.date}</span></div><div className="article-header"><span className="eyebrow">{article.category}</span><h1>{article.title}</h1><p>{article.excerpt}</p><span className="article-readtime"><Clock3 size={14}/> {article.time} <i/> BUYER EDUCATION</span></div><div className="article-hero-image"><Image src={article.image} alt="Residential interior used as editorial illustration for a home-buying guide" fill priority sizes="100vw"/><span className="article-image-caption">FORMA FIELD NOTES / VISUAL STUDY</span></div></section>
      <section className="article-body section-pad"><aside className="article-sidebar"><span className="eyebrow">IN THIS NOTE</span><ol>{article.sections.map((section, index) => <li key={section.heading}><a href={`#section-${index + 1}`}><span>0{index + 1}</span>{section.heading}</a></li>)}</ol><div className="article-sidebar-note"><span className="eyebrow">A USEFUL REMINDER</span><p>Take your time. Get independent advice. Keep the details in writing.</p><Link href="/approach#due-diligence" className="text-link">Our due-diligence guide <ArrowUpRight size={14}/></Link></div></aside><div className="article-content"><p className="article-lede">{article.intro}</p>{article.sections.map((section, index) => <section id={`section-${index + 1}`} className="article-section" key={section.heading}><span className="article-section-number">0{index + 1}</span><h2>{section.heading}</h2><p>{section.body}</p></section>)}<div className="article-checklist"><span className="eyebrow">TAKE THIS WITH YOU</span><h2>Your quick checklist.</h2>{article.checklist.map((item) => <div key={item}><Check size={16}/><span>{item}</span></div>)}</div><p className="article-legal-note">This article is general educational content for a fictional portfolio project, not legal, financial, valuation or property-specific advice. Obtain independent professional advice for a real transaction.</p><div className="article-next"><span className="eyebrow">KEEP LEARNING</span><h3>Better questions make better decisions.</h3><Link className="button button--dark" href="/journal">Explore all field notes <ArrowUpRight size={16}/></Link></div></div></section>
    </>
  );
}
