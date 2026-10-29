import Link from "next/link";
import { notFound } from "next/navigation";
import { gjejUdhetimin } from "@/lib/udhetimet";

export const dynamic = "force-dynamic";

export default async function Detajet({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  let udhetim;
  try {
    udhetim = await gjejUdhetimin(id);
  } catch {
    return (
      <main>
        <h1>RideShare</h1>
        <p role="alert">Nuk u lidhëm me databazën. Provo përsëri.</p>
        <Link href="/">← Kthehu te lista</Link>
      </main>
    );
  }

  if (!udhetim) {
    notFound();
  }

  return (
    <main>
      <Link href="/">← Kthehu te lista</Link>
      <p className="eyebrow">Detajet e udhëtimit</p>
      <h1>
        {udhetim.nisja} – {udhetim.destinacioni}
      </h1>
      <div className="details">
        <p>
          <strong>Ora:</strong> {udhetim.ora}
        </p>
        <p>
          <strong>Vendtakimi:</strong> {udhetim.vendtakimi}
        </p>
        <p>
          <strong>Vende të lira:</strong> {udhetim.vende}
        </p>
      </div>
      {udhetim.vende > 0 ? (
        <Link className="action" href={`/udhetimi/${id}/kerkesa`}>
          Kërko vend
        </Link>
      ) : (
        <button className="action" disabled>
          Nuk ka vende të lira
        </button>
      )}
    </main>
  );
}
