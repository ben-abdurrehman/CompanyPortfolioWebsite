"use client"

import Image from "next/image";
import { useEffect, useState } from 'react';
import RingRight from "@/assets/RingRight.png";
import RingLeft from "@/assets/RingLeft.png";
import Dots from "@/assets/Dots.png";
import Circles from "@/assets/Circles.png";
import Star from "@/assets/Star.png";
import ArrowLeft from "@/assets/ArrowLeft.png";
import ArrowRight from "@/assets/ArrowRight.png";
import LogoSlider from "./LogosSliderBar";
import GsapAnimejs from '@/components/AnimatedGradientBg';
import CalendlyPopupButton from '@/components/CalendlyPopupButton';
import { PopupButton } from 'react-calendly';

import Head from 'next/head';



const Hero = () => {
  return (
    <div className="w-full h-screen relative flex flex-col items-center justify-center overflow-hidden gap-10 px-6">
      <GsapAnimejs />
      <Image className="absolute select-none -z-10 top-[170px] right-[-80px] w-14 md:w-16 lg:w-20 xl:w-40" src={RingRight} alt="RingRight" />
      <Image className="absolute select-none -z-10 top-1/2 left-[-80px] w-14 md:w-16 lg:w-20 xl:w-40" src={RingLeft} alt="RingLeft" />
      <Image className="absolute select-none top-4/6 right-[-80px] -z-10" src={Star} alt="Star" width={150} height={150} />

      <div className="w-[95%] relative h-auto z-10 md:w-5/6 lg:w-4xl xl:w-5xl 2xl:w-7xl flex flex-col items-center gap-12">
        <Image className="absolute select-none top-[-10px] right-60 -z-10" src={Dots} alt="Dots" width={100} height={100} />
        <Image className="absolute select-none top-20 left-64 -z-10" src={Circles} alt="Circles" width={40} height={40} />
        <h1 className="text-white mt-10 md:mt-0 text-center text-3xl md:text-[44px] lg:text-5xl 2xl:text-6xl font-black font-['SatoshiVariable']">  
          <span className="inline md:block mb-2">Transforming Ideas Into</span>
          <span className="text-[#211951]">Cutting-Edge Solutions</span>
        </h1>

        <div className="absolute select-none w-2/3 left-[18%] top-[36%] md:top-[30%] md:left-1/2 lg:top-1/3 lg:left-[43%] xl:left-[41%] md:w-1/2 flex items-center justify-center gap-1">
          <Image className="w-6 md:w-10 lg:w-11 xl:w-12 2xl:w-14" src={ArrowLeft} alt="ArrowLeft" />
          <span className="Caveat relative top-1 md:top-2 text-[#211951] text-base md:text-lg lg:text-xl 2xl:text-2xl font-bold">Fusion Style</span>
          <Image className="w-6 md:w-10 lg:w-11 xl:w-12 2xl:w-14" src={ArrowRight} alt="ArrowRight" />
        </div>

        <p className="w-5/6 text-base xl:text-base 2xl:text-xl mt-2 2xl:mt-10 text-black text-center">
          Let's transform your vision into a world-class product. Our bespoke applications are tailored to your business needs, ensuring you achieve the visibility and growth you deserve.
        </p>
        <CalendlyPopupButton />
      </div>

      <LogoSlider />
    </div>
  );
};

export default Hero;

// export function CalendlyPopupButton() {
//   useEffect(() => {
//     // Load script in case it's not already loaded
//     if (!document.querySelector('[src*="calendly.com/assets/external/widget.js"]')) {
//       const script = document.createElement('script');
//       script.src = 'https://assets.calendly.com/assets/external/widget.js';
//       script.async = true;
//       document.body.appendChild(script);
//     }
//   }, []);

//   const handleClick = () => {
//     if (window.Calendly) {
//       window.Calendly.initPopupWidget({
//         url: 'https://calendly.com/devtechfusion?hide_gdpr_banner=1',
//       });
//     }
//   };

//   return (
//     <button
//       onClick={handleClick}
//       className="px-6 py-3 text-white bg-[#211951] rounded-lg hover:opacity-90 transition"
//     >
//       Schedule time with me
//     </button>
//   );
// }

