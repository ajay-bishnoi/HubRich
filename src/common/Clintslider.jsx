import React from "react";
import ProfilePic from "../assets/img/svg/girl-profile.svg";
import { Paragraphs } from "../assets/Icon";
import { SlideData } from "./Helper";

const Clintslider = () => {
  const [firstItem, ...restItems] = SlideData;

  return (
    <div className=" lg:min-h-[570px] md:min-h-[628px] sm:min-h-[820px] min-h-[800px] max-lg:my-5 max-sm:my-14 flex justify-end items-end w-fit mx-auto">
      <div className="sm:p-6 min-h-[497px] max-w-[868px] w-full">
        <div className="w-full sm:px-[50px] px-6 pt-[58px] pb-8 relative shadow-custom ">
          <Paragraphs
            clsValue={firstItem.clsValueTitle}
            Content1={firstItem.title}
          />
          <Paragraphs
            Content1={firstItem.name}
            clsValue={firstItem.clsValueName}
          />
          <Paragraphs
            Content1={firstItem.company}
            clsValue={firstItem.clsValueCompany}
          />
          <img
            src={ProfilePic}
            alt="girl-profile"
            className=" absolute -top-14 left-1/2 -translate-x-1/2 "
          />
        </div>
        <div className="flex flex-row flex-wrap -mx-[10px] mt-5">
          {restItems.map((item, index) => (
            <div
              key={index}
              className=" w-full md:w-[50%] px-[10px]  md:mb-0 mb-5"
            >
              <div className="shadow-custom pt-[25px] sm:px-9 px-6 pb-[30px]">
                <Paragraphs
                  clsValue={item.clsValueTitle}
                  Content1={item.title}
                />
                <Paragraphs Content1={item.name} clsValue={item.clsValueName} />
                <Paragraphs
                  Content1={item.company}
                  clsValue={item.clsValueCompany}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Clintslider;
