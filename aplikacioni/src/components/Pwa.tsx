"use client";

import { useEffect } from "react";

export default function Pwa() {
  useEffect(() => {
    if (!("serviceWorker" in navigator)) return;

    let cancelled = false;
    async function warmSnapshot() {
      if (cancelled || !navigator.serviceWorker.controller) return;
      try {
        await fetch("/api/udhetimet", { cache: "no-store" });
      } catch {
        // Lidhja mund të jetë offline.
      }
    }

    navigator.serviceWorker.addEventListener("controllerchange", warmSnapshot);
    navigator.serviceWorker
      .register("/sw.js", { scope: "/" })
      .then(() => navigator.serviceWorker.ready)
      .then(warmSnapshot)
      .catch(() => {});

    return () => {
      cancelled = true;
      navigator.serviceWorker.removeEventListener("controllerchange", warmSnapshot);
    };
  }, []);

  return (
    <aside className="offline-notice">
      <a href="/offline.html">Lista për lexim pa internet</a>
      <p>Kopja e ruajtur mund të jetë e vjetruar. Këtu nuk konfirmohen rezervime.</p>
    </aside>
  );
}