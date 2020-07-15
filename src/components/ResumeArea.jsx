import React from "react";
import profileImage from "../assets/images/profile.jpg";
export const ResumeArea = () => {
  return (
    <div className="flex flex-row resume-info">
      <div className="flex flex-row justify-between">
        <div className="h-full w-10/12 flex flex-row justify-between m-5">
          <div className="h-40  border rounded-lg overflow-hidden shadow-lg bg-white  flex justify-center">
            <div className="flex items-center p-3">
              <img
                className="w-16 h-16 rounded-full mr-4"
                src={profileImage}
                alt=""
              />
              <div className="text-lg">
                <p className="text-gray-800 leading-none font-bold">
                  Jonathan Reinink
                </p>
                <p className="text-gray-500">Total Patients</p>
              </div>
            </div>
          </div>
          <div className="h-40  border rounded-lg overflow-hidden shadow-lg bg-white  flex justify-center">
            <div className="flex items-center p-3">
              <img
                className="w-16 h-16 rounded-full mr-4"
                src={profileImage}
                alt=""
              />
              <div className="text-lg">
                <p className="text-gray-800 leading-none font-bold">
                  Jonathan Reinink
                </p>
                <p className="text-gray-500">Available Staff</p>
              </div>
            </div>
          </div>
          <div className="h-40  border rounded-lg overflow-hidden shadow-lg bg-white  flex justify-center">
            <div className="flex items-center p-3">
              <img
                className="w-16 h-16 rounded-full mr-4"
                src={profileImage}
                alt=""
              />
              <div className="text-lg">
                <p className="text-gray-800 leading-none font-bold">
                  Jonathan Reinink
                </p>
                <p className="text-gray-500">Avg Treat. Costs</p>
              </div>
            </div>
          </div>
        </div>
        <div className="h-full w-2/12 flex m-5">
          
            <div className="h-40  border rounded-lg overflow-hidden shadow-lg bg-white  p-2 flex justify-center">
              <div className="flex items-center p-5">
                <img
                  className="w-16 h-16 rounded-full mr-4"
                  src={profileImage}
                  alt=""
                />
                <div className="text-lg">
                  <p className="text-gray-800 leading-none font-bold">
                    Jonathan Reinink
                  </p>
                  <p className="text-gray-500">Available Cars</p>
                </div>
              </div>
            </div>
          
        </div>
      </div>
    </div>
  );
};
