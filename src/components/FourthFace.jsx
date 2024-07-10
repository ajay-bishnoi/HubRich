import React from "react";
import { Heading2, NextArrow, Paragraphs, PrevArrow } from "../assets/Icon";
import Commonbtn from "../common/Commonbtn";
import FaceSlider from "../common/FaceSlider";

const FourthFace = () => {
  return (
    <div className="xl:p-[302px_0px_186px_0px] lg:py-[120px] md:py-[80px] sm:py-[70px] p-[56px_0px_56px_0px]">
      <div className="container lg:max-w-[1016px] xl:max-w-[1188px] 2xl:max-w-[1344px]">
        <div className="flex flex-row flex-wrap w-full items-center">
          <div className=" w-full lg:w-5/12">
            <div className="text-center lg:text-start lg:max-w-[350px] xl:max-w-none">
              <h4 className=" font-Helvetica font-normal text-[29px] leading-[37px] text-black ">
                THE FOUR PHASES OF
              </h4>
              <Heading2
                Content1="SEPARATION "
                Content2="MINDSET"
                clsValue="xl:mb-[19px] mb-4"
                clsValue2="text-orange lg:block"
              />
              <Paragraphs
                clsValue="opacity-70 xl:mb-9 mb-7"
                Content1="There are 4 typical separation phases. The 4 phases are not always clearly separated from each other and can overlap."
              />
              <Commonbtn
                content="Book a non-binding initial consultation now"
                class1="rounded-[63px] after:rounded-[63px] max-lg:mx-auto"
              />
            </div>
          </div>
          {/* column */}
          <div className=" w-full lg:w-7/12 flex lg:justify-end justify-center relative z-0 lg:pl-6 mt-8 sm:mt-12 lg:mt-0">
            <div className="w-full max-w-[608px]">
              <FaceSlider />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FourthFace;
