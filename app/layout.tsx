import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "CelluNOVA Research — Licensing breakthrough bioactive formulas",
  description: "Licensing breakthrough bioactive formulas — without revealing the secret.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
