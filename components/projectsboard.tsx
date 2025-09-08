"use client";

import { FC } from "react";
import { useParams } from "next/navigation";
import NorthEastIcon from "@mui/icons-material/NorthEast";
import { motion } from "motion/react";
import Link from "next/link";
interface ProjectsboardProps {
  button: string[];
  title: string;
  description: string;
  id?: string;
  websitelink?: string;
  applink?: string;
}

const buttonScale = {
  initial: { opacity: 0, scale: 0.5 },
  whileInView: { opacity: 1, scale: 1 },
  transition: { delay: 0.2, duration: 0.8, ease: "easeInOut" },
};
const TitleLeft = {
  initial: { opacity: 0, x: 30 },
  whileInView: { opacity: 1, x: 0 },
  transition: { delay: 0.2, duration: 0.8, ease: "easeInOut" },
};

const Projectsboardlist: ProjectsboardProps[] = [
  {
    id: "voya",
    button: ["Product Design", "Design System"],
    title: "VOYA — The app that solves all your mobility issues within Africa",
    description:
      "",
    websitelink: "https://www.voyaapp.co",
    applink: "https://play.google.com/store/apps/details?id=com.hoarder.com&pcampaignid=web_share",
  },
  {
    id: "orthorus",
    button: ["Product Design", "Design System"],
    title: "ORTHORUS — Raise Capital & Run Investor Ops in One Platform",
    description:
      "",
  },
  {
    id: "vynt",
    button: ["Product Design", "Design System"],
    title: "VNYT — A Thrift Fashion Marketplace",
    description:
      "",
    websitelink: "https://www.vyntapp.com",
    applink:"https://play.google.com/store/apps/details?id=com.hoarder.com&pcampaignid=web_share"
  },
  {
    id: "creatorwire",
    button: ["Product Design"],
    title:
      "CREATORWIRE — A Payment Solution that Helps Creators, Brands and Agency",
    description:
      "Website that showcases the solutions provided to the payment issues that arises between Agencies, Brands and Creators.",
    websitelink: "http://CreatorWire.com",
  },
  {
    id: "reeka",
    button: ["Product Design", "Design System"],
    title: "REEKA — A Web Based Application that Manages Housing and Tenancy",
    description:
      "",
  },
  {
    id: "ajoin",
    button: ["Product Design", "Design System"],
    title:
      "AJOIN — A Sporting Community that brings together People, Places and Equipment",
    description:
      "",
  },
  {
    id: "reekadeck",
    button: ["Deck Design", "Design System"],
    title: "REEKA PITCH DECK",
    description:
      "Outlining the challenges faced by the real estate industry, presenting Reeka's solution to streamline property management and enhance tenant experience, and detailing Reeka's step-by-step implementation plan for these solutions.",
  },
];
const ProjectBoard = () => {
  const params = useParams();
  const id = params?.id as string | undefined;

  const selectedProject = Projectsboardlist.find(
    (project) => project.id === id
  );

  if (!selectedProject) {
    return <p className="text-center text-red-500">Project not found.</p>;
  }

  return <Projectsboard {...selectedProject} />;
};

const Projectsboard: FC<ProjectsboardProps> = (props) => {
  const { button, title, description, id, websitelink, applink} = props;
  return (
    <div className="flex flex-col mt-32 sm:mt-40">
      <div className="flex max-w-screen items-start">
        <div className="flex flex-col lg:max-w-[60%] sm:ml-10 md:ml-9 lg:ml-[52] gap-6 mx-5 sm:mx-0">
          <motion.div {...buttonScale} className="flex flex-row gap-2 py-2">
            {button.map((item, index) => (
              <button
                key={index}
                className={`${id === "voya" && item === "Product Design"
                  ? "bg-[#0E1930]"
                  : id === "voya" && item === "Design System"
                    ? "bg-[#237C79]"
                    : id === "vynt" && item === "Product Design"
                      ? "bg-[#52014F]"
                      : id === "vynt" && item === "Design System"
                        ? "bg-[#F9B205]"
                        : id === "ajoin" && item === "Product Design"
                          ? "bg-[#FF6934]"
                          : id === "ajoin" && item === "Design System"
                            ? "bg-[#4F0001]"
                            : id === "reeka" && item === "Product Design"
                              ? "bg-[#E36B37]"
                              : id === "reeka" && item === "Design System"
                                ? "bg-[#782A08]"
                                : id === "orthorus" && item === "Product Design"
                                  ? "bg-[#FF3838]"
                                  : "bg-[#CFCFCF]"
                  } ${id === "vynt" && item === "Design System" ? "text-black" : "text-[#F6F6F6]"}  rounded-full px-2 sm:px-5 py-[10px] text-xs font-medium`}
              >
                {item}
              </button>
            ))}
          </motion.div>
          <motion.div
            {...TitleLeft}
            className="text-2xl sm:text-6xl text-[#363636] font-bold lg:tracking-[-0.1rem] lg:w-[75%]"
          >
            {title}
          </motion.div>
          <motion.div
            {...TitleLeft}
            className="sm:text-sm text-xs text-[#BBBBBB] -mt-5 sm:mt-0 lg:w-[70%] font-medium lg:tracking-[-0.02rem]"
          >
            {description}
          </motion.div>
          <div className="flex flex-row gap-2">
            {(id === "creatorwire" || id === "vynt" || id === "voya") &&
              websitelink && (
                <Link
                  href={websitelink}
                  className="self-start flex flex-row gap-2 justify-center items-center h-10 w-32 text-sm border border-[#000000] rounded-full text-[#1E1E1E]"
                >
                  <p>Visit Website</p>
                  <NorthEastIcon style={{ fontSize: 16 }} />
                </Link>
              )}
              {/* App link */}
            {(id === "vynt" || id === "voya") &&
              applink && (
                <Link
                  href={applink}
                  className="px-2 self-start flex flex-row gap-2 justify-center items-center h-10 w-auto text-sm border border-[#000000] rounded-full text-[#1E1E1E]"
                >
                  <p>Download App</p>
                  <NorthEastIcon style={{ fontSize: 16 }} />
                </Link>
              )}
            {/* {(id === "vynt" || id === "voya") &&
              applink && (
                <Link
                  href={applink}
                  className="px-2 self-start flex flex-row gap-2 justify-center items-center h-10 w-auto text-sm border border-[#000000] rounded-full text-[#1E1E1E]"
                >
                  <p>Download App</p>
                  <NorthEastIcon style={{ fontSize: 16 }} />
                </Link>
              )} */}
          </div>

        </div>
      </div>
    </div >
  );
};

export default ProjectBoard;
