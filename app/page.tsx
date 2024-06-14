'use client';
import Hero from '@/components/Hero';
import Solutions from '@/components/Solutions';
import Contact from '@/components/Contact';
import { motion } from 'framer-motion';

export default function Home() {
  return (
    <motion.main className="relative justify-between items-center w-full h-full bg-black overflow-hidden">
      <Hero />
      <Solutions />
      <Contact />
    </motion.main>
  );
}
