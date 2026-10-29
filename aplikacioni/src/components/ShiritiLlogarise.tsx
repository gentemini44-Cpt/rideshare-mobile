import Link from "next/link";
import { ButoniDil } from "@/components/ButoniDil";
import { profiliIm } from "@/lib/lejet";

// Gjendja e hyrjes lexohet në server nga sesioni dhe roli nga Neon.
export async function ShiritiLlogarise() {
  let p: Awaited<ReturnType<typeof profiliIm>> = null;
  try {
    p = await profiliIm();
  } catch {
    // Pa databazë nuk e dimë rolin; shfaqim lidhjen e panelit si për vizitorin.
  }

  if (!p) {
    return (
      <Link className="account-link" href="/panel">
        Hyr / Paneli im
      </Link>
    );
  }

  return (
    <>
      <Link className="account-link" href="/panel" title="Paneli im">
        <svg
          width="18"
          height="18"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.75"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          <circle cx="12" cy="8" r="4" />
          <path d="M4 21a8 8 0 0 1 16 0" />
        </svg>
        <span className="account-name">{p.emri}</span>
        <span className="account-role">{p.roli}</span>
      </Link>
      <ButoniDil />
    </>
  );
}
