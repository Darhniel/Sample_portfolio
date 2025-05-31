"use client";
import { motion } from "framer-motion";
import Carousels from "./carousels";

const namefadeInUp = {
  initial: { opacity: 0, x: -30 },
  animate: { opacity: 1, x: 0 },
  transition: { delay: 0.2, duration: 0.8, ease: "easeInOut" },
};
const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: { delay: 0.2, duration: 0.8, ease: "easeInOut" },
};

const Topbar = () => {
  return (
    <div className="mt-24">
      <div className="flex flex-col justify-center items-center text-center gap-4 w-11/12 sm:w-[90%] md:w-[80%] lg:w-[50%] m-auto mt-5">
        <motion.p
          {...namefadeInUp}
          className="text-3xl sm:text-5xl text-[#363636] font-semibold mt-12 tracking-[-0.03rem] sm:tracking-[-0.2rem]"
        >
          OLOJO DANIEL
        </motion.p>

        <motion.p
          {...fadeInUp}
          className="text-[#CFCFCF] text-2xl sm:text-6xl font-semibold tracking-[-0.03rem] sm:tracking-[-0.3rem] leading-6 sm:leading-16"
        >
          PRODUCT DESIGNER & PITCH DECK DESIGNER
        </motion.p>

        <motion.p
          {...fadeInUp}
          className="text-[#363636] md:w-[80%] text-sm leading-[1.2] sm:mt-5"
        >
          I partner with startup founders to bring their vision to life through
          design that captivates users and attracts investors
        </motion.p>
        <motion.div
          {...fadeInUp}
          whileHover={{
            scale: 1.1,
            transition: { duration: 0.3 },
            opacity: 0.8,
          }}
          className="flex justify-center items-center bg-[#363636] text-[#FAFAFA] sm:mt-5 sm:py-3 px-6 py-2 rounded-4xl text-sm"
        >
          <a href="https://calendly.com/olojodaniel99/30min" target="_blank">
            Let&apos;s talk Design
          </a>
        </motion.div>
      </div>

      {/* Carousel Section */}
      <Carousels />
    </div>
  );
};

export default Topbar;
