"use client";

import { useMemo, useState } from "react";
import { Search, SlidersHorizontal, X, Check, RotateCcw } from "lucide-react";
import { properties, type Property } from "@/lib/properties";
import { PropertyCard } from "@/components/PropertyCard";

export function PropertyExplorer() {
  const [query, setQuery] = useState("");
  const [area, setArea] = useState("All areas");
  const [bedrooms, setBedrooms] = useState("Any bedrooms");
  const [status, setStatus] = useState("Any status");
  const [maxPrice, setMaxPrice] = useState("No limit");
  const [filtersOpen, setFiltersOpen] = useState(false);

  const filtered = useMemo(() => properties.filter((property: Property) => {
    const matchesQuery = `${property.name} ${property.location} ${property.type}`.toLowerCase().includes(query.toLowerCase().trim());
    const matchesArea = area === "All areas" || property.area === area;
    const matchesBedrooms = bedrooms === "Any bedrooms" || property.bedrooms >= Number(bedrooms);
    const matchesStatus = status === "Any status" || property.status === status;
    const matchesPrice = maxPrice === "No limit" || property.price <= Number(maxPrice);
    return matchesQuery && matchesArea && matchesBedrooms && matchesStatus && matchesPrice;
  }), [query, area, bedrooms, status, maxPrice]);

  const reset = () => { setQuery(""); setArea("All areas"); setBedrooms("Any bedrooms"); setStatus("Any status"); setMaxPrice("No limit"); };

  return (
    <div className="explorer">
      <div className="explorer-search-row">
        <label className="search-field"><Search size={18} /><input value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Search by home or neighbourhood" aria-label="Search by home or neighbourhood" aria-describedby="property-search-help" /><span className="search-live-label" aria-hidden="true">LIVE</span><span id="property-search-help" className="visually-hidden">Results update as you type.</span></label>
        <button type="button" className={`filter-toggle${filtersOpen ? " is-active" : ""}`} aria-expanded={filtersOpen} aria-controls="property-filter-panel" onClick={() => setFiltersOpen(!filtersOpen)}><SlidersHorizontal size={16} /> Filters <span>{[area !== "All areas", bedrooms !== "Any bedrooms", status !== "Any status", maxPrice !== "No limit"].filter(Boolean).length || "＋"}</span></button>
      </div>
      <div id="property-filter-panel" className={`filter-panel${filtersOpen ? " filter-panel--open" : ""}`}>
        <label><span>LOCATION</span><select value={area} onChange={(event) => setArea(event.target.value)}><option>All areas</option><option>Ogudu</option><option>Lekki</option><option>Ikeja</option></select></label>
        <label><span>BEDROOMS</span><select value={bedrooms} onChange={(event) => setBedrooms(event.target.value)}><option>Any bedrooms</option><option value="2">2+ bedrooms</option><option value="3">3+ bedrooms</option><option value="4">4+ bedrooms</option></select></label>
        <label><span>AVAILABILITY</span><select value={status} onChange={(event) => setStatus(event.target.value)}><option>Any status</option><option>Ready to move in</option><option>In progress</option><option>Coming soon</option></select></label>
        <label><span>MAXIMUM PRICE</span><select value={maxPrice} onChange={(event) => setMaxPrice(event.target.value)}><option>No limit</option><option value="75000000">₦75m</option><option value="100000000">₦100m</option><option value="150000000">₦150m</option></select></label>
        <p className="filter-panel-hint">Results update immediately as you change these selections. Close the panel when you are finished.</p>
        <button type="button" className="reset-filters" onClick={reset}><RotateCcw size={14} /> Reset all</button>
        <button type="button" className="filter-done" aria-label={`Close filters. ${filtered.length} ${filtered.length === 1 ? "home matches" : "homes match"} your selections.`} onClick={() => setFiltersOpen(false)}>Done · {filtered.length} {filtered.length === 1 ? "home" : "homes"} <Check size={15} /></button>
        <button type="button" className="filter-close" onClick={() => setFiltersOpen(false)} aria-label="Close filters"><X size={16} /></button>
      </div>
      <div className="results-meta" aria-live="polite" aria-atomic="true"><p><strong>{filtered.length.toString().padStart(2, "0")}</strong> homes to explore</p><span>Illustrative portfolio listings <i /> Updated for this concept</span></div>
      {filtered.length > 0 ? <div className="property-grid property-grid--explorer">{filtered.map((property, index) => <PropertyCard key={property.slug} property={property} index={index} />)}</div> : <div className="empty-state"><span className="eyebrow">NOTHING IN THIS FRAME</span><h3>We haven’t found that combination.</h3><p>Try widening your budget or adjusting one of the filters.</p><button className="button button--dark" onClick={reset}>Clear filters <RotateCcw size={15} /></button></div>}
      <p className="data-note">All homes, prices, availability and development information on this page are fictional sample data created for a portfolio concept.</p>
    </div>
  );
}
