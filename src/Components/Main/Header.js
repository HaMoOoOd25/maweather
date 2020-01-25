import React from "react";
import { Link } from "react-router-dom";
import logo from "../icons/weather.svg";

const Header = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark">
      <Link className="navbar-brand" to="/">
        <img src={logo} className="img-fluid" alt="weather icon" />
        Ma Weather
      </Link>
    </nav>
  );
};

export default Header;
