import React, { useEffect, useState } from "react";
import { BlueCard } from "../assets/Icon";
import { BlueCardData1, BlueCardData2 } from "../common/Helper";
import CardSlider from "../common/CardSlider";
import CardSlider2 from "../common/CardSlider2";
import Commonbtn from "../common/Commonbtn";

const BlueCards = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  return (
    <div>
      <div className="bg-conversation-bg bg-cover bg-no-repeat bg-center ">
        {/* container */}
        <div className="container lg:max-w-[1016px] xl:max-w-[1188px] 2xl:max-w-[1344px]">
          {/* card-container-1 */}
          <div className="flex flex-row w-full max-w-[1000px] justify-end">
            {/* cards */}
            {isMobile ? (
              <CardSlider />
            ) : (
              BlueCardData1.map((data, index) => (
                <BlueCard
                  key={index}
                  textContent={[data.title]}
                  class2={data.style}
                />
              ))
            )}
          </div>
          {/* card-container-2 */}
          <div className="flex flex-row w-full max-w-[1000px] lg:mt-9  mt-7">
            {/* cards */}
            {isMobile ? (
              <CardSlider2 />
            ) : (
              <div className="flex flex-row w-full max-w-[1000px] ">
                {BlueCardData2.map((data, index) => (
                  <BlueCard
                    key={index}
                    textContent={[data.title]}
                    class2={data.style}
                    class1="!pt-[45px]"
                  />
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
      <div className="container lg:max-w-[1016px] xl:max-w-[1188px] 2xl:max-w-[1344px] xl:mt-12 md:mt-10 mt-8">
        <div className="flex flex-col items-center">
          <p className=" font-Poppins text-center font-normal text-base leading-6 text-black">
            You are not alone! Numerous women before you stood exactly at this
            point, where you are now.
          </p>
          <Commonbtn
            content="Book a non-binding initial consultation now"
            class1="rounded-[63px] after:rounded-[63px] sm:mt-5 mt-4"
          />
        </div>
      </div>
    </div>
  );
};

export default BlueCards;
