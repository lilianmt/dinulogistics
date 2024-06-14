'use client';

import { useSectionInView } from '@/lib/hooks';
import React from 'react';

export default function Features() {
  const { ref } = useSectionInView('Solutions');

  return (
    <div
      id="Solutions"
      ref={ref}
      className="h-[500px] z-100 text-white bg-black-200 top-0 left-0 text-xl"
    >
      Solutions
    </div>
  );
}
