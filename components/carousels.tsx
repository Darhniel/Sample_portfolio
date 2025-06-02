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
    src: "/voyasplash.jpg",
    alt: "voyasplash",
    width: 264.77,
    height: 574,
    className: "max-w-[125px] sm:max-w-[264.77px]",
  },
  {
    src: "/orthorusslide.jpg",
    alt: "orthoruslide",
    width: 884,
    height: 574,
    className: "max-w-[400px] sm:max-w-[884px]",
  },
  {
    src: "/vyntslide.jpg",
    alt: "vyntslide",
    width: 264,
    height: 574,
    className: "max-w-[400px] sm:max-w-[264px]",
  },
  {
    src: "/leaplearners.png",
    alt: "leaplearners",
    width: 884,
    height: 574,
    className: "max-w-[400px] sm:max-w-[884px]",
  },
  {
    src: "/ajoinslide.jpg",
    alt: "ajoinslide",
    width: 264.77,
    height: 574,
    className: "max-w-[400px] sm:max-w-[264.77px]",
  },
  {
    src: "/orthorus.jpg",
    alt: "orthorus",
    width: 883,
    height: 574,
    className: "max-w-[400px] sm:max-w-[883px]",
  },
  {
    src: "/reekaslide.jpg",
    alt: "reekaslide",
    width: 600,
    height: 574,
    className: "max-w-[400px] sm:max-w-[600px]",
  },
  {
    src: "/creatorwire.jpg",
    alt: "creatorwire",
    width: 860.41,
    height: 574,
    className: "max-w-[400px] sm:max-w-[860.41px]",
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
    <div className="mt-32 flex flex-row justify-center items-center -z-40">
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
            <div key={setIndex}  className="flex flex-row gap-4 mr-5">
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