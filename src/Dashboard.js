// src/Dashboard.js
import React from 'react';

const Dashboard = () => {
  return (
    <div className="flex flex-col h-screen bg-gray-100">
      {/* Header */}
      <header className="bg-white shadow-md p-4 flex justify-between items-center">
        <h1 className="text-xl font-bold">Dashboard</h1>
        <div className="relative">
          <button className="text-gray-700 hover:text-gray-900 focus:outline-none">
            Profile
          </button>
        </div>
      </header>

      {/* Main Layout */}
      <div className="flex flex-1">
        {/* Sidebar */}
        <nav className="bg-white w-64 shadow-lg">
          <ul className="flex flex-col p-4">
            <li>
              <a href="#" className="block p-2 text-gray-700 hover:bg-gray-200 rounded">
                Dashboard
              </a>
            </li>
            <li>
              <a href="#" className="block p-2 text-gray-700 hover:bg-gray-200 rounded">
                Profile
              </a>
            </li>
            <li>
              <a href="#" className="block p-2 text-gray-700 hover:bg-gray-200 rounded">
                Settings
              </a>
            </li>
          </ul>
        </nav>

        {/* Main Content Area */}
        <main className="flex-1 p-6 bg-gray-100">
          <h2 className="text-2xl font-semibold mb-4">Welcome to the Dashboard!</h2>
          <p>This is the main content area that can be dynamically updated.</p>
        </main>
      </div>
    </div>
  );
};

export default Dashboard;
