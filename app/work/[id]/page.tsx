"use client";
import ProjectBoard from "@/components/projectsboard";
import Navbar from "@/components/navbar";
import Projectimages from "@/components/projectimages";
import Contact from "@/components/contact";

const Page = () => {
  //const params = useParams();
  //const id = params?.id as string | undefined;
  return (
    <div className="bg-white w-full min-h-screen">
      <div className="max-w-[1600px] mx-auto">
        <div
          className={` bg-white min-h-screen pb-1 pt-5 font-inter`}
        >
          <Navbar />
          <ProjectBoard />
          <Projectimages />
        </div>
      </div>
      <Contact/>
    </div>

  );
};
export default Page;
