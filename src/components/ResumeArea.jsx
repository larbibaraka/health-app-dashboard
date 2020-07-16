import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEllipsisH,
  faBed,
  faUsers,
  faWallet,
  faAmbulance,
} from "@fortawesome/free-solid-svg-icons";
export function ResumeArea() {
  return (
    <div className="flex flex-row">
      <div className="mr-5 w-3/4 flex flex-row ">
        <div className="shadow h-48 bg-white rounded-lg w-full flex flex-col mr-5">
          <div className="self-end">
            <span className="text-gray-400 mt-2 mr-5 block cursor-pointer">
              <FontAwesomeIcon icon={faEllipsisH} />
            </span>
          </div>
          <div className="items-center justify-center mt-3">
            <div className="flex items-center justify-center">
              <span className="w-20 h-20 rounded-full mr-4 bg-purple-200 text-purple-600 flex items-center justify-center">
                <FontAwesomeIcon icon={faBed} />
              </span>
              <div className="text-base">
                <p className="text-gray-900 leading-none font-bold text-lg">3,256</p>
                <p className="text-gray-600 text-lg">Total Patients</p>
              </div>
            </div>
          </div>
        </div>
        <div className="shadow h-48 bg-white rounded-lg w-full flex flex-col mr-5">
          <div className="self-end">
            <span className="text-gray-400 mt-2 mr-5 block cursor-pointer">
              <FontAwesomeIcon icon={faEllipsisH} />
            </span>
          </div>
          <div className="items-center justify-center mt-3">
            <div className="flex items-center justify-center">
              <span className="w-20 h-20 rounded-full mr-4 bg-blue-100 text-blue-400 flex items-center justify-center">
                <FontAwesomeIcon icon={faUsers} />
              </span>
              <div className="text-base">
                <p className="text-gray-900 leading-none font-bold">394</p>
                <p className="text-gray-600">Available Staff</p>
              </div>
            </div>
          </div>
        </div>
        <div className="shadow h-48 bg-white rounded-lg w-full flex flex-col">
          <div className="self-end">
            <span className="text-gray-400 mt-2 mr-5 block cursor-pointer">
              <FontAwesomeIcon icon={faEllipsisH} />
            </span>
          </div>
          <div className="items-center justify-center mt-3">
            <div className="flex items-center justify-center">
              <span className="w-20 h-20 rounded-full mr-4 bg-orange-200 text-orange-400 flex items-center justify-center">
                <FontAwesomeIcon icon={faWallet} />
              </span>
              <div className="text-base">
                <p className="text-gray-900 leading-none font-bold">$2,256</p>
                <p className="text-gray-600">Avg Treat. Costs</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="shadow h-48 w-1/4 bg-white  rounded-lg flex flex-col ">
        <div className="self-end">
          <span className="text-gray-400 mt-2 mr-5 block cursor-pointer">
            <FontAwesomeIcon icon={faEllipsisH} />
          </span>
        </div>
        <div className="items-center justify-center mt-3">
          <div className="flex items-center justify-center">
            <span className="w-20 h-20 rounded-full mr-4 bg-red-200 text-red-600 flex items-center justify-center">
              <FontAwesomeIcon icon={faAmbulance} />
            </span>
            <div className="text-base">
              <p className="text-gray-900 leading-none font-bold">38</p>
              <p className="text-gray-600">Available Cars</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
