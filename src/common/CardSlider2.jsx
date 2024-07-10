import React from "react";
import Slider from "react-slick/lib/slider";
import { BlueCard } from "../assets/Icon";
import { BlueCardData2 } from "./Helper";

const CardSlider2 = () => {
  const settings2 = {
    dots: false,
    infinite: true,
    speed: 1000,
    slidesToShow: 2,
    slidesToScroll: 1,
    pauseOnHover: true,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 1600,
    cssEase: "linear",
    rtl: true,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <>
      <Slider {...settings2} className="w-full max-w-[1000px]">
        {BlueCardData2.map((data, index) => (
          <BlueCard
            key={index}
            textContent={[data.title]}
            class2={data.style}
            class1="!pt-[45px]"
          />
        ))}
      </Slider>
    </>
  );
};

export default CardSlider2;
