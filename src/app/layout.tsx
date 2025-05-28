// src\app\layout.tsx

import React from "react";
import type { Metadata } from "next";
import { PrimeReactProvider } from "primereact/api";
import { Geist, Geist_Mono } from "next/font/google";
import "primeicons/primeicons.css";
import "@/app/globals.css";
import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";
import { ThemeProvider } from "@/app/providers/ThemeProvider";
import ThemeStyles from "@/app/components/ThemeStyles";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Portfolio",
  description: "Mon portfolio personnel",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="flex min-h-screen flex-col">
      <body
        className={`${geistSans.variable} ${geistMono.variable} flex flex-1 flex-col antialiased`}
      >
        <ThemeProvider>
          <ThemeStyles />
          <PrimeReactProvider>
            <header>
              <Navbar />
            </header>
            <main className="flex flex-1 flex-col">{children}</main>
            <Footer />
          </PrimeReactProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
