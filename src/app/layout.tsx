import { Toaster } from "sonner";
import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { ConvexClientProvider } from "@/components/providers/convexProvider";
import { ModalProvider } from "@/components/providers/modalProvider";
import { EdgeStoreProvider } from "@/lib/edgestore";

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
          <EdgeStoreProvider>
            <Toaster position="bottom-center" />
            <ModalProvider />
            {children}
          </EdgeStoreProvider>
        </ConvexClientProvider>
      </body>
    </html>
  );
}
