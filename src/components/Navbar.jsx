import React, { useEffect, useState } from "react";
import Logo from "../assets/img/svg/Logo.svg";

const Navbar = () => {
  const [show, setShow] = useState(true);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 1200) {
        document.body.style.overflow = show ? "visible" : "hidden";
      } else {
        document.body.style.overflow = "";
      }
    };
    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
      document.body.style.overflow = "";
    };
  }, [show]);

  const handleClick = (e) => {
    if (window.innerWidth < 992) {
      setShow(!show);
    } else {
      e.preventDefault();
    }
  };
  return (
    <nav className="pt-6">
      <div className="container flex items-center justify-between xl:max-w-[1188px] 2xl:max-w-[1344px]">
        <div className="flex items-center justify-between w-full">
          <a href="/">
            <img src={Logo} alt="page-logo" />
          </a>
          <ul
            className={`ps-0 mb-0 flex flex-col lg:flex-row items-center gap-8 lg:gap-10 max-lg:fixed max-lg:justify-center top-0 max-lg:-left-full max-lg:z-[90] max-lg:h-screen max-lg:w-full max-lg:duration-300 max-lg:bg-black ${
              show ? "" : " !start-0"
            }`}
          >
            <li>
              <a onClick={handleClick} href="#Benifits" className="navitems">
                Benifits
              </a>
            </li>
            <li>
              <a
                onClick={handleClick}
                href="#Testimonials"
                className="navitems"
              >
                Testimonials
              </a>
            </li>
            <li>
              <button className=" font-medium text-base leading-6 font-Inter capitalize px-7 py-4 bg-gradient-to-custom text-white rounded-none outline-none border-2 transition-custom duration-300 ease-linear relative border-gradient hover:bg-gradient1 hover:text-transparent hover:bg-clip-text hover:scale-95">
                Book consultation now
              </button>
            </li>
          </ul>
          {/* <!-- menu btn --> */}
          <div
            class={` cursor-pointer relative z-[100] lg:hidden ${
              show ? "" : "cross"
            }`}
            onClick={() => setShow(!show)}
          >
            <span class="nav-toggle-items "></span>
            <span class="nav-toggle-items my-2"></span>
            <span class="nav-toggle-items "></span>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
