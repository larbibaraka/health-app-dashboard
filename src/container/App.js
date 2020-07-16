import React from "react";
import "../assets/App.css";
import { SideBar } from "./../components/SideBar";
import { NavBar } from "../components/NavBar";
import {ResumeArea} from "../components/ResumeArea";

function App() {
  return (
    <div className="flex bg-gray-100">
      {/* side bar  area */}
      <SideBar />
      <div className="flex flex-col w-full">
        {/* navbar area */}
        <NavBar />
        {/* main area */}
        <main className="m-10">
          <div className="flex flex-col">
            {/* resume area */}
            <ResumeArea />
          </div>
        </main>
      </div>
    </div>
  );
}

export default App;
