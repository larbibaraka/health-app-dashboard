import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";

export function PatientsLineChart() {
  const data = [
    { name: "", time: 25 },
    { name: "07 am", time: 100 },
    { name: "08 am", time: 110 },
    { name: "09 am", time: 70 },
    { name: "10 am", time: 50 },
    { name: "11 am", time: 130 },
    { name: "12 am", time: 150 },
  ];
  return (
    <div>
      <LineChart width={650} height={300} data={data}>
        <XAxis dataKey="name" />
        <YAxis />
        <CartesianGrid strokeDasharray="1" />
        <Tooltip />
      
        <Line
          type="monotone"
          dataKey="time"
          stroke="#ff8c59"
          activeDot={{ r: 4 }}
        />
      </LineChart>
    </div>
  );
}
