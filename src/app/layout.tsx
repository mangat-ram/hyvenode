import { Toaster } from "sonner";
import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { ConvexClientProvider } from "@/components/providers/convexProvider";
import { ModalProvider } from "@/components/providers/modalProvider";

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
      <body className={mongoSerif.className}>
        <ConvexClientProvider>
          <Toaster position="bottom-center" />
          <ModalProvider />
          {children}
        </ConvexClientProvider>
      </body>
    </html>
  );
}
