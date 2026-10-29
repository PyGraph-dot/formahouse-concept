import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, ArrowUpRight, CalendarDays, CheckCircle2, Clock3, MapPin } from "lucide-react";
import { VisitRequestForm } from "@/components/VisitRequestForm";
import { propertyBySlug } from "@/lib/properties";

export const metadata: Metadata = {
  title: "Plan a visit",
  description: "Create a sample property viewing request in the FORMA House concept experience.",
};

export default async function VisitPage({ searchParams }: { searchParams: Promise<{ property?: string }> }) {
  const { property: propertySlug } = await searchParams;
  const selected = propertySlug ? propertyBySlug(propertySlug)?.name : undefined;
  return (
    <>
      <section className="visit-page-head"><div className="page-hero-meta"><Link href="/homes" className="breadcrumb"><ArrowLeft size={13}/> BACK TO HOMES</Link><span>YOUR NEXT STEP / 01</span></div><div className="visit-head-grid"><div><span className="eyebrow">A CONVERSATION, NOT A COMMITMENT</span><h1>See it for<br /><em>yourself.</em></h1></div><div className="visit-head-copy"><p>A little more detail. A closer look. A chance to ask the questions that matter to you. Start with a visit that works for your schedule.</p><div className="visit-trust-line"><span><CalendarDays size={16}/> By appointment</span><span><Clock3 size={16}/> Your own pace</span><span><MapPin size={16}/> Lagos concept</span></div></div></div></section>
      <section className="visit-main section-pad"><div className="visit-aside"><div className="visit-aside-numeral">01<span>/</span>04</div><h2>What happens<br />after this?</h2><div className="visit-steps"><div className="is-current"><span>01</span><div><strong>Share your interest</strong><p>Tell us what you're looking for.</p></div><CheckCircle2 size={16}/></div><div><span>02</span><div><strong>Choose a conversation</strong><p>In person, virtually or by phone.</p></div></div><div><span>03</span><div><strong>Get the details</strong><p>Talk through the home and your questions.</p></div></div><div><span>04</span><div><strong>Decide what feels right</strong><p>No obligation to take the next step.</p></div></div></div><div className="visit-aside-foot"><span className="eyebrow">A NOTE ON TRUST</span><p>For a real purchase, independently check ownership, approvals, costs and contract terms before paying.</p><Link href="/approach#due-diligence" className="text-link">Read the checklist <ArrowUpRight size={14}/></Link></div></div><div className="visit-form-wrap"><VisitRequestForm initialProperty={selected || "Any home"}/><p className="form-data-note">CONCEPT DEMO / THIS FORM DOES NOT SAVE OR SEND PERSONAL INFORMATION.</p></div></section>
    </>
  );
}
