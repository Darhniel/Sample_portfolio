"use client";
import { motion } from "motion/react";
import Image from "next/image";
import { useState, useEffect, useRef } from "react";

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
    { src: "/reekaslider.png", alt: "Cut Off Right Side" },
  ];

  const [translateX, setTranslateX] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [dragOffset, setDragOffset] = useState(0);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    if (!isDragging) {
      intervalRef.current = setInterval(() => {
        setTranslateX(prev => prev - 1);
      }, 16); // ~60fps for smooth animation
    }

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [isDragging]);

  const handleMouseDown = (e: React.MouseEvent<HTMLDivElement>) => {
    setIsDragging(true);
    setStartX(e.clientX);
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!isDragging) return;
    const currentX = e.clientX;
    const diff = currentX - startX;
    setDragOffset(diff);
  };

  const handleMouseUp = () => {
    if (isDragging) {
      setTranslateX(prev => prev + dragOffset);
      setDragOffset(0);
      setIsDragging(false);
    }
  };

  const handleTouchStart = (e: React.TouchEvent<HTMLDivElement>) => {
    setIsDragging(true);
    setStartX(e.touches[0].clientX);
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }
  };

  const handleTouchMove = (e: React.TouchEvent<HTMLDivElement>) => {
    if (!isDragging) return;
    const currentX = e.touches[0].clientX;
    const diff = currentX - startX;
    setDragOffset(diff);
  };

  const handleTouchEnd = () => {
    if (isDragging) {
      setTranslateX(prev => prev + dragOffset);
      setDragOffset(0);
      setIsDragging(false);
    }
  };

  return (
    <div className="mt-10 mb-8 flex flex-row justify-center items-center">
      <motion.div
        {...imageSlide}
        className="flex flex-row ml-5 sm:ml-20 max-h-[400px] sm:max-h-[574px] overflow-hidden relative cursor-grab active:cursor-grabbing select-none"
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseUp}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        <div
          className="flex flex-row"
          style={{
            transform: `translateX(${translateX + dragOffset}px)`,
            width: 'max-content',
            transition: isDragging ? 'none' : 'transform 0.1s ease-out'
          }}
        >
          {/* Duplicate images multiple times for seamless loop */}
          {[...Array(10)].map((_, setIndex) => (
            <div key={setIndex} className="flex flex-row">
              <Image
                src={images[0].src}
                alt={images[0].alt}
                width={264.77}
                height={574}
                style={{ objectFit: "inherit" }}
                className="max-w-[125px] sm:max-w-[264.77px] flex-shrink-0"
              />
              <Image
                src={images[1].src}
                alt={images[1].alt}
                width={884}
                height={574}
                style={{ objectFit: "inherit" }}
                className="max-w-[400px] sm:max-w-[884px] flex-shrink-0"
              />
              <Image
                src={images[2].src}
                alt={images[2].alt}
                width={883.8}
                height={574}
                style={{ objectFit: "inherit" }}
                className="max-w-[400px] sm:max-w-[883.8px] flex-shrink-0"
              />
              <Image
                src={images[3].src}
                alt={images[3].alt}
                width={600.41}
                height={574}
                style={{ objectFit: "inherit" }}
                className="max-w-[400px] sm:max-w-[600.41px] flex-shrink-0"
              />
            </div>
          ))}
        </div>
      </motion.div>
    </div>
  );
}