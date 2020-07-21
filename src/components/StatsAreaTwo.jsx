import React from "react";
import { PatientsLineChart } from "./Charts/PatientsLineChart";
import { PatientsDevision } from "./PatientsDevision";
import { PatientsLineChartWithoutstroks } from "./Charts/PatientsLineChartWithoutstroks";

export function StatsAreaTwo() {
  return (
    <div className="sm:flex sm:flex-row mt-5">
      <div className="hidden sm:block sm:w-2/4  shadow bg-white  rounded-lg mr-5">
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
        <div className="flex flex-row justify-center p-5">
          <PatientsLineChart />
        </div>
      </div>
      <div className="w-full sm:w-1/4  shadow bg-white  rounded-lg mr-5">
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
        <div className="card-body flex flex-col">
          <PatientsDevision />
        </div>
      </div>
      <div className="hidden sm:w-1/4 sm:block shadow rounded-lg gradient-color">
        <div className="p-10 flex flex-col">
          <h1 className="font-bold text-4xl text-white">3,240</h1>
          <h1 className="leading-3 text-gray-500 mt-3 font-semibold">Patients this month</h1>
          <PatientsLineChartWithoutstroks />
          <div className="flex flex-row justify-evenly font-bold text-white text-xl">
            <h1>14</h1>
            <h1>15</h1>
            <h1>16</h1>
            <h1>17</h1>
            <h1>18</h1>
            <h1>19</h1>
          </div>
        </div>
      </div>
    </div>
  );
}
