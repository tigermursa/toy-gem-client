import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "./NavigationBar.css";


const NavigationBar = () => {
  const [activeItem, setActiveItem] = useState(null);
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleItemClick = (itemName) => {
    setActiveItem(itemName);
    setMobileMenuOpen(false);
  };

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <p className=" text-3xl font-bold text-white">Toy Gem</p>
            </div>
            <div className="hidden md:flex md:items-center ml-4">
              <NavLink
                exact
                to="/"
                onClick={() => handleItemClick("home")}
                className={`text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium ${
                  activeItem === "home" ? "activeNavItem" : ""
                }`}
              >
                Home
              </NavLink>
              <NavLink
                to="/alltoys"
                onClick={() => handleItemClick("alltoys")}
                className={`text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium ${
                  activeItem === "alltoys" ? "activeNavItem" : ""
                }`}
              >
                All Toys
              </NavLink>
              <NavLink
                to="/mytoys"
                onClick={() => handleItemClick("mytoys")}
                className={`text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium ${
                  activeItem === "mytoys" ? "activeNavItem" : ""
                }`}
              >
                My Toys
              </NavLink>
              <NavLink
                to="/addtoys"
                onClick={() => handleItemClick("addtoys")}
                className={`text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium ${
                  activeItem === "addtoys" ? "activeNavItem" : ""
                }`}
              >
                Add Toys
              </NavLink>
              <NavLink
                to="/blogs"
                onClick={() => handleItemClick("blogs")}
                className={`text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium ${
                  activeItem === "blogs" ? "activeNavItem" : ""
                }`}
              >
                Blogs
              </NavLink>
            </div>
          </div>
          <div className="flex md:hidden">
            <button
              onClick={toggleMobileMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:bg-gray-700 focus:text-white"
            >
              <svg
                className="h-6 w-6"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                {isMobileMenuOpen ? (
                  <path d="M6 18L18 6M6 6l12 12"></path>
                ) : (
                  <path d="M4 6h16M4 12h16M4 18h16"></path>
                )}
              </svg>
            </button>
          </div>
        </div>
        {isMobileMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              <NavLink
                exact
                to="/"
                onClick={() => handleItemClick("home")}
                className={`text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium ${
                  activeItem === "home" ? "activeNavItem" : ""
                }`}
              >
                Home
              </NavLink>
              <NavLink
                to="/alltoys"
                onClick={() => handleItemClick("alltoys")}
                className={`text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium ${
                  activeItem === "alltoys" ? "activeNavItem" : ""
                }`}
              >
                All Toys
              </NavLink>
              <NavLink
                to="/mytoys"
                onClick={() => handleItemClick("mytoys")}
                className={`text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium ${
                  activeItem === "mytoys" ? "activeNavItem" : ""
                }`}
              >
                My Toys
              </NavLink>
              <NavLink
                to="/addtoys"
                onClick={() => handleItemClick("addtoys")}
                className={`text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium ${
                  activeItem === "addtoys" ? "activeNavItem" : ""
                }`}
              >
                Add Toys
              </NavLink>
              <NavLink
                to="/blogs"
                onClick={() => handleItemClick("blogs")}
                className={`text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium ${
                  activeItem === "blogs" ? "activeNavItem" : ""
                }`}
              >
                Blogs
              </NavLink>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default NavigationBar;
