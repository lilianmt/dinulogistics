import { motion } from 'framer-motion';
import React from 'react';
import { FiSmartphone } from 'react-icons/fi';

export default function NavButton() {
  return (
    <motion.button
      className="group relative flex items-center justify-center py-4 px-5 gap-2 bg-transparent outline-none rounded-xl border border-white/75 font-normal text-lg text-white tracking-wider backdrop-blur-sm transition-all ease-in-out duration-300 hover:text-prime-200 hover:border-white/75 hover:rounded-3xl hover:shadow-lg hover:shadow-prime-600/[0.3]  active:rounded-3xl will-change-transform origin-center;"
      style={{ backfaceVisibility: 'hidden' }}
    >
      <motion.span className="absolute inset-0 overflow-hidden rounded-xl">
        <motion.span className="absolute inset-0 rounded-2xl bg-[image:radial-gradient(80%_60%_at_50%_0%,rgba(56,189,248,0.6)_10%,rgba(56,189,248,0)_100%)] opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
      </motion.span>
      <FiSmartphone className="h-6 w-6 group-hover:text-prime-300" />
      <motion.span
        className="relative text-nowrap text-white group-hover:text-shadow-white will-change-transform"
        style={{ textRendering: 'optimizeLegibility' }}
      >
        800 800 9080
      </motion.span>
    </motion.button>
  );
}
