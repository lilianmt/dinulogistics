'use client';
import React, {
  useEffect,
  useState,
  useRef,
  useCallback,
  useContext,
} from 'react';
import {
  motion,
  AnimatePresence,
  useScroll,
  useMotionValueEvent,
} from 'framer-motion';
import { cn } from '@/lib/utils';
import { links } from '@/lib/data';
import Link from 'next/link';
import { FiSmartphone } from 'react-icons/fi';
import Image from 'next/image';
import Logo from '@/public/dinu-logistics-logo.png';
import { IoClose } from 'react-icons/io5';
import { TbMenuDeep } from 'react-icons/tb';
import { BackgroundGradientAnimation } from './ui/background-gradient';
import { useActiveSectionContext } from '@/context/active-section-context';

// interface NavItem {
//   name: string;
//   link: string;
//   icon?: JSX.Element;
// }

// interface NavbarProps {
//   navItems: NavItem[];
//   className?: string;
// }

interface NavState {
  visible: boolean;
  background: string;
  backdrop: string;
  shadow: string;
}

// const transition = {
//   type: 'spring',
//   mass: 0.5,
//   damping: 11.5,
//   stiffness: 100,
//   restDelta: 0.001,
//   restSpeed: 0.001,
// };

export default function Navbar() {
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

  const { activeSection, setActiveSection, setTimeOfLastClick } =
    useActiveSectionContext();

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
            background: 'rgba(23, 41, 48, 0.2)',
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
          duration: 0.1,
          ease: [0.22, 1, 0.36, 1],
          type: 'spring',
          stiffness: 100,
          damping: 14,
        }}
        className="fixed z-[200] w-full flex flex-row justify-between items-center rounded-2xl top-6 px-10 py-5 sm:top-6 sm:px-15 sm:py-5 sm:mx-5 md:py-5 md:top-6 md:px-15 lg:w-[75vw] overflow-hidden "
        style={{
          transition: 'background-color 0.5s ease, backdrop-filter 0.5s ease',
        }}
      >
        {/************************************** Logo **************************************/}
        <motion.a className="block" href="#home">
          <Image src={Logo} alt="Logo" width={150} />
        </motion.a>

        <motion.nav className="hidden md:flex-row md:flex w-2/3 items-center justify-end text-lg font-normal transition-all ease-in-out duration-300 tracking-widest">
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

            <motion.button
              className="group relative flex items-center justify-center py-4 px-5 gap-2 bg-transparent outline-none rounded-2xl border border-white/75 font-normal text-lg text-white tracking-wider backdrop-blur-sm transition-all ease-in-out duration-300 hover:text-prime-200 hover:border-white/75 hover:rounded-3xl hover:shadow-lg hover:shadow-prime-600/[0.3]  active:rounded-3xl will-change-transform origin-center;"
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
          </motion.ul>
        </motion.nav>

        {/*********************************** Hamburger Icon ***********************************/}
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
      </motion.header>
      {/********************************* Mobile Menu **********************************/}
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
            className="absolute z-[400] w-contain h-contain items-center px-14 py-6 top-2 right-[20vw] md:hidden overflow-hidden text-center bg-prime-900/75 rounded-2xl backdrop-blur-sm hover:py-[23px] hover:px-[55px] hover:border border-white/25 hover:border-prime-200/20"
            style={{
              right: `calc(100vw + 2rem - ${menuPosition}px)`,
            }}
          >
            <BackgroundGradientAnimation />
            {links
              .filter((link) => link.name !== 'Home')
              .map((link) => (
                <Link
                  key={link.hash}
                  href={link.hash}
                  className={cn(
                    'flex flex-col text-white/75 items-center tracking-wider font-normal text-lg py-8 border-b transition-all border-prime-100/50 hover:text-white/1 hover:border-prime-200/100 hover:text-white/100',
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
            <motion.button
              className="group relative flex items-center justify-center mt-12 mb-6 py-4 px-6 gap-2 bg-transparent outline-none rounded-2xl border border-white/75 font-normal text-lg text-white tracking-wider backdrop-blur-sm transition-all ease-out duration-300 hover:text-prime-200 hover:border-white/ hover:rounded-3xl hover:shadow-lg hover:shadow-prime-600/[0.3]  active:rounded-3xl will-change-transform origin-center;"
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
}
