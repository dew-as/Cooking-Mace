import { useState } from "react";
import LOGO_IMG from "../utils/logo.png";

const Header = () => {
  const [isVisible, setIsVisible] = useState(false);
  return (
    <div className="header-container">
      {" "}
      <div className="header">
        <div className="logo">
          <i className="bx bx-cookie bx-spin"></i>
          <img src={LOGO_IMG} />
        </div>
        <div className={`navItems ${isVisible ? "active" : "disabled"}`}>
          <ul>
            <li>
              <i className="bx bx-search"></i>Search
            </li>
            <li>
              <i className="bx bx-home"></i>Home
            </li>
            <li>
              <i className="bx bx-info-circle"></i>About
            </li>
            <li>
              <i className="bx bxs-offer"></i>Offers <span>NEW</span>
            </li>
            <li>
              <i className="bx bx-store-alt"></i>Cart <span>0</span>
            </li>
          </ul>
        </div>
        <div
          className="menu-bar"
          onClick={() => {
            setIsVisible((prevState) => !prevState);
          }}
        >
          <i className="bx bx-menu"></i>
        </div>
      </div>
    </div>
  );
};

export default Header;
