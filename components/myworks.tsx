"use client";
import { motion } from "motion/react";
import Image from "next/image";
import { useRouter } from "next/navigation";

const imageUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  transition: { delay: 0.2, duration: 0.8, ease: "easeInOut" },
};
const nameScale = {
  initial: { opacity: 0, scale: 0.3 },
  whileInView: { opacity: 1, scale: 1 },
  transition: { delay: 0.2, duration: 0.8, ease: "easeInOut" },
};

interface MyWorksProps {
  image: string;
  description: string;
  name: string;
  id: string;
  width?: number;
}
const Workslist: MyWorksProps[] = [
  {
    id: "voya",
    image: "/voya.jpg",
    description: "Mobile App Design",
    name: "VOYA - SOLVING MOBILITY ISSUES IN AN EMERGING MARKET.",
    width: 484.68,
  },
  {
    id: "orthorus",
    image: "/orthorus.jpg",
    description: "Web App Design/Dashboard Design",
    name: "Orthorus - Capital raising and investor ops, simplified.",
    width: 477,
  },
  {
    id: "vynt",
    image: "/vyntwork.jpg",
    description: "Mobile App Design",
    name: "VYNT - SAVING THE ENVIRONMENT THROUGH FASHION.",
    width: 484.68,
  },
  {
    id: "creatorwire",
    image: "/creatorwireslide.png",
    description: "Web Design",
    name: "Creator Wire",
    width: 512.65,
  },
  {
    id: "reeka",
    image: "/reeka.jpg",
    description: "Web App Design",
    name: "REEKA - Property Ops Made Simple.",
    width: 527.53,
  },
  {
    id: "ajoin",
    image: "/ajoin.jpg",
    description: "Mobile App Design",
    name: "AJOIN - MAKING CITIES FUN AGAIN.",
    width: 484.68,
  },
  {
    id: "reekadeck",
    image: "/reekadeck.jpg",
    description: "Pitch Deck Design",
    name: "Reeka (Deck)",
    width: 528,
  },
];

const MyWorks = () => {
  const router = useRouter();

  // Handle Click on Images
  const handleClick = (id: string) => {
    const lowerId = id.toLowerCase();
    router.push(`/work/${lowerId}`);
  };
  return (
    <div className="sm:pb-12 pb-9 lg:mx-10 m-auto w-[90%] lg:w-auto flex justify-center items-center">
      <div className="">
        {/* i used a custom width */}
        <div className="w-full m-auto flex flex-col justify-center items-center custom1:grid custom1:grid-cols-1 custom2:grid-cols-2  gap-[60px] lg:-gap-x-10 lg:gap-y-9 mt-5">
          {Workslist.map((work, index) => {
            const { image, description, name, id, width } = work;
            return (
              <div
                key={index}
                className=" flex flex-col items-start self-start gap-2 sm:gap-4 sm:max-w-[600px] lg:justify-start lg:items-start"
              >
                {/* Image Div */}
                <motion.div
                  {...imageUp}
                  onClick={() => handleClick(id)}
                  className=" flex justify-center items-center border-[0.5px] p-4 md:p-0 m-auto w-full md:h-[420px] border-[#CFCFCF] rounded-2xl"
                >
                  <Image
                    src={image}
                    alt={description}
                    width={width}
                    height={341}
                    style={{ objectFit: "inherit" }}
                    className="max-w-[400px] lg:max-w-[500px] sm:max-h-[341px] cursor-pointer  "
                  />
                </motion.div>
                <motion.div {...nameScale} className="flex flex-col">
                  <p className="text-[#808080] sm:text-sm text-xs font-normal">
                    {description}
                  </p>
                  <p className="text-[#363636] font-medium sm:text-[18px]">
                    {name.toUpperCase()}
                  </p>
                </motion.div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
export default MyWorks;
