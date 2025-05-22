"use client";
import { useParams } from "next/navigation";
import Image from "next/image";
import { motion } from "motion/react";

interface ProjectImagesProps {
  id: string;
  image: string[];
}
const imageUp = {
  initial: { opacity: 0, y: 50 },
  whileInView: { opacity: 1, y: 0 },
  transition: { delay: 0.2, duration: 0.8, ease: "easeInOut" },
};

const Images: ProjectImagesProps[] = [
  {
    id: "voya",
    image: [
      "/voya1.png",
      "/voya2.png",
      "/voya3.png",
      "/voya4.png",
      "/voya5.png",
    ],
  },
  {
    id: "orthorus",
    image: [
      "/orthorus1.png",
      "/orthorus2.png",
      "/orthorus3.png",
      "/orthorus4.png",
      "/orthorus5.png",
      "/orthorus6.png",
      "/orthorus7.png",
      "/orthorus8.png",
    ],
  },
  {
    id: "vynt",
    image: ["/vynt1.png", "/vynt2.png", "/vynt3.png", "/vynt4.png"],
  },
  {
    id: "creatorwire",
    image: ["/creatorwire1.png"],
  },
  {
    id: "reeka",
    image: [
      "/reeka1.png",
      "/reeka2.png",
      "/reeka3.png",
      "/reeka4.png",
      "/reeka5.png",
      "/reeka6.png",
      "/reeka7.png",
      "/reeka7.png",
    ],
  },
  {
    id: "reekadeck",
    image: [
      "/reekadeck1.png",
      "/reekadeck2.png",
      "/reekadeck3.png",
      "/reekadeck4.png",
      "/reekadeck5.png",
    ],
  },
  {
    id: "ajoin",
    image: [
      "/ajoin1.png",
      "/ajoin2.png",
      "/ajoin3.png",
      "/ajoin4.png",
      "/ajoin5.png",
    ],
  },
];
const Projectimages = () => {
  const params = useParams();
  const id = params?.id as string | undefined;

  const selectedImage = Images.find((selected) => selected.id === id);

  if (!selectedImage) {
    return <p className="text-center text-red-500">Project not found.</p>;
  }

  return (
    <div>
      <Projectpic {...selectedImage} />
    </div>
  );
};

const Projectpic = (props: ProjectImagesProps) => {
  const { image, id } = props;
  return (
    <div className="flex flex-col gap-5 md:gap-8 px-5 sm:px-10 m-auto mt-12 mb-10 sm:mb-20">
      {image.map((img, index) => (
        <motion.div
          {...imageUp}
          key={index}
          className={`${
            id === "vynt" ? "bg-[#BDBDBD]" : "bg-white"
          } flex justify-center h-auto p-4 md:w-11/12 border border-[#00000033] rounded-xl`}
        >
          <Image
            width={400}
            height={400}
            src={img}
            alt={` ${id} Project Image`}
            className="rounded-lg shadow-lg object-contain w-full"
          />
        </motion.div>
      ))}
    </div>
  );
};
export default Projectimages;
