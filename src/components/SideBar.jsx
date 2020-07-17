import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUserFriends,
  faChartPie,
  faMapMarkedAlt,
  faHome,
  faUserNurse,
  faHistory,
  faSlidersH,
} from "@fortawesome/free-solid-svg-icons";
import logoImage from '../assets/images/brain.png'
export const SideBar = () => {
  return (
    <div className="sidebar flex flex-col bg-white w-1/5 shadow-lg border-l border-gray-500 h-screen">
      <div className="logo h-20 shadow flex justify-center">
          <img src={logoImage} alt="" className="h-16 w-16 mt-3"/>
      </div>
      <div className="bg-white menu p-6 flex flex-col">
        <div className="register-patient self-center">
          <button className="bg-purple-600 text-gray-200 px-6 py-3 rounded-md font-semibold   hover:bg-purple-700 hover:text-white items-center focus:outline-none">
            Register patient +
          </button>
        </div>
        <div className="menu-elements mt-5">
          <ul className="flex flex-col items-center ">
            <li className="text-gray-700 font-sans font-bold hover:text-purple-800 cursor-pointer mt-4">
              <span className="w-12 h-12  mr-4 text-gray-600 cursor-pointer hover:text-purple-800 ">
                <FontAwesomeIcon icon={faUserFriends} />
              </span>
              Patients
            </li>
            <li className="text-gray-700 font-sans font-bold hover:text-purple-800 cursor-pointer mt-4">
              <span className="w-12 h-12  mr-4 text-gray-600 cursor-pointer hover:text-purple-800 ">
                <FontAwesomeIcon icon={faChartPie} />
              </span>
              OverView
            </li>
            <li className="text-gray-700 font-sans font-bold hover:text-purple-800 cursor-pointer mt-4">
              <span className="w-12 h-12  mr-4 text-gray-600 cursor-pointer hover:text-purple-800" >
                <FontAwesomeIcon icon={faMapMarkedAlt} />
              </span>
              Map
            </li>
            <li className="text-gray-700 font-sans font-bold hover:text-purple-800 cursor-pointer mt-4">
              <span className="w-12 h-12  mr-4 text-gray-600 cursor-pointer hover:text-purple-800 ">
                <FontAwesomeIcon icon={faHome} />
              </span>
              Departements
            </li>
            <li className="text-gray-700 font-sans font-bold hover:text-purple-800 cursor-pointer mt-4">
              <span className="w-12 h-12  mr-4 text-gray-600 cursor-pointer hover:text-purple-800 ">
                <FontAwesomeIcon icon={faUserNurse} />
              </span>
              Doctors
            </li>
            <li className="text-gray-700 font-sans font-bold hover:text-purple-800 cursor-pointer mt-4 ">
              <span className="w-12 h-12  mr-4 text-gray-600 cursor-pointer hover:text-purple-800 ">
                <FontAwesomeIcon icon={faHistory} />
              </span>
              History
            </li>

            <li className="text-gray-700 font-sans font-bold hover:text-purple-800 cursor-pointer mt-12">
              <span className="w-12 h-12  mr-4 text-gray-600 cursor-pointer hover:text-purple-800 ">
                <FontAwesomeIcon icon={faSlidersH} />
              </span>
              Settings
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};
