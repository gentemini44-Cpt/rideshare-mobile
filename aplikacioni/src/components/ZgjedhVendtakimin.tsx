"use client";

import { useState } from "react";

type GjendjaVendndodhjes =
  | "idle"
  | "loading"
  | "success"
  | "denied"
  | "timeout"
  | "unavailable";

export default function ZgjedhVendtakimin() {
  const [draft, setDraft] = useState("");
  const [vendtakimi, setVendtakimi] = useState("");
  const [poKerkoj, setPoKerkoj] = useState(false);
  const [gjendja, setGjendja] = useState<GjendjaVendndodhjes>("idle");
  const [mesazhi, setMesazhi] = useState(
    "Leja nuk kërkohet derisa të shtypësh butonin e vendndodhjes.",
  );
  const [saktesia, setSaktesia] = useState<number | null>(null);
  const [gabimi, setGabimi] = useState("");
  const [konfirmimi, setKonfirmimi] = useState("");

  function kerkoVendndodhjen() {
    if (!navigator.geolocation) {
      setGjendja("unavailable");
      setPoKerkoj(false);
      setSaktesia(null);
      setMesazhi(
        "Ky shfletues nuk e mbështet vendndodhjen. Mund ta shkruash vendtakimin manualisht.",
      );
      return;
    }

    setPoKerkoj(true);
    setGjendja("loading");
    setSaktesia(null);
    setMesazhi("Po kërkojmë vendndodhjen…");

    try {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setPoKerkoj(false);
          setGjendja("success");
          setSaktesia(Math.round(position.coords.accuracy));
          setMesazhi("Pozicioni u mor. Shkruaj vetë përshkrimin e vendtakimit.");
        },
        (error) => {
          setPoKerkoj(false);
          setSaktesia(null);
          if (error.code === 1) {
            setGjendja("denied");
            setMesazhi(
              "Leja u refuzua. Mund ta shkruash dhe konfirmosh vendtakimin manualisht.",
            );
          } else if (error.code === 2) {
            setGjendja("unavailable");
            setMesazhi(
              "Telefoni nuk arriti ta përcaktojë vendndodhjen. Mund të vazhdosh manualisht.",
            );
          } else if (error.code === 3) {
            setGjendja("timeout");
            setMesazhi(
              "Pritja për vendndodhjen mbaroi. Mund të vazhdosh manualisht.",
            );
          } else {
            setGjendja("unavailable");
            setMesazhi(
              "Nuk u mor vendndodhja. Mund ta shkruash vendtakimin manualisht.",
            );
          }
        },
        { timeout: 10000 },
      );
    } catch {
      setPoKerkoj(false);
      setGjendja("unavailable");
      setSaktesia(null);
      setMesazhi(
        "Nuk u mor vendndodhja. Mund ta shkruash vendtakimin manualisht.",
      );
    }
  }

  function konfirmoVendtakimin() {
    const zgjedhja = draft.trim();
    if (!zgjedhja) {
      setGabimi("Shkruaj vendtakimin para se ta konfirmosh.");
      return;
    }

    setVendtakimi(zgjedhja);
    setGabimi("");
    setKonfirmimi(
      "U konfirmua vetëm në këtë pajisje për provë; nuk u dërgua dhe nuk u ruajt.",
    );
  }

  return (
    <section className="location-picker" aria-labelledby="location-picker-title">
      <h2 id="location-picker-title">Vendtakimi yt për këtë provë</h2>
      <p>
        Mund ta shkruash vetë vendin. Vendndodhja e telefonit kërkohet vetëm kur
        shtyp butonin më poshtë.
      </p>
      <label className="location-label" htmlFor="meeting-place">
        Shkruaj vendtakimin
        <input
          id="meeting-place"
          name="meeting-place"
          type="text"
          autoComplete="off"
          placeholder="p.sh. Biblioteka"
          data-testid="meeting-input"
          value={draft}
          onChange={(event) => {
            setDraft(event.target.value);
            if (event.target.value.trim()) setGabimi("");
          }}
        />
      </label>
      <button
        className="action"
        type="button"
        data-testid="confirm-meeting"
        onClick={konfirmoVendtakimin}
      >
        Konfirmo në telefon
      </button>
      <p data-testid="meeting-error" role="alert" aria-live="polite">
        {gabimi}
      </p>
      <button
        className="action location-secondary-action"
        type="button"
        data-testid="locate-me"
        onClick={kerkoVendndodhjen}
        disabled={poKerkoj}
      >
        {poKerkoj ? "Po kërkojmë vendndodhjen…" : "Përdor vendndodhjen time"}
      </button>
      <p
        data-testid="location-status"
        data-state={gjendja}
        role="status"
        aria-live="polite"
      >
        {mesazhi}
      </p>
      <p>
        <span data-testid="location-accuracy">
          {saktesia === null ? "" : `Saktësia: ${saktesia} m`}
        </span>
      </p>
      <p
        className="confirmed-meeting-place"
        data-testid="confirmed-meeting"
        role="status"
        aria-live="polite"
      >
        {vendtakimi ? (
          <>
            <strong>Vendtakimi:</strong> {vendtakimi}
            <br />
            {konfirmimi}
          </>
        ) : null}
      </p>
    </section>
  );
}
