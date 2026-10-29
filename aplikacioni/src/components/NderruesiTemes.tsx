"use client";

import { useEffect } from "react";

// Ikona që shfaqet zgjidhet në CSS nga atributi data-theme i <html>,
// prandaj komponenti nuk ka nevojë për gjendje.
export function NderruesiTemes() {
  // Te faqja 404 React e rindërton <html> dhe atributi i vendosur nga skripti
  // i layout.tsx humbet, prandaj e rivendosim këtu nëse mungon.
  useEffect(() => {
    const html = document.documentElement;
    if (html.getAttribute("data-theme")) return;
    let tema: string | null = null;
    try {
      tema = localStorage.getItem("theme");
    } catch {}
    if (tema !== "light" && tema !== "dark") {
      tema = matchMedia("(prefers-color-scheme: dark)").matches
        ? "dark"
        : "light";
    }
    html.setAttribute("data-theme", tema);
  }, []);

  function nderroTemen() {
    const html = document.documentElement;
    const eRe = html.getAttribute("data-theme") === "dark" ? "light" : "dark";
    html.setAttribute("data-theme", eRe);
    try {
      localStorage.setItem("theme", eRe);
    } catch {}
  }

  return (
    <button
      type="button"
      className="theme-toggle"
      aria-label="Ndërro temën e çelët ose të errët"
      onClick={nderroTemen}
    >
      <svg
        className="moon"
        width="20"
        height="20"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.75"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <path d="M21 12.8A9 9 0 1 1 11.2 3a7 7 0 0 0 9.8 9.8z" />
      </svg>
      <svg
        className="sun"
        width="20"
        height="20"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.75"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <circle cx="12" cy="12" r="4" />
        <path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4" />
      </svg>
    </button>
  );
}
