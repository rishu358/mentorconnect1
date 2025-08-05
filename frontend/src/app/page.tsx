// frontend/src/app/page.tsx (Dashboard Page)
"use client"; // This marks the component as a Client Component

import React, { useState, useEffect } from 'react';
// Header is now imported in layout.tsx, so remove it from here
import { RightSidebar } from '../components/RightSidebar';  // Import the RightSidebar component

export default function DashboardPage() {
  const [dashboardStats, setDashboardStats] = useState<{
    members155?: string;
    members39?: string;
    members25?: string;
    communitySupport?: string;
  }>({});
 const [recommendedCourses, setRecommendedCourses] = useState<Array<{
    id: number;
    title: string;
    category: string;
    creator: string;
    lessons: number;
    hours: number;
  }>>([]);
  const [loading, setLoading] = useState(true); // Add loading state
  const [error, setError] = useState(null);   // Add error state




  // --- Data Fetching (Will connect to Node.js Backend later) ---
  useEffect(() => {
    const fetchDashboardData = async () => {
      setLoading(true); // Set loading to true when fetching starts
      setError(null);   // Clear any previous errors
      try {
        // Fetch Dashboard Stats
        const statsResponse = await fetch('http://localhost:5000/api/dashboard/stats');
        if (!statsResponse.ok) {
          throw new Error(`Failed to fetch stats: ${statsResponse.statusText}`);
        }
        const statsData = await statsResponse.json();
        setDashboardStats(statsData);

        // Fetch Recommended Courses
        const coursesResponse = await fetch('http://localhost:5000/api/dashboard/courses');
        if (!coursesResponse.ok) {
          throw new Error(`Failed to fetch courses: ${coursesResponse.statusText}`);
        }
        const coursesData = await coursesResponse.json();
        setRecommendedCourses(coursesData);

      }  catch (err: any) {
        console.error('Error fetching dashboard data:', err);
            setError(err.message || 'Failed to load dashboard data. Please ensure the backend server is running.');
      } finally {
        setLoading(false); // Set loading to false when fetching completes (success or failure)
      }
    };

    fetchDashboardData();
  }, []); // Empty dependency array means this runs once on mount

  if (loading) {
    return (
      <div className="flex items-center justify-center w-full h-full text-gray-600 text-xl">
        Loading dashboard data...
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex items-center justify-center w-full h-full text-red-600 text-xl text-center p-4">
        Error: {error}
        <br />
        Please ensure your Node.js backend is running on `http://localhost:5000`.
      </div>
    );
  }

  return (
    // This div now only handles the flex arrangement for the dashboard's main content and the RightSidebar
    <div className="flex flex-col lg:flex-row w-full h-full">
      <div className="flex-1"> {/* This div holds the main dashboard sections */}
        {/* The Header component is now rendered in layout.tsx */}

        {/* Welcome Section */}
        <section className="mb-8">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-3xl font-bold text-gray-900">Welcome, Merna!</h2>
            <div className="flex items-center space-x-2 text-gray-600">
              <span>12 Jan 2023, Friday</span>
              <span className="bg-green-200 text-green-800 text-xs px-2 py-1 rounded-full">Isolation Mode</span>
            </div>
          </div>

          {/* Get Involved Section */}
          <div className="bg-gradient-to-r from-blue-500 to-purple-600 p-6 rounded-xl shadow-md flex items-center justify-between text-white mb-8">
            <div>
              <h3 className="text-2xl font-semibold mb-2">Get Involved - Join a Club Today!</h3>
              <p className="text-blue-100 mb-4 max-w-lg">
                Explore your interests and meet like-minded students by joining one of our many clubs. Whether you're into sports, arts, or academics, there's a club for you. Find your community!
              </p>
              <button className="bg-white text-blue-600 px-6 py-2 rounded-lg font-medium hover:bg-gray-100 transition-colors duration-200">
                Learn More →
              </button>
            </div>
            <img
              src="https://placehold.co/150x150/FFFFFF/000000?text=Illustration"
              alt="Illustration"
              className="hidden md:block rounded-lg"
            />
          </div>

          {/* Member Statistics */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            <div className="bg-white p-6 rounded-xl shadow-md text-center">
              <h4 className="text-4xl font-bold text-gray-900">{dashboardStats.members155 || '...'}</h4>
              <p className="text-gray-500">125k Member</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-md text-center">
              <h4 className="text-4xl font-bold text-gray-900">{dashboardStats.members39 || '...'}</h4>
              <p className="text-gray-500">125k Member</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-md text-center">
              <h4 className="text-4xl font-bold text-gray-900">{dashboardStats.members25 || '...'}</h4>
              <p className="text-gray-500">125k Member</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-md text-center">
              <h4 className="text-4xl font-bold text-gray-900">{dashboardStats.communitySupport || '...'}</h4>
              <p className="text-gray-500">Community Support</p>
            </div>
          </div>

          {/* Community Groups */}
          <h3 className="text-2xl font-bold text-gray-900 mb-4">Community Groups</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            <div className="bg-white p-6 rounded-xl shadow-md text-center">
              <h4 className="lg:text-lg font-semibold text-gray-900 mb-1">Design Community Mumbai</h4>
              <p className="text-gray-500 text-sm">125k Member</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-md text-center">
              <h4 className="lg:text-lg font-semibold text-gray-900 mb-1">Dribble Globals Group</h4>
              <p className="text-gray-500 text-sm">125k Member</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-md text-center">
              <h4 className="lg:text-lg font-semibold text-gray-900 mb-1">Marketing Support Group</h4>
              <p className="text-gray-500 text-sm">125k Member</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-md text-center">
              <h4 className="lg:text-lg font-semibold text-gray-900 mb-1">Devops Community Mumbai</h4>
              <p className="text-gray-500 text-sm">125k Member</p>
            </div>
          </div>

          {/* Courses Section */}
          <h3 className="text-2xl font-bold text-gray-900 mb-4">Recommended Courses</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {recommendedCourses.length > 0 ? (
              recommendedCourses.map(course => (
                <div key={course.id} className="bg-white rounded-xl shadow-md overflow-hidden">
                  <img
                    src={`https://placehold.co/400x200/E0F2F7/000000?text=${course.title.replace(/\s/g, '+')}`}
                    alt={course.title}
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-4">
                    <span className="bg-purple-100 text-purple-700 text-xs font-semibold px-2 py-1 rounded-full mb-2 inline-block">{course.category}</span>
                    <h4 className="text-lg font-semibold text-gray-900 mb-2">{course.title}</h4>
                    <p className="text-gray-500 text-sm mb-3">Created by {course.creator}</p>
                    <div className="flex justify-between items-center text-gray-600 text-sm">
                      <span>{course.lessons} Lesson</span>
                      <span>{course.hours} Hours</span>
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <p className="text-gray-500">No courses available.</p>
            )}
          </div>
        </section>
      </div>

      {/* Right Sidebar (Calendar & Events) - Only on Dashboard Page */}
      <RightSidebar />
    </div>
  );
}
