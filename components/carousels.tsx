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
    height: 568,
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
  const [isDragging, setIsDragging] = useState(false);
  const [currentX, setCurrentX] = useState(0);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  // Auto-scroll when not dragging
  useEffect(() => {
    if (!isDragging) {
      intervalRef.current = setInterval(() => {
        setTranslateX((prev) => prev - 1);
      }, 16);
    } else {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    }

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [isDragging]);

  const handleStart = (clientX: number) => {
    setIsDragging(true);
    setCurrentX(clientX);
  };
  const handleMove = (clientX: number) => {
    if (!isDragging) return;

    const deltaX = clientX - currentX;
    setTranslateX((prev) => prev + deltaX * 10); // 2x speed multiplier
    setCurrentX(clientX);
  };

  const handleEnd = () => {
    setIsDragging(false);
    setCurrentX(0);
  };
  const handleMouseDown = (e: React.MouseEvent) => {
    e.preventDefault();
    handleStart(e.clientX);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    handleMove(e.clientX);
  };

  const handleMouseUp = () => {
    handleEnd();
  };

  const handleMouseLeave = () => {
    handleEnd();
  };

  // Touch events
  const handleTouchStart = (e: React.TouchEvent) => {
    handleStart(e.touches[0].clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    e.preventDefault();
    handleMove(e.touches[0].clientX);
  };

  const handleTouchEnd = () => {
    handleEnd();
  };

  return (
    <div className="mt-10 mb-8 flex flex-row justify-center items-center">
      <motion.div
        {...imageSlide}
        className="flex flex-row ml-5 sm:ml-20 max-h-[400px] sm:max-h-[574px] overflow-hidden relative cursor-grab active:cursor-grabbing select-none"
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseLeave}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        <div
          className="flex flex-row"
          style={{
            transform: `translateX(${translateX}px)`,
            width: "max-content",
            transition: isDragging ? "none" : "transform 0.1s ease-out",
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
