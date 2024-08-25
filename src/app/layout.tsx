import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "SCHS ELLA",
  description: "Silver Creek High School - English Language Learner Advocates",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html className="" data-theme="lofi" lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
