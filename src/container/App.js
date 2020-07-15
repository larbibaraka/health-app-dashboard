import React from "react";
import "../assets/App.css";
import { SideBar } from "./../components/SideBar";
import profileImage from "../assets/images/profile.jpg";

function App() {
  return (
    <div className="flex bg-gray-200">
      <SideBar />
      <div className="flex bg-white h-16 w-full ">
        <div className="search">
          <input
            className="w-full ml-5 p-4 h-16 text-gray-700  focus:outline-none focus:bg-gray-100"
            placeholder="Search ..."
            type="text"
          />
        </div>
        <div className="profile flex items-center">
          <div className="notification bg-gray-200">
            <button>notif</button>
          </div>

          <div className="profile-image flex items-center">
            <img
              className="w-10 h-10 rounded-full mr-4"
              src={profileImage}
              alt=""
            />
            <div className="text-sm">
              <p className="text-gray-600 leading-none font-semibold">
                Baraka Larbi
              </p>
            </div>
          </div>
          <div className="profile-settings-dropdown">
            <button className="text-gray-600 focus:outline-none">&darr;</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
