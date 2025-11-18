import Link from "next/link";
import Image from "next/image";

const Contact = () => {
  return (
    <div className="bg-[#16181B]">
      <div className=" min-h-[64px] flex flex-col gap-8 items-center justify-center w-full text-center px-6 sm:px-[80px]">
        {/* <div className="relative w-full max-h-[320px] flex items-center justify-center overflow-hidden">
        <p className="font-semibold text-6xl sm:text-[120px] md:text-[150px] lg:text-[290px] text-[#CFCFCF] md:tracking-[-0.8rem] lg:tracking-[-1.2rem] leading-none mx-10">
          CONTACT
        </p>
      </div> */}
        <div className=" w-full flex flex-row justify-between items-center gap-2 font-semibold text-[12px] sm:text-[20px] mt-4 pb-2 uppercase text-[#F9FFFC] tracking-tight">
          <div className="flex flex-row items-center gap-1 sm:gap-[16px]">
            <Image 
              src="/mail.png" 
              alt="" 
              width={26} 
              height={26}
              className="hidden sm:inline"
            />
            <Image 
              src="/mail.png" 
              alt="" 
              width={16} 
              height={16}
              className="sm:hidden"
            />
            <a href="mailto:olojodaniel99@gmail.com">Olojodaniel99@gmail.com</a>
          </div>

          <Link 
            className="flex flex-row items-center gap-1 sm:gap-[16px]" 
            href="https://www.linkedin.com/in/ayomideolojo?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app"
          >
            <Image 
              src="/linkedin.png" 
              alt="" 
              width={26} 
              height={26}
              className="hidden sm:inline"
            />
            <Image 
              src="/linkedin.png" 
              alt="" 
              width={16} 
              height={16}
              className="sm:hidden"
            />
            <p>LINKEDIN</p>
          </Link>

        </div>
      </div>
    </div>

  );
};
export default Contact;
