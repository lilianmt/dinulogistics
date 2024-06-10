'use client'
import React, { useEffect, useState } from "react";
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from "framer-motion";
import { cn } from "@/utils/cn";
import Link from "next/link";
import { FiSmartphone } from "react-icons/fi";
import Image from "next/image";
import Logo from "@/public/dinu-logistics-logo.png";
import { HiMenuAlt3 } from "react-icons/hi";
import { LuShrink } from "react-icons/lu";



export const Navbar = ({
  navItems,
  className,
}: {
  navItems: {
    name: string;
    link: string;
    icon?: JSX.Element;
  }[];
  className?: string;
}) => {
  const { scrollYProgress } = useScroll();

  const [navState, setNavState] = useState({
    visible: true,
    background: 'transparent',
    backdrop: 'none',
    shadow: 'none'
  })
  const [open, setOpen] = useState(false);
  const toggleOpen = () => setOpen((o) => !o);


  useMotionValueEvent(scrollYProgress, 'change', (current) => {
    // Check if current is not undefined and is a number
    if (typeof current === 'number') {
      let direction = current - scrollYProgress.getPrevious()!;

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
            background: 'rgba(0, 0, 0, 0.08)',
            backdrop: 'blur(6px)',
            shadow: '0 3px 15px 1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)',
          });
        } else {
          setNavState((prevState) => ({
            ...prevState,
            visible: false
          }));
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
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  
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
              'fixed w-full sm:w-[80vw] md:w-[70vw] flex justify-between items-center rounded-2xl px-10 sm:top-6 sm:py-4 md:px-15 py-4 md:py-4 md:top-6 z-10 overflow-hidden',
              className
            )}
            style={{ transition: 'background-color 0.5s ease, backdrop-filter 0.5s ease'}}
          >
            {/* *****************   Logo    ***************** */}
            <Image 
              src={ Logo }
              alt='Dinu Logistics logo'
              width={150}
              style={{
                padding: 0,
                margin: 0
              }}
            />
            
            {/* *****************   Links    ***************** */}
            <motion.div 
              className='flex w-2/3 items-center justify-end space-x-8 font-normal tracking-wider'>
              {navItems.map((navItem: any, idx: number) => (
                <Link
                  key={`link=${idx}`}
                  href={navItem.link}
                  className={cn(
                      'flex text-white pb-1 hover:border-b-[2px]'
                  )}
                >
                  <span className='block sm:hidden'>{navItem.icon}</span>
                  <span className='hidden md:block text-md'>{navItem.name}</span>
                </Link>
              ))}
              
              {/* *****************   Button    ***************** */}
              <motion.button
                type="button"
                className='group relative inline-flex items-center justify-center px-4 py-2.5 gap-2 bg-transparent backdrop-blur-sm no-underline border border-white rounded-xl font-normal text-white tracking-wider transition ease-in-out hover:transition hover:ease-in-out hover:backdrop-blur-lg hover:text-prime-200 hover:border-prime-400 hover:border-opacity-50 ' aria-expanded='false'>
                  <span className="absolute inset-0 overflow-hidden rounded-xl">
                  <span className="absolute inset-0 rounded-xl bg-[image:radial-gradient(100%_80%_at_50%_0%,rgba(56,189,248,0.6)_0%,rgba(56,189,248,0)_80%)] opacity-0 transition-opacity duration-300 group-hover:opacity-80" />
                  </span>
                  <FiSmartphone className='h-5 w-5'/>
                  <motion.span className='text-nowrap'>800 800 9080</motion.span>
              </motion.button>
            </motion.div>
            </motion.div>
        </AnimatePresence>
  );
};
