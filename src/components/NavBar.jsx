import React from "react";
import profileImage from "../assets/images/profile.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBell , faChevronDown} from "@fortawesome/free-solid-svg-icons";
export const NavBar = () => {
  return (
    <div className="flex bg-white h-16 w-full justify-between shadow">
      <div className="search">
        <input
          className="w-full   p-4 h-16 text-gray-700  focus:outline-none focus:bg-gray-100"
          placeholder="Search ..."
          type="text"
        />
      </div>
      <div className="profile flex items-center mr-12">
        <div className="notification items-center mr-1">
          <span className="w-12 h-12  mr-4 text-gray-600 cursor-pointer">
            <FontAwesomeIcon icon={faBell} />
          </span>
        </div>
        <div className="profile-image flex items-center mr-5">
          <img
            className="w-10 h-10 rounded-full mr-2"
            src={profileImage}
            alt=""
          />
          <div className="text-sm ">
            <p className="text-gray-600 leading-none font-semibold">
              Baraka Larbi
            </p>
          </div>
        </div>
        <div className="profile-settings-dropdown items-center mr-4 mt-1">
        <span className="w-12 h-12 text-gray-500 cursor-pointer">
            <FontAwesomeIcon icon={faChevronDown} />
          </span>
        </div>
      </div>
    </div>
  );
};
