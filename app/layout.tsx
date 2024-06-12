import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { Navbar } from '@/components/Navbar';

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
        <nav className="fixed z-[999] flex flex-col w-full items-center">
          <Navbar
            navItems={[
              { name: 'About', link: '/' },
              { name: 'Safety', link: '/' },
              { name: 'Contacts', link: '/' },
            ]}
          />
        </nav>
        {children}
      </body>
    </html>
  );
}
