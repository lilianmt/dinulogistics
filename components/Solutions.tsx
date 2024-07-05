'use client';

import { useSectionInView } from '@/lib/hooks';
import { motion } from 'framer-motion';
import React from 'react';
import DottedBackground from './ui/dotted-background';
import SectionHeading from './ui/SectionHeading';
import { BentoGrid, BentoGridItem } from './ui/bento-grid';
import { gridItems } from '@/lib/data';

export default function Features() {
  const { ref } = useSectionInView('Solutions');

  return (
    <motion.section
      id="solutions"
      ref={ref}
      className="relative w-full h-full bg-prime-900"
    >
      <DottedBackground />
      {/* //*****************    SECTION TITLES    ***************** */}
      <div className="relative">
        <p className="text-prime-200/75 text-sm text-center mt-20 mb-5 font-normal uppercase tracking-[5px]">
          Service Solutions
        </p>
        <SectionHeading>
          {' '}
          <span className="text-5xl font-light">Transportation Management</span>
        </SectionHeading>
      </div>

      <BentoGrid>
        {gridItems.map((item, i) => (
          <BentoGridItem
            id={item.id}
            key={i}
            title={item.title}
            description={item.description}
            className={item.className}
            img={item.img}
            imgClassName={item.imgClassName}
          />
        ))}
      </BentoGrid>
    </motion.section>
  );
}
