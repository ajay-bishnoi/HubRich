import React from "react";
import LawyerPic from "../assets/img/png/men.webp";
import { Heading2, Paragraphs, RightArrow, TextEllips } from "../assets/Icon";
import Layer from "../assets/img/png/Lawyer-layer.webp";
import Commonbtn from "../common/Commonbtn";
import ContentEllips from "../assets/img/png/text-ellips-5.png";

const Lawyer = () => {
  return (
    <div className="xl:p-[239px_0px_202px_0px] lg:py-[120px] md:py-[80px] sm:py-[70px] py-[60px] z-30 relative">
      <div className="container lg:max-w-[1016px] xl:max-w-[1188px] 2xl:max-w-[1344px] relative">
        <div className="flex flex-row flex-wrap w-full ">
          <div className="w-full lg:w-6/12 sm:pr-3 flex justify-center lg:justify-start">
            <img
              src={LawyerPic}
              alt="Lawyer-image"
              className=" w-full 2xl:max-w-full 2xl:h-full lg:max-w-[560px] max-w-[420px] xl:h-[574px]"
            />
          </div>
          <div className="w-full lg:w-6/12 flex justify-center 2xl:justify-end sm:pl-3 sm:mt-12 mt-8 lg:mt-0">
            <div className="text-center lg:text-start lg:max-w-[500px] 2xl:max-w-[580px] max-lg:flex flex-col items-center">
              <Heading2
                Content1="LAWYER "
                Content2="& "
                Content3="DIVORCE COACH"
                clsValue2="text-orange"
                clsValue="uppercase"
                clsValue3="text-black"
              />
              <h4 className="font-normal sm:text-4xl text-3xl sm:leading-[47px] leading-10 text-black font-Helvetica lg:mb-[30px] mb-6">
                <span className="text-orange">M</span>arc{" "}
                <span className="text-orange"> J</span>oachim
                <span className="text-orange"> H</span>ubrich
              </h4>
              <h5 className=" capitalize font-neue font-semibold text-xl leading-7 text-black lg:mb-3 mb-2">
                About the mindset agency coach
              </h5>
              <Paragraphs
                clsValue=" mb-[35px] opacity-70 "
                Content1="Marc J. Hubrich is the founder of the mindset agency  specializing in consulting services."
              />
              <Commonbtn
                content="Learn more about the agency"
                class1="rounded-[59px] after:rounded-[59px] !py-[16px] !px-8 !max-w-[350px] !justify-between !items-center"
                class2="hidden"
                content2={<RightArrow />}
              />
            </div>
          </div>
        </div>
        <img
          src={Layer}
          alt="bg-layer"
          className=" max-2xl:hidden absolute  2xl:-bottom-[4%] xl:bottom-[18%] lg:bottom-[13%] pointer-events-none bottom-[0%] right-0 max-w-[738px] -z-10 "
        />
        {/* ellips */}
        <TextEllips
          setposition="left-[20px] -top-[26%] xl:-top-[43%] 2xl:-top-[36%] -z-20 pointer-events-none hidden lg:block"
          setposition2="left-[0px] bottom-0"
          SrPosition="-rotate-90"
          content=""
          content2="about"
          SrNumber="05"
          lineClass="h-[90px] xl:h-[167px] w-[2px] "
          line2class="w-[26px] h-[2px]"
        />
      </div>
      {/* layer */}
      <img
        src={Layer}
        alt="bg-layer"
        className=" absolute 2xl:hidden xl:bottom-[18%] lg:bottom-[13%] pointer-events-none bottom-[0%] right-0 max-w-[738px] -z-10 "
      />
    </div>
  );
};

export default Lawyer;
