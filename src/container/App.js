import React from "react";
import "../assets/App.css";
import { SideBar } from "./../components/SideBar";
import { NavBar } from "../components/NavBar";
 
import profileImage from "../assets/images/profile.jpg";

function App() {
  return (
    <div className="flex bg-gray-100">
      {/* side bar  area */}
      <SideBar />
      <div className="flex flex-col w-full">
        {/* navbar area */}
        <NavBar />
        {/* main area */}
 
      </div>
    </div>
  );
}

export default App;
