import React from "react";
import logo from "../../assets/images/logo.png";

const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <div>
      <div className=" flex items-center justify-center">
        <hr className=" h-px w-4/5 bg-gray-400 opacity-50 outline-none border-none"></hr>
      </div>
      <div className=" flex items-center justify-around pt-4">
        <div>
          <img src={logo} alt="logo" />
        </div>
        <div>
          <p className=" text-black text-sm font-inter no-underline normal-case">
            Copyright {year} page by eMart
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
