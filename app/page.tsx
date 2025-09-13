import Navbar from "@/components/navbar";
import Topbar from "@/components/topbar";
import Workpage from "@/components/workpage";

const page = () => {
  return (
    <div className="bg-white w-full min-h-screen">
      <div className="max-w-[1600px] mx-auto">
        <div className="bg-[#FAFAFA] pt-5 font-inter mx-auto">
          <Navbar />
          <Topbar />
          <Workpage />
        </div>
      </div>
    </div>

  );
};
export default page;
