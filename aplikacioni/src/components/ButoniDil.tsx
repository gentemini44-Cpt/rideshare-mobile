"use client";
import { signOut } from "next-auth/react";

// Ikona "dil": shigjeta që del nga dera.
export function ButoniDil() {
  return (
    <button
      type="button"
      className="icon-button"
      aria-label="Dil nga llogaria"
      title="Dil"
      onClick={() => signOut({ callbackUrl: "/panel" })}
    >
      <svg
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
        <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4" />
        <path d="M16 17l5-5-5-5" />
        <path d="M21 12H9" />
      </svg>
    </button>
  );
}
