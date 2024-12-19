import React from 'react';
import { Timer } from 'lucide-react';

interface WorkoutCardProps {
  title: string;
  duration: string;
  imageUrl: string;
  description: string;
}

export function WorkoutCard({ title, duration, imageUrl, description }: WorkoutCardProps) {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden">
      <img 
        src={imageUrl} 
        alt={title} 
        className="w-full h-48 object-cover"
      />
      <div className="p-4">
        <h3 className="text-lg font-semibold mb-2">{title}</h3>
        <div className="flex items-center text-sm text-gray-600 dark:text-gray-300 mb-2">
          <Timer className="w-4 h-4 mr-1" />
          <span>{duration}</span>
        </div>
        <p className="text-sm text-gray-600 dark:text-gray-300">{description}</p>
      </div>
    </div>
  );
}