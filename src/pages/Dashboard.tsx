import React from 'react';
import { DailyProgress } from '../components/DailyProgress';
import { WorkoutSuggestions } from '../components/WorkoutSuggestions';

export function Dashboard() {
  return (
    <>
      <h1 className="text-3xl font-bold mb-8">Fitness Dashboard</h1>
      <DailyProgress />
      <WorkoutSuggestions />
    </>
  );
}