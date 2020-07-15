import React from "react";
import "../assets/App.css";
import { SideBar } from './../components/SideBar';

function App() {
  return (
    <div className="flex bg-gray-200">
        <SideBar/>
        <div className="flex flex-row bg-white h-16 w-full "> 
          <div className="search ">
             <input className="w-full ml-5 p-4 h-16 text-gray-700  focus:outline-none focus:bg-gray-100" placeholder="Search ..." type="text"/>
          </div>
        </div>
    </div>
  );
}

export default App;
