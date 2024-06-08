'use client'
import React, { useEffect, useState } from "react";
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from "framer-motion";
import { cn } from "@/utils/cn";
import Link from "next/link";
import { FiSmartphone } from "react-icons/fi";
import Image from "next/image";
import Logo from "@/public/dinu-logistics-logo.png";

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

  const [visible, setVisible] = useState(true);
  const [background, setBackground] = useState('transparent')
  const [backdrop, setBackdrop] = useState('none');

  useMotionValueEvent(scrollYProgress, 'change', (current) => {
    // Check if current is not undefined and is a number
    if (typeof current === 'number') {
      let direction = current - scrollYProgress.getPrevious()!;

      if (scrollYProgress.get() < 0.05) {
        setVisible(true);
        setBackground('transparent');
        setBackdrop('none');
      } else {
        if (direction < 0) {
          setVisible(true);
          setBackground('rgba(0, 0, 0, 0.08)');
          setBackdrop('blur(5px)');
        } else {
          setVisible(false);
        }
      }
    }
  });

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY === 0) {
        setBackground('transparent');
        setBackdrop('none');
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
                y: visible ? 0 : -100,
                opacity: visible ? 1 : 0,
                backgroundColor: background,
                backdropFilter: backdrop,
            }}
            transition={{
                duration: 0.5,
                ease: 'easeInOut'
            }}
            className={cn(
                'fixed flex w-screen top-0 z-10 items-center justify-between px-[10vw] py-3',
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
            <motion.div className='flex items-center justify-end gap-10'>
              {navItems.map((navItem: any, idx: number) => (
              <Link
                  key={`link=${idx}`}
                  href={navItem.link}
                  className={cn(
                      'items-center flex gap-30 p-1 text-white hover:border-b-[2px]'
                  )}
              >
                  <span className='block sm:hidden'>{navItem.icon}</span>
                  <span className='hidden sm:block text-md'>{navItem.name}</span>
              </Link>
              ))}
              
              {/* *****************   Button    ***************** */}
              <motion.button className='flex items-center px-4 py-2.5 gap-2 border border-white rounded-2xl text-white transition hover:ease-in-out hover:bg-brand-900 hover:border-brand-900'
              >
                  <FiSmartphone className='h-5 w-5'/>
                  <motion.span className='text-nowrap'>800 800 9080</motion.span>
              </motion.button>
            </motion.div>
            </motion.div>
        </AnimatePresence>
  );
};
