// === app/layout.tsx ===
'use client';
import './globals.css';
import Header from '@/components/Header';
import { SessionProvider } from 'next-auth/react';
import type { ReactNode } from 'react';

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="ru">
      <body>
        <Header />
        <SessionProvider>
          <main className="flex min-h-screen flex-col items-start p-4">
            {children}
          </main>
        </SessionProvider>
      </body>
    </html>
  );
}
