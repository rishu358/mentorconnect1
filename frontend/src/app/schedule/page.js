// frontend/src/app/schedule/page.js
"use client"; // This marks the component as a Client Component

import React, { useState } from 'react';

export default function SchedulePage() {
  const [currentDate, setCurrentDate] = useState(new Date()); // State to manage current month/year

  // Helper function to get the number of days in a month
  const getDaysInMonth = (year, month) => {
    return new Date(year, month + 1, 0).getDate();
  };

  // Helper function to get the first day of the month (0 for Sunday, 1 for Monday, etc.)
  const getFirstDayOfMonth = (year, month) => {
    return new Date(year, month, 1).getDay();
  };

  // Mock events for the calendar
  const mockEvents = {
    // Format: 'YYYY-MM-DD': [{ time: 'HH:MM', title: 'Event Title' }]
    '2024-07-02': [{ time: '11am', title: 'Mock Interview' }],
    '2024-07-06': [{ time: '9am', title: 'Group Study' }],
    '2024-07-11': [{ time: '11am', title: 'Microsoft Event' }],
    '2024-07-16': [{ time: '10am', title: 'Meeting with Mentor' }],
    '2024-07-19': [{ time: '10am', title: 'Tech-Fest' }],
    '2024-07-22': [{ time: '10am', title: 'Interview' }],
    '2024-07-27': [{ time: '9am', title: 'Group Study' }],
    '2024-07-30': [{ time: '10am', title: 'Meeting with Mentor' }],
    '2024-07-31': [{ time: '12pm', title: 'Feed-back Session' }],
  };


  const renderCalendarDays = () => {
    const year = currentDate.getFullYear();
    const month = currentDate.getMonth(); // 0-indexed (0 for Jan, 6 for July)
    const daysInMonth = getDaysInMonth(year, month);
    const firstDay = getFirstDayOfMonth(year, month);

    const days = [];

    // Add empty divs for leading blank days
    for (let i = 0; i < firstDay; i++) {
      days.push(<div key={`empty-${i}`} className="border border-gray-200 p-2 min-h-[100px] bg-gray-50"></div>);
    }

    // Add days of the month
    for (let day = 1; day <= daysInMonth; day++) {
      const fullDate = new Date(year, month, day);
      const isCurrentMonth = fullDate.getMonth() === month;
      const isToday = fullDate.toDateString() === new Date().toDateString();
      const dateString = `${year}-${String(month + 1).padStart(2, '0')}-${String(day).padStart(2, '0')}`;
      const events = mockEvents[dateString] || [];

      days.push(
        <div
          key={`day-${day}`}
          className={`border border-gray-200 p-2 min-h-[100px] flex flex-col ${isCurrentMonth ? 'bg-white' : 'bg-gray-50 text-gray-400'} ${isToday ? 'border-blue-500 ring-2 ring-blue-500' : ''}`}
        >
          <span className={`font-semibold text-sm ${isToday ? 'text-blue-600' : ''}`}>{day}</span>
          <div className="flex flex-col mt-1 space-y-1">
            {events.map((event, index) => (
              <div key={index} className="bg-green-100 text-green-800 text-xs rounded-md px-1 py-0.5 whitespace-nowrap overflow-hidden text-ellipsis">
                <span className="font-medium">{event.time}</span> {event.title}
              </div>
            ))}
          </div>
        </div>
      );
    }

    return days;
  };

  const goToPreviousMonth = () => {
    setCurrentDate(prevDate => {
      const newDate = new Date(prevDate);
      newDate.setMonth(newDate.getMonth() - 1);
      return newDate;
    });
  };

  const goToNextMonth = () => {
    setCurrentDate(prevDate => {
      const newDate = new Date(prevDate);
      newDate.setMonth(newDate.getMonth() + 1);
      return newDate;
    });
  };

  return (
    <div className="w-full h-full p-4 bg-white rounded-lg shadow-md">
      {/* Breadcrumbs */}
      <div className="text-sm text-gray-500 mb-6">
        Dashboard &gt; <span className="text-gray-800 font-medium">Schedule</span>
      </div>

      {/* Calendar Header and Controls */}
      <div className="flex items-center justify-between mb-6">
        <button className="bg-blue-500 text-white px-4 py-2 rounded-lg flex items-center hover:bg-blue-600 transition-colors duration-200">
          <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4v16m8-8H4"></path></svg>
          Add Event
        </button>
        <div className="text-2xl font-bold text-gray-800">
          {currentDate.toLocaleString('en-US', { month: 'long', year: 'numeric' })}
        </div>
        <div className="flex items-center space-x-2">
          <div className="flex bg-gray-200 rounded-lg p-1">
            <button className="px-3 py-1 rounded-md text-sm font-medium bg-white shadow">Day</button>
            <button className="px-3 py-1 rounded-md text-sm font-medium text-gray-700 hover:bg-white hover:shadow">Month</button>
            <button className="px-3 py-1 rounded-md text-sm font-medium text-gray-700 hover:bg-white hover:shadow">Week</button>
          </div>
          <button onClick={goToPreviousMonth} className="p-2 rounded-full hover:bg-gray-200">
            <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7"></path></svg>
          </button>
          <button onClick={goToNextMonth} className="p-2 rounded-full hover:bg-gray-200">
            <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path></svg>
          </button>
        </div>
      </div>

      {/* Calendar Grid */}
      <div className="grid grid-cols-7 border-t border-l border-gray-200">
        {/* Days of the week header */}
        {['Sun', 'Mon', 'Tue', 'Wed', 'Thurs', 'Fri', 'Sat'].map(day => (
          <div key={day} className="border-b border-r border-gray-200 p-2 text-center font-semibold text-gray-700">
            {day}
          </div>
        ))}
        {/* Calendar days */}
        {renderCalendarDays()}
      </div>
    </div>
  );
}
