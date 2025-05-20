import './globals.css';
import { ReactNode } from 'react';
import ClientLayoutWrapper from '@/components/Dashboard/ClientLayoutWrapper';
import ThemeRegistry from '@/components/ThemeRegistry/ThemeRegistry';

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>
        <ThemeRegistry>
          <ClientLayoutWrapper>
            {children}
          </ClientLayoutWrapper>
        </ThemeRegistry>
      </body>
    </html>
  );
}
