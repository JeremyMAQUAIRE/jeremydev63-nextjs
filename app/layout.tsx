import React from 'react';
import type { Metadata } from 'next';
// eslint-disable-next-line camelcase
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';
import HeaderPage from './header/page';
import FooterPage from './footer/page';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'Jérémy Dev 63',
  description: 'Portfolio de Jérémy Dev 63',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased flex flex-col h-screen`}>
        <HeaderPage />
        <div className="flex-1">{children}</div>
        <FooterPage />
      </body>
    </html>
  );
}
