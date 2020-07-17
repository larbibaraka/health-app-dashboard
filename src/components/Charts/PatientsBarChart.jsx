import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";
export function PatientsBarChart() {
  const data = [
    {
      name: "Oct 2019",
      Outpatients: 4000,
      Inpatients: 2400,
      amt: 2400,
    },
    {
      name: "Nov 2019",
      Outpatients: 3000,
      Inpatients: 1398,
      amt: 2210,
    },
    {
      name: "Dec 2019",
      Outpatients: 2000,
      Inpatients: 9800,
      amt: 2290,
    },
    {
      name: "Jan 2020",
      Outpatients: 2780,
      Inpatients: 3908,
      amt: 2000,
    },
    {
      name: "Feb 2020",
      Outpatients: 1890,
      Inpatients: 4800,
      amt: 2181,
    },
    {
      name: "Mar 2020",
      Outpatients: 2390,
      Inpatients: 3800,
      amt: 2500,
    },
   
  ];

  return (
    <BarChart
      width={600}
      height={300}
      data={data}
      // margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
    >
      <CartesianGrid strokeDasharray="5 5" />
      <XAxis dataKey="name" />
      <YAxis />
      <Tooltip />
      {/* <Legend /> */}
      <Bar dataKey="Inpatients" fill="#39d39f" />
      <Bar dataKey="Outpatients" fill="#713bdb" />
    </BarChart>
  );
}
