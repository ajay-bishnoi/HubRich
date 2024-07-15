import React from "react";
import ComentIcon from "../assets/img/svg/comment-logo.svg";

const Commonbtn = ({ content, content2, class1, class2 }) => {
  return (
    <>
      <button
        className={`flex items-center gap-1 !text-start w-full max-w-[452px] btn_webkit bg-white overflow-hidden  relative after:w-full after:h-full after:absolute after:inset-0  px-[9px] py-[6px] after:p-[1.7px] after:bg-gradient-to-custom hover:bg-gradient-to-custom duration-500 group ease-linear bg-transparent ${class1} justify-start flex items-center font-Inter font-medium leading-6 text-base`}
      >
        <img src={ComentIcon} alt="Comment-icon" className={`${class2}`} />
        <span
          className="mb-0 bg-gradient-to-custom capitalize bg-clip-text
          text-transparent text-wrap group-hover:text-white"
        >
          {content}
        </span>
        {content2}
      </button>
    </>
  );
};

export default Commonbtn;
