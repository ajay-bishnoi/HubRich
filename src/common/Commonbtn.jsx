import React from "react";
import ComentIcon from "../assets/img/svg/comment-logo.svg";
import { Paragraphs } from "../assets/Icon";

const Commonbtn = ({ content, class1 }) => {
  return (
    <>
      <div
        className={`flex items-center gap-1 w-full max-w-[452px] btn_webkit bg-white overflow-hidden  relative after:w-full after:h-full after:absolute after:inset-0  px-[9px] py-[6px] after:p-[1.7px] after:bg-gradient-to-custom hover:bg-gradient-to-custom duration-500 group ease-linear bg-transparent ${class1}`}
      >
        <img src={ComentIcon} alt="Comment-icon" />
        <Paragraphs
          clsValue="mb-0 bg-gradient-to-custom capitalize bg-clip-text text-transparent text-wrap group-hover:text-white"
          Content1={content}
        />
      </div>
    </>
  );
};

export default Commonbtn;
