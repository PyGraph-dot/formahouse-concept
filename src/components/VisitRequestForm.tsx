"use client";

import { FormEvent, useEffect, useRef, useState } from "react";
import { ArrowUpRight, CheckCircle2, ShieldCheck } from "lucide-react";
import { properties } from "@/lib/properties";

type RequestSummary = { property: string; visitType: string; date: string };

export function VisitRequestForm({ initialProperty = "Any home" }: { initialProperty?: string }) {
  const [submitted, setSubmitted] = useState(false);
  const [request, setRequest] = useState<RequestSummary | null>(null);
  const [minVisitDate, setMinVisitDate] = useState<string | undefined>(undefined);
  const successRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Compute the local calendar date after hydration to avoid UTC/local-date
    // differences producing a server/client attribute mismatch around midnight.
    const localToday = new Date();
    localToday.setMinutes(localToday.getMinutes() - localToday.getTimezoneOffset());
    setMinVisitDate(localToday.toISOString().slice(0, 10));
  }, []);

  useEffect(() => {
    if (submitted) successRef.current?.focus();
  }, [submitted]);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    const summary: RequestSummary = {
      property: String(form.get("property") || "Any home"),
      visitType: String(form.get("visitType") || "In-person visit"),
      date: String(form.get("date") || "Flexible"),
    };
    // Portfolio demo only: retain only the small, non-contact summary needed
    // for the confirmation view. Do not persist or transmit form data.
    setRequest(summary);
    setSubmitted(true);
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    window.scrollTo({ top: 0, behavior: reduceMotion ? "auto" : "smooth" });
  }

  if (submitted && request) return <div ref={successRef} className="form-success" role="status" tabIndex={-1}><span className="success-icon"><CheckCircle2 size={28} /></span><span className="eyebrow">DEMO REQUEST CREATED</span><h2>Your visit request is prepared.</h2><p>This confirmation demonstrates the booking flow only. Your details are not saved or sent to a real sales team.</p><div className="success-summary"><span>HOME OF INTEREST<strong>{request.property}</strong></span><span>PREFERRED VISIT<strong>{request.visitType}</strong></span><span>DATE<strong>{request.date || "Flexible"}</strong></span></div><button type="button" className="button button--dark" onClick={() => { setSubmitted(false); setRequest(null); }}>Create another request <ArrowUpRight size={16} /></button></div>;

  return <form className="visit-form" onSubmit={handleSubmit}>
    <div className="form-intro"><span className="form-step">01 / YOUR DETAILS</span><p>A few details help us prepare a useful first conversation. Fields marked * are required.</p></div>
    <div className="form-grid">
      <label className="field"><span>YOUR FULL NAME <b>*</b></span><input name="name" autoComplete="name" placeholder="e.g. Tolu Adeyemi" required minLength={2} /></label>
      <label className="field"><span>EMAIL ADDRESS <b>*</b></span><input name="email" type="email" autoComplete="email" placeholder="you@example.com" required /></label>
      <label className="field"><span>PHONE / WHATSAPP <b>*</b></span><input name="phone" type="tel" autoComplete="tel" placeholder="+234 ..." required minLength={7} /></label>
      <label className="field"><span>HOME YOU'RE EXPLORING</span><select name="property" defaultValue={initialProperty}><option>Any home</option>{properties.map((property) => <option key={property.slug}>{property.name}</option>)}</select></label>
      <label className="field"><span>HOW WOULD YOU LIKE TO VISIT?</span><select name="visitType" defaultValue="In-person visit"><option>In-person visit</option><option>Video walkthrough</option><option>Introductory call</option></select></label>
      <label className="field"><span>YOUR PREFERRED DATE</span><input name="date" type="date" min={minVisitDate} /></label>
      <label className="field field--full"><span>ANYTHING WE SHOULD KNOW? <i>OPTIONAL</i></span><textarea name="note" rows={3} placeholder="Your questions, preferred area, or a little about what home means to you." /></label>
    </div>
    <div className="form-submit-row"><p><ShieldCheck size={16} /> Portfolio demo only. Your details are used to show the confirmation state and are not saved or transmitted.</p><button className="button button--dark" type="submit">Prepare my visit <ArrowUpRight size={16} /></button></div>
  </form>;
}
