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
    <div className="flex flex-col sm:flex sm:flex-row ">
      <div className="flex flex-row w-full mr-5 sm:w-3/4 sm:flex sm:flex-row ">
        <div className="w-1/2 mb-5 sm:mb-0 shadow h-48 bg-white rounded-lg sm:w-full flex flex-col mr-5">
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
                <p className="text-gray-900 leading-none font-bold text-xl">
                  3,256
                </p>
                <p className="text-gray-600 text-xl">Total Patients</p>
              </div>
            </div>
          </div>
        </div>
        <div className="w-1/2 mb-5 sm:mb-0 shadow h-48 bg-white rounded-lg sm:w-full flex flex-col mr-5">
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
                <p className="text-gray-900 leading-none font-bold text-xl">
                  394
                </p>
                <p className="text-gray-600 text-xl">Available Staff</p>
              </div>
            </div>
          </div>
        </div>
        <div className="hidden mb-5 sm:mb-0 shadow h-48 bg-white rounded-lg sm:w-full sm:flex sm:flex-col">
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
                <p className="text-gray-900 leading-none font-bold text-xl">
                  $2,256
                </p>
                <p className="text-gray-600 text-xl">Avg Treat. Costs</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-row sm:hidden">
        <div className="w-1/2 mr-5 sm:mr-0 shadow h-48 sm:w-1/4 bg-white  rounded-lg flex flex-col ">
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
                <p className="text-gray-900 leading-none font-bold text-xl">
                  38
                </p>
                <p className="text-gray-600 text-xl">Available Cars</p>
              </div>
            </div>
          </div>
        </div>

        <div className="w-1/2 mb-5 sm:mb-0 shadow h-48 bg-white rounded-lg sm:hidden flex flex-col">
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
                <p className="text-gray-900 leading-none font-bold text-xl">
                  $2,256
                </p>
                <p className="text-gray-600 text-xl">Avg Treat. Costs</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="hidden w-1/2 shadow h-48 sm:w-1/4 bg-white  rounded-lg sm:flex sm:flex-col">
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
              <p className="text-gray-900 leading-none font-bold text-xl">38</p>
              <p className="text-gray-600 text-xl">Available Cars</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
