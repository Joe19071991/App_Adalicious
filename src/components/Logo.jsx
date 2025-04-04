import React from "react";
import logo from "../assets/logo.jpg";

const Logo = () => {
  return (
    <div>
      <img
        src={logo}
        alt="logo du site, un brocolis qui sourit"
        className="size-16"
      />
    </div>
  );
};

export default Logo;
