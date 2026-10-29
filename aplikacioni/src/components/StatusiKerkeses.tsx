"use client";

import Link from "next/link";
import { useState } from "react";
import type { Udhetim } from "@/lib/udhetimet";

// Simulim: statusi jeton vetëm në këtë ekran; asgjë nuk ruhet ose dërgohet.
export function StatusiKerkeses({ udhetim }: { udhetim: Udhetim }) {
  const [eAnuluar, setEAnuluar] = useState(false);

  if (eAnuluar) {
    return (
      <>
        <h1>Simulim: E anuluar</h1>
        <p className="lead" role="status">
          Kërkesa për {udhetim.nisja} u anulua. Vendi mbetet i lirë për dikë
          tjetër.
        </p>
        <Link className="action" href="/">
          Kthehu te lista
        </Link>
        <button
          className="action secondary"
          onClick={() => setEAnuluar(false)}
        >
          Kërko përsëri
        </button>
      </>
    );
  }

  return (
    <>
      <h1>Simulim: Në pritje</h1>
      <p className="lead" role="status">
        Kërkesa për {udhetim.nisja} nuk është dërguar te shoferi{" "}
        {udhetim.shoferi}.
      </p>
      <p className="lead">
        Ruajtjen dhe konfirmimin real do t’i shtojmë më vonë.
      </p>
      <p className="note">
        Të erdhi autobusi ose more taksi? Anulo kërkesën që vendi të mbetet i
        lirë për dikë tjetër.
      </p>
      <button className="action danger" onClick={() => setEAnuluar(true)}>
        Anulo kërkesën
      </button>
    </>
  );
}
