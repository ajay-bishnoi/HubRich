import React from "react";
import { Heading2, Paragraphs } from "../assets/Icon";
import Commonbtn2 from "../common/Commonbtn2";

const OverEx = () => {
  return (
    <div className="xl:py-[106px] lg:py-[100px] md:py-20 sm:py-[70px] py-[60px] bg-over-ex bg-no-repeat bg-left bg-cover 2xl:mx-auto 2xl:max-w-[1440px]">
      <div className="container lg:max-w-[1016px] xl:max-w-[1188px] 2xl:max-w-[1344px]">
        <div className=" text-center max-w-[778px] w-full mx-auto sm:pt-[50px] pt-10 lg:px-[75px] sm:px-8 px-4 sm:pb-[42px] pb-8 backdrop-blur-sm border bg-[#FFFFFF26] border-[#FFFFFF26]">
          <Heading2
            Content1="Are you over your EX?"
            clsValue="text-white mb-[10px] !uppercase text-center !font-Helvetica"
          />
          <Paragraphs
            Content1="Most women don't even realize how their past experiences affect their lives today. Assisting you to overcome this situation is what we do."
            clsValue="text-white sm:mb-[31px] mb-6 text-center"
          />
          <Commonbtn2
            Textbtn="Let’s find it out"
            class1="font-semibold text-base leading-6 font-Inter bg-gradient-to-custom after:!bg-white hover:bg-clip-text hover:text-transparent text-white "
          />
        </div>
      </div>
    </div>
  );
};

export default OverEx;
