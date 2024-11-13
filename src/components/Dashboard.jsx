import React from 'react';
import { Activity, Route, Clock, Users } from 'lucide-react';

export default function Dashboard() {
  const stats = [
    { title: 'Active Buses', value: '234', icon: Activity, color: 'bg-green-500' },
    { title: 'Total Routes', value: '45', icon: Route, color: 'bg-blue-500' },
    { title: 'On-Time Rate', value: '94%', icon: Clock, color: 'bg-purple-500' },
    { title: 'Daily Passengers', value: '125K', icon: Users, color: 'bg-yellow-500' }
  ];

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-6">System Overview</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, index) => (
          <div key={index} className="bg-white rounded-lg shadow-lg p-6">
            <div className={`${stat.color} w-12 h-12 rounded-full flex items-center justify-center mb-4`}>
              <stat.icon className="h-6 w-6 text-white" />
            </div>
            <h3 className="text-gray-600 text-sm">{stat.title}</h3>
            <p className="text-2xl font-bold">{stat.value}</p>
          </div>
        ))}
      </div>
    </div>
  );
}