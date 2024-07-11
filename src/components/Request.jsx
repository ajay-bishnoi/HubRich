import React, { useEffect, useState } from "react";
import { Heading2, Paragraphs, RequestCard } from "../assets/Icon";
import Commonbtn from "../common/Commonbtn";
import { BlueCardData4, BlueCardData5 } from "../common/Helper";
import RequestSlider from "../common/RequestSlider";

const Request = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 991);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 991);
    };
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  return (
    <>
      <div className="xl:p-[70px_0px_60px_0px] py-[60px] bg-lightBlue2 2xl:mx-auto 2xl:max-w-[1440px]">
        <div className="container lg:max-w-[1016px] xl:max-w-[1188px] 2xl:max-w-[1344px]">
          <div className=" flex items-center justify-between text-center md:text-start flex-col md:flex-row  md:gap-10 gap-4">
            <Heading2
              Content1="Request your "
              Content2="non-binding "
              Content3="strategy meeting now!"
              clsValue=" !uppercase text-black max-w-[610px] w-full"
              clsValue2="!text-orange block"
              clsValue3="text-black"
            />
            <div className=" flex items-center gap-3 xl:max-w-[412px] md:max-w-[330px] text-center sm:text-start">
              <span className=" xl:h-[120px] md:h-[140px] h-[100px] w-1 bg-purple md:mt-1"></span>
              <Paragraphs
                clsValue="!font-Poppins text-center md:text-start"
                Content1="Click on the button below, choose an appointment and answer the questions truthfully. One of our strategy consultants will then contact you and conduct your free consultation. We can advise you on the following topics: "
              />
            </div>
          </div>
        </div>
      </div>
      {/* blue-card-section */}
      <div className="xl:p-[112px_0px_186px_0px] lg:p-[100px_0px_120px_0px] md:py-20 sm:py-[70px] py-[60px]  bg-no-repeat bg-cover bg-center bg-request 2xl:mx-auto 2xl:max-w-[1440px]">
        <div className="container lg:max-w-[1016px] xl:max-w-[1188px] 2xl:max-w-[1344px] ">
          {/* card -1 */}
          <div className=" flex-row justify-center w-full max-w-[1000px] mx-auto ">
            {isMobile ? (
              <RequestSlider />
            ) : (
              <div className="flex-row flex justify-center w-full max-w-[1000px] mx-auto">
                {BlueCardData4.map((contentData, index) => (
                  <RequestCard key={index} textContent={[contentData.title]} />
                ))}
              </div>
            )}
          </div>
          {/* card -2 */}
          <div className=" lg:flex hidden flex-row justify-center w-full max-w-[1000px] mx-auto mt-6 lg:mt-[34px]">
            {BlueCardData5.map((contentData, index) => (
              <RequestCard
                key={index}
                class1={[contentData.style]}
                textContent={[contentData.title]}
              />
            ))}
            {/*  */}
          </div>
          <Commonbtn
            content="Book a non-binding initial consultation now"
            class1="rounded-[63px] after:rounded-[63px] mx-auto xl:mt-[58px] mt-12"
          />
        </div>
      </div>
    </>
  );
};

export default Request;
