import React from 'react';
import { Activity, Footprints, Flame } from 'lucide-react';
import { Progress } from './ui/Progress';
import { useFitness } from '../context/FitnessContext';
import { calculateProgress, formatNumber } from '../lib/utils';

interface MetricCardProps {
  icon: React.ReactNode;
  title: string;
  current: number;
  goal: number;
  unit: string;
}

function MetricCard({ icon, title, current, goal, unit }: MetricCardProps) {
  const progress = calculateProgress(current, goal);

  return (
    <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
      <div className="flex items-center gap-3 mb-4">
        {icon}
        <h3 className="text-lg font-semibold">{title}</h3>
      </div>
      <div className="mb-2">
        <Progress value={progress} />
      </div>
      <div className="flex justify-between text-sm text-gray-600 dark:text-gray-300">
        <span>{formatNumber(current)} {unit}</span>
        <span>Goal: {formatNumber(goal)} {unit}</span>
      </div>
    </div>
  );
}

export function DailyProgress() {
  const { dailyData, goals } = useFitness();

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      <MetricCard
        icon={<Footprints className="w-6 h-6 text-blue-500" />}
        title="Steps"
        current={dailyData.steps}
        goal={goals.steps}
        unit="steps"
      />
      <MetricCard
        icon={<Flame className="w-6 h-6 text-orange-500" />}
        title="Calories"
        current={dailyData.calories}
        goal={goals.calories}
        unit="kcal"
      />
      <MetricCard
        icon={<Activity className="w-6 h-6 text-green-500" />}
        title="Distance"
        current={dailyData.distance}
        goal={goals.distance}
        unit="km"
      />
    </div>
  );
}