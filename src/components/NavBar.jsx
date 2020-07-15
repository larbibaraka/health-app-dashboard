import React from "react";
import profileImage from "../assets/images/profile.jpg";

export const NavBar = () => {
  return (
    <div className="flex bg-white h-16 w-full justify-between">
      <div className="search">
        <input
          className="w-full ml-5 p-4 h-16 text-gray-700  focus:outline-none focus:bg-gray-100"
          placeholder="Search ..."
          type="text"
        />
      </div>
      <div className="profile flex items-center mr-12">
        <div className="notification bg-gray-200 items-center mr-1">
          <button>notif</button>
        </div>
        <div className="profile-image flex items-center mr-1">
          <img
            className="w-10 h-10 rounded-full mr-4"
            src={profileImage}
            alt=""
          />
          <div className="text-sm ">
            <p className="text-gray-600 leading-none font-semibold">
              Baraka Larbi
            </p>
          </div>
        </div>
        <div className="profile-settings-dropdown items-center mr-1">
          <button className="text-gray-600 focus:outline-none">&darr;</button>
        </div>
      </div>
    </div>
  );
};
