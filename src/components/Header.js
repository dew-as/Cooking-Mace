import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import LOGO_IMG from "../utils/logo.png";
import { UserContext } from "../utils/globalContext";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();
  const [btnName, setBtnName] = useState("Login");
  const { loggedUser, setUserName } = useContext(UserContext);

  const peopleNames = [
    "Alice",
    "Benjamin",
    "Clara",
    "David",
    "Emma",
    "Frank",
    "Grace",
    "Henry",
    "Isabella",
    "Jack",
  ];

  const handleUserNameChange = () => {
    const randomIndex = Math.floor(Math.random() * peopleNames.length);
    setUserName(peopleNames[randomIndex]);
  };

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="relative bg-white shadow">
      <div className="container px-6 py-4 mx-auto md:flex md:justify-between md:items-center">
        <div className="flex items-center justify-between">
          <a className="flex gap-2">
            <i className="bx bx-cookie bx-spin text-orange-400"></i>
            <img className="w-auto h-6 sm:h-7" src={LOGO_IMG} alt="" />
          </a>

          {/* Mobile menu button */}
          <div className="flex md:hidden">
            <button
              onClick={toggleMenu}
              type="button"
              className="text-gray-500 dark:text-gray-200 hover:text-gray-600 dark:hover:text-gray-400 focus:outline-none focus:text-gray-600 dark:focus:text-gray-400"
              aria-label="toggle menu"
            >
              {!isOpen ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-6 h-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4 8h16M4 16h16"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-6 h-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          className={`absolute inset-x-0 z-20 w-full px-6 py-4 transition-all duration-300 ease-in-out bg-white md:mt-0 md:p-0 md:top-0 md:relative md:bg-transparent md:w-auto md:opacity-100 md:translate-x-0 md:flex md:items-center ${
            isOpen ? "translate-x-0 opacity-100" : "opacity-0 -translate-x-full"
          }`}
        >
          <div className="flex flex-col md:flex-row md:mx-6">
            <a
              onClick={() => navigate("/")}
              className="flex gap-1 items-center cursor-pointer my-2 text-gray-700 transition-colors duration-300 transform dark:text-gray-500 hover:text-blue-500 dark:hover:text-blue-400 md:mx-4 md:my-0"
            >
              <i className="bx bx-home"></i>
              Home
            </a>
            <a
              onClick={() => navigate("/search")}
              className="flex gap-1 items-center cursor-pointer my-2 text-gray-700 transition-colors duration-300 transform dark:text-gray-500 hover:text-blue-500 dark:hover:text-blue-400 md:mx-4 md:my-0"
            >
              <i className="bx bx-search"></i>
              Search
            </a>
            <a
              onClick={() => navigate("/about")}
              className="flex gap-1 items-center cursor-pointer my-2 text-gray-700 transition-colors duration-300 transform dark:text-gray-500 hover:text-blue-500 dark:hover:text-blue-400 md:mx-4 md:my-0"
            >
              <i className="bx bx-info-circle"></i>
              About
            </a>
            <a
              onClick={() => navigate("/grocery")}
              className="flex gap-1 items-center cursor-pointer my-2 text-gray-700 transition-colors duration-300 transform dark:text-gray-500 hover:text-blue-500 dark:hover:text-blue-400 md:mx-4 md:my-0"
            >
              <i className="bx bx-store-alt"></i>
              Grocery
            </a>
            <a
              className="cursor-pointer my-2 text-gray-700 transition-colors duration-300 transform dark:text-gray-500 hover:text-blue-500 dark:hover:text-blue-400 md:mx-4 md:my-0"
              onClick={() =>
                btnName ===
                setBtnName(btnName === "Logout" ? "Login" : "Logout")
              }
            >
              {btnName}
            </a>
            <span
              onClick={handleUserNameChange}
              className="cursor-pointer my-2 text-gray-700 transition-colors duration-300 transform dark:text-gray-500 hover:text-blue-500 dark:hover:text-blue-400 md:mx-4 md:my-0"
            >
              {loggedUser}
            </span>
          </div>

          <div className="flex justify-center md:block">
            <a
              onClick={() => navigate("/cart")}
              className="cursor-pointer relative text-gray-700 transition-colors duration-300 transform dark:text-gray-500 hover:text-gray-600 dark:hover:text-gray-400"
            >
              <svg
                className="w-5 h-5"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M3 3H5L5.4 5M7 13H17L21 5H5.4M7 13L5.4 5M7 13L4.70711 15.2929C4.07714 15.9229 4.52331 17 5.41421 17H17M17 17C15.8954 17 15 17.8954 15 19C15 20.1046 15.8954 21 17 21C18.1046 21 19 20.1046 19 19C19 17.8954 18.1046 17 17 17ZM9 19C9 20.1046 8.10457 21 7 21C5.89543 21 5 20.1046 5 19C5 17.8954 5.89543 17 7 17C8.10457 17 9 17.8954 9 19Z"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>

              <span className="cursor-pointer absolute top-0 left-0 p-1 text-xs text-white bg-blue-500 rounded-full"></span>
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Header;
