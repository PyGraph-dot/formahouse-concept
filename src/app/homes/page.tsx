import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import { PropertyExplorer } from "@/components/PropertyExplorer";

export const metadata: Metadata = {
  title: "Find a home",
  description: "Explore the FORMA House residential concept collection and filter by location, bedrooms, status and price.",
};

export default function HomesPage() {
  return (
    <>
      <section className="page-hero page-hero--homes">
        <div className="page-hero-meta"><Link href="/" className="breadcrumb"><ArrowLeft size={13} /> HOME</Link><span>COLLECTION / 01—03</span></div>
        <div className="page-hero-content"><div><span className="eyebrow">THE FORMA COLLECTION</span><h1>Room for the<br /><em>life you live.</em></h1></div><div className="page-hero-description"><p>Not a catalogue of endless options. A considered collection of homes, each planned around how people actually live.</p><span className="page-hero-aside">THOUGHTFUL BY DESIGN<br />CLEAR BY DEFAULT</span></div></div>
        <div className="page-hero-bottom"><span>03 SAMPLE RESIDENCES</span><span><i /> LAGOS, NIGERIA</span><span>FILTER THE COLLECTION BELOW <ArrowUpRight size={13} /></span></div>
      </section>
      <section className="homes-explore-section section-pad">
        <PropertyExplorer />
      </section>
    </>
  );
}
