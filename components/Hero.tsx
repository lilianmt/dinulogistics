'use client';
import Image from 'next/image';
import HeroImage from '@/public/hero-image.jpg';
import { Spotlight } from './ui/spotlight';
import { easeInOut, motion } from 'framer-motion';
import { HiOutlineLightningBolt } from 'react-icons/hi';
import { useSectionInView } from '@/lib/hooks';
import { useActiveSectionContext } from '@/context/active-section-context';

// ****************************************************************

const Hero = () => {
  const { ref } = useSectionInView('Home');

  const { activeSection, setActiveSection, setTimeOfLastClick } =
    useActiveSectionContext();

  const handleButtonClick = () => {
    setActiveSection('Contact');
    setTimeOfLastClick(Date.now());
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
    window.history.pushState(null, '', '/');
  };

  return (
    //*****************    HERO WRAPPER    *****************
    <motion.section
      ref={ref}
      id="home"
      className="relative w-screen h-screen z-0"
    >
      <Spotlight className="left-80 top-28 h-[80vh] w-[150vw]" fill="#99E0FF" />
      <Spotlight
        className="-top-20 -left-10 md:-left-32 md:-top-20 h-screen"
        fill="#99E0FF"
      />

      <Image
        src={HeroImage}
        alt="Hero image"
        placeholder="blur"
        quality={100}
        fill
        sizes="100vw"
        style={{
          objectFit: 'cover',
          objectPosition: 'top',
        }}
      />

      <div className="absolute w-screen h-screen bg-black opacity-35"></div>
      <div
        className="absolute w-full h-full"
        style={{
          background:
            'radial-gradient(ellipse 500% 60% at 50% 100%, rgba(0, 0, 0, 1) 10%, rgba(0, 0, 0, 0) 120%)',
        }}
      ></div>

      {/* //*****************    HERO CONTENT WRAPPER    ***************** */}
      <motion.div className="relative z-10 flex flex-col items-center h-screen">
        <motion.div className="flex flex-col items-center mt-[10rem] sm:mt-[12rem]">
          <motion.small
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.3,
              delay: 0.2,
              ease: 'easeInOut',
              type: 'spring',
              stiffness: 150,
              damping: 15,
            }}
            className="uppercase tracking-[5px] text-sm text-center text-prime-200/75 font-normal mb-4"
          >
            Your Business, Our Commitment
          </motion.small>

          <motion.h1
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.3,
              ease: 'easeInOut',
              type: 'spring',
              stiffness: 150,
              damping: 15,
            }}
            className="px-[6vw] max-w-[90rem] text-6xl leading-[4rem] sm:text-6xl md:text-7xl sm:leading-[4rem] md:leading-[5rem] text-center text-white font-bold tracking-tight"
          >
            Reliable
            <motion.span className="text-prime-300">
              {' '}
              Logistics Solutions&nbsp;
            </motion.span>
            Tailored to Your Business
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.3,
              delay: 0.2,
              ease: 'easeInOut',
              type: 'spring',
              stiffness: 150,
              damping: 15,
            }}
            className="px-[5rem] mt-8 mb-6 max-w-[60rem] text-center font-normal text-2xl text-slate-100/85"
          >
            With our expert brokerage services, we manage every detail to ensure
            your cargo reaches its destination safely, on time, and without
            hassle, providing you peace of mind and efficient transport every
            step of the way.
          </motion.p>
        </motion.div>

        {/* //*****************    BUTTON    ***************** */}
        <motion.button
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            duration: 0.6,
            delay: 0.4,
            ease: easeInOut,
          }}
          className="group relative flex items-center justify-center mt-16 py-5 px-7 gap-2 bg-transparent outline-none rounded-xl border border-white/75 font-medium text-xl text-white tracking-wider backdrop-blur-sm transition-all hover:text-prime-200 hover:backdrop-blur-md  hover:rounded-3xl hover:shadow-lg hover:shadow-prime-600/[0.3]  active:rounded-3xl will-change-transform origin-center;"
          style={{ backfaceVisibility: 'hidden' }}
        >
          <motion.span className="absolute inset-0 overflow-hidden rounded-xl">
            <motion.span className="absolute inset-0 rounded-2xl bg-[image:radial-gradient(80%_60%_at_50%_0%,rgba(56,189,248,0.6)_10%,rgba(56,189,248,0)_100%)] opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
          </motion.span>
          <HiOutlineLightningBolt className="h-6 w-6 transition group-hover:text-prime-300" />
          <motion.a
            onClick={handleButtonClick}
            className="relative text-white group-hover:text-shadow-white will-change-transform text-nowrap"
            style={{ textRendering: 'optimizeLegibility' }}
          >
            Get in touch
          </motion.a>
        </motion.button>
      </motion.div>
    </motion.section>
  );
};

export default Hero;
