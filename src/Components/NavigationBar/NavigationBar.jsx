import React, { useContext, useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import "./NavigationBar.css";
import { AuthContext } from "../Provider/AuthProvider";
import { FaUserAlt } from "react-icons/fa";
const NavigationBar = () => {
  const [activeItem, setActiveItem] = useState(null);
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { signOutUser, user } = useContext(AuthContext);
  const handleItemClick = (itemName) => {
    setActiveItem(itemName);
    setMobileMenuOpen(false);
  };

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  const signOutHandler = () => {
    signOutUser()
      .then((result) => {})
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <nav className="bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <NavLink to="/">
              {" "}
              <div className="flex-shrink-0 flex  ">
                <img
                  className="w-8  rounded-full me-2"
                  src="https://icon-library.com/images/kisspng-lego-toy-block-computer-icons-clip-art-tape-5abc1e3bba2b41.6642960115222779477626.jpg"
                  alt=""
                />
                <p className="text-2xl font-bold text-white">Toy Gem </p>
              </div>
            </NavLink>
            <div className="hidden md:flex md:items-center ml-4">
              <NavLink
                exact="true"
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
              <NavLink
                to="/blo"
                onClick={() => handleItemClick("for")}
                className={`text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium ${
                  activeItem === "for" ? "activeNavItem" : ""
                }`}
              >
                404
              </NavLink>
            </div>
          </div>
          <div className="flex items-center">
            <div className="hidden md:block">
              <NavLink>
                {user ? (
                  <img
                    className=" profile-pic"
                    title={user.displayName}
                    src={user.photoURL}
                    alt=""
                  />
                ) : (
                  <p
                    className="text-2xl rounded-full 
              "
                  >
                    <FaUserAlt />
                  </p>
                )}
              </NavLink>
            </div>

            {/* New login nav item */}
            <NavLink to="/login" onClick={() => handleItemClick("login")}>
              {user ? (
                <button
                  onClick={signOutHandler}
                  className={`text-gray-300 hover:text-white hidden md:block px-3 py-2 ms-5 d rounded-md text-sm font-medium ${
                    activeItem === "login" ? "activeNavItem" : ""
                  }`}
                >
                  Log Out
                </button>
              ) : (
                <button
                  className={`text-gray-300 hover:text-white  hidden md:block px-3 py-2 ms-5 rounded-md text-sm font-medium ${
                    activeItem === "login" ? "activeNavItem" : ""
                  }`}
                >
                  Log In
                </button>
              )}
            </NavLink>
          </div>
          <div className="flex md:hidden justify-center items-center">
            <div className="me-2 ">
              <NavLink>
                {user ? (
                  <img
                    className=" profile-pic"
                    title={user.displayName}
                    src={user.photoURL}
                    alt=""
                  />
                ) : (
                  <p
                    className="text-2xl rounded-full 
              "
                  >
                    <FaUserAlt />
                  </p>
                )}
              </NavLink>
            </div>
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
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 ">
              <NavLink
                exact="true"
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
              {/* New login nav item */}
              <NavLink to="/login" onClick={() => handleItemClick("login")}>
                {user ? (
                  <button
                    onClick={signOutHandler}
                    className={`text-gray-300 hover:text-white  px-3 py-2 md:ms-5 d rounded-md text-sm font-medium ${
                      activeItem === "login" ? "activeNavItem" : ""
                    }`}
                  >
                    Log Out
                  </button>
                ) : (
                  <button
                    className={`text-gray-300 hover:text-white   px-3 py-2 md:ms-5 rounded-md text-sm font-medium ${
                      activeItem === "login" ? "activeNavItem" : ""
                    }`}
                  >
                    Log In
                  </button>
                )}
              </NavLink>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default NavigationBar;
