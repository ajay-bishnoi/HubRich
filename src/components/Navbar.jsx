import React, { useEffect, useState } from "react";
import Logo from "../assets/img/svg/Logo.svg";
import { Link, NavLink } from "react-router-dom";
import { NavbarItems } from "../common/Helper";

const Navbar = () => {
  const [show, setShow] = useState(true);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 992) {
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
            className={`ps-0 mb-0 flex flex-col lg:flex-row items-center gap-8 lg:gap-10 max-lg:fixed max-lg:justify-center top-0 max-lg:-left-full max-lg:z-[90] max-lg:h-screen max-lg:w-full max-lg:duration-300 max-lg:bg-white ${
              show ? "" : " !start-0"
            }`}
          >
            {NavbarItems.map((item, index) => (
              <li key={index}>
                {item.type === "link" ? (
                  <a
                    onClick={handleClick}
                    href={item.href}
                    className={item.className}
                  >
                    {item.text}
                  </a>
                ) : (
                  <button className={item.className}>{item.text}</button>
                )}
              </li>
            ))}
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
