import React from 'react';
import Navbar from './components/Navbar';
import Dashboard from './components/Dashboard';
import RouteMap from './components/RouteMap';
import LiveTracking from './components/LiveTracking';
import ScheduleView from './components/Schedule/ScheduleView';

function App() {
  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar />
      <div className="pt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="space-y-8">
            <section id="dashboard">
              <Dashboard />
            </section>
            
            <section id="schedule">
              <ScheduleView />
            </section>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <section id="routes">
                <RouteMap />
              </section>
              
              <section id="tracking">
                <LiveTracking />
              </section>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;