import React from "react";
import Slider from "react-slick";
import { FourthCard, NextArrow, PrevArrow } from "../assets/Icon";
import { BlueCardData3 } from "./Helper";

const FaceSlider = () => {
  const settings3 = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    arrow: false,
    fade: true,
    cssEase: "linear",
    appendDots: (dots) => (
      <div
        style={{
          position: "absolute",
          bottom: "16px",
          width: "100%",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <ul style={{ margin: "0" }} className="custom-dots">
          {dots}
        </ul>
      </div>
    ),
    responsive: [
      {
        breakpoint: 768,
        settings: {
          infinite: true,
          pauseOnhover: true,
          autoplay: true,
          autoplaySpeed: 1600,
        },
      },
    ],
  };

  return (
    <>
      <Slider {...settings3} className="w-full">
        {BlueCardData3.map((titleData, index) => (
          <FourthCard
            key={index}
            textContent={[
              {
                data1: titleData.title,
                data2: titleData.title2,
                data3: titleData.title3,
              },
            ]}
          />
        ))}
      </Slider>
    </>
  );
};

export default FaceSlider;
