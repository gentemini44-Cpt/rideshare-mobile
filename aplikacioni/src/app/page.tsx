import Link from "next/link";
import { getServerSession } from "next-auth";
import Hyrja from "@/components/Hyrja";
import { authOptions } from "@/lib/auth";
import { KartaUdhetimi } from "@/components/KartaUdhetimi";
import { lexoUdhetimet, type Udhetim } from "@/lib/udhetimet";

export const dynamic = "force-dynamic";

export default async function Home() {
  const canSignIn = Boolean(
    process.env.GITHUB_ID &&
      process.env.GITHUB_SECRET &&
      process.env.NEXTAUTH_SECRET,
  );
  const session = canSignIn ? await getServerSession(authOptions) : null;
  let udhetimet: Udhetim[];
  try {
    udhetimet = await lexoUdhetimet();
  } catch {
    return (
      <main>
        <h1>RideShare</h1>
        {canSignIn && <p><Hyrja brenda={Boolean(session)} /></p>}
        <p><Link href="/panel">Paneli im</Link></p>
        <p role="alert">Nuk u lidhem me databazen. Provo perseri.</p>
        <Link className="action" href="/">Provo perseri</Link>
      </main>
    );
  }

  return (
    <main>
      <h1>RideShare - Udhetimet per AAB</h1>
      {canSignIn && <p><Hyrja brenda={Boolean(session)} /></p>}
        <p><Link href="/panel">Paneli im</Link></p>
      <p>Burimi: Neon - te dhena fiktive per ushtrime</p>
      {udhetimet.length === 0 ? (
        <>
          <p>Nuk ka udhetime per momentin.</p>
          <Link className="action" href="/">Rifresko listen</Link>
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