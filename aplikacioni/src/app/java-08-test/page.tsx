import ZgjedhVendtakimin from "@/components/ZgjedhVendtakimin";

export default function Java08TestPage() {
  return (
    <main>
      <p className="eyebrow">Simulim lokal · të dhëna fiktive</p>
      <h1>RideShare</h1>
      <p>Arta · udhëtimi i Dritonit · ID 2</p>
      <div className="details">
        <p>
          <strong>Udhëtimi:</strong> Ferizaj → AAB
        </p>
        <p>
          <strong>Nisja:</strong> 08:15
        </p>
      </div>
      <ZgjedhVendtakimin />
    </main>
  );
}
