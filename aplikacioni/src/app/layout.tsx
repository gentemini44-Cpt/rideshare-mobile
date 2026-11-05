import type { Metadata } from "next";
import "./globals.css";
import Pwa from "@/components/Pwa";

export const metadata: Metadata = {
  title: "RideShare",
  description: "Udhëtime të përbashkëta për AAB",
  authors: [{ name: "Gent Emini" }],
  appleWebApp: {
    capable: true,
    title: "RideShare",
    statusBarStyle: "default",
  },
  icons: {
    apple: "/icons/icon-192.png",
  },
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
