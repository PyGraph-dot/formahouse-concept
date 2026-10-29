import type { Property } from "@/lib/properties";

type Room = { x: number; y: number; width: number; height: number; label: string; tone?: "living" | "private" | "service" | "circulation" };

type PlanLayout = { note: string; rooms: Room[] };

const plans: Record<2 | 3 | 4, PlanLayout> = {
  2: {
    note: "A compact apartment concept with shared living space and two separated bedrooms.",
    rooms: [
      { x: 44, y: 42, width: 360, height: 188, label: "LIVING / DINING", tone: "living" },
      { x: 404, y: 42, width: 270, height: 188, label: "BEDROOM 01", tone: "private" },
      { x: 44, y: 230, width: 184, height: 183, label: "KITCHEN", tone: "service" },
      { x: 228, y: 325, width: 92, height: 88, label: "BATH", tone: "service" },
      { x: 320, y: 325, width: 84, height: 88, label: "STORE", tone: "service" },
      { x: 228, y: 230, width: 176, height: 95, label: "ENTRY / HALL", tone: "circulation" },
      { x: 404, y: 230, width: 270, height: 183, label: "BEDROOM 02", tone: "private" },
    ],
  },
  3: {
    note: "A townhouse concept with a larger shared zone and a quieter bedroom wing.",
    rooms: [
      { x: 44, y: 42, width: 360, height: 190, label: "LIVING / DINING", tone: "living" },
      { x: 404, y: 42, width: 270, height: 130, label: "BEDROOM 01", tone: "private" },
      { x: 404, y: 172, width: 270, height: 123, label: "BEDROOM 02", tone: "private" },
      { x: 404, y: 295, width: 270, height: 118, label: "BEDROOM 03", tone: "private" },
      { x: 44, y: 232, width: 180, height: 181, label: "KITCHEN", tone: "service" },
      { x: 224, y: 325, width: 90, height: 88, label: "BATH", tone: "service" },
      { x: 314, y: 325, width: 90, height: 88, label: "STORE", tone: "service" },
      { x: 224, y: 232, width: 180, height: 93, label: "HALL / STORE", tone: "circulation" },
    ],
  },
  4: {
    note: "A larger household concept with a generous living zone and four private rooms.",
    rooms: [
      { x: 44, y: 42, width: 301, height: 183, label: "LIVING / DINING", tone: "living" },
      { x: 345, y: 42, width: 329, height: 125, label: "BEDROOM 01", tone: "private" },
      { x: 345, y: 167, width: 329, height: 123, label: "BEDROOM 02", tone: "private" },
      { x: 345, y: 290, width: 164, height: 123, label: "BEDROOM 03", tone: "private" },
      { x: 509, y: 290, width: 165, height: 123, label: "BEDROOM 04", tone: "private" },
      { x: 44, y: 225, width: 170, height: 188, label: "KITCHEN", tone: "service" },
      { x: 214, y: 225, width: 131, height: 100, label: "FAMILY", tone: "living" },
      { x: 214, y: 325, width: 131, height: 88, label: "UTILITY", tone: "service" },
    ],
  },
};

const toneFill: Record<NonNullable<Room["tone"]>, string> = {
  living: "#e8e1d4",
  private: "#dfe5d9",
  service: "#eee9df",
  circulation: "#f8f6f0",
};

export function FloorPlan({ property }: { property: Pick<Property, "name" | "bedrooms" | "type" | "size"> }) {
  const bedroomCount: 2 | 3 | 4 = property.bedrooms >= 4 ? 4 : property.bedrooms >= 3 ? 3 : 2;
  const plan = plans[bedroomCount];

  return (
    <section className="floor-plan-section" aria-labelledby="floor-plan-title">
      <div className="detail-block-heading">
        <span className="eyebrow">LAYOUT STUDY / {String(bedroomCount).padStart(2, "0")} BEDROOMS</span>
        <span className="detail-block-number">04 / SPACE</span>
      </div>
      <div className="floor-plan-heading">
        <div>
          <h3 id="floor-plan-title">See how the space could work.</h3>
          <p>{plan.note}</p>
        </div>
        <span className="floor-plan-area">{property.size}<small>stated concept area</small></span>
      </div>
      <div className="floor-plan-panel">
        <p className="floor-plan-mobile-hint">Swipe horizontally to inspect the schematic.</p>
        <svg className="floor-plan-svg" viewBox="0 0 720 455" role="img" aria-labelledby="plan-svg-title plan-svg-desc">
          <title id="plan-svg-title">Illustrative {bedroomCount}-bedroom {property.type.toLowerCase()} layout for {property.name}</title>
          <desc id="plan-svg-desc">A schematic drawing showing labelled living, bedroom, kitchen, bathroom and circulation zones. It is not a measured architectural plan.</desc>
          <rect x="30" y="28" width="658" height="400" fill="#fbfaf6" stroke="#c8c7ba" strokeWidth="1" strokeDasharray="4 6" />
          {plan.rooms.map((room) => (
            <g key={`${room.x}-${room.y}-${room.label}`}>
              <rect x={room.x} y={room.y} width={room.width} height={room.height} fill={toneFill[room.tone ?? "circulation"]} stroke="#30392f" strokeWidth="3" />
              <text x={room.x + room.width / 2} y={room.y + room.height / 2 - 1} textAnchor="middle" dominantBaseline="middle" className="floor-plan-room-label">
                {room.label}
              </text>
              <text x={room.x + room.width / 2} y={room.y + room.height / 2 + 18} textAnchor="middle" className="floor-plan-room-note">
                {room.width >= 250 ? "PRIMARY ZONE" : room.width < 120 ? "SERVICE" : "CONCEPT ZONE"}
              </text>
            </g>
          ))}
          <path d="M 44 42 L 88 42 M 44 42 L 44 82 M 674 42 L 630 42 M 674 42 L 674 82 M 44 413 L 88 413 M 44 413 L 44 373 M 674 413 L 630 413 M 674 413 L 674 373" stroke="#a94f35" strokeWidth="3" fill="none" />
          <text x="42" y="445" className="floor-plan-scale-note">SCHEMATIC / NOT TO SCALE</text>
          <text x="678" y="445" textAnchor="end" className="floor-plan-scale-note">FORMA HOUSE · CONCEPT STUDY</text>
        </svg>
      </div>
      <div className="floor-plan-footer">
        <p><strong>Illustrative layout only.</strong> This original diagram is a UX concept, not an architectural drawing, measured floor plan or representation of a verified property. A real developer should supply approved plans and dimensions.</p>
        <div className="floor-plan-legend"><span><i className="legend-living" />Shared living</span><span><i className="legend-private" />Private rooms</span><span><i className="legend-service" />Service spaces</span></div>
      </div>
    </section>
  );
}
