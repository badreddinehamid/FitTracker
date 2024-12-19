import React from 'react';
import { Calendar as CalendarIcon, Clock } from 'lucide-react';

const workoutSchedule = [
  {
    day: 'Monday',
    workouts: [
      { time: '07:00', name: 'Morning Yoga', duration: '30min' },
      { time: '18:00', name: 'HIIT Training', duration: '45min' },
    ],
  },
  {
    day: 'Wednesday',
    workouts: [
      { time: '08:00', name: 'Strength Training', duration: '60min' },
    ],
  },
  {
    day: 'Friday',
    workouts: [
      { time: '07:30', name: 'Cardio Session', duration: '45min' },
      { time: '17:00', name: 'Core Workout', duration: '30min' },
    ],
  },
];

export function Schedule() {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-8">Workout Schedule</h1>
      <div className="grid gap-6">
        {workoutSchedule.map((schedule) => (
          <div
            key={schedule.day}
            className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6"
          >
            <div className="flex items-center mb-4">
              <CalendarIcon className="w-5 h-5 text-blue-500 mr-2" />
              <h2 className="text-xl font-semibold">{schedule.day}</h2>
            </div>
            <div className="space-y-4">
              {schedule.workouts.map((workout, index) => (
                <div
                  key={index}
                  className="flex items-center justify-between p-3 bg-gray-50 dark:bg-gray-700 rounded-md"
                >
                  <div className="flex items-center">
                    <Clock className="w-4 h-4 text-gray-500 dark:text-gray-400 mr-2" />
                    <span className="font-medium">{workout.time}</span>
                    <span className="mx-2">-</span>
                    <span>{workout.name}</span>
                  </div>
                  <span className="text-sm text-gray-500 dark:text-gray-400">
                    {workout.duration}
                  </span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}