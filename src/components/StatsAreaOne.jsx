import React from "react";
import { PatientsBarChart } from "./Charts/PatientsBarChart";
import { PatientsCircleChart } from "./Charts/PatientsCircleChart";

export function StatsAreaOne() {
  return (
    <div className="flex flex-row mt-5">
      <div className="w-3/4 bg-white  rounded-lg mr-5 shadow flex flex-col">
        <div className="card-title flex flex-row justify-between  border-b-2 border-gray-200 p-2">
          <div className="m-4">
            <h3 className="text-xl font-bold text-gray-700">
              OutPatients vs. Inpatients Trend
            </h3>
          </div>
          <div className="m-2 flex flex-row">
            <h3 className="mt-2 mr-2 text-lg text-gray-600 font-semibold ">
              Show
            </h3>
            <div className="w-full ">
              <div className="relative">
                <select
                  className="font-bold block appearance-none w-full  text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white "
                  id="grid-state"
                >
                  <option className="font-normal">By Months</option>
                </select>
                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                  <svg
                    className="fill-current h-4 w-4"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="p-10 flex flex-row justify-center">
          <PatientsBarChart />
          <PatientsCircleChart color1="#713bdb" color2="#39d39f" title1="Inpatients" title2="Outpatients" textcolor1 = "purple" textcolor2="green"/>
        </div>
      </div>
      <div className="w-1/4 h-64 bg-white  rounded-lg shadow">
        <div className="card-title flex flex-row justify-center  border-b-2 border-gray-200 p-2">
          <div className="m-4">
            <h3 className="text-xl font-bold text-gray-700">
              Patients by Gender
            </h3>
            
          </div>
        </div>
      </div>
    </div>
  );
}
