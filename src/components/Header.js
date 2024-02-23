import LOGO_IMG from "../utils/logo.png";

const Header = () => {
  return (
    <div className="header-container">
      {" "}
      <div className="header">
        <div className="logo">
          <i className="bx bx-cookie bx-spin"></i>
          <img src={LOGO_IMG} />
          <i className="bx bxs-cookie bx-spin bx-rotate-180"></i>
        </div>
        <div className="navItems">
          <ul>
            <li>Home</li>
            <li>About</li>
            <li>Contact</li>
            <li>Cart</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Header;
