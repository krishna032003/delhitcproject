import React from 'react';
import { Clock, MapPin } from 'lucide-react';

type ScheduleCardProps = {
  busId: string;
  route: string;
  departureTime: string;
  arrivalTime: string;
  from: string;
  to: string;
  status: 'scheduled' | 'in-transit' | 'completed' | 'delayed';
};

const statusStyles = {
  'scheduled': 'bg-blue-100 text-blue-800',
  'in-transit': 'bg-green-100 text-green-800',
  'completed': 'bg-gray-100 text-gray-800',
  'delayed': 'bg-red-100 text-red-800'
};

export default function ScheduleCard({ busId, route, departureTime, arrivalTime, from, to, status }: ScheduleCardProps) {
  return (
    <div className="bg-white rounded-lg shadow p-4 hover:shadow-md transition-shadow">
      <div className="flex justify-between items-start mb-3">
        <div>
          <h3 className="font-semibold text-lg">{route}</h3>
          <p className="text-sm text-gray-600">Bus ID: {busId}</p>
        </div>
        <span className={`px-3 py-1 rounded-full text-sm ${statusStyles[status]}`}>
          {status.charAt(0).toUpperCase() + status.slice(1)}
        </span>
      </div>
      
      <div className="flex items-center space-x-2 mb-2">
        <Clock className="h-4 w-4 text-gray-500" />
        <span className="text-sm">
          {departureTime} - {arrivalTime}
        </span>
      </div>
      
      <div className="flex items-center space-x-2">
        <MapPin className="h-4 w-4 text-gray-500" />
        <span className="text-sm text-gray-600">
          {from} → {to}
        </span>
      </div>
    </div>
  );
}