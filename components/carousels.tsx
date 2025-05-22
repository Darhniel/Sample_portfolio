"use client";
import { motion } from "motion/react";
import Image from "next/image";

const firstImage = {
  initial: { opacity: 0.5, x: -30 },
  animate: { opacity: 1, x: 0 },
  transition: { delay: 0.2, duration: 0.8, ease: "easeInOut" },
};
const secondImage = {
  initial: { opacity: 0.5, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: { delay: 0.2, duration: 0.8, ease: "easeInOut" },
};
const thirdImage = {
  initial: { opacity: 0.5, x: 30 },
  animate: { opacity: 1, x: 0 },
  transition: { delay: 0.2, duration: 0.8, ease: "easeInOut" },
};

export default function Carousel() {
  // Static display with the middle image as focal point
  const images = [
    { src: "/voyasplash.png", alt: "Android Device Style" },
    { src: "/leaplearners.png", alt: "Large Center Image" },
    { src: "/orthro.png", alt: "Cut Off Right Side" },
  ];

  return (
    <div className="relative w-full max-w-full md:max-w-5xl mx-auto my-6 md:my-12 overflow-hidden">
      {/* Carousel Container */}
      <div className="flex sm:gap-10 h-64 sm:h-80 md:h-96 relative pl-0">
        {/* First Image (Android Device Style) */}
        <motion.div
          {...firstImage}
          className="flex-shrink-0 w-1/3 md:w-1/4 pl-0"
        >
          <div className="h-full w-full flex items-center justify-center">
            <div className="relative h-full w-full">
              {/* Android Device Frame */}
              <div className="relative h-full w-full">
                {/* Phone Frame */}
                <div className="absolute inset-0"></div>
                {/* Screen Content */}
                <div className="absolute inset-2 rounded-2xl overflow-hidden bg-white">
                  <div className="relative w-full h-full">
                    <Image
                      src={images[0].src}
                      alt={images[0].alt}
                      fill
                      sizes="(max-width: 640px) 33vw, (max-width: 768px) 25vw, 25vw"
                      style={{
                        objectFit: "cover",
                      }}
                      priority
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Middle Image (Large) */}
        <motion.div
          {...secondImage}
          className="flex-shrink-0 w-1/2 z-10 scale-105 md:scale-110"
        >
          <div className="h-full w-full flex items-center justify-center px-1 sm:px-2">
            <div className="relative w-full h-full max-h-64 sm:max-h-72 md:max-h-80 rounded-xl overflow-hidden">
              <Image
                src={images[1].src}
                alt={images[1].alt}
                fill
                sizes="(max-width: 640px) 50vw, 50vw"
                style={{
                  objectFit: "cover",
                  borderRadius: "0.75rem",
                }}
                priority
              />
            </div>
          </div>
        </motion.div>

        {/* Last Image (Cut off on right) */}
        <motion.div
          {...thirdImage}
          className="flex-shrink-0 w-1/3 md:w-1/4 -mr-8 sm:-mr-10 md:-mr-12 relative overflow-hidden"
        >
          <div className="h-full w-full flex items-center justify-center px-1 sm:px-2 relative">
            <div className="relative w-full h-full max-h-64 sm:max-h-72 md:max-h-80 rounded-xl overflow-hidden">
              <Image
                src={images[2].src}
                alt={images[2].alt}
                fill
                sizes="(max-width: 640px) 33vw, (max-width: 768px) 25vw, 25vw"
                style={{
                  objectFit: "cover",
                  borderRadius: "0.75rem",
                }}
              />
            </div>
            {/* Gradient fade effect on the right side */}
            <div className="absolute right-0 top-0 h-full w-8 sm:w-12 md:w-16 bg-gradient-to-r from-transparent to-white"></div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
