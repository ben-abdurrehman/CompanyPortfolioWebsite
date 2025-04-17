// "use client";

// import { useEffect, useState } from "react";
// import Image from "next/image";
// import { motion, AnimatePresence } from "framer-motion";
// import Logos from "./Logos";

// const LogoSlider = () => {
//   console.log(Logos.length);

//   const [index, setIndex] = useState(0);
//   const [itemsToShow, setItemsToShow] = useState(6);

//   useEffect(() => {
//     const updateItemsToShow = () => {
//       if (window.innerWidth < 768) {
//         setItemsToShow(3); // Show 3 logos on mobile
//       } else {
//         setItemsToShow(5); // Show 6 logos on larger screens
//       }
//     };

//     updateItemsToShow();
//     window.addEventListener("resize", updateItemsToShow);
//     return () => window.removeEventListener("resize", updateItemsToShow);
//   }, []);

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setIndex((prevIndex) => (prevIndex + 1) % Logos.length);
//     }, 5000);
//     return () => clearInterval(interval);
//   }, []);

//   const visibleLogos = [
//     ...Logos.slice(index, index + itemsToShow),
//     ...Logos.slice(0, Math.max(0, itemsToShow - (Logos.length - index))),
//   ];

//   return (
//     <div className="w-[90%] md:w-5/6 lg:w-4xl xl:w-5xl 2xl:7xl my-5 overflow-hidden flex justify-center z-30 items-center h-20">
//       <AnimatePresence mode="wait">
//         <motion.div
//           key={index}
//           initial={{ opacity: 1, x: 100 }}
//           animate={{ opacity: 1, x: 0 }}
//           exit={{ opacity: 1, x: 0 }}
//           transition={{ duration: 0.5, type: "spring", stiffness: 50, ease: "easeInOut" }}
//           className="flex space-x-4 bg-transparent shadow-none"
//         >
//           {visibleLogos.map((logo, i) => (
//             <div key={i} className="md:px-1 md:py-0 lg:px-2 lg:py-1 xl:px-4 xl:py-2 z-40 rounded-lg bg-white">
//               <Image className="w-auto h-10 2xl:h-12 select-none object-contain" src={logo} alt={`logo-${i}`} />
//             </div>
//           ))}
//         </motion.div>
//       </AnimatePresence>
//     </div>
//   );
// };

// export default LogoSlider;


"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import Logos from "./Logos";

const LogoSlider = () => {
  const [slidesPerView, setSlidesPerView] = useState(6);

  useEffect(() => {
    const updateSlidesPerView = () => {
      if (window.innerWidth < 768) {
        setSlidesPerView(3);
      } else {
        setSlidesPerView(5);
      }
    };

    updateSlidesPerView();
    window.addEventListener("resize", updateSlidesPerView);
    return () => window.removeEventListener("resize", updateSlidesPerView);
  }, []);

  return (
    <div className="w-[90%] md:w-5/6 lg:w-4xl xl:w-5xl my-5 flex justify-center items-center">
      <Swiper
        modules={[Autoplay]}
        autoplay={{ delay: 2000, disableOnInteraction: false }}
        loop={true}
        slidesPerView={slidesPerView}
        spaceBetween={20}
        className="flex shadow-none justify-center z-30 items-center"
      >
        {Logos.map((logo, i) => (
          <SwiperSlide key={i} className="bg-white rounded-lg justify-center z-30 items-center">
            <div key={i} className="md:px-1 md:py-0 lg:px-2 lg:py-1 xl:px-4 rounded-lg flex justify-center items-center z-30 bg-white">
              <Image className="relative w-auto h-14 2xl:h-20  select-none object-contain z-50" src={logo} alt={`logo-${i}`} />
          </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default LogoSlider;

