'use client';
import Hero from '@/components/Hero';
import Solutions from '@/components/Solutions';
import Contact from '@/components/Contact';
import { motion } from 'framer-motion';
import About from '@/components/About';

export default function Home() {
  return (
    <motion.main className="flex flex-col items-center overflow-hidden">
      <Hero />
      <About />
      <Solutions />
      <Contact />
    </motion.main>
  );
}
