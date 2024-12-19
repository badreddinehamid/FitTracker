import React from 'react';
import { useFitness } from '../context/FitnessContext';
import { Slider } from '../components/ui/Slider';

export function Settings() {
  const { goals, updateGoals } = useFitness();

  return (
    <div>
      <h1 className="text-3xl font-bold mb-8">Settings</h1>
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
        <h2 className="text-xl font-semibold mb-6">Daily Goals</h2>
        <div className="space-y-6">
          <div>
            <label className="block text-sm font-medium mb-2">
              Steps Goal: {goals.steps.toLocaleString()}
            </label>
            <Slider
              value={[goals.steps]}
              onValueChange={([value]) => updateGoals({ steps: value })}
              min={1000}
              max={20000}
              step={500}
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-2">
              Calories Goal: {goals.calories.toLocaleString()}
            </label>
            <Slider
              value={[goals.calories]}
              onValueChange={([value]) => updateGoals({ calories: value })}
              min={1000}
              max={5000}
              step={100}
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-2">
              Distance Goal (km): {goals.distance}
            </label>
            <Slider
              value={[goals.distance]}
              onValueChange={([value]) => updateGoals({ distance: value })}
              min={1}
              max={15}
              step={0.5}
            />
          </div>
        </div>
      </div>
    </div>
  );
}