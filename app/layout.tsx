import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import {Analytics} from "@vercel/analytics/react"
const font = Poppins({ 
  subsets: ["latin"] , 
  weight : "400"
 });

export const metadata: Metadata = {
  title: "Waitlist",
  description: "Waitlist",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={font.className}>
        <Analytics/>
        {children}</body>
    </html>
  );
}
