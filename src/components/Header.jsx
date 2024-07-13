import React from "react";
import Navbar from "./Navbar";
import HeaderLayerBg from "../assets/img/png/Hero-image.webp";
import HeaderEllips from "../assets/img/png/headerEllips.webp";
import {
  CommonBookBtn,
  MainHeading,
  Paragraphs,
  PhoneIcon,
} from "../assets/Icon";
import Commonbtn from "../common/Commonbtn";
import ContentEllips from "../assets/img/png/text-ellips.webp";

const Header = () => {
  return (
    <>
      <header className="lg:bg-header-bg 2xl:mx-auto 2xl:max-w-[1440px] 2xl:bg-none h-full w-full bg-cover bg-no-repeat lg:bg-center bg-left z-30 relative">
        <Navbar />
        {/* hero-section */}
        <div className="lg:pt-40 md:pt-[120px] sm:pt-20 py-[60px] sm:pb-11 2xl:pb-20">
          {/* container */}
          <div className="container flex items-center justify-between lg:max-w-[1016px] xl:max-w-[1188px] 2xl:max-w-[1344px] relative z-20">
            {/* row */}
            <div className="flex flex-row flex-wrap w-full lg:h-[522px] justify-between">
              {/* column */}
              <div className="w-full xl:w-1/2 lg:w-7/12">
                <div className=" w-full lg:max-w-[517px] text-center lg:text-start ">
                  <h4 className=" font-normal font-neue leading-6  text-lg text-orange mb-0">
                    Marc Joachim Hubrich
                  </h4>
                  <MainHeading Content1="NOW I LET YOU GO!" clsValue="mb-2" />
                  <Paragraphs
                    clsValue="mb-0 opacity-70"
                    Content1="For women who do not want to be completely dragged down by a SEPARATION."
                  />
                  <Paragraphs
                    clsValue="sm:mb-8 mb-6 opacity-70"
                    Content1="How to let go of your EX so you can leave him behind without having to run to a therapist right away."
                  />
                  <div className=" flex items-center justify-center lg:justify-start gap-[22px]">
                    <Commonbtn
                      content="Book a non-binding initial consultation now"
                      class1="rounded-[63px] after:rounded-[63px] max-sm:pr-3"
                    />
                    <PhoneIcon />
                  </div>
                </div>
              </div>
              {/* column */}
              <div className="w-full xl:w-1/2 lg:w-5/12 flex lg:flex-col lg:justify-end justify-center xl:items-center lg:items-end lg:mt-0 mt-6 ">
                <div className="max-w-[365px] flex justify-between w-full relative after:absolute after:left-0 after:h-[55px]  sm:after:h-[74px] pl-2 sm:pl-3 after:w-[2px] after:top-1/2 after:-translate-y-1/2 after:bg-purple ">
                  <h4 className="mb-0 font-normal sm:text-base text-sm sm:leading-7 leading-5 font-Helvetica text-black lg:text-white uppercase w-full max-w-[138px]">
                    Die wichtigsten Aspekte einer Trennung:
                  </h4>
                  <ul className="ps-0 mb-0 gap-[2px] flex flex-col">
                    <li className=" relative capitalize font-Poppins font-medium text-black lg:text-white sm:text-base text-sm sm:leading-6 leading-5 after:w-1 after:h-1 after:-left-3 after:bg-black lg:after:bg-white after:absolute after:rounded-full after:top-1/2 after:-translate-y-1/2">
                      physische Trennung
                    </li>
                    <li className=" relative capitalize font-Poppins font-medium text-black lg:text-white sm:text-base text-sm sm:leading-6 leading-5 after:w-1 after:h-1 after:-left-3 after:bg-black lg:after:bg-white after:absolute after:rounded-full after:top-1/2 after:-translate-y-1/2">
                      mentale Trennung
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            {/* ellips */}
            <img
              src={ContentEllips}
              alt="ContentEllips"
              className="absolute -z-30 pointer-events-none hidden md:block xl:-bottom-[45%] lg:-bottom-1/4 -bottom-[20%] 2xl:-bottom-1/2 left-0 xl:h-[330px] h-[220px]"
            />
          </div>
        </div>
        <img
          src={HeaderLayerBg}
          alt="header-bg-image"
          className=" absolute 2xl:right-0 xl:-right-[10%] hidden 2xl:block top-0  xl:max-w-[791px] w-full h-full -z-10"
        />
        {/* ellips */}
        <img
          src={HeaderEllips}
          alt="header-ellips"
          className=" absolute top-0 left-0 w-[300px] sm:w-[360px] md:w-[430px] 2xl:w-[412px] pointer-events-none"
        />
      </header>
    </>
  );
};
export default Header;
