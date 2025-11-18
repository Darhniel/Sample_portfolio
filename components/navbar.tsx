"use client";

import Link from "next/link";
import Image from "next/image";

const Navbar = () => {
  // const router = useRouter();

  // const goToWorks = () => {
  //   router.push("/#work");
  // };

  return (
    <div className=" w-full">
      <div className="font-medium mx-2 sm:mx-[80px] text-sm flex flex-row justify-between items-center text-[#000000] rounded-4xl">
        <Link href={"/"} className="">
          <Image 
            src="/olojodaniellogo.png" 
            alt="logo" 
            width={180} 
            height={70} 
          />
        </Link>
        <div className="h-10 w-36 rounded-4xl bg-[#363636] text-[#FAFAFA] border border-[#000000] text-center flex justify-center items-center">
          <a href="mailto:olojodaniel99@gmail.com" target="_blank">
            Work with me{" "}
          </a>
        </div>
      </div>
    </div>

  );
};
export default Navbar;


// / <div className="fixed right-0 left-0 z-50 font-medium w-11/12 text-sm sm:w-[488px] flex flex-row justify-between items-center text-[#000000] px-1 h-10 sm:h-12 bg-[#F5F5F5] rounded-4xl m-auto border border-[#00000033] pl-5">


{/* <div className="flex flex-row items-center h-5/6">
        <div
          onClick={goToWorks}
          className=" sm:py-4 sm:px-6 sm:-ml-5 mr-3 sm:mr-0 cursor-pointer"
        >
          My Work
        </div>
        
      </div> */}
// </div>