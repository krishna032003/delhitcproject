import React from 'react';
import { Bus, Menu, X } from 'lucide-react';
import { useState } from 'react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-blue-700 text-white fixed w-full z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Bus className="h-8 w-8" />
            <span className="ml-2 text-xl font-bold">DTC Manager</span>
          </div>
          
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <a href="#dashboard" className="px-3 py-2 rounded-md text-sm font-medium hover:bg-blue-600">Dashboard</a>
              <a href="#routes" className="px-3 py-2 rounded-md text-sm font-medium hover:bg-blue-600">Routes</a>
              <a href="#schedule" className="px-3 py-2 rounded-md text-sm font-medium hover:bg-blue-600">Schedule</a>
              <a href="#tracking" className="px-3 py-2 rounded-md text-sm font-medium hover:bg-blue-600">Live Tracking</a>
            </div>
          </div>
          
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md hover:bg-blue-600 focus:outline-none"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <a href="#dashboard" className="block px-3 py-2 rounded-md text-base font-medium hover:bg-blue-600">Dashboard</a>
            <a href="#routes" className="block px-3 py-2 rounded-md text-base font-medium hover:bg-blue-600">Routes</a>
            <a href="#schedule" className="block px-3 py-2 rounded-md text-base font-medium hover:bg-blue-600">Schedule</a>
            <a href="#tracking" className="block px-3 py-2 rounded-md text-base font-medium hover:bg-blue-600">Live Tracking</a>
          </div>
        </div>
      )}
    </nav>
  );
}