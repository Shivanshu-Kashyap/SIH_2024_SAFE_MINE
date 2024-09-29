// Dashboard.jsx
import React from 'react';
import { FaHome, FaFileAlt, FaClipboardList, FaEye, FaChartBar, FaCalendarCheck, FaHistory, FaCogs, FaHeadset, FaSignOutAlt } from 'react-icons/fa';
import { Link, Routes, Route } from 'react-router-dom';
import WebLogo from '../assets/Web_Logo.png'; // Path to the Safe Mine logo
import IntroImage from '../assets/INTRO__Coal.png'; // Path to the intro image
import FillForm from './FillForm'; // Import the FillForm component

const Dashboard = () => {
  return (
    <div className="flex h-screen mx-auto px-8 mt-36 font-roboto">
      {/* Sidebar */}
      <aside className="w-1/5 bg-white p-6 flex flex-col shadow-md h-full">
        {/* Safe Mine Logo */}
        <img src={WebLogo} alt="Safe Mine Logo" className="h-[100px] w-auto mb-8 object-contain" />

        {/* Sidebar Links */}
        <nav className="flex flex-col flex-grow">
          <Link
            to="/dashboard"
            className="flex items-center space-x-2 text-gray-700 hover:text-blue-500 duration-300 p-3 rounded-md bg-white shadow-lg hover:-translate-y-1 transform transition-transform"
          >
            <FaHome />
            <span>Dashboard</span>
          </Link>

          <Link
            to="/dashboard/fill-form"
            className="flex items-center space-x-2 text-gray-700 hover:text-blue-500 duration-300 p-3 rounded-md bg-white shadow-lg hover:-translate-y-1 transform transition-transform"
          >
            <FaFileAlt />
            <span>Fill Form</span>
          </Link>

          <Link
            to="#"
            className="flex items-center space-x-2 text-gray-700 hover:text-blue-500 duration-300 p-3 rounded-md bg-white shadow-lg hover:-translate-y-1 transform transition-transform"
          >
            <FaClipboardList />
            <span>Rounds</span>
          </Link>

          <Link
            to="#"
            className="flex items-center space-x-2 text-gray-700 hover:text-blue-500 duration-300 p-3 rounded-md bg-white shadow-lg hover:-translate-y-1 transform transition-transform"
          >
            <FaEye />
            <span>Observation</span>
          </Link>

          <Link
            to="#"
            className="flex items-center space-x-2 text-gray-700 hover:text-blue-500 duration-300 p-3 rounded-md bg-white shadow-lg hover:-translate-y-1 transform transition-transform"
          >
            <FaChartBar />
            <span>Reports</span>
          </Link>

          <Link
            to="#"
            className="flex items-center space-x-2 text-gray-700 hover:text-blue-500 duration-300 p-3 rounded-md bg-white shadow-lg hover:-translate-y-1 transform transition-transform"
          >
            <FaCalendarCheck />
            <span>Attendance</span>
          </Link>

          <Link
            to="#"
            className="flex items-center space-x-2 text-gray-700 hover:text-blue-500 duration-300 p-3 rounded-md bg-white shadow-lg hover:-translate-y-1 transform transition-transform"
          >
            <FaHistory />
            <span>History</span>
          </Link>

          {/* Divider */}
          <hr className="border-t border-gray-300 my-4" />

          <Link
            to="#"
            className="flex items-center space-x-2 text-gray-700 hover:text-blue-500 duration-300 p-3 rounded-md bg-white shadow-lg hover:-translate-y-1 transform transition-transform"
          >
            <FaCogs />
            <span>Settings</span>
          </Link>

          <Link
            to="#"
            className="flex items-center space-x-2 text-gray-700 hover:text-blue-500 duration-300 p-3 rounded-md bg-white shadow-lg hover:-translate-y-1 transform transition-transform"
          >
            <FaHeadset />
            <span>Support</span>
          </Link>

          <Link
            to="#"
            className="flex items-center space-x-2 text-gray-700 hover:text-blue-500 duration-300 p-3 rounded-md bg-white shadow-lg hover:-translate-y-1 transform transition-transform"
          >
            <FaSignOutAlt />
            <span>Exit</span>
          </Link>
        </nav>
      </aside>

      {/* Main Content */}
      <div className="flex-1 p-8 bg-gray-100 shadow-lg">
        {/* Route Switcher for different pages */}
        <Routes>
          <Route
            path="/"
            element={
              <div className="flex flex-col items-center justify-center h-full">
                <img
                  src={IntroImage}
                  alt="Intro"
                  className="h-[180px] w-[300px] mb-6 object-contain"
                />
                <p className="text-xl font-semibold text-gray-700 mb-2">
                  Looks like you don’t have any info.
                </p>
                <p className="text-gray-500 mb-4">
                  Fortunately, it’s very easy to create one.
                </p>
                <button
                  className="px-6 py-2 bg-blue-500 text-white rounded-full shadow-lg hover:bg-blue-600 transition-colors duration-300"
                >
                  Get Started
                </button>
              </div>
            }
          />
          <Route path="/fill-form" element={<FillForm />} />
          {/* Add more routes here as needed */}
        </Routes>
      </div>
    </div>
  );
};

export default Dashboard;
