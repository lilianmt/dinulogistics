'use client';

import React from 'react';
import SectionHeading from './ui/SectionHeading';
import { motion } from 'framer-motion';
import { useSectionInView } from '@/lib/hooks';

export default function Contact() {
  const { ref } = useSectionInView('Contact');

  return (
    <motion.section id="contact" ref={ref} className="h-[1000px] bg-slate-900">
      <SectionHeading>Contact me</SectionHeading>
    </motion.section>
  );
}
