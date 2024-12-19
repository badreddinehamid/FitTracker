import React from 'react';
import { Moon, Sun } from 'lucide-react';
import { Switch } from './ui/Switch';
import { useTheme } from '../context/ThemeContext';

export function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className="flex items-center gap-2">
      <Sun className="h-4 w-4" />
      <Switch checked={theme === 'dark'} onCheckedChange={toggleTheme} />
      <Moon className="h-4 w-4" />
    </div>
  );
}