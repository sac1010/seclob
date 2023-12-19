import React from "react";
import background from "../assets/images/bgsvg.svg"
import logo from "../assets/images/logo.svg"
import girl from "../assets/images/character.png"
import text from "../assets/images/text.svg"


const Header = () => {
  return (
    <div className="bg-[#2C65DA] bg-center w-full h-[650px] relative" style={{ backgroundImage: `url(${background})` }}>
      <img className="fixed top-[45px] left-[45px]" src={logo} alt="logo" />
      <div className="max-w-[1500px] h-[90%] mx-auto absolute bottom-0 left-0 right-0 flex flex-col md:flex-row justify-center"> 
      <div className="w-2/6 ">

      <img className="w-full hidden md:block h-full" src={girl} alt="" />
      </div>
      <img className=" md:w-2/6 w-full px-4" src={text} alt="" />
      </div>
    </div>
  );
};

export default Header;
