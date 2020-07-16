import React from "react";
import "../assets/App.css";
import { SideBar } from "./../components/SideBar";
import { NavBar } from "../components/NavBar";
import { ResumeArea } from "../components/ResumeArea";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEllipsisH,
  faBed,
  faUsers,
  faWallet,
  faAmbulance,
} from "@fortawesome/free-solid-svg-icons";
import { StatsAreaOne } from "../components/StatsAreaOne";
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
          {/* resume area */}
          <ResumeArea />
          {/* stats area */}
          <StatsAreaOne/>
        </main>
      </div>
    </div>
  );
}

export default App;
