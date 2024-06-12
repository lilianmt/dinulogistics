'use client';
import Image from 'next/image';
import HeroImage from '@/public/hero-image.jpg';
import { Spotlight } from './ui/Spotlight';
import { easeInOut, motion } from 'framer-motion';
import { HiOutlineLightningBolt } from 'react-icons/hi';

// ****************************************************************

const Hero = () => {
  return (
    //*****************    HERO WRAPPER    *****************
    <motion.div className="relative w-full h-screen z-0">
      <Spotlight className="left-80 top-28 h-[80vh] w-[150vw]" fill="#99E0FF" />
      <Spotlight
        className="-top-20 -left-10 md:-left-32 md:-top-20 h-screen"
        fill="#99E0FF"
      />

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
      >
        <Image
          src={HeroImage}
          alt="Hero image"
          placeholder="blur"
          quality={100}
          fill
          sizes="100vw"
          objectPosition="top"
          priority
          style={{
            objectFit: 'cover',
          }}
        />
      </motion.div>

      <div className="absolute w-full h-full  bg-black opacity-15"></div>
      <div
        className="absolute w-full h-full"
        style={{
          background:
            'radial-gradient(ellipse 500% 60% at 50% 100%, rgba(0, 0, 0, 1) 10%, rgba(0, 0, 0, 0) 120%)',
        }}
      ></div>

      {/* //*****************    HERO CONTENT WRAPPER    ***************** */}
      <motion.div className="relative z-10 flex flex-col items-center justify-center h-full gap-8 ">
        <motion.div className="flex flex-col relative items-center justify-center gap-4">
          <motion.p
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.3,
              delay: 0.2,
              ease: easeInOut,
              type: 'spring',
              stiffness: 150,
              damping: 15,
            }}
            className="uppercase tracking-widest md:w-[840px] lg:w-[1040px] text-sm text-center text-prime-200 font-normal leading-relaxed md:leading-normal lg:leading-normal"
          >
            Expert Logistics solutions
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 2,
              ease: easeInOut,
              type: 'spring',
              stiffness: 150,
              damping: 15,
            }}
            className="w-auto text-7xl sm:text-8xl text-center md:text-[84px] lg:text-[105px] text-white font-bold sm:w-[600px] md:w-[900px] lg:w-[1040px]"
          >
            Reliable and timely
            <motion.span className="text-prime-200">
              {' '}
              truck deliveries
            </motion.span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.3,
              delay: 0.2,
              ease: easeInOut,
              type: 'spring',
              stiffness: 150,
              damping: 15,
            }}
            className="text-xl tracking-tight w-[500px] px-12 sm:text-2xl sm:w-[640px] md:text-2xl md:w-[740px] lg:w-[960px] py-3 text-center text-white text-opacity-85 font-light leading-relaxed md:leading-normal lg:leading-tight"
          >
            With our expert brokerage services, we manage every detail to ensure
            your cargo reaches its destination safely, on time, and without
            hassle, providing you peace of mind and efficient transport every
            step of the way.
          </motion.p>
        </motion.div>
        <motion.button
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            duration: 0.6,
            delay: 0.4,
            ease: easeInOut,
          }}
          className="group relative flex items-center justify-center h-[4rem] w-[12rem] gap-2 bg-transparent outline-none rounded-2xl border border-white font-normal text-lg text-white tracking-wider backdrop-blur-sm transition-all hover:text-prime-200 hover:border-prime-400/50 hover:backdrop-blur-lg  hover:rounded-3xl ] active:rounded-3xl will-change-transform origin-center;"
          style={{ backfaceVisibility: 'hidden' }}
        >
          <motion.span className="absolute inset-0 overflow-hidden rounded-xl">
            <motion.span className="absolute inset-0 rounded-2xl bg-[image:radial-gradient(80%_60%_at_50%_0%,rgba(56,189,248,0.6)_10%,rgba(56,189,248,0)_100%)] opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
          </motion.span>
          <HiOutlineLightningBolt className="h-6 w-6 group-hover:text-prime-300" />
          <motion.span
            className="relative text-white group-hover:text-shadow-white will-change-transform"
            style={{ textRendering: 'optimizeLegibility' }}
          >
            Get a Quote
          </motion.span>
        </motion.button>
      </motion.div>
    </motion.div>
  );
};

export default Hero;