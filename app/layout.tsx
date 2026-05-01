import type { Metadata } from 'next';
import { Inter, Space_Grotesk } from 'next/font/google';
import './globals.css';
import React from "react";

const inter = Inter({
    subsets: ['latin', 'cyrillic'],
    variable: '--font-inter',
    display: 'swap',
});

const spaceGrotesk = Space_Grotesk({
    subsets: ['latin'],
    variable: '--font-space-grotesk',
    weight: ['500', '600', '700'],
    display: 'swap',
});

export const metadata: Metadata = {
    title: 'Ваше Имя | Full Stack Developer',
    description: 'Создаю современные веб-приложения на Next.js',
};

export default function RootLayout({
                                       children,
                                   }: {
    children: React.ReactNode;
}) {
    return (
        <html lang="ru" className={`${inter.variable} ${spaceGrotesk.variable} scroll-smooth`}>
        <body className="font-sans">{children}</body>
        </html>
    );
}