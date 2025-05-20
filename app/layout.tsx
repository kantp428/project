import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import ThemeRegistry from '@/components/ThemeRegistry/ThemeRegistry';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Admin Dashboard',
  description: 'Modern admin dashboard built with Next.js and Material UI',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeRegistry>{children}</ThemeRegistry>
      </body>
    </html>
  );
}