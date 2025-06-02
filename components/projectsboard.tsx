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
      "This all-in-one mobility and lifestyle app helps users navigate visa applications, book private daily rides, access personalized client services, and enjoy luxury boat cruises, delivering seamless convenience for business and leisure needs.",
    websitelink: "https://www.voyaapp.co",
  },
  {
    id: "orthorus",
    button: ["Product Design", "Design System", "Dashboard"],
    title: "ORTHORUS — Raise Capital & Run Investor Ops in One Platform",
    description:
      "A streamlined web platform for startups and investment managers to efficiently raise capital and manage investor operations, from fundraising campaigns to reporting and compliance.",
  },
  {
    id: "vynt",
    button: ["Product Design", "Design System"],
    title: "VNYT — A Thrift Fashion Marketplace",
    description:
      "An intuitive app designed for fashion enthusiasts to discover, buy, and sell pre-loved clothing and accessories, promoting sustainable style through the art of thrifting",
    websitelink: "https://www.vyntapp.com",
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
      "A comprehensive web-based platform that simplifies property management, helping landlords and housing providers track tenants, manage leases, handle payments, and streamline communication, all in one place.",
  },
  {
    id: "ajoin",
    button: ["Product Design", "Design System"],
    title:
      "AJOIN — A Sporting Community that brings together People, Places and Equipment",
    description:
      "A user-friendly app designed to help sports enthusiasts easily discover nearby sporting equipment rentals and book local arenas, making it simple to gear up and get active wherever they are.",
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
  const { button, title, description, id, websitelink } = props;
  return (
    <div className="flex flex-col mt-32 sm:mt-40">
      <div className="flex max-w-screen items-start">
        <div className="flex flex-col lg:max-w-[60%] sm:ml-10 md:ml-9 lg:ml-[52] gap-6 mx-5 sm:mx-0">
          <motion.div {...buttonScale} className="flex flex-row gap-2 py-2">
            {button.map((item, index) => (
              <button
                key={index}
                className="bg-[#CFCFCF] text-[#F6F6F6] rounded-full px-2 sm:px-3 py-1 text-xs font-medium"
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
        </div>
      </div>
    </div>
  );
};

export default ProjectBoard;
