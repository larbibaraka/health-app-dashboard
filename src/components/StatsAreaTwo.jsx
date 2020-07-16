import React from "react";

export function StatsAreaTwo() {
  return (
    <div className="flex flex-row mt-5">
      <div className="w-2/4 h-64 shadow bg-white  rounded-lg mr-5">
        <div className="card-title flex flex-row justify-between  border-b-2 border-gray-200 p-2">
          <div className="m-4">
            <h3 className="text-xl font-bold text-gray-700 ">Time Admitted</h3>
          </div>
          <div className="m-2 flex flex-row">
            <div className="w-full ">
              <div className="relative">
                <select
                  className="font-bold block appearance-none w-full  text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white "
                  id="grid-state"
                >
                  <option className="font-normal">Today</option>
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
      </div>
      <div className="w-1/4 h-64 shadow bg-white  rounded-lg mr-5">
        <div className="card-title flex flex-row justify-start  border-b-2 border-gray-200 p-2">
    
          <div className="m-2 flex flex-row">
            <div className="w-full ">
              <div className="relative">
                <select
                  className="font-bold block appearance-none w-full  text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white "
                  id="grid-state"
                >
                  <option className="font-normal"> Patients By Devision</option>
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
      </div>
      <div className="w-1/4 h-64 shadow rounded-lg bg-purple-700"></div>
    </div>
  );
}
