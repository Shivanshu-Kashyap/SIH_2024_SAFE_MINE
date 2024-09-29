// src/components/Services.jsx
import React from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import { FiChevronDown, FiLogOut, FiSettings, FiAlertCircle, FiFileText } from 'react-icons/fi';
import DashboardImage from '../assets/Dashboard.jpg'; // Adjust the path based on your project structure

const Services = () => {
  const navigate = useNavigate(); // Initialize useNavigate

  const handleNavigate = () => {
    navigate('/dashboard'); // Change the path to your Dashboard route
  };

  return (
    <div className="w-full max-w-screen-xl px-8 mb-12 flex">
      {/* Left Side: Services Text and List of Services */}
      <div className="w-1/4 flex flex-col justify-start">
        {/* Services Text */}
        <div className="font-roboto text-left text-[#4F4F4F] text-[35.15px] font-bold mb-4">
          Services
        </div>

        {/* Shift Handover Log */}
        <div className="flex items-center justify-between p-3.5 mb-4 rounded-md bg-[#D4B030] shadow-lg cursor-pointer transition-transform duration-300 ease-in-out hover:-translate-y-1">
          <span className="flex items-center gap-2 text-left font-medium text-white">
            <FiLogOut />
            Shift Handover Log
          </span>
        </div>

        {/* All Services */}
        <div className="flex items-center justify-between p-3.5 mb-4 rounded-md bg-white shadow-lg cursor-pointer transition-transform duration-300 ease-in-out hover:-translate-y-1">
          <span className="flex items-center gap-2 text-left font-medium text-gray-700">
            <FiSettings />
            All Services
          </span>
        </div>

        {/* Safety Management Plan */}
        <div className="flex items-center justify-between p-3.5 mb-4 rounded-md bg-white shadow-lg cursor-pointer transition-transform duration-300 ease-in-out hover:-translate-y-1">
          <span className="flex items-center gap-2 text-left font-medium text-gray-700">
            <FiAlertCircle />
            Safety Management Plan
          </span>
          <span className="text-gray-700">
            <FiChevronDown />
          </span>
        </div>

        {/* Hazard Identification */}
        <div className="flex items-center justify-between p-3.5 mb-4 rounded-md bg-white shadow-lg cursor-pointer transition-transform duration-300 ease-in-out hover:-translate-y-1">
          <span className="flex items-center gap-2 text-left font-medium text-gray-700">
            <FiFileText />
            Hazard Identification
          </span>
          <span className="text-gray-700">
            <FiChevronDown />
          </span>
        </div>

        {/* Risk Assessment */}
        <div className="flex items-center justify-between p-3.5 rounded-md bg-white shadow-lg cursor-pointer transition-transform duration-300 ease-in-out hover:-translate-y-1">
          <span className="flex items-center gap-2 text-left font-medium text-gray-700">
            <FiAlertCircle />
            Risk Assessment
          </span>
          <span className="text-gray-700">
            <FiChevronDown />
          </span>
        </div>
      </div>

      {/* Right Side: Dashboard Image */}
      <div
        className="flex-1 flex items-start justify-center relative"
        style={{
          background: '#3674EC', // Set default background color
          marginLeft: '20px', // Adjust to align with the spacing
          marginTop: '4px', // Adjust to position the image just below the "Services" section
        }}
      >
        <img
          src={DashboardImage}
          alt="Dashboard"
          className="object-cover"
          style={{
            width: '927px',
            height: '640.83px',
          }}
        />

        {/* Submit Button */}
        <button
          onClick={handleNavigate} // Attach click handler to the button
          className="absolute bottom-5 left-5 w-48 h-12 text-white font-semibold rounded-md shadow-lg transition-colors duration-300"
          style={{
            backgroundColor: '#3B82F6', // This is the hex code for blue-500
            borderColor: '#3B82F6', // This is the hex code for blue-500
          }}
        >
          Get Started
        </button>
      </div>
    </div>
  );
};

export default Services;
