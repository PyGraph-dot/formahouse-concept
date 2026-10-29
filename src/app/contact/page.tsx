import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, ArrowUpRight, Mail, MessageCircle, MapPin, Clock3 } from "lucide-react";
import { ContactForm } from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Contact",
  description: "Ask a question about the FORMA House fictional residential property concept.",
};

export default function ContactPage() {
  return (
    <>
      <section className="contact-page-head"><div className="page-hero-meta"><Link href="/" className="breadcrumb"><ArrowLeft size={13}/> HOME</Link><span>START A CONVERSATION</span></div><div className="contact-head-grid"><div><span className="eyebrow">NO QUESTION TOO SMALL</span><h1>Let's talk<br /><em>it through.</em></h1></div><p>Sometimes you need a detail before you can make a decision. Send a question, ask about a home or tell us what you're looking for.</p></div></section>
      <section className="contact-main section-pad"><div className="contact-info"><span className="eyebrow">A MORE HUMAN WAY TO START</span><h2>Helpful answers.<br /><em>Without the hard sell.</em></h2><p>Choose the conversation that works for you. We can discuss a home, walk through the buying process or help you work out what to look at next.</p><div className="contact-method"><span><Mail size={17}/></span><div><strong>Write to the team</strong><p>Use the message form and choose the subject that fits your question.</p></div></div><div className="contact-method"><span><MessageCircle size={17}/></span><div><strong>Book a conversation</strong><p>Pick an introductory call, a virtual walkthrough or an in-person visit.</p><Link href="/visit" className="text-link">Plan a visit <ArrowUpRight size={14}/></Link></div></div><div className="contact-method"><span><MapPin size={17}/></span><div><strong>Location</strong><p>Lagos, Nigeria<br/>By appointment in this concept experience.</p></div></div><div className="contact-hours"><Clock3 size={15}/><span>CONCEPT RESPONSE HOURS</span><strong>Monday–Friday / 9:00–17:00</strong><small>Illustrative service detail only — no live team is attached to this project.</small></div></div><div className="contact-form-side"><div className="contact-form-top"><span className="eyebrow">SEND A QUESTION</span><span>FORM / 01</span></div><ContactForm/><p className="form-data-note">DEMO MODE / YOUR MESSAGE IS NOT SAVED OR SENT.</p></div></section>
      <section className="contact-end"><span className="eyebrow eyebrow--light">STILL FIGURING IT OUT?</span><h2>Start with what<br /><em>you need to know.</em></h2><Link href="/journal" className="button button--paper">Browse field notes <ArrowUpRight size={16}/></Link></section>
    </>
  );
}
