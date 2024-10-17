import React, { useState } from "react";
import { useLocation } from "react-router-dom";

const Navbar: React.FC = () => {
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const getCurrentPage = () => {
    const path = location.pathname;
    return path.split("/").pop() || "home";
  };

  const currentPage = getCurrentPage();

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  return (
    <nav className="bg-gray-900 border-b border-gray-700 z-50 w-full">
      <div className="max-w-screen-xl mx-auto flex items-center justify-between p-4">
        <a
          href="/"
          className="flex items-start space-x-3 rtl:space-x-reverse mr-auto"
        >
          <span className="text-xl md:text-xl lg:text-2xl font-semibold text-white font-press-start">
            Cops Cybersec
          </span>
        </a>
        <button
          onClick={toggleMenu}
          data-collapse-toggle="navbar-default"
          type="button"
          className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-600"
          aria-controls="navbar-default"
          aria-expanded={isMenuOpen}
        >
          <span className="sr-only">Open main menu</span>
          <svg
            className="w-5 h-5"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 17 14"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M1 1h15M1 7h15M1 13h15"
            />
          </svg>
        </button>
        <div
          className={`md:block md:w-auto ${isMenuOpen ? "block" : "hidden"}`}
          id="navbar-default"
        >
          <ul className="font-mono flex flex-col p-4 md:p-0 mt-4 border border-gray-800 rounded-lg bg-gray-800 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-gray-900">
            {[
              { name: "~/Home", link: "/" },
              { name: "~/About Us", link: "/aboutUs" },
              { name: "~/Team", link: "/team" },
              { name: "~/Achievements", link: "/achievements" },
              { name: "~/Blogs", link: "/blogs" },
            ].map((item) => (
              <li key={item.name}>
                <a
                  href={item.link}
                  className={`text-xs md:text-sm lg:text-base py-2 px-4 rounded transition-colors duration-300 w-32 h-12 flex items-center justify-center ${
                    currentPage === item.link.split("/").pop()
                      ? "text-white bg-gray-700 rounded-full"
                      : "text-gray-300 hover:text-green-500"
                  } md:p-0`}
                >
                  {item.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
