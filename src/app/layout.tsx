import { cn } from '@/lib/utils';
import './globals.css';
import type { Metadata } from 'next';
import { Roboto } from 'next/font/google';

const roboto = Roboto({
  subsets: ['latin'],
  weight: ['400', '500', '700', '900'],
});

export const metadata: Metadata = {
  title: 'Cluj TRUE ALPHA',
  description: 'Grupul investitorilor de retail care se intalnesc in persoana.',
};

// add className="light/dark" to <html> tag to switch color scheme
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ro">
      <body className={cn('min-h-screen antialiased grainy', roboto.className)}>
        {children}
      </body>
    </html>
  );
}
