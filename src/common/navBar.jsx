import React, { useState } from "react";
import { Icon } from "@iconify/react";
import { UserAuth } from "../configs/AuthContext";
import { Link, useNavigate } from "react-router-dom";

function Navbar({ handleSearch }) {
  const [showSearch, setShowSearch] = useState(false);

  // Function to toggle the search input
  const toggleSearch = () => {
    setShowSearch(!showSearch);
  };

  const { user, logOut } = UserAuth();
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await logOut();
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <nav className="bg-gray-400 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-white text-2xl font-semibold">Image Gallery</h1>
        <div className="flex items-center">
          {showSearch ? (
            <div className="relative mr-8">
              <input
                type="text"
                placeholder="Search by tag..."
                onChange={handleSearch}
                className="border outline-none border-gray-300 rounded px-3 py-1 mr-4 pr-12"
              />
              <button
                onClick={toggleSearch}
                className="absolute right-0 top-0 bottom-0 bg-gray-300 text-gray-700 hover:bg-gray-400 px-2 py-1 rounded-r"
              >
                <Icon icon="ion:search" />
              </button>
            </div>
          ) : (
            <button
              onClick={toggleSearch}
              className="text-white mr-4 focus:outline-none"
            >
              <Icon icon="ion:search" />
            </button>
          )}
          <button
            onClick={handleLogout}
            className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 transition-colors duration-300"
          >
            Sign Out
          </button>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
