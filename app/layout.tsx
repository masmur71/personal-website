import type { Metadata } from "next";
import { Fraunces, IBM_Plex_Mono, IBM_Plex_Sans } from "next/font/google";
import "./globals.css";

const display = Fraunces({ subsets: ["latin"], weight: ["400", "500"], variable: "--font-display", display: "swap" });
const sans = IBM_Plex_Sans({ subsets: ["latin"], weight: ["300", "400", "500"], variable: "--font-sans", display: "swap" });
const mono = IBM_Plex_Mono({ subsets: ["latin"], weight: ["400"], variable: "--font-mono", display: "swap" });

export const metadata: Metadata = { title: "Masmur Toloni Harefa – Portfolio", description: "Information Systems graduate exploring software engineering and data analytics. Portfolio in progress.", icons: { icon: "/logo.png" } };

export default function RootLayout({children}: Readonly<{children: React.ReactNode}>) {
  return (
    <html lang="en" className={`${display.variable} ${sans.variable} ${mono.variable}`}>
      <body>{children}</body>
    </html>
  );
}
