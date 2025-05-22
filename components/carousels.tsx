"use client";
import { motion } from "motion/react";
import Image from "next/image";

const imageSlide = {
  initial: { opacity: 0.5, x: 400 },
  animate: { opacity: 1, x: 0 },
  transition: { delay: 0.2, duration: 0.8, ease: "easeInOut" },
};

export default function Carousel() {
  const images = [
    { src: "/voyasplash.png", alt: "Android Device Style" },
    { src: "/leaplearners.png", alt: "Large Center Image" },
    { src: "/orthorus.png", alt: "Cut Off Right Side" },
  ];

  return (
    <div className="mt-10 mb-8">
      <motion.div
        {...imageSlide}
        className="flex flex-row ml-5 sm:ml-20 gap-1 max-h-[400px] sm:max-h-[574px] overflow-x-auto [scrollbar-width:none] [-ms-overflow-style:none] [-webkit-scrollbar]:hidden"
      >
        {/* First Image */}
        <Image
          src={images[0].src}
          alt={images[0].alt}
          width={264.77}
          height={574}
          style={{ objectFit: "inherit" }}
          className="max-w-[125px] sm:max-w-[264.77px]"
        />

        {/* Middle Image */}
        <Image
          src={images[1].src}
          alt={images[1].alt}
          width={884}
          height={574}
          style={{ objectFit: "inherit" }}
          className="max-w-[400px] sm:max-w-[884px]"
        />

        {/* Last Image */}
        <Image
          src={images[2].src}
          alt={images[2].alt}
          width={883.8}
          height={574}
          style={{ objectFit: "inherit" }}
          className="max-w-[400px] sm:max-w-[883.8px]"
        />
      </motion.div>
    </div>
  );
}
