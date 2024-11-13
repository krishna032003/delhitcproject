import React from 'react';
import { MapPin } from 'lucide-react';

export default function RouteMap() {
  const routes = [
    { id: 'DTC-101', from: 'Dwarka', to: 'Connaught Place', status: 'active' },
    { id: 'DTC-102', from: 'Rohini', to: 'India Gate', status: 'active' },
    { id: 'DTC-103', from: 'Nehru Place', to: 'Karol Bagh', status: 'maintenance' },
  ];

  return (
    <div className="bg-white rounded-lg shadow-lg p-6">
      <h2 className="text-2xl font-bold mb-6">Active Routes</h2>
      <div className="space-y-4">
        {routes.map((route) => (
          <div key={route.id} className="border rounded-lg p-4 hover:bg-gray-50 transition-colors">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-4">
                <MapPin className="h-6 w-6 text-blue-500" />
                <div>
                  <h3 className="font-semibold">{route.id}</h3>
                  <p className="text-sm text-gray-600">
                    {route.from} → {route.to}
                  </p>
                </div>
              </div>
              <span className={`px-3 py-1 rounded-full text-sm ${
                route.status === 'active' ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'
              }`}>
                {route.status.charAt(0).toUpperCase() + route.status.slice(1)}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}