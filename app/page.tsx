'use client';
import Hero from '@/components/Hero';
import Solutions from '@/components/Solutions';
import Contact from '@/components/Contact';
import { motion } from 'framer-motion';

export default function Home() {
  return (
    <motion.main className="flex flex-col items-center overflow-hidden">
      <Hero />
      <Solutions />
      <Contact />
    </motion.main>
  );
}
