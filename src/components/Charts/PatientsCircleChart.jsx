import React from "react";

import { Doughnut } from "react-chartjs-2";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircle } from "@fortawesome/free-solid-svg-icons";
export function PatientsCircleChart() {
  const data = {
    datasets: [
      {
        data: [72, 28],
        backgroundColor: ["#3f48cc", "#39d39f"],
      },
    ],
    // labels: ["Inpatients", "Outpatients"],
  };

  return (
    <div className="flex flex-col justify-center ml-20">
      <Doughnut data={data} />
      <div className="flex flex-row justify-evenly font-bold mt-10 ml-10">
        <span>
          <span className="w-5 h-5  mr-2 text-purple-800 cursor-pointer">
            <FontAwesomeIcon icon={faCircle} />
          </span>
          Inpatients
        </span>
        <span>
          <span className="w-5 h-5  mr-2 text-green-500 cursor-pointer">
            <FontAwesomeIcon icon={faCircle} />
          </span>
          Outpatients
        </span>
      </div>
    </div>
  );
}
