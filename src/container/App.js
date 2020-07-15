import React from "react";
import "../assets/App.css";
import { SideBar } from "./../components/SideBar";
import { NavBar } from "../components/NavBar";


function App() {
  return (
    <div className="flex bg-gray-200">
      <SideBar />
      <NavBar/>
    </div>
  );
}

export default App;
