import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowDown, ArrowLeft, ArrowUpRight, Bath, BedDouble, Check, MapPin, Maximize2, ParkingCircle, ShieldCheck } from "lucide-react";
import { PaymentCalculator } from "@/components/PaymentCalculator";
import { FloorPlan } from "@/components/FloorPlan";
import { properties, propertyBySlug, formatNaira } from "@/lib/properties";

export function generateStaticParams() {
  return properties.map((property) => ({ slug: property.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const property = propertyBySlug(slug);
  if (!property) return { title: "Home not found" };
  return { title: property.name, description: property.summary };
}

export default async function PropertyDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const property = propertyBySlug(slug);
  if (!property) notFound();
  const imageAlt = `${property.name} residential architecture concept image`;

  return (
    <>
      <div className="detail-topbar"><Link href="/homes" className="breadcrumb"><ArrowLeft size={13} /> ALL HOMES</Link><span>{property.code} <i /> FICTIONAL LISTING CONCEPT</span></div>
      <section className="property-detail-hero">
        <div className="detail-heading"><div><span className="eyebrow">{property.collection}</span><h1>{property.name}<span className="detail-location"><MapPin size={15} /> {property.location}</span></h1></div><div className="detail-heading-right"><span className={`status-pill status-pill--${property.status === "Ready to move in" ? "ready" : property.status === "In progress" ? "progress" : "soon"}`}>{property.status}</span><strong>{formatNaira(property.price)}</strong><span className="detail-price-note">Illustrative concept price</span></div></div>
        <div className="detail-gallery"><div className="detail-gallery-main"><Image src={property.gallery[0]} alt={imageAlt} fill priority sizes="(max-width: 760px) 100vw, 66vw" /><span className="gallery-label">01 / EXTERIOR STUDY</span></div><div className="detail-gallery-side"><div><Image src={property.gallery[1]} alt={`${property.name} interior concept`} fill sizes="(max-width: 760px) 100vw, 33vw" /><span className="gallery-label">02 / MATERIAL & LIGHT</span></div><div><Image src={property.gallery[2]} alt={`${property.name} residential detail concept`} fill sizes="(max-width: 760px) 100vw, 33vw" /><span className="gallery-label">03 / EVERYDAY LIVING</span></div></div></div>
        <div className="detail-quickfacts"><div><BedDouble size={17} /><span><strong>{property.bedrooms}</strong> bedrooms</span></div><div><Bath size={17} /><span><strong>{property.bathrooms}</strong> bathrooms</span></div><div><Maximize2 size={16} /><span><strong>{property.size}</strong> internal area</span></div><div><ParkingCircle size={17} /><span><strong>{property.parking}</strong> parking spaces</span></div><Link href={`/visit?property=${property.slug}`} className="quickfact-cta">Arrange a visit <ArrowUpRight size={15} /></Link></div>
      </section>

      <section className="detail-body section-pad">
        <div className="detail-main-column"><div className="detail-intro-block"><span className="eyebrow">THE IDEA BEHIND THE HOME</span><h2>{property.summary}</h2><p>{property.description}</p><p>Every detail shown here is part of a fictional design exercise. In a live purchase, specifications, title documentation, approvals and completion dates should be independently reviewed before any commitment.</p></div>
          <div className="detail-features-block"><div className="detail-block-heading"><span className="eyebrow">DESIGNED FOR EVERYDAY LIFE</span><span className="detail-block-number">02 / DETAILS</span></div><h3>The things that make a home work.</h3><div className="feature-list">{property.features.map((feature) => <div key={feature}><Check size={16} /><span>{feature}</span></div>)}</div></div>
          <div className="location-block"><div className="detail-block-heading"><span className="eyebrow">LOCATION / {property.area.toUpperCase()}</span><span className="detail-block-number">03 / PLACE</span></div><div className="location-visual"><Image src="https://images.unsplash.com/photo-1511818966892-d7d671e672a2?auto=format&fit=crop&w=1300&q=85" alt="Modern urban architecture used as an illustrative neighbourhood visual" fill sizes="(max-width: 760px) 100vw, 58vw" /><span className="location-image-note">LOCATION STUDY / FORMA HOUSE</span></div><h3>A neighbourhood is part of the floor plan.</h3><p>Explore the real-world street, travel routes, utilities, drainage and everyday amenities before you decide. This concept does not represent a verified site address or actual development.</p><Link className="text-link" href="/approach#due-diligence">What to check before buying <ArrowUpRight size={14} /></Link></div>
          <FloorPlan property={property} />
          <section className="buyer-clarity-block" aria-labelledby="buyer-clarity-title">
            <div className="detail-block-heading"><span className="eyebrow">BEFORE YOU COMMIT</span><span className="detail-block-number">05 / DILIGENCE</span></div>
            <h3 id="buyer-clarity-title">Know what still needs an answer.</h3>
            <p className="buyer-clarity-intro">A clear listing should show what is known, what is assumed and what a buyer still needs to verify. Only the sample property price is set in this concept.</p>
            <div className="buyer-clarity-grid">
              <div className="cost-panel">
                <h4>Costs to confirm in writing</h4>
                <table className="cost-table">
                  <caption>Illustrative purchase-cost worksheet</caption>
                  <tbody>
                    <tr><th scope="row">Sample property price</th><td><strong>{formatNaira(property.price)}</strong><span>Concept data</span></td></tr>
                    <tr><th scope="row">Legal / conveyancing fees</th><td><strong>Not supplied</strong><span>Ask for a written quote</span></td></tr>
                    <tr><th scope="row">Title, registration and statutory charges</th><td><strong>Not supplied</strong><span>Verify applicability and amount</span></td></tr>
                    <tr><th scope="row">Estate service and maintenance charges</th><td><strong>Not supplied</strong><span>Request the current schedule</span></td></tr>
                    <tr><th scope="row">Utility connections and finishing</th><td><strong>Not supplied</strong><span>Confirm inclusions and exclusions</span></td></tr>
                  </tbody>
                </table>
              </div>
              <div className="document-panel">
                <h4>Documents to request</h4>
                <ul className="document-checklist">
                  <li><span>01</span><div><strong>Title / root of title</strong><p>Ask what document supports ownership and obtain an independent review.</p></div></li>
                  <li><span>02</span><div><strong>Survey plan and site details</strong><p>Check boundaries, coordinates and consistency with the actual land.</p></div></li>
                  <li><span>03</span><div><strong>Planning and building approvals</strong><p>Request applicable approvals and have them checked independently.</p></div></li>
                  <li><span>04</span><div><strong>Sales agreement and payment schedule</strong><p>Understand default, refund, completion and handover terms before signing.</p></div></li>
                </ul>
                <p className="document-status-note"><ShieldCheck size={15} /> No documents are supplied or verified in this fictional portfolio concept.</p>
              </div>
            </div>
          </section>
        </div>
        <aside className="detail-aside"><div className="detail-aside-card"><span className="eyebrow">A CLEARER NEXT STEP</span><h3>Curious about<br />this home?</h3><p>Ask for more detail, discuss the layout or arrange a guided viewing in this concept journey.</p><Link className="button button--dark button--full" href={`/visit?property=${property.slug}`}>Plan a visit <ArrowUpRight size={16} /></Link><Link className="detail-aside-secondary" href="/contact">Ask a question first <ArrowUpRight size={14} /></Link><div className="aside-divider"/><div className="aside-check"><ShieldCheck size={18} /><p><strong>Clear before commitment.</strong><br />Review costs and documentation before making a decision.</p></div></div><div className="detail-mini-facts"><span>HOME CODE <strong>{property.code}</strong></span><span>SIZE <strong>{property.size}</strong></span><span>COMPLETION NOTE <strong>{property.completion}</strong></span><span>PRICE BASIS <strong>Illustrative sample</strong></span></div></aside>
      </section>

      <section className="calculator-section section-pad"><div className="calculator-section-copy"><span className="eyebrow">06 / PLAN THE NUMBERS</span><h2>Get a feel for<br /><em>the commitment.</em></h2><p>Change the deposit and duration to see an example of how the remaining balance could be split. The estimate is a conversation starter, not a financing offer.</p><div className="calculator-small-note"><ArrowDown size={15} /> Your numbers update as you adjust the controls.</div></div><PaymentCalculator property={property} /></section>

      <section className="detail-next-step"><div><span className="eyebrow eyebrow--light">KEEP EXPLORING</span><h2>The right home<br /><em>starts with a question.</em></h2></div><div className="detail-next-actions"><Link className="button button--paper" href={`/visit?property=${property.slug}`}>Arrange a visit <ArrowUpRight size={16} /></Link><Link className="closing-text-link" href="/homes">Explore other homes <ArrowUpRight size={15} /></Link></div></section>
    </>
  );
}
