'use client';

import { useSectionInView } from '@/lib/hooks';
import { motion } from 'framer-motion';
import React from 'react';

export default function Features() {
  const { ref } = useSectionInView('Solutions');

  return (
    <motion.section
      id="solutions"
      ref={ref}
      className="relative h-[500px] z-100 text-white top-0 left-0 text-xl"
    >
      Solutions
    </motion.section>
  );
}
