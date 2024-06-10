'use client';
import React, { useEffect, useState } from "react";
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from "framer-motion";
import { cn } from "@/utils/cn";
import Link from "next/link";
import { FiSmartphone } from "react-icons/fi";
import Image from "next/image";
import Logo from "@/public/dinu-logistics-logo.png";
import {  IoClose } from "react-icons/io5";
import { TbMenuDeep } from "react-icons/tb";
import { BackgroundGradientAnimation } from "./ui/BackgroundGradient";

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
}

export const Navbar: React.FC<NavbarProps> = ({ navItems, className }) => {
  const { scrollYProgress } = useScroll();

  const [navState, setNavState] = useState<NavState>({
    visible: true,
    background: 'transparent',
    backdrop: 'none',
    shadow: 'none'
  });

  const [open, setOpen] = useState(false);
  const toggleOpen = () => setOpen((prev) => !prev);

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
            shadow: '0 5px 5px 5px rgb(0 0 0 / 0.05), 0 5px 80px -1px rgb(0 0 0 / 0.0.5)',
          });
        } else {
          setNavState((prevState) => ({
            ...prevState,
            visible: false
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
          visible: false
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
          damping: 8
        }}
        className={cn(
          'fixed z-10 w-[90vw] flex justify-between items-center rounded-2xl top-6 px-10 py-5 sm:top-6 sm:px-15 sm:py-5 sm:mx-5 md:py-5 md:top-6 md:px-15 lg:w-[65vw] overflow-hidden',
          className
        )}
        style={{ transition: 'background-color 0.5s ease, backdrop-filter 0.5s ease' }}
      >
        {/* Logo */}
        <Image
          src={Logo}
          alt='Dinu Logistics logo'
          width={150}
          style={{
            padding: 0,
            margin: 0
          }}
        />

        {/* Links */}
        <motion.div className='hidden md:flex w-2/3 items-center justify-end space-x-8 uppercase text-sm font-normal tracking-widest'>
          {navItems.map((navItem, idx) => (
            <Link
              key={`link=${idx}`}
              href={navItem.link}
              className={cn(
                'flex text-white pb-1 hover:text-prime-300 hover:border-b-[1px] hover:border-prime-300'
              )}
            >
              <motion.span className='hidden md:block text-md'>{navItem.name}</motion.span>
            </Link>
          ))}

          {/* Button */}
          <motion.button
            type="button"
            className='group relative inline-flex items-center justify-center px-4 py-2.5 gap-2 bg-transparent backdrop-blur-sm no-underline border border-white rounded-xl font-normal text-white tracking-wider transition ease-in-out hover:transition hover:ease-in-out hover:backdrop-blur-lg hover:text-prime-200 hover:border-prime-400 hover:border-opacity-50 '
            aria-expanded='false'>
            <motion.span className="absolute inset-0 overflow-hidden rounded-xl">
              <motion.span className="absolute inset-0 rounded-xl bg-[image:radial-gradient(100%_80%_at_50%_0%,rgba(56,189,248,0.6)_0%,rgba(56,189,248,0)_80%)] opacity-0 transition-opacity duration-300 group-hover:opacity-80" />
            </motion.span>
            <FiSmartphone className='h-5 w-5' />
            <motion.span className='text-nowrap'>800 800 9080</motion.span>
          </motion.button>
        </motion.div>

        {/* Hamburger Menu Icon */}
        <motion.div className='md:hidden'>
          <motion.button
            onClick={toggleOpen} className="text-white">
            {open ? <IoClose className="h-8 w-8" /> : <TbMenuDeep className="h-8 w-8" />}
          </motion.button>
        </motion.div>
      </motion.div>

      {/* Mobile Menu */}
      <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0, x: 200, y: 9 }}
          animate={{ opacity: 1, x: 0, y: 9 }}
          exit={{ opacity: 0, x: 200, y: 9 }}
          transition={{
            duration: 3,
            ease: [0.22, 1, 0.36, 1],
            type: 'spring',
            stiffness: 100,
            damping: 10,
            mass: 0.2
          }}
          className='group absolute z-10 w-contain h-contain items-center px-12 py-4 right-[21vw] md:hidden overflow-hidden text-center text-white bg-black/25 rounded-2xl backdrop-blur-md hover:py-[15px] hover:px-[47px] hover:border hover:border-prime-200/25' >
            <BackgroundGradientAnimation/>
          {navItems.map((navItem, idx) => (
            <Link
              key={`mobile-link=${idx}`}
              href={navItem.link}
              className={cn(
                'block uppercase tracking-wider font-normal text-base py-6 border-b border-white/35 hover:text-prime-200 hover:border-prime-200'
              )}
              onClick={() => setOpen(false)}
            >
              {navItem.name}
            </Link>
          ))}
          <motion.button
            type="button"
            className='relative inline-flex items-center justify-center mt-10 mb-6 px-4 py-2.5 gap-2 bg-transparent no-underline border border-white rounded-xl font-normal text-white tracking-wider transition ease-in-out hover:transition hover:ease-in-out hover:text-white hover:border-prime-200 '
            aria-expanded='false'>
            <motion.span className="absolute inset-0 overflow-hidden rounded-xl">
              <motion.span className="absolute inset-0 rounded-xl bg-[image:radial-gradient(80%_80%_at_50%_0%,rgba(56,189,248,0.6)_0%,rgba(56,189,248,0)_80%)] opacity-0 transition-opacity duration-300 hover:opacity-80" />
            </motion.span>
            <FiSmartphone className='h-5 w-5' />
            <motion.span className='text-nowrap'>800 800 9080</motion.span>
          </motion.button>
        </motion.div>
        
      )}
      </AnimatePresence>
    </AnimatePresence>
  );
};
