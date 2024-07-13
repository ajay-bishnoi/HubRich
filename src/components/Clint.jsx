import React from "react";
import { Heading2, Paragraphs } from "../assets/Icon";
import Contentellips from "../assets/img/png/text-ellips-6.png";
import Contentellips2 from "../assets/img/png/text-ellips-7.webp";
import Qutation from "../assets/img/svg/qutation.svg";
import Clintslider from "../common/Clintslider";
import Slider from "react-slick";

const Clint = () => {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    vertical: true,
    arrows: false,
    adaptiveHeight: true,
    verticalSwiping: true,
    speed: 1600,
    pauseOnhover: true,
    swipeToSlide: true,
    autoplay: true,
    autoplaySpeed: 1200,

    appendDots: (dots) => (
      <div
        style={{
          position: "absolute",
          right: "0",
          top: "58%",
          transform: "translateY(-42%)",
          width: "fit-content",
          height: "fit-content",
        }}
      >
        <ul
          style={{ margin: "0" }}
          className=" flex sm:flex-col custom-dots2 gap-3 justify-center"
        >
          {dots}
        </ul>
      </div>
    ),
  };
  return (
    <div className="xl:pb-[226px] lg:pb-[120px] md:pb-8 sm:pb-[26px] pb-[60px] relative !z-0">
      <div className="container lg:max-w-[1016px] xl:max-w-[1188px] 2xl:max-w-[1344px] relative z-30">
        <Heading2
          Content1="What our "
          Content2=" clients "
          Content3="say"
          clsValue="!uppercase text-center lg:mb-[29px] mb-[9px]"
          clsValue2="text-orange"
          clsValue3="text-black"
        />
        <div className="clint h-full relative z-30">
          <Slider {...settings}>
            <Clintslider />
            <Clintslider />
            <Clintslider />
          </Slider>
          {/* ellips */}
          <img
            src={Qutation}
            alt="ellips"
            className=" absolute xl:right-[7%] 2xl:right-[12%] lg:right-0 md:-right-[12%] hidden sm:block -right-[16%] top-[2%] xl:top-[6%] pointer-events-none  !-z-30"
          />
        </div>
        {/* ellips */}
        <img
          src={Contentellips}
          alt="ellips"
          className=" absolute lg:-top-[32%] -top-[24%] lg:h-[265px] h-[240px] right-0 -z-10 pointer-events-none  hidden md:block"
        />
        <img
          src={Contentellips2}
          alt="ellips"
          className=" absolute xl:-bottom-[32%] lg:-bottom-[17%] md:-bottom-[3%] hidden md:block  h-[330px] left-0 -z-10 pointer-events-none"
        />
      </div>
    </div>
  );
};

export default Clint;
