"use client";
import MyWorks from "@/components/myworks";
import { motion } from "motion/react";

const moveLeft = {
  initial: { opacity: 0, x: 60 },
  animate: { opacity: 1, x: 0 },
  transition: { delay: 0.2, duration: 0.8, ease: "easeInOut" },
};
const Page = () => {
  return (
    <div className="bg-white h-auto pt-5 font-medium font-inter">
      <motion.div
        {...moveLeft}
        className="flex flex-col justify-center items-center gap-3"
      >
        <div className="text-[#363636] text-sm">Recent Projects</div>
        <div className="text-[#CFCFCF] text-3xl sm:text-4xl md:text-6xl">
          MY WORK
        </div>
      </motion.div>
      <div>
        <MyWorks />
      </div>
    </div>
  );
};
export default Page;
