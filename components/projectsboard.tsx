"use client";

import { FC } from "react";
import { useParams } from "next/navigation";
import NorthEastIcon from "@mui/icons-material/NorthEast";
interface ProjectsboardProps {
  button: string[];
  title: string;
  description: string;
  id?: string;
}
const Projectsboardlist: ProjectsboardProps[] = [
  {
    id: "voya",
    button: ["Product Design", "Design System"],
    title: "VOYA — The app that solves all your mobility issues within Africa",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  },
  {
    id: "orthorus",
    button: ["Product Design", "Design System", "Dashboard"],
    title: "ORTHORUS — The app that solves all your mobility issues within",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  },
  {
    id: "vynt",
    button: ["Product Design", "Design System"],
    title: "VNYT — The app that solves all your mobility issues within Africa",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  },
  {
    id: "creatorwire",
    button: ["Product Design"],
    title: "CREATORWIRE — The app that solves all your mobility issues within",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  },
  {
    id: "reeka",
    button: ["Product Design", "Design System"],
    title: "REEKA — The app that solves all your mobility issues within",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  },
  {
    id: "ajoin",
    button: ["Product Design", "Design System"],
    title: "AJOIN — The app that solves all your mobility issues within Africa",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  },
  {
    id: "reekadeck",
    button: ["Deck Design", "Design System"],
    title: "REEKA DECK — The app that solves all your mobility issues within",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
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
  const { button, title, description, id } = props;
  return (
    <div className="flex flex-col gap-6 mt-6 mx-5 md:mx-8 md:w-4/5 lg:mx-10 lg:w-1/2">
      <div className="flex flex-row gap-2 py-2">
        {button.map((item, index) => (
          <button
            key={index}
            className="bg-[#CFCFCF] text-[#F6F6F6] rounded-full px-3 py-1 text-xs font-medium"
          >
            {item}
          </button>
        ))}
      </div>
      <div className="text-2xl sm:text-6xl text-[#363636]">{title}</div>
      <div className="sm:text-sm text-xs text-[#BBBBBB] -mt-5 sm:mt-0 font-medium">{description}</div>
      {id === "creatorwire" && (
        <button className="self-start flex flex-row gap-2 justify-center items-center h-10 w-32 text-sm border border-[#000000] rounded-full text-[#1E1E1E]">
          <p>Visit Website</p>
          <NorthEastIcon style={{ fontSize: 16 }} />
        </button>
      )}
    </div>
  );
};

export default ProjectBoard;
