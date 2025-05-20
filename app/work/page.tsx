import Works from "@/components/works";

const page = () => {
  return (
    <div className="bg-white h-full pt-5">
      <div className="flex flex-col justify-center items-center gap-3">
        <div className="text-[#363636] text-xl">Recent Projects</div>
        <div className="text-[#CFCFCF] text-3xl sm:text-4xl md:text-5xl  ">MY WORK</div>
      </div>
      <div>
        <Works/>
      </div>
      
    </div>
  );
};
export default page;
