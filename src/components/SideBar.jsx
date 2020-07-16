import React from "react";

export const SideBar = () => {
  return (
    <div className="sidebar flex flex-col bg-white w-1/5 border border-gray-300 h-screen">
      <div className="logo h-16 justify-center border border-gray-300">SomeLogo</div>
      <div className="bg-white menu p-6 flex flex-col">
        <div className="register-patient self-center">
          <button className="bg-indigo-700 text-gray-200 px-6 py-3 rounded-md font-semibold   hover:bg-indigo-800 hover:text-white items-center focus:outline-none">
            Register patient +
          </button>
        </div>
        <div className="menu-elements mt-5">
          <ul className="flex flex-col items-center">
            <li className="text-gray-700 font-sans font-semibold hover:text-indigo-800 cursor-pointer mt-4">
              
              Patients
            </li>
            <li className="text-gray-700 font-sans font-semibold hover:text-indigo-800 cursor-pointer mt-4">
              OverView
            </li>
            <li className="text-gray-700 font-sans font-semibold hover:text-indigo-800 cursor-pointer mt-4">
              Map
            </li>
            <li className="text-gray-700 font-sans font-semibold hover:text-indigo-800 cursor-pointer mt-4">
              Departements
            </li>
            <li className="text-gray-700 font-sans font-semibold hover:text-indigo-800 cursor-pointer mt-4">
              Doctors
            </li>
            <li className="text-gray-700 font-sans font-semibold hover:text-indigo-800 cursor-pointer mt-4">
              History
            </li>
            <li className="text-gray-700 font-sans font-semibold hover:text-indigo-800 cursor-pointer mt-12">
              Settings
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};
