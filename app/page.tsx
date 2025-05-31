import Navbar from "@/components/navbar";
import Topbar from "@/components/topbar";
import Workpage from "@/components/workpage";

const page = () => {
  return (
    <div className="bg-[#FAFAFA] pb-1 pt-5 font-inter min-h-screen mx-auto">
      <Navbar />
      <Topbar />
      <Workpage/>
    </div>
  );
};
export default page;
