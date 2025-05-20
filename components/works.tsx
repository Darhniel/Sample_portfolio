import Image from "next/image";

interface WorksProps {
  image: string;
  description: string;
  name: string;
}

const Works = () => {
  return (
    <div className="">
      <div className="flex flex-row flex-wrap justify-center items-center sm:grid sm:grid-cols-2 gap-3 sm:gap-x-12 mt-5 sm:px-24">
        {Workslist.map((work, index) => {
          const { image, description, name } = work;
          return (
            <div key={index} className="flex flex-col self-start gap-4">
              <div className="flex justify-center items-center border-[0.1px] border-[#CFCFCF] px-6 md:px-10 w-auto h-44 sm:h-auto md:py-10 py-6 rounded-2xl">
                <Image
                  src={image}
                  alt={description}
                  width={0}
                  height={0}
                  sizes="(max-width: 640px) 200px, 400px"
                  className="w-full h-full object-contain"
                />
              </div>
              <div className="flex flex-col">
                <p className="text-[#808080] text-sm">{description}</p>
                <p className="text-[#363636]">{name}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
export default Works;

const Workslist: WorksProps[] = [
  {
    image: "/voya.png",
    description: "Mobile App Design",
    name: "VOYA",
  },
  {
    image: "/orthorus.png",
    description: "Web App Design/Dashboard Design",
    name: "Orthorus",
  },
  {
    image: "/vynt.png",
    description: "Mobile App Design",
    name: "VYNT",
  },
  {
    image: "/creatorwire.png",
    description: "Web Design",
    name: "Creator Wire",
  },
  {
    image: "/reeka.png",
    description: "Mobile App Design",
    name: "Reeka",
  },
  {
    image: "/ajoin.png",
    description: "Mobile App Design",
    name: "Ajoin",
  },
  {
    image: "/reekadeck.png",
    description: "Pitch Deck Design",
    name: "Reeka (Deck)",
  },
];
