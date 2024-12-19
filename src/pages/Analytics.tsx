import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const mockData = [
  { day: 'Mon', steps: 8000, calories: 2100, distance: 5.2 },
  { day: 'Tue', steps: 10000, calories: 2300, distance: 6.1 },
  { day: 'Wed', steps: 9000, calories: 2200, distance: 5.8 },
  { day: 'Thu', steps: 11000, calories: 2400, distance: 6.5 },
  { day: 'Fri', steps: 7500, calories: 2000, distance: 4.9 },
  { day: 'Sat', steps: 12000, calories: 2600, distance: 7.2 },
  { day: 'Sun', steps: 9500, calories: 2250, distance: 5.9 },
];

export function Analytics() {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-8">Weekly Progress</h1>
      <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
        <h2 className="text-xl font-semibold mb-4">Activity Overview</h2>
        <div className="h-[400px]">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={mockData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="day" />
              <YAxis yAxisId="left" />
              <YAxis yAxisId="right" orientation="right" />
              <Tooltip />
              <Legend />
              <Line
                yAxisId="left"
                type="monotone"
                dataKey="steps"
                stroke="#3B82F6"
                name="Steps"
              />
              <Line
                yAxisId="right"
                type="monotone"
                dataKey="calories"
                stroke="#EF4444"
                name="Calories"
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
}