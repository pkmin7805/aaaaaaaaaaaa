import React from 'react';

export interface Project {
  id: number;
  title: string;
  category: string;
  location: string;
  progress: number;
  status: 'On Track' | 'Delayed' | 'Completed' | 'Risk';
  manager: string;
  startDate: string;
}

export interface ChatMessage {
  role: 'user' | 'model';
  text: string;
  isStreaming?: boolean;
}

export interface Stat {
  label: string;
  value: string;
  change?: string;
  trend?: 'up' | 'down' | 'neutral';
  icon?: React.ReactNode;
  description?: string;
}

export interface Notice {
  id: number;
  title: string;
  date: string;
  priority: 'High' | 'Normal' | 'Low';
}

export interface Service {
  title: string;
  description: string;
  icon: React.ReactNode;
}