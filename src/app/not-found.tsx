import Link from "next/link";
import { ArrowLeft, ArrowUpRight } from "lucide-react";

export default function NotFound() {
  return <section className="not-found-page"><span className="eyebrow">404 / OFF THE MAP</span><h1>This page hasn't<br/><em>found its place.</em></h1><p>It may have moved, or it may not exist in this collection.</p><div><Link className="button button--dark" href="/homes"><ArrowLeft size={15}/> Explore the homes</Link><Link className="underlined-link" href="/">Back to the beginning <ArrowUpRight size={15}/></Link></div></section>;
}
