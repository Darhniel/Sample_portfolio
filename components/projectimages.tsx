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
      "/voya1.jpg",
      "/voya2.jpg",
      "/voya3.jpg",
      "/voya4.jpg",
      "/voya5.jpg",
    ],
  },
  {
    id: "orthorus",
    image: [
      "/orthorus1.jpg",
      "/orthorus2.jpg",
      "/orthorus3.jpg",
      "/orthorus4.jpg",
      "/orthorus5.jpg",
      "/orthorus6.jpg",
      "/orthorus7.jpg",
      "/orthorus8.jpg",
    ],
  },
  {
    id: "vynt",
    image: ["/vynt1.jpg", "/vynt2.jpg", "/vynt3.jpg", "/vynt4.jpg"],
  },
  {
    id: "creatorwire",
    image: ["/creatorwire1.jpg"],
  },
  {
    id: "reeka",
    image: [
      "/reeka1.jpg",
      "/reeka2.jpg",
      "/reeka3.jpg",
      "/reeka4.jpg",
      "/reeka5.jpg",
      "/reeka6.jpg",
      "/reeka7.jpg",
      "/reeka7.jpg",
    ],
  },
  {
    id: "reekadeck",
    image: [
      "/reekadeck1.jpg",
      "/reekadeck2.jpg",
      "/reekadeck3.jpg",
      "/reekadeck4.jpg",
      "/reekadeck5.jpg",
    ],
  },
  {
    id: "ajoin",
    image: [
      "/ajoin1.jpg",
      "/ajoin2.jpg",
      "/ajoin3.jpg",
      "/ajoin4.jpg",
      "/ajoin5.jpg",
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
    <div className="flex flex-col justify-center items-center w-full">
      <div className="flex flex-col gap-5 md:gap-8 px-5 sm:px-10 m-auto mt-12 mb-10 sm:mb-20 w-full">
        {image.map((img, index) => (
          <motion.div
            {...imageUp}
            key={index}
            className={`${id === "vynt" && "bg-[#BDBDBD]"} ${
              id === "creatorwire" && "max-h-[2647px]"
            } flex justify-center max-h-[843px] p-4 sm:p-8 md:min-w-[90%] border border-[#00000033] rounded-xl`}
          >
            <Image
              width={1261.48}
              height={717}
              src={img}
              alt={`${id} Project Image`}
              style={{
                objectFit: "inherit",
                
              }}
            className={`rounded-lg  ${ id === "creatorwire" && "w-[732px]"} ${ id === "orthorus" && "w-[1057px]"} ${ img === "/voya5.jpg" && "w-[796px]"}`}
            />
          </motion.div>
        ))}
      </div>
    </div>
  );
};
export default Projectimages;
