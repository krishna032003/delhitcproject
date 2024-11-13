import React from 'react';
import { Navigation2 } from 'lucide-react';

export default function LiveTracking() {
  const buses = [
    { id: 'DL1PC1234', route: 'DTC-101', location: 'Dwarka Sector 10', status: 'On Time' },
    { id: 'DL1PC5678', route: 'DTC-102', location: 'Rohini Sector 8', status: 'Delayed' },
    { id: 'DL1PC9012', route: 'DTC-103', location: 'Karol Bagh', status: 'On Time' },
  ];

  return (
    <div className="bg-white rounded-lg shadow-lg p-6">
      <h2 className="text-2xl font-bold mb-6">Live Bus Tracking</h2>
      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Bus ID</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Route</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Current Location</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {buses.map((bus) => (
              <tr key={bus.id} className="hover:bg-gray-50">
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="flex items-center">
                    <Navigation2 className="h-5 w-5 text-blue-500 mr-2" />
                    {bus.id}
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">{bus.route}</td>
                <td className="px-6 py-4 whitespace-nowrap">{bus.location}</td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                    bus.status === 'On Time' ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
                  }`}>
                    {bus.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}