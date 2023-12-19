import React from "react";
import logo from "../assets/images/logo.svg";
import facebook from "../assets/images/facebook.svg";
import linkedin from "../assets/images/linkedin.svg";

const Footer = () => {
  return (
    <div className="w-full h-[462px] bg-[#2C65DA] flex justify-between items-center px-20 mt-10">
      <img className="" src={logo} alt="logo" />
      <div className="text-white text-right ">
        <div className="my-4 flex gap-2">
          <div className="">Follow us</div>
          <img className="" src={facebook} alt="logo" />
          <img className="" src={linkedin} alt="logo" />
        </div>
        <div>© Milmaicecream. All rights Reserved.</div>
      </div>
    </div>
  );
};

export default Footer;
