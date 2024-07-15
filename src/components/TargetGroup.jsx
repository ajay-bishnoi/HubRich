import React from "react";
import { Heading2, Paragraphs } from "../assets/Icon";
import Layer from "../assets/img/png/Layer.webp";

const TargetGroup = () => {
  return (
    <div className="2xl:mx-auto 2xl:max-w-[1440px] relative z-0">
      <div className=" lg:pt-12 py-8 lg:pb-[52px] bg-lightBlue2 2xl:mx-auto 2xl:max-w-[1440px]">
        <div className="container lg:max-w-[1016px] xl:max-w-[1188px] 2xl:max-w-[1344px] py-[1px]">
          <div className=" flex items-center justify-end  flex-col sm:flex-row lg:gap-[129px] sm:gap-10 gap-4">
            <Heading2
              Content1="TARGET"
              Content2="GROUP"
              clsValue="!text-orange "
              clsValue2="text-black"
            />
            <div className=" flex items-center gap-3 max-w-[362px] text-center sm:text-start">
              <span className=" h-[67px] w-1 bg-purple md:mt-1"></span>
              <Paragraphs
                clsValue="!font-Poppins"
                Content1="The coaching is aimed at married women who have already separated or are thinking of separating."
              />
            </div>
          </div>
        </div>
      </div>
      {/*  */}
      <div className=" bg-ring-bg bg-no-repeat bg-cover bg-center ">
        <div className="container lg:max-w-[1016px] xl:max-w-[1188px] 2xl:max-w-[1344px] relative xl:py-[108.5px] lg:py-[100px] md:py-20 sm:py-[70px] py-[60px]">
          <div className=" flex-col flex sm:gap-8 gap-4 max-lg:items-center">
            <div className=" flex lg:flex-col md:flex-row flex-col sm:gap-8 gap-4 lg:gap-0 ">
              <div className=" min-h-[187px] max-w-[382px] w-full py-10 px-8 border-[1px] border-solid backdrop-blur-lg  bg-[#FFFFFF1F] lg:mb-8 border-[#FFFFFF26]">
                <Paragraphs
                  clsValue="!text-white capitalize"
                  Content1="You have separated and have the feeling that you can never be happy again and that you will be alone forever."
                />
              </div>
              <div className=" min-h-[187px] max-w-[382px] w-full p-10 border-[1px] border-solid backdrop-blur-lg  bg-[#FFFFFF1F] border-[#FFFFFF26]">
                <Paragraphs
                  clsValue="!text-white capitalize"
                  Content1="How are you supposed to be able to let go of someone who is so entangled with your life? It's impossible, isn't it?"
                />
              </div>
            </div>
            <div className=" min-h-[187px] max-w-[382px] w-full py-10 px-8 bg-[#003E92B2] backdrop-blur-lg  lg:hidden">
              <Paragraphs
                clsValue="text-white"
                Content1="To understand how to let go of your partner, you need a detailed step-by-step action plan, which you will receive from me in a 1:1 coaching session."
              />
            </div>
          </div>
          {/*  */}
          <div className=" absolute lg:-bottom-[31px] lg:right-9 right-0 lg:inline hidden max-w-[338px] min-h-[272px] py-[65px] px-6 backdrop-blur-sm bg-[#003E92B2]">
            <Paragraphs
              clsValue="text-white"
              Content1="To understand how to let go of your partner, you need a detailed step-by-step action plan, which you will receive from me in a 1:1 coaching session."
            />
          </div>
        </div>
      </div>
      {/* ellips */}
      <img
        src={Layer}
        alt="layer"
        className=" absolute xl:-bottom-[37%] md:-bottom-[37%] -bottom-[25%] lg:-bottom-[35%] xl:left-0 md:left-0 lg:-left-[10%] pointer-events-none -z-50 w-[615px] "
      />
    </div>
  );
};

export default TargetGroup;
