"use client";
import MyWorks from "@/components/myworks";
import { motion } from "motion/react";
import Contact from "./contact";
import { useEffect } from "react";

const moveLeft = {
  initial: { opacity: 0, x: 60 },
  animate: { opacity: 1, x: 0 },
  transition: { delay: 0.2, duration: 0.8, ease: "easeInOut" },
};
const Workpage = () => {
  useEffect(() => {
    if (typeof window !== "undefined" && window.location.hash) {
      const element = document.getElementById(
        window.location.hash.substring(1)
      );
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({
            behavior: "smooth",
            block: "start",
          });
        }, 100); // Small delay to ensure page is loaded
      }
    }
  }, []);

  return (
    <div id="work" className="bg-white mt-20 h-auto pt-20 font-medium font-inter">
      <motion.div
        {...moveLeft}
        className="flex flex-col justify-center items-center gap-3"
      >
        <div className="text-[#363636] text-sm">Recent Projects</div>
        <div className="text-[#CFCFCF] text-3xl sm:text-4xl md:text-6xl font-bold tracking-[-0.25rem]">
          MY WORK
        </div>
      </motion.div>
      <div className="mt-10">
        <MyWorks />
        <Contact />
      </div>
    </div>
  );
};
export default Workpage;
