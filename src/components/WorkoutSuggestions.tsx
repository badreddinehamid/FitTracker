import React from 'react';
import { WorkoutCard } from './WorkoutCard';

const workouts = [
  {
    title: "Morning Yoga",
    duration: "15 mins",
    imageUrl: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&w=800&q=80",
    description: "Start your day with energizing yoga poses to improve flexibility and mindfulness."
  },
  {
    title: "HIIT Workout",
    duration: "20 mins",
    imageUrl: "https://images.unsplash.com/photo-1601422407692-ec4eeec1d9b3?auto=format&fit=crop&w=800&q=80",
    description: "High-intensity interval training to boost metabolism and burn calories."
  },
  {
    title: "Core Strength",
    duration: "10 mins",
    imageUrl: "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?auto=format&fit=crop&w=800&q=80",
    description: "Build core strength with planks, crunches, and other targeted exercises."
  }
];

export function WorkoutSuggestions() {
  return (
    <div className="mt-8">
      <h2 className="text-2xl font-bold mb-6">Recommended Workouts</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {workouts.map((workout, index) => (
          <WorkoutCard key={index} {...workout} />
        ))}
      </div>
    </div>
  );
}