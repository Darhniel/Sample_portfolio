"use client";
import ProjectBoard from "@/components/projectsboard";
import Navbar from "@/components/navbar";
import Projectimages from "@/components/projectimages";
import { useParams } from "next/navigation";

const Page = () => {
  const params = useParams();
  const id = params?.id as string | undefined;
  return (
    <div className="bg-white w-full min-h-screen">
      <div className="max-w-[1600px] mx-auto">
        <div
          className={`${id === "reeka" ? "bg-[#F0F0F0]" : "bg-[#FAFAFA]"
            } min-h-screen pb-1 pt-5 font-inter`}
        >
          <Navbar />
          <ProjectBoard />
          <Projectimages />
        </div>
      </div>
    </div>

  );
};
export default Page;
