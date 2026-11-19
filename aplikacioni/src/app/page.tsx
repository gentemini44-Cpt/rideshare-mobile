import Link from "next/link";
import { getServerSession } from "next-auth";
import Hyrja from "@/components/Hyrja";
import { authIsConfigured, authOptions } from "@/lib/auth";
import { KartaUdhetimi } from "@/components/KartaUdhetimi";
import { lexoUdhetimet, type Udhetim } from "@/lib/udhetimet";

export const dynamic = "force-dynamic";

export default async function Home() {
  const authConfigured = authIsConfigured();
  const session = authConfigured ? await getServerSession(authOptions) : null;
  let udhetimet: Udhetim[];
  try {
    udhetimet = await lexoUdhetimet();
  } catch {
    return (
      <main>
        <h1>RideShare</h1>
        {authConfigured && <p><Hyrja brenda={Boolean(session)} /></p>}
        <p><Link href="/panel">Paneli im</Link></p>
        <p role="alert">Nuk u lidhem me databazen. Provo perseri.</p>
        <Link className="action" href="/">Provo përsëri</Link>
      </main>
    );
  }

  return (
    <main>
      <h1>RideShare - Udhetimet per AAB</h1>
      {authConfigured && <p><Hyrja brenda={Boolean(session)} /></p>}
      <p><Link href="/panel">Paneli im</Link></p>
      <p>
        {process.env.DATABASE_URL
          ? "Burimi: Neon - të dhëna për ushtrime."
          : "Demo publike me të dhëna fiktive. Udhëtimet dhe kërkesat nuk ruhen."}
      </p>
      <p><Link href="/java-08-test">Provo vendtakimin dhe GPS</Link></p>
      {udhetimet.length === 0 ? (
        <>
          <p>Nuk ka udhetime per momentin.</p>
          <Link className="action" href="/">Rifresko listën</Link>
        </>
      ) : (
        <div className="trip-list">
          {udhetimet.map((udhetim) => (
            <KartaUdhetimi key={udhetim.id} udhetim={udhetim} />
          ))}
        </div>
      )}
    </main>
  );
}