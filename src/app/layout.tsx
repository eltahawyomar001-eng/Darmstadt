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
  title: "NB Motorsport - Lenzokart Importeur Deutschland",
  description: "Offizieller Lenzokart Importeur für Deutschland. Ihr Partner für Kartsport auf höchstem Niveau - Chassis, Motoren, Service und mehr.",
  keywords: ["Kartsport", "Lenzokart", "Motorsport", "NB Motorsport", "Chassis", "Kart Racing"],
  icons: {
    icon: "/uploads/nb-logo.png",
    shortcut: "/uploads/nb-logo.png",
    apple: "/uploads/nb-logo.png",
  },
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
