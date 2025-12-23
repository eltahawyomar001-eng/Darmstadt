import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { LayoutShell } from "@/components/layout";
import CookieConsent from "@/components/CookieConsent";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "MR Motorsport - Lenzokart Importeur Deutschland",
  description: "Offizieller Lenzokart Importeur für Deutschland. Ihr Partner für Kartsport auf höchstem Niveau - Chassis, Motoren, Service und mehr.",
  keywords: ["Kartsport", "Lenzokart", "Motorsport", "Darmstadt", "Chassis", "Kart Racing"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="de">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <LayoutShell>{children}</LayoutShell>
        <CookieConsent />
      </body>
    </html>
  );
}
