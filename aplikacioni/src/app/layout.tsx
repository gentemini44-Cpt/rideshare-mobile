import type { Metadata } from "next";
import "./globals.css";
import Pwa from "@/components/Pwa";

export const metadata: Metadata = {
  title: "RideShare",
  description: "Udhëtime të përbashkëta për AAB",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="sq">
      <body><Pwa />{children}</body>
    </html>
  );
}

