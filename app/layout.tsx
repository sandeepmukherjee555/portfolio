import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/header";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Sandeep Mukherjee|Portfolio",
  description: "Sandeep Mukherjee is a Front End Developer with 3+ yrs of exp",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} 
        antialiased 
        bg-green-50 
        text-gray-950
        h-[5000px]`}
      >
        <Header/>
        {children}
      </body>
    </html>
  );
}
