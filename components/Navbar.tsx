'use client';
import React, { useEffect, useState, useRef, useCallback } from 'react';
import {
  motion,
  AnimatePresence,
  useScroll,
  useMotionValueEvent,
} from 'framer-motion';
import { cn } from '@/utils/cn';
import Link from 'next/link';
import { FiSmartphone } from 'react-icons/fi';
import Image from 'next/image';
import Logo from '@/public/dinu-logistics-logo.png';
import { IoClose } from 'react-icons/io5';
import { TbMenuDeep } from 'react-icons/tb';
import { BackgroundGradientAnimation } from './ui/BackgroundGradient';

interface NavItem {
  name: string;
  link: string;
  icon?: JSX.Element;
}

interface NavbarProps {
  navItems: NavItem[];
  className?: string;
}

interface NavState {
  visible: boolean;
  background: string;
  backdrop: string;
  shadow: string;
}

const transition = {
  type: 'spring',
  mass: 0.5,
  damping: 11.5,
  stiffness: 100,
  restDelta: 0.001,
  restSpeed: 0.001,
};

export const Navbar: React.FC<NavbarProps> = ({ navItems, className }) => {
  const { scrollYProgress } = useScroll();
  const [navState, setNavState] = useState<NavState>({
    visible: true,
    background: 'transparent',
    backdrop: 'none',
    shadow: 'none',
  });

  const [open, setOpen] = useState(false);
  const toggleOpen = () => setOpen((prev) => !prev);

  const hamburgerRef = useRef<HTMLButtonElement | null>(null);
  const [menuPosition, setMenuPosition] = useState<number>(0);

  const updateMenuPosition = useCallback(() => {
    if (hamburgerRef.current) {
      const rect = hamburgerRef.current.getBoundingClientRect();
      setMenuPosition(rect.right);
    }
  }, []);

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
  }, [open]);

  useEffect(() => {
    if (hamburgerRef.current) {
      const rect = hamburgerRef.current.getBoundingClientRect();
      setMenuPosition(rect.right);
    }
  }, [open]);

  useMotionValueEvent(scrollYProgress, 'change', (current) => {
    if (typeof current === 'number') {
      const direction = current - scrollYProgress.getPrevious()!;

      if (scrollYProgress.get() < 0.01) {
        setNavState({
          visible: true,
          background: 'transparent',
          backdrop: 'none',
          shadow: 'none',
        });
      } else {
        if (direction < 0) {
          setNavState({
            visible: true,
            background: 'rgba(109, 214, 255, 0.1)',
            backdrop: 'blur(6px)',
            shadow:
              '0 5px 5px 5px rgb(0 0 0 / 0.05), 0 5px 80px -1px rgb(0 0 0 / 0.0.5)',
          });
        } else {
          setNavState((prevState) => ({
            ...prevState,
            visible: false,
          }));
          if (open) {
            setOpen(false);
          }
        }
      }
    }
  });

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY === 0) {
        setNavState({
          visible: true,
          background: 'transparent',
          backdrop: 'none',
          shadow: 'none',
        });
      } else {
        setNavState((prevState) => ({
          ...prevState,
          visible: false,
        }));
        if (open) {
          setOpen(false);
        }
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [open]);

  return (
    <AnimatePresence>
      <motion.div
        initial={{
          opacity: 1,
          y: -250,
        }}
        animate={{
          y: navState.visible ? 0 : -50,
          opacity: navState.visible ? 1 : 0,
          backgroundColor: navState.background,
          backdropFilter: navState.backdrop,
          boxShadow: navState.shadow,
        }}
        transition={{
          duration: 0.1,
          ease: [0.22, 1, 0.36, 1],
          type: 'spring',
          stiffness: 100,
          damping: 14,
        }}
        className={cn(
          'fixed z-[200] w-[90vw] flex justify-between items-center rounded-2xl top-6 px-10 py-5 sm:top-6 sm:px-15 sm:py-5 sm:mx-5 md:py-5 md:top-6 md:px-15 lg:w-[75vw] overflow-hidden ',
          className
        )}
        style={{
          transition: 'background-color 0.5s ease, backdrop-filter 0.5s ease',
        }}
      >
        {/* Logo */}
        <Image
          src={Logo}
          alt="Dinu Logistics logo"
          width={150}
          style={{
            padding: 0,
            margin: 0,
          }}
        />

        {/* Links */}
        <motion.div className="hidden md:flex w-2/3 items-center justify-end space-x-16 text-base font-light tracking-widest">
          {navItems.map((navItem, idx) => (
            <Link
              key={`link=${idx}`}
              href={navItem.link}
              className={cn(
                'flex text-white py-3 transition-all ease-in-out duration-50 hover:text-prime-500 hover:text-shadow-white hover:border-b-[1px] hover:border-prime-300'
              )}
            >
              <motion.span className="hidden md:block text-md">
                {navItem.name}
              </motion.span>
            </Link>
          ))}

          {/* Button */}

          <motion.button
            className="group relative flex items-center justify-center py-4 px-6 gap-2 bg-transparent outline-none rounded-2xl border border-white/75 font-normal text-base text-white tracking-wider backdrop-blur-sm transition-all hover:text-prime-200 hover:border-prime-400/50 hover:rounded-3xl active:rounded-3xl will-change-transform origin-center;"
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
        </motion.div>

        {/* Hamburger Menu Icon */}
        <motion.div className="md:hidden">
          <motion.button
            ref={hamburgerRef}
            onClick={toggleOpen}
            className="text-white transition-all ease-in-out duration-10 hover:text-prime-200 hover:scale-110"
          >
            {open ? (
              <IoClose className="h-8 w-8" />
            ) : (
              <TbMenuDeep className="h-8 w-8" />
            )}
          </motion.button>
        </motion.div>
      </motion.div>

      {/* Mobile Menu */}
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
            className="absolute z-[400] w-contain h-contain items-center px-16 py-6 top-2 right-[20vw] md:hidden overflow-hidden text-white text-center  bg-prime-900/75 rounded-2xl backdrop-blur-sm hover:py-[23px] hover:px-[63px] hover:border border-white/35 hover:border-prime-200/20"
            style={{
              right: `calc(100vw + 2rem - ${menuPosition}px)`,
            }}
          >
            <BackgroundGradientAnimation />
            {navItems.map((navItem, idx) => (
              <Link
                key={`mobile-link=${idx}`}
                href={navItem.link}
                className={cn(
                  'flex flex-col items-center uppercase tracking-wider font-normal text-base py-8 border-b transition-all border-prime-100/50 hover:border-prime-100 hover:text-shadow-white'
                )}
                onClick={() => setOpen(false)}
              >
                {navItem.name}
              </Link>
            ))}
            <motion.button
              className="group relative flex items-center justify-center mt-12 mb-6 h-[4rem] w-[13rem] gap-2 bg-transparent outline-none rounded-2xl border border-white/75 font-normal text-lg text-white tracking-wider backdrop-blur-sm transition-all hover:text-prime-200 hover:border-prime-400/50 hover:rounded-3xl active:rounded-3xl will-change-transform origin-center;"
              style={{ backfaceVisibility: 'hidden' }}
            >
              <motion.span className="absolute inset-0 overflow-hidden rounded-xl">
                <motion.span className="absolute inset-0 rounded-2xl bg-[image:radial-gradient(80%_60%_at_50%_0%,rgba(56,189,248,0.6)_10%,rgba(56,189,248,0)_100%)] opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
              </motion.span>
              <FiSmartphone className="h-6 w-6 group-hover:text-prime-300" />
              <motion.span
                className="relative text-white group-hover:text-shadow-white will-change-transform"
                style={{ textRendering: 'optimizeLegibility' }}
              >
                800 800 9080
              </motion.span>
            </motion.button>
          </motion.div>
        )}
      </AnimatePresence>
    </AnimatePresence>
  );
};
