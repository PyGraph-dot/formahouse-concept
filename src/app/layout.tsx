import type { Metadata, Viewport } from "next";
import { DM_Sans } from "next/font/google";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { getSiteUrl } from "@/lib/site";
import "./globals.css";

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
  variable: "--font-dm-sans",
});


export const metadata: Metadata = {
  title: {
    default: "FORMA House — A more considered way home",
    template: "%s — FORMA House",
  },
  description: "Thoughtful residential homes in Lagos, designed around the details that make everyday life better. A fictional real-estate portfolio concept.",
  applicationName: "FORMA House",
  icons: { icon: "/favicon.svg" },
  metadataBase: new URL(getSiteUrl()),
  openGraph: {
    title: "FORMA House — A more considered way home",
    description: "Good homes. Thought through. Explore a fictional residential developer concept for Lagos.",
    type: "website",
    siteName: "FORMA House",
    images: [{ url: "/og-formahouse.png", width: 1200, height: 630, alt: "FORMA House — a fictional residential developer portfolio concept" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "FORMA House — A more considered way home",
    description: "Good homes. Thought through. A fictional residential developer concept for Lagos.",
    images: ["/og-formahouse.png"],
  },
};

export const viewport: Viewport = {
  themeColor: "#f4f1e9",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en-NG">
      <body className={dmSans.variable}>
        <a className="skip-link" href="#main-content">Skip to content</a>
        <SiteHeader />
        <main id="main-content">{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}
