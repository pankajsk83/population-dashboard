import React from "react";
import { BarChart, Bar, XAxis, YAxis, Tooltip, CartesianGrid, ResponsiveContainer, PieChart, Pie, Cell } from "recharts";

const populationData = [
  { area: "City A", population: 500000 },
  { area: "City B", population: 750000 },
  { area: "City C", population: 600000 },
  { area: "City D", population: 850000 },
];

const demographicData = [
  { name: "Children", value: 25 },
  { name: "Adults", value: 50 },
  { name: "Seniors", value: 25 },
];

const COLORS = ["#0088FE", "#00C49F", "#FFBB28"];

export default function PopulationCharts() {
  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold text-center mb-4">Population and Demographics</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="p-4 border rounded-lg shadow-lg">
          <h2 className="text-xl font-semibold text-center mb-2">Population by Area</h2>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={populationData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="area" />
              <YAxis />
              <Tooltip />
              <Bar dataKey="population" fill="#8884d8" />
            </BarChart>
          </ResponsiveContainer>
        </div>

        <div className="p-4 border rounded-lg shadow-lg">
          <h2 className="text-xl font-semibold text-center mb-2">Demographic Breakdown</h2>
          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Pie data={demographicData} dataKey="value" nameKey="name" cx="50%" cy="50%" outerRadius={80} label>
                {demographicData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
}