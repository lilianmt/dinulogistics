'use client'
import Image from "next/image";
import { motion } from "framer-motion";
import Navbar from "./navbar";

export default function Home() {
  return (
    <div className="relative h-screen bg-gray-900">
      <Navbar />
      {/* Background Image */}
        <div className="absolute inset-0">
          <Image 
            src="/hero-image.jpg"
            alt="Hero image"
            layout="fill"
            objectFit="cover"
            className="w-full h-full"
          />
          <div className="absolute inset-0 bg-black opacity-25"></div>
        </div>

        {/* Hero text */}
        <div className="relative z-10 flex flex-col items-start justify-center h-full text-left text-white px-10">
          <motion.h1
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0}}
            transition={{ duration: 1, ease: "easeInOut"}}

            className="max-w-[700px] text-7xl font-extrabold leading-24 py-3"
          >
            Reliable logistics for timely truck deliveries
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 50}}
            animate={{ opacity: 0.5, y: 0 }}
            transition={{ duration: 1, delay: 0.25, ease: "easeInOut" }}
            className="max-w-[472px] text-xl py-3 font-regular leading-7 text-white"
          >
            With our expert brokerage services, we manage every detail to ensure your cargo reaches its destination safely, on time, and without hassle, providing you peace of mind and efficient transport every step of the way
          </motion.p>
          <motion.button
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 0.5, y: 0 }}
            transition={{ duration: 0.75, delay: 1, ease: "easeInOut" }}
            className="px-6 py-3 mt-3 bg-gray-800 rounded-lg text-lg hover:bg-gray-700"
          >
            Get a Quote
          </motion.button>
        </div>
    </div>
  );
}
