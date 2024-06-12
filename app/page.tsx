import { Navbar } from '@/components/Navbar';
import Hero from '@/components/Hero';
import Features from '@/components/Features';
import QuoteForm from '@/components/QuoteForm';
import { motion } from 'framer-motion';

export default function Home() {
  return (
    <main className="relative justify-between items-center w-full h-full bg-black overflow-hidden">
      <Hero />
      <QuoteForm />
      <Features />
    </main>
  );
}
