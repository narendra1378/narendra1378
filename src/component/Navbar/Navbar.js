import React, { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="bg-white border-gray-200 dark:bg-gray-900">
      <div className="max-w-screen-xl flex items-center justify-between mx-auto p-4">
        <Link to="/" className="flex items-center">
          <span className="self-center text-2xl font-semibold text-gray-900 dark:text-white">
            Optics
          </span>
        </Link>
        <button
          onClick={toggleMobileMenu}
          className="md:hidden p-2 text-gray-500 rounded-lg focus:outline-none"
          aria-controls="navbar-default"
          aria-expanded={isMobileMenuOpen}
        >
          <span className="sr-only">Open main menu</span>
          <svg
            className="w-5 h-5"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 20 20"
          >
            <path
              stroke="currentColor"
              strokeWidth="2"
              d="M2 6h16M2 10h16M2 14h16"
            />
          </svg>
        </button>
        <div
          className={`md:block w-full md:w-auto ${
            isMobileMenuOpen ? "block" : "hidden"
          }`}
          id="navbar-default"
        >
          <ul className="flex flex-col md:flex-row md:space-x-8 mt-4 md:mt-0 md:border-0  ">
            <li>
              <Link
                to="/"
                className="block py-2 px-3 text-gray-900 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
              >
                Eyeglass
              </Link>
            </li>
            <li>
              <Link
                to="/about"
                className="block py-2 px-3 text-gray-900 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
              >
                Computer Glasses
              </Link>
            </li>
            <li>
              <Link
                to="/reading"
                className="block py-2 px-3 text-gray-900 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
              >
                Reading Glasses
              </Link>
            </li>
            <li>
              <button
                onClick={toggleDropdown}
                className="block py-2 px-3 w-full text-left text-gray-900 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
              >
                More
              </button>
              {isDropdownOpen && (
                <ul className="absolute bg-gray-900 border border-gray-200 rounded-md mt-1 z-10">
                  <li>
                    <Link
                      to="/sunglasses"
                      className="block px-4 py-2 text-gray-900 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
                    >
                      Sunglasses
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/contact-lenses"
                      className="block px-4 py-2 text-gray-900 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
                    >
                      Contact Lenses
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/accessories"
                      className="block px-4 py-2 text-gray-900 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
                    >
                      Accessories
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/book-eye-test"
                      className="block px-4 py-2 text-gray-900 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
                    >
                      Book an Eye Test
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/home-eye-test"
                      className="block px-4 py-2 text-gray-900 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
                    >
                      Home Eye Test
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/find-store"
                      className="block px-4 py-2 text-gray-900 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
                    >
                      Find a Store
                    </Link>
                  </li>
                </ul>
              )}
            </li>
            <li>
              <Link
                to="/about"
                className="block py-2 px-3 text-gray-900 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
              >
                About
              </Link>
            </li>
            <li>
              <Link to="/contact" className="block py-2 px-3  text-white ">
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
