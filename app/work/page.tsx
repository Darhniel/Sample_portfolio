import MyWorks from "@/components/myworks";


const page = () => {
  return (
    <div className="bg-white h-auto pt-5 font-medium font-inter">
      <div className="flex flex-col justify-center items-center gap-3">
        <div className="text-[#363636] text-sm">Recent Projects</div>
        <div className="text-[#CFCFCF] text-3xl sm:text-4xl md:text-6xl">MY WORK</div>
      </div>
      <div>
        <MyWorks/>
      </div>
      
    </div>
  );
};
export default page;
