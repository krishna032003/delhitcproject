import React from 'react';
import ScheduleCard from './ScheduleCard';

const schedules = [
  {
    busId: 'DL1PC1234',
    route: 'DTC-101',
    departureTime: '07:00 AM',
    arrivalTime: '08:30 AM',
    from: 'Dwarka',
    to: 'Connaught Place',
    status: 'in-transit'
  },
  {
    busId: 'DL1PC5678',
    route: 'DTC-102',
    departureTime: '08:15 AM',
    arrivalTime: '09:45 AM',
    from: 'Rohini',
    to: 'India Gate',
    status: 'scheduled'
  },
  {
    busId: 'DL1PC9012',
    route: 'DTC-103',
    departureTime: '06:30 AM',
    arrivalTime: '08:00 AM',
    from: 'Nehru Place',
    to: 'Karol Bagh',
    status: 'delayed'
  }
];

export default function ScheduleList() {
  return (
    <div className="space-y-4">
      {schedules.map((schedule) => (
        <ScheduleCard
          key={`${schedule.busId}-${schedule.departureTime}`}
          {...schedule}
        />
      ))}
    </div>
  );
}