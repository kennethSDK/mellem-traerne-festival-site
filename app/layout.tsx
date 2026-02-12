import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Mellem Træerne - Slotsengens Musik",
  description: "En dag mellem træerne i Dronningedalen. Musik, fællesskab og medskabelse.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="da">
      <body className={inter.className}>
        {children}
        <Toaster />
      </body>
    </html>
  );
}
