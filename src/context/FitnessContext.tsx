import React, { createContext, useContext, useEffect, useState } from 'react';

interface FitnessData {
  steps: number;
  calories: number;
  distance: number;
}

interface Goals {
  steps: number;
  calories: number;
  distance: number;
}

interface FitnessContextType {
  dailyData: FitnessData;
  goals: Goals;
  updateGoals: (newGoals: Partial<Goals>) => void;
}

const defaultGoals: Goals = {
  steps: 10000,
  calories: 2500,
  distance: 5,
};

const FitnessContext = createContext<FitnessContextType | undefined>(undefined);

export function FitnessProvider({ children }: { children: React.ReactNode }) {
  const [goals, setGoals] = useState<Goals>(() => {
    const stored = localStorage.getItem('fitness-goals');
    return stored ? JSON.parse(stored) : defaultGoals;
  });

  const [dailyData, setDailyData] = useState<FitnessData>({
    steps: 7500,
    calories: 1800,
    distance: 3.5,
  });

  useEffect(() => {
    localStorage.setItem('fitness-goals', JSON.stringify(goals));
  }, [goals]);

  const updateGoals = (newGoals: Partial<Goals>) => {
    setGoals((prev) => ({ ...prev, ...newGoals }));
  };

  return (
    <FitnessContext.Provider value={{ dailyData, goals, updateGoals }}>
      {children}
    </FitnessContext.Provider>
  );
}

export function useFitness() {
  const context = useContext(FitnessContext);
  if (context === undefined) {
    throw new Error('useFitness must be used within a FitnessProvider');
  }
  return context;
}