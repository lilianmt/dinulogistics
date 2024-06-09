'use client'
import Image from "next/image";
import HeroImage from '../../public/hero-image.jpg'
import { Spotlight } from "./Spotlight";
import { easeInOut, motion } from "framer-motion";
import { Button } from "./ui/MovingBorder";
// ****************************************************************

export default function Hero() {

  return (
    //*****************    HERO WRAPPER    *****************
    <motion.div
    className='relative h-screen z-0 overflow-hidden'>
    <Spotlight className='-top-40 -left-10 md:-left-32 md:-top-20 h-screen' fill='white' />
    <Spotlight className=' h-[80vh] w-[50vw] top-10 left-full' fill='white'/>
    <Spotlight className='left-80 top-28 h-[80vh] w-[150vw]' fill='white' />
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
    >
      <Image 
      src={ HeroImage }
      alt='Hero image'
      placeholder='blur'
      quality={100}
      fill
      sizes='100vw'
      priority
      style={{ 
        objectFit: 'cover',
      }}
      />
    </motion.div>

    <div className='absolute w-full h-full  bg-black opacity-5'></div>
    <div className='absolute w-full h-full' style={{ background: 'radial-gradient(ellipse 500% 75% at 50% 100%, rgba(0, 0, 0, 1) 0%, rgba(0, 0, 0, 0) 80%)' }}></div>
    

      {/* //*****************    HERO CONTENT WRAPPER    ***************** */}
      <motion.div className='relative z-10 flex flex-col items-start lg:items-center justify-between h-full text-left text-gray-100 px-[8vw] py-[15vh] gap-5'>

        <motion.h1
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ 
          duration: 2.3, 
          ease: easeInOut,
          type: 'spring',
          stiffness: 150,
          damping: 15  }}
        className='text-7xl md:text-8xl lg:text-[124px] text-left lg:text-center font-bold pt-[3rem] max-w-[80vw] lg:max-w-[80vw] tracking-tight bg-clip-text text-transparent'
        style={{
          backgroundImage:'linear-gradient(to top left, #FFF 20%, var(--brand-400)40%, var(--brand-300) 45%, var(--brand-200) 50%, var(--brand-300) 55%, var(--brand-100) 80%, #FFF 90%)',
        }}
        > 
          Reliable logistics for timely truck deliveries
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ 
            duration:  0.3,
            delay: 0.2,
            ease: easeInOut,
            type: 'spring',
            stiffness: 150,
            damping: 15 }}
          className='max-w-[50vw] text-xl py-3 font-normal leading-[2rem] '
        >
          With our expert brokerage services, we manage every detail to ensure
          your cargo reaches its destination safely, on time, and without
          hassle, providing you peace of mind and efficient transport every step
          of the way
        </motion.p>
        <Button 
          borderRadius="1rem"
        >
         Get a Quote
        </Button>
        {/* <motion.button
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ 
            duration: 0.3, 
            delay: 0.5, 
            ease: easeInOut,
            type: 'spring',
            stiffness: 150,
            damping: 15  }}
          className='px-6 py-3 mt-3 border border-white rounded-2xl text-white text-lg hover:bg-brand-500 hover:border-brand-500 transition hover:ease-in-out'
        >
          Get a Quote
        </motion.button> */}

{/* <button className="bg-transparent no-underline group cursor-pointer relative shadow-2xl shadow-zinc-900 rounded-full p-px text-xs font-semibold leading-6  text-white inline-block">
  <span className="absolute inset-0 overflow-hidden rounded-full">
    <span className="absolute inset-0 rounded-full bg-[image:radial-gradient(75%_100%_at_50%_0%,rgba(56,189,248,0.6)_0%,rgba(56,189,248,0)_75%)] opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
  </span>
  <div className="relative flex space-x-2 items-center z-10 rounded-full bg-transparent-950 py-0.5 px-4 ring-1 transparent/10 ">
    <span>
      Get a quote
    </span>
    <svg
      fill="none"
      height="16"
      viewBox="0 0 24 24"
      width="16"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M10.75 8.75L14.25 12L10.75 15.25"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
      />
    </svg>
  </div>
  <span className="absolute -bottom-0 left-[1.125rem] h-px w-[calc(100%-2.25rem)] bg-gradient-to-r from-emerald-400/0 via-emerald-400/90 to-emerald-400/0 transition-opacity duration-500 group-hover:opacity-40" />
</button> */}
      </motion.div>
    </motion.div>
  );
}
