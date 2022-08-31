import React from "react";
import "./Header.css";
import CTA from "./CTA";
import Prince from "../../assets/Prince.png";
import HeaderSocials from "./HeaderSocials";

const Header = () => {
  return (
    <header>
      <div className="container header__container">
        <h5>Hello I'm</h5>
        <h1>Carl Clifton</h1>
        <h5 className="text-light">Front End Developer</h5>
        <CTA />
        <HeaderSocials />

        <div className="me">
          <img src={Prince} alt="prince" className="prince" />
          <a href="#contact" className="scroll__down">
            Scroll Down
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
