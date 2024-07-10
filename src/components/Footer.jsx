import React from "react";
import {
  FbIcon,
  InstaIcon,
  MailIcon,
  Paragraphs,
  TwitIcon,
} from "../assets/Icon";

const Footer = () => {
  return (
    <div className=" py-[92px] -mt-[1px] bg-darkBlue">
      <div className="container lg:max-w-[1016px] xl:max-w-[1188px] 2xl:max-w-[1344px] ">
        <div className="relative w-full max-lg:flex sm:flex-row sm:justify-between items-center sm:gap-0 gap-5 flex-col">
          <div className=" flex justify-center lg:h-[160px] items-end">
            <Paragraphs
              Content1="(c)2022 MARC JOACHIM HUBRICH All Rights Reserved"
              clsValue=" text-white w-[264px] text-center "
            />
          </div>
          <div className="w-fit flex items-center lg:flex-col gap-3 lg:absolute right-0 bottom-0">
            <FbIcon />
            <TwitIcon />
            <MailIcon />
            <InstaIcon />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
