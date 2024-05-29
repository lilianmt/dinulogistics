import Image from "next/image";
import HeroImage from './public/hero-image.jpg'

import {
  MotionDiv,
  MotionH1,
  MotionP,
  MotionButton
} from "./motion";

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

  // *****************   BACKGROUND IMAGE FUNCTION    *****************
  // const {
  //   props: { srcSet },
  // } = getImageProps ({ alt: '', src:'/hero-image.jpg', quality:100, style: { objectFit: 'cover'}, width: 1920, height:1080 })
  // const backgroundImage  : any = getBackgroundImage(srcSet)
  // const style = { height: '100vh', width: '100vw', backgroundImage }
  //*****************   ADD STYLES={STYLES TO THE REQUIRED DIV}   *****************

  return (
    //*****************    HERO WRAPPER    *****************
    <MotionDiv
    className='relative h-screen z-0'>
      {/* // *****************    HERO IMAGE WRAPPER    ******************/}
     {/* <div
    // className="relative"
    // initial="hidden"
    // whileInView="visible"
    // viewport={{ once: true }}
    // transition={{ duration: 2, ease: [0.15, 1, 0.90, 1] }}
    // variants={{ 
    // visible: { opacity: 1 },
    // hidden: { opacity: 0 }}
    // }
// > */}
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
    <div className="absolute inset-0 bg-black opacity-15"></div>
  {/* </div> */}

      {/* //*****************    HERO CONTENT WRAPPER    ***************** */}
      <MotionDiv className="relative z-10 flex flex-col items-start justify-top h-full text-left text-gray-100 p-[150px] gap-5">
        <MotionH1 className="text-7xl font-bold mt-[3rem] max-w-[50vw] tracking-tight text-gray-100">
          {/* {splitHeadlineWords("Reliable logistics for timely truck deliveries")} */}
          Reliable logistics for timely truck deliveries
        </MotionH1>
        <MotionP
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 1, ease: [0.37, 0, 0.63, 1] }}
          className="max-w-[40vw] text-xl py-3 font-regular leading-[2rem] "
        >
          With our expert brokerage services, we manage every detail to ensure
          your cargo reaches its destination safely, on time, and without
          hassle, providing you peace of mind and efficient transport every step
          of the way
        </MotionP>
        <MotionButton
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 2, ease: [0.37, 0, 0.63, 1] }}
          whileTap={{ scale: 0.95 }}
          className="px-6 py-3 mt-3 bg-gray-900 rounded-lg text-lg hover:bg-gray-800 transition hover:ease-in-out duration-10"
        >
          Get a Quote
        </MotionButton>
      </MotionDiv>
    </MotionDiv>
  );
}
