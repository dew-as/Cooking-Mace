import { useState } from "react";
import LOGO_IMG from "../utils/logo.png";
import { Link } from "react-router-dom";

const Header = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [btnName, setBtnName] = useState("Login");
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
              <Link to={"/"} className="no-underline">
                <i className="bx bx-home"></i>Home
              </Link>
            </li>
            <li>
              <Link to={"/search"} className="no-underline">
                <i className="bx bx-search"></i>Search
              </Link>
            </li>

            <li>
              <Link to={"/about"} className="no-underline">
                <i className="bx bx-info-circle"></i>About
              </Link>
            </li>
            <li>
              <Link to={"/offers"} className="no-underline">
                <i className="bx bx-store-alt"></i>Cart <span>0</span>
              </Link>
            </li>
            <li>
              <Link to={"/cart"} className="no-underline">
                <i className="bx bx-store-alt"></i>Cart <span>0</span>
              </Link>
            </li>
          </ul>
        </div>
        <button
          className="log-btn"
          onClick={() =>
            btnName === setBtnName(btnName === "Logout" ? "Login" : "Logout")
          }
        >
          {btnName}
        </button>
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
