import React from "react";
import Slider from "react-slick/lib/slider";
import { BlueCard } from "../assets/Icon";
import { BlueCardData1 } from "./Helper";

const CardSlider = () => {
  const cardslider = {
    dots: false,
    infinite: true,
    speed: 940,
    slidesToShow: 2,
    pauseOnHover: true,
    slidesToScroll: 1,
    arrows: false,
    dots: false,
    cssEase: "linear",
    autoplay: true,
    autoplaySpeed: 1600,

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
      <Slider {...cardslider} className="w-full max-w-[1000px]">
        {BlueCardData1.map((data, index) => (
          <BlueCard
            key={index}
            textContent={[data.title]}
            class2={data.style}
          />
        ))}
      </Slider>
    </>
  );
};

export default CardSlider;
