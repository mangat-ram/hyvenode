import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const mongoSerif = localFont({ src: './mongo.ttf' });

export const metadata: Metadata = {
  title: "HyveNode",
  description: "The connected workspace where better,faster work happens.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={mongoSerif.className}>{children}</body>
    </html>
  );
}
