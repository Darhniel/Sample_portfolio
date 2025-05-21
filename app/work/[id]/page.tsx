"use client"
import ProjectBoard from "@/components/projectsboard";
import Navbar from "@/components/navbar";
import Projectimages from "@/components/projectimages";
import { useParams } from "next/navigation";

const Page = () => {
    const params = useParams();
    const id = params?.id as string | undefined;
  return (
    <div className={`${id=== "reeka" ? "bg-[#F0F0F0]":"bg-white"} h-auto pb-1 pt-5 font-inter`}>
      <Navbar />
      <ProjectBoard/>
      <Projectimages/>
    </div>
  );
};
export default Page;
