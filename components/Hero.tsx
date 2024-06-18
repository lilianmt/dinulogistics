'use client';
import Image from 'next/image';
import HeroImage from '@/public/hero-image.jpg';
import { Spotlight } from './ui/spotlight';
import { easeInOut, motion } from 'framer-motion';
import { HiOutlineLightningBolt } from 'react-icons/hi';
import { useSectionInView } from '@/lib/hooks';

// ****************************************************************

const Hero = () => {
  const { ref } = useSectionInView('Home');
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
          {/* <motion.p
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
            className="uppercase tracking-[3px] text-base text-center text-white font-normal mb-8"
          >
            Expert Logistics Solutions
          </motion.p> */}

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
            className="px-[4rem] max-w-[72rem] text-6xl leading-[4rem] md:text-7xl lg:text-8xl lg:leading-[6rem] text-center text-white font-bold"
          >
            Logistics Solutions for Reliable and Timely
            <motion.span className="text-prime-200">
              {' '}
              Truck Deliveries
            </motion.span>
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
            className="px-[4rem] py-8 lg:py-14 max-w-[46rem] text-center text-2xl text-slate-100 text-opacity-85"
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
          className="group relative flex items-center justify-center m-2 p-5 gap-2 bg-transparent outline-none rounded-xl border border-white/75 font-medium text-xl text-white tracking-wider backdrop-blur-sm transition-all hover:text-prime-200 hover:backdrop-blur-md  hover:rounded-3xl hover:shadow-lg hover:shadow-prime-600/[0.3]  active:rounded-3xl will-change-transform origin-center;"
          style={{ backfaceVisibility: 'hidden' }}
        >
          <motion.span className="absolute inset-0 overflow-hidden rounded-xl">
            <motion.span className="absolute inset-0 rounded-2xl bg-[image:radial-gradient(80%_60%_at_50%_0%,rgba(56,189,248,0.6)_10%,rgba(56,189,248,0)_100%)] opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
          </motion.span>
          <HiOutlineLightningBolt className="h-6 w-6 transition group-hover:text-prime-300" />
          <motion.span
            className="relative text-white group-hover:text-shadow-white will-change-transform text-nowrap"
            style={{ textRendering: 'optimizeLegibility' }}
          >
            Get started
          </motion.span>
        </motion.button>
      </motion.div>
    </motion.section>
  );
};

export default Hero;
