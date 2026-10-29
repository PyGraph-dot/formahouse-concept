import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, BedDouble, MoveUpRight, Ruler } from "lucide-react";
import type { Property } from "@/lib/properties";
import { compactNaira } from "@/lib/properties";

export function PropertyCard({ property, index = 0, variant = "default" }: { property: Property; index?: number; variant?: "default" | "wide" }) {
  return (
    <article className={`property-card property-card--${variant}`}>
      <Link href={`/homes/${property.slug}`} className="property-card-image" aria-label={`Explore ${property.name}`}>
        <Image src={property.image} alt={`${property.name} residential concept exterior`} fill sizes={variant === "wide" ? "(max-width: 760px) 100vw, 60vw" : "(max-width: 760px) 100vw, 38vw"} />
        <span className="property-index">0{index + 1} <i /> {property.code}</span>
        <span className={`status-pill status-pill--${property.status === "Ready to move in" ? "ready" : property.status === "In progress" ? "progress" : "soon"}`}>{property.status}</span>
        <span className="image-arrow"><ArrowUpRight size={19} strokeWidth={1.6} /></span>
      </Link>
      <div className="property-card-body">
        <div className="property-card-heading"><div><span className="eyebrow">{property.collection}</span><h3><Link href={`/homes/${property.slug}`}>{property.name}</Link></h3><p className="property-location">{property.location}</p></div><strong className="property-price">{compactNaira(property.price)}</strong></div>
        <p className="property-summary">{property.summary}</p>
        <div className="property-meta"><span><BedDouble size={15} /> {property.bedrooms} beds</span><span><Ruler size={15} /> {property.size}</span><span>{property.type}</span><Link href={`/homes/${property.slug}`} className="text-link">View home <MoveUpRight size={14} /></Link></div>
      </div>
    </article>
  );
}
