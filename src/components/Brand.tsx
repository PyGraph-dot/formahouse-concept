import Link from "next/link";

export function Brand({ inverse = false }: { inverse?: boolean }) {
  return (
    <Link className={`brand${inverse ? " brand--inverse" : ""}`} href="/" aria-label="FORMA House home">
      <span className="brand-mark" aria-hidden="true"><i /><i /><i /><i /></span>
      <span className="brand-wordmark"><strong>FORMA</strong><small>HOUSE / LAGOS</small></span>
    </Link>
  );
}
