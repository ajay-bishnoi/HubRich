import React from "react";
import LawyerPic from "../assets/img/png/Lawyer.webp";
import { Heading2, Paragraphs, RightArrow } from "../assets/Icon";
import Commonbtn2 from "../common/Commonbtn2";
import Layer from "../assets/img/png/Lawyer-layer.webp";
const Lawyer = () => {
  return (
    <div className="xl:p-[239px_0px_202px_0px] lg:py-[120px] md:py-[80px] sm:py-[70px] py-[60px] z-30 relative">
      <div className="container lg:max-w-[1016px] xl:max-w-[1188px] 2xl:max-w-[1344px]">
        <div className="flex flex-row flex-wrap w-full ">
          <div className="w-full lg:w-6/12 sm:px-3 flex justify-center lg:justify-start">
            <img
              src={LawyerPic}
              alt="Lawyer-image"
              className=" w-full lg:max-w-[560px] max-w-[420px] xl:h-[574px]"
            />
          </div>
          <div className="w-full lg:w-6/12 flex justify-center sm:px-3 sm:mt-12 mt-8 lg:mt-0">
            <div className="text-center lg:text-start lg:max-w-[500px] max-lg:flex flex-col items-center">
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
              <h5 className=" capitalize font-neue font-semibold text-xl leading-7  text-black lg:mb-3 mb-2">
                About the mindset agency coach
              </h5>
              <Paragraphs
                clsValue=" mb-[35px] opacity-70 "
                Content1="Marc J. Hubrich is the founder of the mindset agency  specializing in consulting services."
              />
              <Commonbtn2
                svgIcon={<RightArrow />}
                svgClass="ml-3 mt-[5px]"
                Textbtn="Learn more about the agency"
                class1="bg-gradient-to-custom flex items-center bg-clip-text text-transparent hover:text-white hover:after-[] hover:bg-gradient-to-custom"
              />
            </div>
          </div>
        </div>
      </div>
      {/* layer */}
      <img
        src={Layer}
        alt="bg-layer"
        className=" absolute xl:bottom-[18%] lg:bottom-[13%] pointer-events-none bottom-[0%] right-0 max-w-[738px] -z-10 "
      />
    </div>
  );
};

export default Lawyer;
