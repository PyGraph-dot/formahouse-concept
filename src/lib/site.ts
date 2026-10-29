/** Resolve the canonical origin for metadata, sitemap and robots output. */
export function getSiteUrl(): string {
  const configured = process.env.NEXT_PUBLIC_SITE_URL?.trim();
  if (configured) {
    const withProtocol = /^https?:\/\//i.test(configured) ? configured : `https://${configured}`;
    return withProtocol.replace(/\/+$/, "");
  }

  // Vercel exposes a deployment hostname automatically. A custom production
  // domain should still be set explicitly through NEXT_PUBLIC_SITE_URL.
  const vercelHost = process.env.VERCEL_URL?.trim();
  if (vercelHost) return `https://${vercelHost.replace(/^https?:\/\//, "").replace(/\/+$/, "")}`;

  return "http://localhost:3000";
}
