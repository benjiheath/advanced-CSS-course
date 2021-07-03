import React from "react";
import { useState } from "react";

const Nav = () => {
  const [showNav, setShowNav] = useState(false);

  return (
    <div className="navigation">
      <input type="checkbox" className="navigation__checkbox" id="nav-toggle" />
      <label htmlFor="nav-toggle" className="navigation__button" onClick={() => setShowNav(!showNav)}>
        <span className={`navigation__icon ${showNav && "hide-middle-line animate-lines"}`}>&nbsp;</span>
      </label>
      <div className={`navigation__background ${showNav && "animate-bg"}`}>&nbsp;</div>
      <nav className={`navigation__nav ${showNav && "animate-nav"}`}>
        <u className="navigation__list">
          <li className="navigation__item">
            <a href="#" className="navigation__link">
              01&nbsp;&nbsp; About Natours
            </a>
          </li>
          <li className="navigation__item">
            <a href="#" className="navigation__link">
              02 &nbsp;&nbsp; Your benefits
            </a>
          </li>
          <li className="navigation__item">
            <a href="#" className="navigation__link">
              03&nbsp;&nbsp; Popular tours
            </a>
          </li>
          <li className="navigation__item">
            <a href="#" className="navigation__link">
              04&nbsp;&nbsp; Stories
            </a>
          </li>
          <li className="navigation__item">
            <a href="#" className="navigation__link">
              05&nbsp;&nbsp; Book now
            </a>
          </li>
        </u>
      </nav>
    </div>
  );
};

export default Nav;
