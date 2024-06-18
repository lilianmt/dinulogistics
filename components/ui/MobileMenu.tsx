'use client';
import React, { useEffect, useRef, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import { IoClose } from 'react-icons/io5';
import { TbMenuDeep } from 'react-icons/tb';
import { BackgroundGradientAnimation } from './background-gradient';
import { cn } from '@/lib/utils';
import { links } from '@/lib/data';
import { useActiveSectionContext } from '@/context/active-section-context';
import NavButton from './NavButton';

interface MobileMenuProps {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  menuPosition: number;
  setMenuPosition: React.Dispatch<React.SetStateAction<number>>;
}

const MobileMenu: React.FC<MobileMenuProps> = ({
  open,
  setOpen,
  menuPosition,
  setMenuPosition,
}) => {
  const hamburgerRef = useRef<HTMLButtonElement | null>(null);
  const { activeSection, setActiveSection, setTimeOfLastClick } =
    useActiveSectionContext();

  const toggleOpen = useCallback(() => setOpen((prev) => !prev), [setOpen]);

  const updateMenuPosition = useCallback(() => {
    if (hamburgerRef.current) {
      const rect = hamburgerRef.current.getBoundingClientRect();
      setMenuPosition(rect.right);
    }
  }, [setMenuPosition]);

  useEffect(() => {
    updateMenuPosition();
    window.addEventListener('resize', updateMenuPosition);
    return () => window.removeEventListener('resize', updateMenuPosition);
  }, [updateMenuPosition]);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        hamburgerRef.current &&
        !hamburgerRef.current.contains(event.target as Node) &&
        open
      ) {
        setOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [open, setOpen]);

  return (
    <>
      <motion.div className="md:hidden">
        <motion.button
          ref={hamburgerRef}
          onClick={toggleOpen}
          className="text-white transition-all ease-in-out duration-10 hover:text-prime-200 hover:scale-110"
        >
          {open ? (
            <IoClose className="h-9 w-9" />
          ) : (
            <TbMenuDeep className="h-9 w-9" />
          )}
        </motion.button>
      </motion.div>
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, x: 200, y: 9, scale: 0.4 }}
            animate={{ opacity: 1, x: 0, y: 9, scale: 1 }}
            exit={{ opacity: 0, x: 200, y: 9, scale: 0.4 }}
            transition={{
              duration: 5,
              ease: [0.22, 1, 0.36, 1],
              type: 'spring',
              stiffness: 80,
              damping: 8,
              mass: 0.5,
            }}
            className="absolute z-[900] w-contain h-contain items-center px-14 py-6 top-2 right-[20vw] md:hidden overflow-hidden text-center bg-prime-900/90 rounded-2xl hover:py-[23px] hover:px-[55px] hover:border border-white/25 hover:border-prime-200/20"
            style={{
              right: `calc(100vw + 2rem - ${menuPosition}px)`,
            }}
          >
            {links
              .filter((link) => link.name !== 'Home')
              .map((link) => (
                <Link
                  key={link.hash}
                  href={link.hash}
                  className={cn(
                    'flex flex-col text-white/75 items-center tracking-wider font-medium text-xl py-8 border-b transition-all border-prime-100/50 hover:text-white/1 hover:border-prime-200/100 hover:text-white/100',
                    {
                      'text-prime-300 border-white hover:border-prime-300 hover:text-white':
                        activeSection === link.name,
                    }
                  )}
                  onClick={() => {
                    setActiveSection(link.name);
                    setTimeOfLastClick(Date.now());
                    setOpen(false);
                  }}
                >
                  {link.name}
                </Link>
              ))}
            <motion.div className="mt-12 mb-6">
              <NavButton />
              <BackgroundGradientAnimation />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default MobileMenu;
