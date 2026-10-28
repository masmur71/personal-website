import type { Metadata } from "next";
import "./globals.css";
export const metadata: Metadata = { title: "Masmur Toloni Harefa — Portfolio", description: "Information Systems graduate exploring software engineering and data analytics. Portfolio in progress.", icons: { icon: "/logo.png" } };
export default function RootLayout({children}: Readonly<{children: React.ReactNode}>) { return <html lang="en"><body>{children}</body></html>; }
