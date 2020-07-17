import React from "react";

import { Doughnut } from "react-chartjs-2";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircle } from "@fortawesome/free-solid-svg-icons";
export function PatientsCircleChart({color1, color2, title1, title2, textcolor1,    textcolor2}) {
  const data = {
    datasets: [
      {
        data: [72, 28],
        backgroundColor: [color1, color2],
      },
    ],
    // labels: ["Inpatients", "Outpatients"],
  };

  return (
    <>
      <Doughnut data={data} />
      <div className="flex flex-row justify-evenly font-bold mt-10 ml-10">
        <span>
          {/* <span className="w-5 h-5  mr-2 text-purple-800 cursor-pointer"> */}
          <span className={`w-5 h-5  mr-2 ${textcolor1} cursor-pointer`}>
            <FontAwesomeIcon icon={faCircle} />
          </span>
          {title1}
        </span>
        <span>
          <span className={`w-5 h-5  mr-2 ${textcolor2} cursor-pointer`}>
            <FontAwesomeIcon icon={faCircle} />
          </span>
          {title2}
        </span>
      </div>
    </>
  );
}
