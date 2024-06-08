'use client'
import Image from "next/image";
import HeroImage from '../../public/hero-image.jpg'
import { Spotlight } from "./Spotlight";
import { motion } from "framer-motion";

// *****************   BACKGROUND IMAGE FUNCTION    *****************
// function getBackgroundImage(srcSet = '') {
//   const imageSet = srcSet
//     .split(', ')
//     .map((str) => {
//       const [url, dpi] = str.split(' ')
//       return `url("${url}") ${dpi}`
//     })
//     .join(', ')
//   return `image-set(${imageSet})`
// }
// ****************************************************************

export default function Hero() {
  //*****************   H1 ANIMATE SPLIT WORDS    *****************
  // const splitHeadlineWords = ( headline:string ) => {
  //     return headline.split(" ").map((word, index) => (
  //       <MotionSpan
  //         key={index}
  //         initial={{ opacity: 0, x: 60 }}
  //         animate={{ opacity: 1, x: 0 }}
  //         transition={{ duration: 0.5, delay: index * 0.2 , ease: [0.25, 0.5, 0.90, 1]}}
  //         className="inline-block pr-4 w-15"
  //       >
  //         {word}
  //       </MotionSpan>
  //     ))
  //   }

  return (
    //*****************    HERO WRAPPER    *****************
    <motion.div
    className='relative h-screen z-0 overflow-hidden'>
    <Spotlight className="-top-40 -left-10 md:-left-32 md:-top-20 h-screen" fill="white" />
    <Spotlight className=" h-[80vh] w-[50vw] top-10 left-full" fill="white"/>
    <Spotlight className="left-80 top-28 h-[80vh] w-[50vw]" fill="white" />
    <Image 
    src={ HeroImage }
    alt="Hero image"
    placeholder="blur"
    quality={100}
    fill
    sizes="100vw"
    priority
    style={{ 
      objectFit: 'cover',
    }}
    />
    <div className="absolute inset-0 bg-black opacity-35"></div>

      {/* //*****************    HERO CONTENT WRAPPER    ***************** */}
      <motion.div className="relative z-10 flex flex-col items-start justify-top h-full text-left text-gray-100 p-[150px] gap-5">
        <motion.h1 className="text-7xl font-bold mt-[3rem] max-w-[50vw] tracking-tight text-gray-100">
          {/* {splitHeadlineWords("Reliable logistics for timely truck deliveries")} */}
          Reliable logistics for timely truck deliveries
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 1, ease: [0.37, 0, 0.63, 1] }}
          className="max-w-[40vw] text-xl py-3 font-regular leading-[2rem] "
        >
          With our expert brokerage services, we manage every detail to ensure
          your cargo reaches its destination safely, on time, and without
          hassle, providing you peace of mind and efficient transport every step
          of the way
        </motion.p>
        <motion.button
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 2, ease: [0.37, 0, 0.63, 1] }}
          whileTap={{ scale: 0.95 }}
          className="px-6 py-3 mt-3 border border-white rounded-2xl text-white text-lg hover:bg-brand-900 hover:border-brand-900 transition hover:ease-in-out"
        >
          Get a Quote
        </motion.button>
      </motion.div>
    </motion.div>
  );
}
