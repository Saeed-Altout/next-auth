import "./globals.css";

import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Toaster } from "@/components/ui/sonner";
import { Providers } from "@/providers/provider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Next-Auth",
  description: "Next-Auth",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Providers>
          {children}
          <Toaster position="bottom-center" />
        </Providers>
      </body>
    </html>
  );
}
