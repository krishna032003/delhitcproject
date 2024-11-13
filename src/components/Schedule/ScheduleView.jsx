import React from 'react';
import { Calendar, Filter } from 'lucide-react';
import ScheduleList from './ScheduleList';

export default function ScheduleView() {
  return (
    <div className="bg-white rounded-lg shadow-lg p-6">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold">Bus Schedule</h2>
        <div className="flex space-x-4">
          <button className="flex items-center px-4 py-2 text-sm border rounded-lg hover:bg-gray-50">
            <Calendar className="h-4 w-4 mr-2" />
            Today
          </button>
          <button className="flex items-center px-4 py-2 text-sm border rounded-lg hover:bg-gray-50">
            <Filter className="h-4 w-4 mr-2" />
            Filter
          </button>
        </div>
      </div>
      <ScheduleList />
    </div>
  );
}