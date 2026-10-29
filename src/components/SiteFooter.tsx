import Link from "next/link";
import { ArrowUpRight, BookOpen, MoveUpRight } from "lucide-react";
import { Brand } from "@/components/Brand";

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="footer-top">
        <div className="footer-statement">
          <span className="eyebrow eyebrow--light">THE NEXT STEP, MADE SIMPLE</span>
          <h2>Let’s find your<br /><em>kind of home.</em></h2>
          <Link className="button button--paper" href="/visit">Arrange a visit <ArrowUpRight size={17} /></Link>
        </div>
        <div className="footer-side-note"><span className="footer-line" /><p>Thoughtful spaces.<br />Clear decisions.<br />A better way home.</p><span className="footer-coordinate">06°35' N / 03°23' E</span></div>
      </div>
      <div className="footer-main">
        <div className="footer-brand-block"><Brand inverse /><p>Homes that make room<br />for real life.</p></div>
        <div className="footer-column"><span className="footer-label">EXPLORE</span><Link href="/homes">Available homes</Link><Link href="/approach">Our approach</Link><Link href="/journal">Field notes</Link></div>
        <div className="footer-column"><span className="footer-label">SPEAK TO US</span><Link href="/visit">Book a viewing <MoveUpRight size={13} /></Link><Link href="/contact">Contact the team <MoveUpRight size={13} /></Link><span className="footer-small">Lagos, Nigeria · By appointment</span></div>
        <div className="footer-social"><span className="footer-label">KEEP LEARNING</span><Link href="/journal"><BookOpen size={17} /> Field notes <ArrowUpRight size={13} /></Link><p>No pressure. Just a clearer next step.</p></div>
      </div>
      <div className="footer-bottom"><span>© 2026 FORMA HOUSE — A FICTIONAL PORTFOLIO CONCEPT</span><div><Link href="/contact">Contact</Link><span>DESIGNED WITH INTENTION, BUILT FOR PEOPLE.</span></div></div>
    </footer>
  );
}
