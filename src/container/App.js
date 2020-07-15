import React from "react";
import "../assets/App.css";
import { SideBar } from "./../components/SideBar";
import { NavBar } from "../components/NavBar";
import {ResumeArea} from "../components/ResumeArea";
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
        <main className="flex flex-col container ml-20 mr-5">
          <ResumeArea/>
          <div className="flex flex-row justify-between">
            <div className=" m-5 w-3/4 h-64 border rounded-lg overflow-hidden shadow-lg bg-white">
                hh
            </div>
            <div className=" m-5 w-1/4 h-64 border rounded-lg overflow-hidden shadow-lg bg-white">
                hh
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}

export default App;
