import React from 'react'
import profileImage from "../assets/images/profile.jpg";
export  const  ResumeArea = () => {
    return (
     
        <div className="flex flex-row resume-info justify-around">
        <div className="h-40 w-1/5 border rounded-lg overflow-hidden shadow-lg bg-white  m-10 px-4 py-2 flex justify-center">
          <div className="flex items-center">
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
        <div className="h-40 w-1/5 border rounded-lg overflow-hidden shadow-lg bg-white  m-10 px-4 py-2 flex justify-center">
          <div className="flex items-center">
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
        <div className="h-40 w-1/5 border rounded-lg overflow-hidden shadow-lg bg-white  m-10 px-4 py-2 flex justify-center">
          <div className="flex items-center">
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
        <div className="h-40 w-1/5 border rounded-lg overflow-hidden shadow-lg bg-white  m-10 px-4 py-2 flex justify-center">
          <div className="flex items-center">
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
    
    )
}
