"use client";
import { motion } from "motion/react";
import Image from "next/image";
import { useState, useEffect, useRef } from "react";

const imageSlide = {
  initial: { opacity: 0.5, x: 400 },
  animate: { opacity: 1, x: 0 },
  transition: { delay: 0.2, duration: 0.8, ease: "easeInOut" },
};

const carouselImages = [
  {
    src: "/voyasplash.png",
    alt: "Android Device Style",
    width: 264.77,
    height: 574,
    className: "max-w-[125px] sm:max-w-[264.77px]",
  },
  {
    src: "/orthorusslide.png",
    alt: "Android Device Style",
    width: 884,
    height: 574,
    className: "max-w-[400px] sm:max-w-[884px]",
  },
  {
    src: "/vyntslide.png",
    alt: "Large Center Image",
    width: 264,
    height: 574,
    className: "max-w-[400px] sm:max-w-[264px]",
  },
  {
    src: "/leaplearners.png",
    alt: "Cut Off Right Side",
    width: 884,
    height: 574,
    className: "max-w-[400px] sm:max-w-[884px]",
  },
  {
    src: "/ajoinslide.png",
    alt: "Cut Off Right Side",
    width: 883.41,
    height: 574,
    className: "max-w-[400px] sm:max-w-[883px]",
  },
  {
    src: "/orthorus.png",
    alt: "Cut Off Right Side",
    width: 883,
    height: 574,
    className: "max-w-[400px] sm:max-w-[883px]",
  },
  {
    src: "/reekaslider.png",
    alt: "Cut Off Right Side",
    width: 883,
    height: 574,
    className: "max-w-[400px] sm:max-w-[883px]",
  },
  {
    src: "/reekaslide.png",
    alt: "Cut Off Right Side",
    width: 860.41,
    height: 574,
    className: "max-w-[400px] sm:max-w-[600.41px]",
  },
];

export default function Carousel() {
  const [translateX, setTranslateX] = useState(0);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  // Auto-scroll continuously
  useEffect(() => {
    intervalRef.current = setInterval(() => {
      setTranslateX((prev) => prev - 1);
    }, 16);

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, []);



  return (
    <div className="mt-10 mb-8 flex flex-row justify-center items-center -z-40">
      <motion.div
        {...imageSlide}
        className="flex flex-row ml-5 sm:ml-0 max-h-[400px] sm:max-h-[574px] overflow-hidden relative select-none"
      >
        <div
          className="flex flex-row"
          style={{
            transform: `translateX(${translateX}px)`,
            width: "max-content",
          }}
        >
          {[...Array(10)].map((_, setIndex) => (
            <div key={setIndex} className="flex flex-row gap-4">
              {carouselImages.map((img, i) => (
                <Image
                  key={`${setIndex}-${i}`}
                  src={img.src}
                  alt={img.alt}
                  width={img.width}
                  height={img.height}
                  style={{ objectFit: "inherit" }}
                  className={`${img.className} flex-shrink-0`}
                  draggable={false}
                />
              ))}
            </div>
          ))}
        </div>
      </motion.div>
    </div>
  );
}