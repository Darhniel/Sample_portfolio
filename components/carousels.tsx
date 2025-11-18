"use client";
import { motion } from "motion/react";
import Image from "next/image";
import { useEffect, useRef } from "react";

const imageSlide = {
  initial: { opacity: 0.5, x: 400 },
  animate: { opacity: 1, x: 0 },
  transition: { delay: 0.2, duration: 0.8, ease: "easeInOut" },
};

const carouselImages = [
  {
    src: "/voyasplash.png",
    alt: "voyasplash",
    width: 264.77,
    mobileWidth: 132.38,
    height: 574,
    mobileHeight: 287,
    className: "max-w-[125px] sm:max-w-[264.77px]",
  },
  {
    src: "/orthorusslide.jpg",
    alt: "orthoruslide",
    width: 884,
    mobileWidth: 442,
    height: 574,
    mobileHeight: 287,
    className: "max-w-[400px] sm:max-w-[884px]",
  },
  {
    src: "/vyntslide.jpg",
    alt: "vyntslide",
    width: 264,
    mobileWidth: 132,
    height: 574,
    mobileHeight: 287,
    className: "max-w-[400px] sm:max-w-[264px]",
  },
  {
    src: "/leaplearners.png",
    alt: "leaplearners",
    width: 884,
    mobileWidth: 442,
    height: 574,
    mobileHeight: 287,
    className: "max-w-[400px] sm:max-w-[884px]",
  },
  {
    src: "/ajoin-1-2.png",
    alt: "ajoinslide",
    width: 264.77,
    mobileWidth: 132.38,
    height: 574,
    mobileHeight: 287,
    className: "max-w-[400px] sm:max-w-[264.77px]",
  },
  {
    src: "/orthorus.jpg",
    alt: "orthorus",
    width: 883,
    mobileWidth: 442,
    height: 574,
    mobileHeight: 287,
    className: "max-w-[400px] sm:max-w-[883px]",
  },
  {
    src: "/reekaslide.jpg",
    alt: "reekaslide",
    width: 600,
    mobileWidth: 300,
    height: 574,
    mobileHeight: 287,
    className: "max-w-[400px] sm:max-w-[600px]",
  },
  {
    src: "/creatorwire.jpg",
    alt: "creatorwire",
    width: 860.41,
    mobileWidth: 320.20,
    height: 574,
    mobileHeight: 287,
    className: "max-w-[400px] sm:max-w-[860.41px]",
  },
];

export default function Carousel() {
  // const [translateX, setTranslateX] = useState(0);
  // const intervalRef = useRef<NodeJS.Timeout | null>(null);
  const trackRef = useRef<HTMLDivElement | null>(null);
  const xRef = useRef(0);
  const speed = 0.5;

  // Auto-scroll continuously
  useEffect(() => {
    // intervalRef.current = setInterval(() => {
    //   setTranslateX((prev) => prev - 1);
    // }, 16);

    // return () => {
    //   if (intervalRef.current) {
    //     clearInterval(intervalRef.current);
    //   }
    // };

    let frameId: number;

    const animate = () => {
      if (trackRef.current) {
        xRef.current -= speed;

        const width = trackRef.current.scrollWidth / 2;
        if (Math.abs(xRef.current) >= width) {
          xRef.current = 0;
        }

        trackRef.current.style.transform = `translateX(${xRef.current}px)`;
      }

      frameId = requestAnimationFrame(animate);
    };

    frameId = requestAnimationFrame(animate);

    return () => cancelAnimationFrame(frameId);
  }, []);



  return (
    <div className="mt-32 flex flex-row justify-center items-center -z-40">
      <motion.div
        {...imageSlide}
        className="flex flex-row ml-5 sm:ml-0 max-h-[287px] sm:max-h-[574px] overflow-hidden relative select-none"
      >
        <div
          ref={trackRef}
          className="flex flex-row"
          style={{
            width: "max-content",
          }}
        >
          {[...Array(2)].map((_, setIndex) => (
            <div key={setIndex} className="flex flex-row gap-4 mr-5">
              {carouselImages.map((img, i) => (
                <Image
                  key={`${setIndex}-${i}`}
                  src={img.src}
                  alt={img.alt}
                  width={img.width}
                  height={img.height}
                  style={{ objectFit: "inherit" }}
                  className={`${img.className} flex-shrink-0 hidden sm:inline`}
                  draggable={false}
                />
              ))}
              {carouselImages.map((img, i) => (
                <Image
                  key={`${setIndex}+${i}`}
                  src={img.src}
                  alt={img.alt}
                  width={img.mobileWidth}
                  height={img.mobileHeight}
                  style={{ objectFit: "inherit" }}
                  className={`${img.className} flex-shrink-0 sm:hidden`}
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