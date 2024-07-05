'use client';
import React, { useEffect, useState } from 'react';
import {
  motion,
  AnimatePresence,
  useScroll,
  useMotionValueEvent,
} from 'framer-motion';
import { cn } from '@/lib/utils';
import { links } from '@/lib/data';
import Link from 'next/link';
import Image from 'next/image';
import Logo from '@/public/dinu-logistics-logo.png';
import { useActiveSectionContext } from '@/context/active-section-context';
import MobileMenu from './ui/MobileMenu';
import NavButton from './ui/NavButton';

interface NavState {
  visible: boolean;
  background: string;
  backdrop: string;
  shadow: string;
}

export default function Navbar() {
  const { scrollYProgress } = useScroll();
  const [navState, setNavState] = useState<NavState>({
    visible: true,
    background: 'rgba(23, 41, 48, 0)',
    backdrop: 'none',
    shadow: 'none',
  });

  const handleLogoClick = () => {
    setActiveSection('Home');
    setTimeOfLastClick(Date.now());
    document.getElementById('home')?.scrollIntoView({ behavior: 'smooth' });
    window.history.pushState(null, '', '/');
  };

  const [open, setOpen] = useState(false);
  const [menuPosition, setMenuPosition] = useState<number>(0);

  const { activeSection, setActiveSection, setTimeOfLastClick } =
    useActiveSectionContext();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY === 0) {
        setNavState({
          visible: true,
          background: 'rgba(23, 41, 48, 0)',
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

  useMotionValueEvent(scrollYProgress, 'change', (current) => {
    if (typeof current === 'number') {
      const direction = current - scrollYProgress.getPrevious()!;

      if (scrollYProgress.get() < 0.01) {
        setNavState({
          visible: true,
          background: 'rgba(23, 41, 48, 0)',
          backdrop: 'none',
          shadow: 'none',
        });
      } else {
        if (direction < 0) {
          setNavState({
            visible: true,
            background: 'rgba(23, 41, 48, 0.5)',
            backdrop: 'blur(14px)',
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

  return (
    <AnimatePresence>
      <motion.header
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
          duration: 0.5,
          ease: [0.22, 1, 0.36, 1],
          type: 'tween',
          stiffness: 150,
        }}
        className="fixed z-[200] w-full flex flex-row justify-between items-center sm:rounded-2xl top-4 px-12 h-[6rem] sm:max-w-[95vw]"
        style={{
          transition: 'background-color 0.5s ease, backdrop-filter 0.5s ease',
        }}
      >
        {/************************************** Logo **************************************/}
        <motion.a className="block cursor-pointer" onClick={handleLogoClick}>
          <Image src={Logo} alt="Logo" width={175} />
        </motion.a>

        <motion.nav className="hidden md:flex-row md:flex items-center justify-end text-lg font-normal transition-all ease-in-out duration-300 tracking-widest">
          {/*********************************** Links ***********************************/}
          <motion.ul className="flex flex-nowrap gap-12">
            {links
              .filter((link) => link.name !== 'Home')
              .map((link) => (
                <motion.li
                  key={link.hash}
                  className="flex items-center justify-center relative transition-all ease-in-out "
                >
                  <Link
                    href={link.hash}
                    onClick={() => {
                      setActiveSection(link.name);
                      setTimeOfLastClick(Date.now());
                    }}
                    className={cn(
                      'flex text-white py-3 transition-all ease-in-out duration-10 hover:text-prime-200 hover:text-shadow-white hover:border-b-[1px] hover:border-prime-200',
                      {
                        'text-prime-300 hover:text-white':
                          activeSection === link.name,
                      }
                    )}
                  >
                    <motion.span className="hidden md:block text-md">
                      {link.name}
                    </motion.span>
                    {link.name === activeSection && (
                      <motion.span
                        className="text-prime-400 bg-red"
                        layoutId="activeSection"
                        transition={{
                          type: 'spring',
                          stiffness: 380,
                          damping: 30,
                        }}
                      ></motion.span>
                    )}
                  </Link>
                </motion.li>
              ))}
            {/************************************** Button **************************************/}
            {/* <NavButton /> */}
          </motion.ul>
        </motion.nav>

        {/********************************* Mobile Menu **********************************/}
        <MobileMenu
          open={open}
          setOpen={setOpen}
          menuPosition={menuPosition}
          setMenuPosition={setMenuPosition}
        />
      </motion.header>
    </AnimatePresence>
  );
}
