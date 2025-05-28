// src/app/contact/layout.tsx
"use client";

import React, { Suspense } from "react";

export default function ContactLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <Suspense fallback={<div>Chargement de la page de contact…</div>}>
      {children}
    </Suspense>
  );
}
