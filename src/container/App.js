import React from "react";
import "../assets/App.css";

function App() {
  return (
    <div className="flex bg-gray-200">
      <div className="sidebar flex flex-col bg-white ">
        <div className="logo p-6">SomeLogo</div>
        <div className="bg-gray-100 menu p-6 flex flex-col">
          <div className="register-patient">
            <button className="bg-indigo-700 text-gray-200 px-6 py-3 rounded-md font-semibold   hover:bg-indigo-800 hover:text-white">
              Register patient +
            </button>
          </div>
          <div className="menu-elements mt-5"> 
            <ul className="flex flex-col items-center">
                <li className="text-gray-700 font-sans font-semibold hover:text-indigo-800 cursor-pointer mt-4">Patients</li>  
                <li className="text-gray-700 font-sans font-semibold hover:text-indigo-800 cursor-pointer mt-4">OverView</li>  
                <li className="text-gray-700 font-sans font-semibold hover:text-indigo-800 cursor-pointer mt-4">Map</li>  
                <li className="text-gray-700 font-sans font-semibold hover:text-indigo-800 cursor-pointer mt-4">Departements</li>  
                <li className="text-gray-700 font-sans font-semibold hover:text-indigo-800 cursor-pointer mt-4">Doctors</li>  
                <li className="text-gray-700 font-sans font-semibold hover:text-indigo-800 cursor-pointer mt-4">History</li>  
                <li className="text-gray-700 font-sans font-semibold hover:text-indigo-800 cursor-pointer mt-12">Settings</li>  
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
