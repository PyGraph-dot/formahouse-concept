"use client";

import { useMemo, useState } from "react";
import { Calculator, Info } from "lucide-react";
import type { Property } from "@/lib/properties";
import { formatNaira } from "@/lib/properties";

export function PaymentCalculator({ property }: { property: Property }) {
  const [depositPercent, setDepositPercent] = useState(30);
  const [months, setMonths] = useState(18);
  const deposit = useMemo(() => Math.round(property.price * depositPercent / 100), [property.price, depositPercent]);
  const monthly = useMemo(() => Math.ceil((property.price - deposit) / months), [property.price, deposit, months]);

  return (
    <section className="payment-calculator" aria-labelledby="calculator-title">
      <div className="calculator-heading"><span className="calculator-icon"><Calculator size={19} /></span><div><span className="eyebrow">MAKE THE NUMBERS CLEAR</span><h3 id="calculator-title">An easier way to picture it.</h3></div></div>
      <p className="calculator-intro">Adjust the deposit and timeline to explore an illustrative payment split for {property.name}.</p>
      <div className="calculator-control">
        <div className="calculator-label-row"><label htmlFor="deposit-range">Your initial deposit</label><strong>{depositPercent}%</strong></div>
        <input id="deposit-range" className="range-control" type="range" min="20" max="50" step="5" value={depositPercent} onChange={(event) => setDepositPercent(Number(event.target.value))} />
        <div className="range-ends"><span>20% deposit</span><span>50% deposit</span></div>
      </div>
      <div className="calculator-control calculator-control--term"><label htmlFor="term-select">Spread the remaining balance over</label><select id="term-select" value={months} onChange={(event) => setMonths(Number(event.target.value))}><option value={6}>6 months</option><option value={12}>12 months</option><option value={18}>18 months</option><option value={24}>24 months</option></select></div>
      <div className="calculator-results"><div><span>INITIAL DEPOSIT</span><strong>{formatNaira(deposit)}</strong></div><div><span>ILLUSTRATIVE MONTHLY PAYMENT</span><strong>{formatNaira(monthly)}<small> / month</small></strong></div></div>
      <div className="calculator-disclaimer"><Info size={15} /><p>Planning estimate only. Assumes no interest or fees and equal monthly instalments. Actual terms, eligibility, taxes and other costs would need written confirmation.</p></div>
    </section>
  );
}
