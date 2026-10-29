import type { Udhetim } from "@/lib/udhetimet";

// Nëse shoferi e ka ndryshuar orën, shfaq orën e vjetër të vijëzuar dhe shigjetën te e reja.
export function OraUdhetimit({ udhetim }: { udhetim: Udhetim }) {
  const eVjetra = udhetim.ora_e_meparshme;
  if (!eVjetra || eVjetra === udhetim.ora) return <>{udhetim.ora}</>;

  return (
    <span
      className="time-change"
      aria-label={`Ora ndryshoi nga ${eVjetra} në ${udhetim.ora}`}
    >
      <s aria-hidden="true">{eVjetra}</s>
      <span aria-hidden="true">→</span>
      <strong aria-hidden="true">{udhetim.ora}</strong>
    </span>
  );
}
