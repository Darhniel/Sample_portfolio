"use client";
import { motion} from "motion/react";
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
}
const Workslist: MyWorksProps[] = [
  {
    id: "voya",
    image: "/voya.png",
    description: "Mobile App Design",
    name: "VOYA",
  },
  {
    id: "orthorus",
    image: "/orthorus.png",
    description: "Web App Design/Dashboard Design",
    name: "Orthorus",
  },
  {
    id: "vynt",
    image: "/vynt.png",
    description: "Mobile App Design",
    name: "VYNT",
  },
  {
    id: "creatorwire",
    image: "/creatorwire.png",
    description: "Web Design",
    name: "Creator Wire",
  },
  {
    id: "reeka",
    image: "/reeka.png",
    description: "Mobile App Design",
    name: "Reeka",
  },
  {
    id: "ajoin",
    image: "/ajoin.png",
    description: "Mobile App Design",
    name: "Ajoin",
  },
  {
    id: "reekadeck",
    image: "/reekadeck.png",
    description: "Pitch Deck Design",
    name: "Reeka (Deck)",
  },
];

const MyWorks = () => {
  const router = useRouter();

  const handleClick = (id: string) => {
    const lowerId = id.toLowerCase();
    router.push(`/work/${lowerId}`);
  };
  return (
    <div className="sm:pb-12 pb-9">
      <div className="w-[86%] m-auto flex flex-row flex-wrap justify-center items-center md:grid md:grid-cols-2 gap-9 md:gap-x-12 md:gap-y-5 mt-5">
        {Workslist.map((work, index) => {
          const { image, description, name, id } = work;
          return (
            <div
              key={index}
              className="flex flex-col self-start gap-2 sm:gap-4"
            >
              <motion.div
                {...imageUp}
                onClick={() => handleClick(id)}
                className="flex justify-center items-center px-10 md:px-10 sm:w-auto h-56 sm:h-96 md:h-auto md:py-10 py-6 rounded-2xl border-[0.1px] border-[#CFCFCF]"
              >
                <Image
                  src={image}
                  alt={description}
                  width={0}
                  height={0}
                  sizes="(max-width: 640px) 200px, 400px"
                  className="w-full h-full object-contain"
                />
              </motion.div>
              <motion.div {...nameScale} className="flex flex-col">
                <p className="text-[#808080] sm:text-sm text-xs font-normal">
                  {description}
                </p>
                <p className="text-[#363636] font-medium sm:text-[20px]">
                  {name}
                </p>
              </motion.div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
export default MyWorks;
