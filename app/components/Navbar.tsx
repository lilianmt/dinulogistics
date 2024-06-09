'use client'
import React, { useEffect, useState } from "react";
import { motion, AnimatePresence, useScroll, useMotionValueEvent, easeInOut } from "framer-motion";
import { cn } from "@/utils/cn";
import Link from "next/link";
import { FiSmartphone } from "react-icons/fi";
import Image from "next/image";
import Logo from "@/public/dinu-logistics-logo.png";
import { Button } from "./ui/MovingBorder";

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
  })

  useMotionValueEvent(scrollYProgress, 'change', (current) => {
    // Check if current is not undefined and is a number
    if (typeof current === 'number') {
      let direction = current - scrollYProgress.getPrevious()!;

      if (scrollYProgress.get() < 0.03) {
        setNavState({
          visible: true,
          background: 'transparent',
          backdrop: 'none',
        });
      } else {
        if (direction < 0) {
          setNavState({
            visible: true,
            background: 'rgba(0, 0, 0, 0.08)',
            backdrop: 'blur(5px)',
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
                y: -100,
            }}
            animate={{
                y: navState.visible ? 0 : -100,
              opacity: navState.visible ? 1 : 0,
              backgroundColor: navState.background,
              backdropFilter: navState.backdrop,
            }}
            transition={{
                duration: 3,
                ease: [0.22, 1, 0.36, 1],
                type: 'spring',
                stiffness: 150,
                damping: 15  
            }}
            className={cn(
                'fixed flex w-screen top-0 z-10 items-center justify-between px-[9vw] py-4',
                className
            )}
            style={{ transition: 'background-color 0.5s ease, backdrop-filter 0.5s ease' }}
          >
            {/* *****************   Logo    ***************** */}
            <Image 
            src={ Logo }
            alt='Dinu Logistics logo'
            layout='fit'
            width={150}
            />

            {/* *****************   Links    ***************** */}
            <motion.div 
            className='flex items-center justify-end gap-10'>
              {navItems.map((navItem: any, idx: number) => (
              <Link
                  key={`link=${idx}`}
                  href={navItem.link}
                  className={cn(
                      'items-center flex gap-30 p-1 text-white hover:border-b-[1px]'
                  )}
              >
                  <span className='block sm:hidden'>{navItem.icon}</span>
                  <span className='hidden sm:block text-md'>{navItem.name}</span>
              </Link>
              ))}
              
              {/* *****************   Button    ***************** */}
              <motion.button
                whileTap={{ scale: 0.75, transition: {type: 'intertia'} }}
                className='box-border flex items-center px-4 py-2.5 gap-2 border border-white  rounded-[1.2rem] text-white transition hover:ease-in-out hover:backdrop-blur-[1px] hover:bg-brand-100 hover:bg-opacity-10 hover:shadow-md'
              >
                  <FiSmartphone className='h-5 w-5'/>
                  <motion.span className='text-nowrap'>800 800 9080</motion.span>
              </motion.button>
            </motion.div>
            </motion.div>
        </AnimatePresence>
  );
};
