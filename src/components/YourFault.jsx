import React from "react";
import { MainHeading, Paragraphs } from "../assets/Icon";
import FaultEllips from "../assets/img/png/Ellips-2.webp";

const YourFault = () => {
  return (
    //   section
    <div className="xl:p-[151px_0px_34px_0px] lg:pt-[120px] md:pt-[80px] sm:p-[60px_0px_34px_0px] p-[12px_0px_34px_0px] 2xl:mx-auto 2xl:max-w-[1440px] relative z-10">
      {/* container */}
      <div className="container lg:max-w-[1016px] xl:max-w-[1188px] 2xl:max-w-[1344px] relative z-10">
        {/* content */}
        <div className=" max-xl:max-w-[806px] w-full sm:mb-8 mb-6 md:mb-10 lg:mb-12 xl:mb-[58px] mx-auto md:flex-row flex-col items-center flex justify-center xl:justify-start md:gap-10 sm:gap-5 gap-4 lg:gap-[61px]">
          <div className=" xl:pl-[224px]">
            <MainHeading
              Content1="IT'S NOT"
              clsValue="md:text-start text-center max-sm:!text-[44px] max-sm:!leading-[50px] max-xl:!text-[52px] max-md:!leading-[55px] max-xl:!leading-[65px]"
              clsValue2="text-orange md:block lg:ml-[73px] md:ml-[62px]"
              Content2=" YOUR "
              clsValue3="text-black"
              Content3="FAULT!"
            />
          </div>
          <div className=" items-center  flex gap-3 w-full md:max-w-[300px]">
            <span className=" h-[60px] md:h-[67px] w-1 bg-purple md:mt-1"></span>
            <Paragraphs
              clsValue="mb-0 text-center md:text-start"
              Content1="It's not your fault for not knowing how to let go of the partner who no longer made you feel special."
            />
          </div>
        </div>
        <h4 className=" mb-0 font-semibold capitalize sm:text-xl text-lg font-neue leading-7 text-black text-center">
          How would you know when you are busy with completely different things
          at the moment:
        </h4>
      </div>
      {/* ellips */}
      <img
        src={FaultEllips}
        alt="Ellips"
        className=" absolute pointer-events-none hidden md:block -z-20 right-0 lg:-bottom-4 xl:-bottom-[45px] bottom-2 lg:h-[322px] xl:h-[400px] h-[300px] "
      />
    </div>
  );
};

export default YourFault;
