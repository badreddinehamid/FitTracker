import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Dumbbell, BarChart2, Calendar, Settings } from 'lucide-react';
import { ThemeToggle } from '../ThemeToggle';

const navItems = [
  { path: '/', icon: Dumbbell, label: 'Dashboard' },
  { path: '/analytics', icon: BarChart2, label: 'Analytics' },
  { path: '/schedule', icon: Calendar, label: 'Schedule' },
  { path: '/settings', icon: Settings, label: 'Settings' }
];

export function Navbar() {
  const location = useLocation();

  return (
    <nav className="bg-white dark:bg-gray-800 shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center space-x-8">
            <Link to="/" className="flex items-center">
              <Dumbbell className="h-8 w-8 text-blue-500" />
              <span className="ml-2 text-xl font-bold">FitTrack</span>
            </Link>
            <div className="hidden md:flex space-x-4">
              {navItems.map(({ path, icon: Icon, label }) => (
                <Link
                  key={path}
                  to={path}
                  className={`flex items-center px-3 py-2 rounded-md text-sm font-medium ${
                    location.pathname === path
                      ? 'bg-blue-500 text-white'
                      : 'text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700'
                  }`}
                >
                  <Icon className="w-4 h-4 mr-2" />
                  {label}
                </Link>
              ))}
            </div>
          </div>
          <ThemeToggle />
        </div>
      </div>
    </nav>
  );
}