import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/Navbar';
import ActiveSectionContextProvider from '@/context/active-section-context';
import { Toaster } from 'react-hot-toast';
import Footer from '@/components/Footer';

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
    <html lang="en" className="!scroll-smooth">
      <body className="relative bg-black">
        <ActiveSectionContextProvider>
          <nav className="fixed z-[999] flex flex-col w-full items-center">
            <Navbar />
          </nav>
          {children}
          <Footer />

          <Toaster position="bottom-right" reverseOrder={false} />
        </ActiveSectionContextProvider>
      </body>
    </html>
  );
}
