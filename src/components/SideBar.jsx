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
  faPlus,
  faChevronLeft
} from "@fortawesome/free-solid-svg-icons";
import logoImage from "../assets/images/brain.png";
import DownloadImage from "../assets/images/download.jpg";
export const SideBar = () => {
  return (
    <div className="sidebar flex flex-col bg-white w-1/5 shadow-lg border-l border-gray-500 ">
      <div className="logo h-20  flex justify-center">
        <img src={logoImage} alt="" className="h-16 w-16 mt-3" />
      </div>
      {/* <div className="self-end">
        <span className=" w-56 h-56 cursor-pointer border border-gray-400  text-4xl ">
          <FontAwesomeIcon icon={faChevronLeft} />
        </span>
      </div> */}
      <div className="bg-white menu pt-10 pb-10 flex flex-col">
        <div className="register-patient self-center">
          <button className="bg-purple-600 text-gray-200 px-6 py-3 rounded-md font-semibold   hover:bg-purple-700 hover:text-white items-center focus:outline-none">
            Register patient
            <span className="w-12 h-12  ml-4  cursor-pointer   ">
              <FontAwesomeIcon icon={faPlus} />
            </span>
          </button>
        </div>
        <div className="menu-elements mt-5 flex flex-col">
          <ul className="flex flex-col ">
            <li className="text-gray-700 font-sans font-bold hover:text-purple-800 cursor-pointer mt-6 p-3  text-center hover:underline ">
              <span className="w-12 h-12  mr-4 text-gray-600 cursor-pointer hover:text-purple-800 ">
                <FontAwesomeIcon icon={faUserFriends} />
              </span>
              Patients
            </li>
            <li className="text-gray-700 font-sans font-bold hover:text-purple-800 cursor-pointer mt-6 p-3  text-center hover:underline ">
              <span className="w-12 h-12  mr-4 text-gray-600 cursor-pointer hover:text-purple-800 ">
                <FontAwesomeIcon icon={faChartPie} />
              </span>
              OverView
            </li>
            <li className="text-gray-700 font-sans font-bold hover:text-purple-800 cursor-pointer mt-6 p-3  text-center hover:underline ">
              <span className="w-12 h-12  mr-4 text-gray-600 cursor-pointer hover:text-purple-800">
                <FontAwesomeIcon icon={faMapMarkedAlt} />
              </span>
              Map
            </li>
            <li className="text-gray-700 font-sans font-bold hover:text-purple-800 cursor-pointer mt-6 p-3  text-center hover:underline ">
              <span className="w-12 h-12  mr-4 text-gray-600 cursor-pointer hover:text-purple-800 ">
                <FontAwesomeIcon icon={faHome} />
              </span>
              Departements
            </li>
            <li className="text-gray-700 font-sans font-bold hover:text-purple-800 cursor-pointer mt-6 p-3  text-center  hover:underline">
              <span className="w-12 h-12  mr-4 text-gray-600 cursor-pointer hover:text-purple-800 ">
                <FontAwesomeIcon icon={faUserNurse} />
              </span>
              Doctors
            </li>
            <li className="text-gray-700 font-sans font-bold hover:text-purple-800 cursor-pointer mt-6  p-3  text-center hover:underline ">
              <span className="w-12 h-12  mr-4 text-gray-600 cursor-pointer hover:text-purple-800 ">
                <FontAwesomeIcon icon={faHistory} />
              </span>
              History
            </li>
            <li className="text-gray-700 font-sans font-bold hover:text-purple-800 cursor-pointer mt-12 p-3  text-center hover:underline ">
              <span className="w-12 h-12  mr-4 text-gray-600 cursor-pointer hover:text-purple-800 ">
                <FontAwesomeIcon icon={faSlidersH} />
              </span>
              Settings
            </li>
          </ul>
        </div>
        <div className="flex shadow-sm justify-center mt-32 p-6 border-gray-300 border-t-2">
          <img src={DownloadImage} alt="" className=" mt-3" />
        </div>
      </div>
    </div>
  );
};
