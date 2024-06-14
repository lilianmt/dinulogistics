import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/Navbar';
import ActiveSectionContextProvider from '@/context/active-section-context';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Dinu Logistics',
  description: 'Reliable logistics brokerage.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <ActiveSectionContextProvider>
          <nav className="fixed z-[999] flex flex-col w-full items-center">
            <Navbar />
          </nav>
          {children}
        </ActiveSectionContextProvider>
      </body>
    </html>
  );
}
