import Link from "next/link";
import MeetingPoint from "@/components/MeetingPoint";

export default function Java08TestPage() {
  return (
    <main>
      <Link href="/">← Kthehu te udhëtimet</Link>
      <p className="eyebrow">Java 8 · Faqja e provës</p>
      <h1>Vendtakimi yt</h1>
      <p>
        Provë me të dhëna fiktive. Leja e vendndodhjes kërkohet vetëm kur e
        shtyp butonin.
      </p>
      <MeetingPoint />
    </main>
  );
}
