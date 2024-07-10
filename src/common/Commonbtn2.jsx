import React from "react";

const Commonbtn2 = ({ Textbtn, svgIcon, class1, svgClass }) => {
  return (
    <>
      <button
        className={`py-4 px-9 btn_webkit  overflow-hidden  capitalize relative after:w-full after:h-full after:absolute after:inset-0 after:p-[1.7px] after:bg-gradient-to-custom rounded-[68px] after:rounded-[68px]  duration-500 groupItems ease-linear  ${class1}`}
      >
        {Textbtn}
        <span className={svgClass}>{svgIcon}</span>
      </button>
    </>
  );
};

export default Commonbtn2;
