import React from "react";
import "./index.css";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="header">
      <Link path="/">
        <img alt="logo" src="/logo.svg" />
      </Link>
    </div>
  );
};

export default Header;
