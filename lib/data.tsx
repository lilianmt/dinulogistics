import React from 'react';

export const links = [
  {
    name: 'Home',
    hash: '#home',
  },
  {
    name: 'About',
    hash: '#about',
  },
  {
    name: 'Solutions',
    hash: '#solutions',
  },
  {
    name: 'Contact',
    hash: '#contact',
  },
] as const;

export const gridItems = [
  {
    id: 1,
    title: 'Full Truckload (FTL)',
    description:
      'We provide our FTL services to businesses that have vast quantities of shipments that will require an entire truck for transportation. We ensure direct routes, minimal handling, and faster delivery times.',
    className: 'md:col-span-2',
    imgClassName: 'relative w-full h-full',
    img: '/ftl.jpg',
  },
  {
    id: 2,
    title: 'Less Than Truckload (LTL)',
    description:
      'LTL is a cost-effective way for smaller freight. We consolidate loads from multiple customers. Suits businesses with needs for flexibility and speed.',

    className: 'md:col-span-1',
    imgClassName: 'relative w-full h-full',
    img: '/Ltl.jpg',
  },
  {
    id: 3,
    title: 'Expedited Freight',
    description:
      'Once the clock is ticking, our expedited freight services ensure swift delivery. Your urgent shipment will be given priority to meet short deadlines.',
    className: 'md:col-span-1',
    imgClassName: 'relative w-full h-full',
    img: '/expfr.jpg',
  },
  {
    id: 4,
    title: 'Specialized Freight Solutions',
    description:
      'We handle all of the specialized transportation requirements about oversized or special, delicate kinds of cargo. Our specialized services ensure your freight is handled with top-notch care and expertise.',
    className: 'md:col-span-2',
    imgClassName: 'relative w-full h-full',
    img: '/specializedfr.jpg',
  },
];
