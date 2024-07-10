import React from "react";
import Flower from "../assets/img/png/flower.webp";
import { Heading2, MainHeading, Paragraphs, SixCard } from "../assets/Icon";
import { GetCard } from "../common/Helper";

const YouGet = () => {
  return (
    <div className=" xl:p-[122px_0px_124px_0px] lg:py-[120px] md:py-20 sm:py-[70px] py-[60px]">
      <div className="container lg:max-w-[1016px] xl:max-w-[1188px] 2xl:max-w-[1344px] ">
        <div className=" flex flex-col lg:flex-row items-center gap-3 ">
          <div className="  max-lg:flex lg:flex-col sm:gap-4 gap-2 lg:gap-0 items-center sm:flex-row flex-wrap justify-center">
            <Heading2 Content1="what you" />
            <MainHeading
              Content1="will "
              Content2="get"
              clsValue="capitalize max-sm:!text-[44px] max-sm:!leading-[50px] max-xl:!text-[52px] max-md:!leading-[55px] max-xl:!leading-[65px]"
              clsValue2="capitalize text-orange"
            />
          </div>
          <div className=" flex sm:flex-row flex-col items-center gap-[18px]">
            <img src={Flower} alt="flower" className=" w-56 h-[216px]" />
            <div className=" flex items-center gap-3 max-w-[432px] text-center sm:text-start">
              <span className=" md:h-[67px] sm:h-[116px] h-[87px] w-1 bg-purple md:mt-1"></span>
              <Paragraphs
                clsValue="!font-Poppins"
                Content1="I will show you which steps are necessary for you to finally successfully let go of your EX. And I will support you to look confidently into your new future."
              />
            </div>
          </div>
        </div>
        <h4 className=" xl:mt-12 lg:mt-10 md:mt-7 mt-6 mb-7 font-semibold sm:text-xl text-lg font-neue leading-7 text-black text-center">
          In a 1:1 live coaching session, we will clarify the following
          questions in particular:
        </h4>
        {/* row */}
        <div className="flex flex-row flex-wrap w-full ">
          {GetCard.map((data, index) => (
            <SixCard
              textContent={[data.title]}
              class1={[data.style]}
              class2={[data.styleWidth]}
              commonBtn={data.commonBtn}
              key={index}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default YouGet;
