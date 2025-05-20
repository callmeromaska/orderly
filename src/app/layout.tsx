// === app/layout.tsx ===
'use client';
import './globals.css';
import { SessionProvider } from 'next-auth/react';
import type { ReactNode } from 'react';

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="ru">
      <body>
        <header>
          <nav>
            <button className='fixed text-white-800 text-2xl px-3 py-2 ' onClick={() => { if (typeof window !== 'undefined') { window.history.back() } }}>↩</button>
          </nav>
        </header>
        <SessionProvider>
          <main className="flex min-h-screen flex-col items-start p-4">
            {children}
          </main>
        </SessionProvider>
      </body>
    </html>
  );
}
