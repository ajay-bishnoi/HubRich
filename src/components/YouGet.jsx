import React from "react";
import Flower from "../assets/img/png/flower.webp";
import {
  Heading2,
  MainHeading,
  Paragraphs,
  SixCard,
  TextEllips,
  TextEllips2,
} from "../assets/Icon";
import { GetCard } from "../common/Helper";
import ContentEllips from "../assets/img/png/text-ellips-2.webp";
import ContentEllips2 from "../assets/img/png/text-ellips-3.png";
import LeftFlower from "../assets/img/png/flower-ellips.png";
import RightFlower from "../assets/img/png/flower-1-ellips.webp";

const YouGet = () => {
  return (
    <div className=" xl:p-[122px_0px_124px_0px] lg:py-[120px] md:py-20 sm:py-[70px] py-[60px] relative z-20 2xl:mx-auto 2xl:max-w-[1440px] ">
      <div className="container lg:max-w-[1016px] xl:max-w-[1188px] 2xl:max-w-[1344px] relative">
        <div className=" flex flex-col lg:flex-row items-center gap-3  ">
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
        <div className="flex flex-row flex-wrap w-full rot ">
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
        {/* ellips */}
        <TextEllips2
          setposition="right-0 lg:-top-[30%] md:-top-[16%] hidden md:block"
          setposition2="-left-[23px] bottom-0 flex-col-reverse"
          setposition3="-left-[55px] -bottom-[7px]"
          SrPosition="rotate-90"
          content="MJH"
          content2=""
          SrNumber="02"
          lineClass="lg:h-[269px] h-[180px] w-[2px] "
          line2class="min-w-[26px] h-[2px]"
        />
        <TextEllips
          setposition="left-[9px] -bottom-[6%] xl:-bottom-[12%]"
          setposition2="left-[0px] bottom-0"
          SrPosition="-rotate-90"
          content=""
          content2="Goal"
          SrNumber="03"
          lineClass="h-[581px] w-[2px] "
          line2class="w-[26px] h-[2px]"
        />
      </div>
      {/* ellips */}
      <img
        src={RightFlower}
        alt="ContentEllips"
        className="absolute -z-30 pointer-events-none hidden md:block top-[25%] right-0 w-[190px] h-[301px]"
      />
      <img
        src={LeftFlower}
        alt="ContentEllips"
        className="absolute -z-30 pointer-events-none bottom-0 left-0 "
      />
    </div>
  );
};

export default YouGet;
