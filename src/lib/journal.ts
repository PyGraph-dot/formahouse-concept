export type JournalArticle = {
  slug: string;
  category: string;
  title: string;
  excerpt: string;
  time: string;
  date: string;
  image: string;
  intro: string;
  sections: { heading: string; body: string }[];
  checklist: string[];
};

export const articles: JournalArticle[] = [
  {
    slug: "before-you-fall-for-the-photos",
    category: "THE BUYER'S CHECKLIST",
    title: "Before you fall in love with the photos.",
    excerpt: "A practical first pass at the things worth checking before you pay a deposit.",
    time: "6 MIN READ",
    date: "FIELD NOTE / 001",
    image: "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?auto=format&fit=crop&w=1800&q=86",
    intro: "Good photography helps you imagine a home. It can also make it easy to skip over the questions that matter. Before a deposit leaves your account, slow the decision down enough to see the whole picture.",
    sections: [
      { heading: "Start with the person selling it.", body: "Confirm who owns the property and who has the authority to sell it. Ask for the developer or seller's full legal name and the documents that support the claim. Do not rely on a social profile, brochure or a confident verbal assurance as proof of ownership." },
      { heading: "Ask for the paperwork early.", body: "Ask what title documents, survey plans, planning permissions and building approvals are available for the specific property. A qualified property lawyer should independently review the documents and check the relevant records. A document being shown to you is not the same as that document being verified." },
      { heading: "Make the total cost visible.", body: "The price on a listing may not include legal fees, documentation, taxes, service charges, utility connections, finishing options or estate dues. Request a written breakdown and compare it against the proposed sale agreement." },
      { heading: "See the real place, not just the best angle.", body: "Arrange a physical viewing where possible. Look at access, drainage, neighbouring properties, visible workmanship, light, ventilation, water and power arrangements. If you are buying from abroad, request a live video walkthrough and consider appointing an independent representative." },
      { heading: "Read the terms before paying.", body: "Understand exactly what happens after each instalment, what the completion timetable says, what happens if things are delayed, and which remedies are available. Take independent legal advice before signing or transferring funds." },
    ],
    checklist: ["Verify the seller's identity and authority to sell", "Have title and approval documents independently reviewed", "Get all fees and payment milestones in writing", "Inspect the site and surrounding area", "Review the contract with a qualified lawyer"],
  },
  {
    slug: "understanding-the-real-cost",
    category: "MONEY, MADE CLEAR",
    title: "The listed price is only the beginning.",
    excerpt: "The additional costs to put on your worksheet before you decide what you can afford.",
    time: "5 MIN READ",
    date: "FIELD NOTE / 002",
    image: "https://images.unsplash.com/photo-1600607687644-c7171b42498f?auto=format&fit=crop&w=1800&q=86",
    intro: "A home can fit your budget on paper and still stretch you once the full cost becomes clear. Build a more honest picture by asking what the advertised price does — and does not — cover.",
    sections: [
      { heading: "Ask what is included in the price.", body: "Are fitted wardrobes, kitchen equipment, lighting, landscaping, parking and connection to essential services included? Ask for a written inclusions schedule so you can compare properties on an equal basis." },
      { heading: "Make room for transaction costs.", body: "There may be legal, documentation, registration, survey, valuation, tax or other transaction costs depending on the property and transaction. The exact categories and amounts vary, so have your adviser establish which apply to your circumstances." },
      { heading: "Understand ongoing costs.", body: "For an estate or apartment, ask about service charges, security, waste collection, maintenance, shared facilities and how future increases are handled. A lower purchase price can come with a different ongoing commitment." },
      { heading: "Stress-test the payment plan.", body: "Map the deposit and every payment date against your actual cash flow. Ask whether the advertised instalment excludes fees or interest, whether payments change over time, and what the contract says if you miss a milestone." },
      { heading: "Keep a reserve for life after moving in.", body: "Moving, furnishing, repairs, appliances and unexpected work can quickly add up. Keep a contingency separate from the money needed to complete the purchase. A buffer is part of affordability, not an optional extra." },
    ],
    checklist: ["Get a written inclusions and exclusions list", "Ask an adviser to identify applicable transaction costs", "Confirm service charges and recurring obligations", "Map every payment date to your cash flow", "Keep a separate contingency for moving and repairs"],
  },
  {
    slug: "a-better-way-to-view-a-home",
    category: "LOOK CLOSER",
    title: "A viewing is more than a walkthrough.",
    excerpt: "A calm, practical guide to noticing the things that a wide-angle photo cannot show.",
    time: "4 MIN READ",
    date: "FIELD NOTE / 003",
    image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1800&q=86",
    intro: "A viewing is your chance to replace assumptions with observations. You do not need to inspect everything like a professional surveyor; you do need to look carefully and know when to bring one in.",
    sections: [
      { heading: "Test how the rooms work.", body: "Walk the route you would take on an ordinary day. Notice where bags, shoes and cleaning items go, whether doors obstruct one another, and how private rooms relate to shared spaces. Bring the floor plan and check dimensions rather than relying on a wide-angle photograph." },
      { heading: "Look for light, air and signs of water.", body: "Notice daylight at the time you visit, cross-ventilation, damp smells, water marks, cracks and the condition around windows, balconies and wet areas. Treat this as a first observation, not a substitute for a professional survey or technical inspection." },
      { heading: "Ask about what you cannot see.", body: "Where does water come from? How is power supplied? What happens during outages? How is refuse collected? Who maintains shared spaces? Ask for specific information rather than accepting a broad promise that everything is covered." },
      { heading: "Step outside the property.", body: "Pay attention to road access, drainage, noise, nearby activity and the route you would take to work, school or family. Where practical, return at another time of day. The neighbourhood is part of your experience of the home." },
      { heading: "Write down what needs checking.", body: "Photograph details only with permission, record questions and list any follow-up documents. Share your notes with a qualified surveyor, lawyer or other professional as appropriate before making a final decision." },
    ],
    checklist: ["Bring the floor plan and check room dimensions", "Look for signs that need professional inspection", "Ask about water, power, drainage and maintenance", "Walk the surrounding streets and access routes", "Record follow-up questions and request evidence"],
  },
];
