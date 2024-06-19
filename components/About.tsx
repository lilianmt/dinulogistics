import { useSectionInView } from '@/lib/hooks';
import React from 'react';
import SectionHeading from './ui/SectionHeading';
import { WobbleCard } from './ui/wobble-card';
import Trucks1 from '@/public/trucks1.jpg';
import Trucks2 from '@/public/trucks2.jpg';
import Image from 'next/image';
import DottedBackground from './ui/dotted-background';
import { IoIosArrowDown } from 'react-icons/io';
import { useActiveSectionContext } from '@/context/active-section-context';

export default function About() {
  const { ref } = useSectionInView('About');

  const { activeSection, setActiveSection, setTimeOfLastClick } =
    useActiveSectionContext();

  const handleBannerClick = () => {
    setActiveSection('Solutions');
    setTimeOfLastClick(Date.now());
    document
      .getElementById('solutions')
      ?.scrollIntoView({ behavior: 'smooth' });
    window.history.pushState(null, '', '/');
  };
  return (
    <section
      id="about"
      ref={ref}
      className="relative w-full h-auto bg-prime-900"
    >
      <DottedBackground />
      {/* //*****************    SECTION TITLES    ***************** */}
      <div className="relative">
        <p className="text-prime-200/75 text-sm text-center mt-20 mb-5 font-normal uppercase tracking-[5px]">
          Meet Dinu Logistics
        </p>
        <SectionHeading>
          {' '}
          <span className="text-5xl font-light">
            Your Transportation Solution Partner
          </span>
        </SectionHeading>
      </div>

      {/* //*****************    SECTION BENTO    ***************** */}
      <div className="relative grid grid-cols-1 md:grid-cols-3 gap-10 max-w-7xl mx-auto my-16 px-5 transition-all ease-in-out duration-500">
        <WobbleCard
          containerClassName="group col-span-1 md:col-span-2 h-full bg-prime-800 md:min-h-[100px] hover:bg-seco-800"
          className=""
        >
          <div className="w-full sm:max-w-2xl md:max-w-[35vw] lg:max-w-[25vw]">
            <h2 className="text-center sm:text-left text-4xl font-light tracking-tight text-white">
              Our mission
            </h2>
            <p className="mt-6 text-left text-xl tracking-wide  text-neutral-200">
              We provide seamless, efficient, and reliable logistics solutions
              that meet the diverse needs of businesses across the USA. We are
              dedicated to setting new standards of excellence in service
              delivery.
            </p>
          </div>
          <Image
            src={Trucks1}
            width={350}
            height={350}
            alt="linear demo image"
            className="absolute hidden md:block md:-right-[10rem] lg:-right-[5rem] -top-10 object-contain rounded-2xl grayscale group-hover:filter-none group-hover:scale-110 transition-all ease-in-out duration-500"
          />
        </WobbleCard>

        <WobbleCard containerClassName="col-span-1 min-h-[300px] bg-prime-800 hover:bg-seco-800">
          <h2 className="w-full text-center sm:text-left text-4xl font-light tracking-tight text-white">
            Our vision
          </h2>
          <p className="mt-6 text-left text-xl tracking-wide  text-neutral-200">
            To become a trusted partner in your supply chain, ensuring your
            goods reach their destination{' '}
            <span className="text-prime-300">on time, every time.</span>
          </p>
        </WobbleCard>

        <WobbleCard containerClassName="group col-span-1 md:col-span-3 bg-prime-800 h-[200px] mb-32 cursor-pointer">
          <a onClick={handleBannerClick}>
            <div className="absolute z-10 flex top-4 py-2 px-4 text-left gap-2 rounded-xl group-hover:bg-prime-900/25 group-hover:backdrop-blur-md transition-all duration-500 ease-in-out ">
              <h2 className="text-xl font-light tracking-tight text-white">
                Service solutions
              </h2>
              <IoIosArrowDown className="h-5 w-5 text-white mt-1 group-hover:translate-y-1 transition-all duration-500 ease-in-out" />
            </div>
            <Image
              src={Trucks2}
              fill
              alt="linear demo image"
              className="absolute inset-0 object-cover rounded-2xl grayscale group-hover:filter-none group-hover:scale-110 transition-all ease-in-out duration-500"
            />
          </a>
        </WobbleCard>
      </div>
    </section>
  );
}
