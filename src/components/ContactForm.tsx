"use client";

import { FormEvent, useEffect, useRef, useState } from "react";
import { ArrowUpRight, CheckCircle2 } from "lucide-react";

export function ContactForm() {
  const [sent, setSent] = useState(false);
  const successRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (sent) successRef.current?.focus();
  }, [sent]);

  function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    // This portfolio prototype intentionally does not persist or transmit contact data.
    // The confirmation state demonstrates the intended interaction only.
    setSent(true);
  }
  if (sent) return <div ref={successRef} className="contact-success" role="status" tabIndex={-1}><CheckCircle2 size={24} /><h3>Thanks for trying the demo.</h3><p>This interaction is illustrative only. No message was saved or sent to a real team.</p><button type="button" className="text-link" onClick={() => setSent(false)}>Try the form again <ArrowUpRight size={14} /></button></div>;
  return <form className="contact-form" onSubmit={submit}>
    <label className="field"><span>YOUR NAME *</span><input name="name" autoComplete="name" required placeholder="Name" /></label>
    <label className="field"><span>EMAIL ADDRESS *</span><input name="email" type="email" autoComplete="email" required placeholder="you@example.com" /></label>
    <label className="field"><span>WHAT CAN WE HELP WITH?</span><select name="topic" defaultValue="Buying a home"><option>Buying a home</option><option>Property information</option><option>Partnership enquiry</option><option>Something else</option></select></label>
    <label className="field"><span>YOUR MESSAGE *</span><textarea name="message" rows={5} required placeholder="Tell us a little about what you have in mind." /></label>
    <button type="submit" className="button button--dark">Prepare message <ArrowUpRight size={16} /></button>
  </form>;
}
