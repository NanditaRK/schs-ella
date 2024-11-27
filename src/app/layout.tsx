import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { GoogleTagManager } from '@next/third-parties/google'

import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "LPC",
  description: "Latino Parent Coalition",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    
    <html className="" data-theme="lofi" lang="en">
      <GoogleTagManager gtmId="G-3CKYEEKM0T" />
      
      <body className={inter.className}>{children}</body>
    </html>
  );
}
