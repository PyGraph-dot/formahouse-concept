"use client";

import { useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { Brand } from "@/components/Brand";

const links = [
  { href: "/homes", label: "Find a home" },
  { href: "/approach", label: "Our approach" },
  { href: "/journal", label: "Field notes" },
];

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const menuButtonRef = useRef<HTMLButtonElement>(null);
  const pathname = usePathname();

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (!open) return;
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpen(false);
        menuButtonRef.current?.focus();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [open]);

  return (
    <>
      <div className="utility-bar">
        <span>THOUGHTFUL HOMES, MADE FOR REAL LIFE</span>
        <span className="utility-right"><span className="utility-dot" /> LAGOS, NIGERIA <span className="utility-divider">/</span> BY APPOINTMENT</span>
      </div>
      <header className="site-header">
        <Brand />
        <nav className="desktop-nav" aria-label="Main navigation">
          {links.map((link) => {
            const active = pathname === link.href || pathname.startsWith(`${link.href}/`);
            return <Link key={link.href} href={link.href} aria-current={active ? "page" : undefined} className={active ? "is-active" : undefined}>{link.label}</Link>;
          })}
        </nav>
        <Link className="header-cta" href="/visit">Plan a visit <ArrowUpRight size={15} strokeWidth={1.8} /></Link>
        <button ref={menuButtonRef} className="mobile-menu-button" type="button" aria-label={open ? "Close menu" : "Open menu"} aria-expanded={open} aria-controls="mobile-navigation" onClick={() => setOpen((value) => !value)}>
          {open ? <X size={23} /> : <Menu size={23} />}
        </button>
        <div id="mobile-navigation" className={`mobile-nav${open ? " is-open" : ""}`} aria-hidden={!open}>
          {links.map((link, index) => {
            const active = pathname === link.href || pathname.startsWith(`${link.href}/`);
            return <Link key={link.href} href={link.href} aria-current={active ? "page" : undefined} onClick={() => setOpen(false)}><span>0{index + 1}</span>{link.label}<ArrowUpRight size={17} /></Link>;
          })}
          <Link className="mobile-nav-cta" href="/visit" onClick={() => setOpen(false)}>Plan a visit <ArrowUpRight size={17} /></Link>
          <p>Good homes. Thought through.</p>
        </div>
      </header>
    </>
  );
}
