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
    <div className="flex flex-col justify-center items-center">
      <div className="flex flex-col gap-5 md:gap-8 px-5 sm:px-10 m-auto mt-12 mb-10 sm:mb-20">
        {image.map((img, index) => (
          <motion.div
            {...imageUp}
            key={index}
            className={`${id === "vynt" && "bg-[#BDBDBD]"} ${
              id === "creatorwire" && "min-h-[2647px]"
            } flex justify-center max-h-[843px] p-4 sm:p-8 md:max-w-[1352px] border border-[#00000033] rounded-xl`}
          >
            <Image
              width={1261.48}
              height={717}
              src={img}
              alt={`${id} Project Image`}
              style={{
                objectFit: "inherit",
                maxWidth:
                  img === "/voya5.png"
                    ? "796px"
                    : id === "orthorus"
                    ? "1057px"
                    : id === "creatorwire"
                    ? "732px"
                    : id === "reeka"
                    ? "1057px"
                    : id === "ajoin"
                    ? "1261px"
                    : id === "reekadeck"
                    ? "1137px"
                    : "1261.48px",
                maxHeight:
                  id === "orthorus"
                    ? "686px"
                    : id === "creatorwire"
                    ? "2507px"
                    : id === "reeka"
                    ? "683px"
                    : id === "reekadeck"
                    ? "640px"
                    : "717px",
              }}
              className="rounded-lg shadow-lg w-full"
            />
          </motion.div>
        ))}
      </div>
    </div>
  );
};
export default Projectimages;
