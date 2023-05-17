import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "./NavigationBar.css";
const NavigationBar = () => {
  const [activeItem, setActiveItem] = useState(null);

  const handleItemClick = (itemName) => {
    setActiveItem(itemName);
  };

  return (
    <nav className="bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
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
              to="/foods"
              onClick={() => handleItemClick("foods")}
              className={`text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium ${
                activeItem === "foods" ? "activeNavItem" : ""
              }`}
            >
              Update Foods
            </NavLink>
            <NavLink
              to="/add"
              onClick={() => handleItemClick("add")}
              className={`text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium ${
                activeItem === "add" ? "activeNavItem" : ""
              }`}
            >
              Add Foods
            </NavLink>
            <NavLink
              to="/favorites"
              onClick={() => handleItemClick("favorites")}
              className={`text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium ${
                activeItem === "favorites" ? "activeNavItem" : ""
              }`}
            >
              Favorites
            </NavLink>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavigationBar;
