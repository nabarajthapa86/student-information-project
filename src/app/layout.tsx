import type { Metadata } from "next";
import type { ReactNode } from "react";
import "./globals.css";

export const metadata: Metadata = {
  title: "Aadikavi Bhanubhakta Campus",
  description:
    "Aadikavi Bhanubhakta Campus - Affiliated to Tribhuvan University. Empowering Minds, Enriching Futures.",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className="antialiased text-gray-900">{children}</body>
    </html>
  );
}
