import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHome,
  faHeartbeat,
  faHeadSideVirus,
  faCut,
} from "@fortawesome/free-solid-svg-icons";
export  function PatientsDevision() {
    return (
       
        <ul className="mt-4 p-2">
        <li className="flex flex-row text-gray-500 font-semibold ml-5 text-xl mb-5 border-b-2 border-gray-200 justify-between">
          <div>
            <span className="w-12 h-12 text-gray-600 cursor-pointer mr-2">
              <FontAwesomeIcon icon={faHome} />
            </span>
            DIVISION
          </div>
          <span className="w-12 h-12 text-gray-500 cursor-pointer ">
            PT.
          </span>
        </li>
        <li className="flex flex-row text-gray-500 font-semibold ml-5 text-xl mb-4 justify-between">
          <div>
            <span className="w-12 h-12 text-gray-600 cursor-pointer mr-2">
              <FontAwesomeIcon icon={faHeartbeat} />
            </span>
            Cardiology
          </div>
          <span className="w-12 h-12 text-gray-700 cursor-pointer ">
            247
          </span>
        </li>

        <li className="flex flex-row text-gray-500 font-semibold ml-5 text-xl mb-4 justify-between">
          <div>
            <span className="w-12 h-12 text-gray-600 cursor-pointer mr-2">
              <FontAwesomeIcon icon={faHeadSideVirus} />
            </span>
            Neurology
          </div>
           <span className="w-12 h-12 text-gray-700 cursor-pointer ">
            164
          </span>
        </li>
        <li className="flex flex-row text-gray-500 font-semibold ml-5 text-xl mb-4 justify-between">
          <div>
            <span className="w-12 h-12 text-gray-600 cursor-pointer mr-2">
              <FontAwesomeIcon icon={faCut} />
            </span>
            Surgery
          </div>
           <span className="w-12 h-12 text-gray-700 cursor-pointer ">
            86
          </span>
        </li>
      </ul>
   
    )
}
