import React from "react";
import Slider from "react-slick/lib/slider";
import { RequestCard } from "../assets/Icon";
import { BlueCardData4, BlueCardData5 } from "./Helper";

const RequestSlider = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 1000,
    slidesToShow: 3,
    slidesToScroll: 1,
    pauseOnHover: true,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 1600,
    cssEase: "linear",
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
      <Slider {...settings} className="w-full max-w-[1000px]">
        {BlueCardData4.map((contentData, index) => (
          <RequestCard key={index} textContent={[contentData.title]} />
        ))}
        {BlueCardData5.map((contentData, index) => (
          <RequestCard
            key={index}
            class1={[contentData.style]}
            textContent={[contentData.title]}
          />
        ))}
      </Slider>
    </>
  );
};

export default RequestSlider;
