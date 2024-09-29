import React from 'react';
import { useNavigate } from 'react-router-dom';
import Google from '../assets/goggle.jpg';
import Facebook from '../assets/facebook.jpg';
import Apple from '../assets/apple.jpg';
import MinistryLogo from '../assets/Ministry.png'; // Import the Ministry logo

const SignupPage = () => {
  const navigate = useNavigate(); // For programmatic navigation

  return (
    <div className="font-roboto min-h-screen bg-gray-50 flex items-center justify-center fixed inset-0 bg-opacity-80 z-50 transition duration-500 ease-in-out transform">
      <div className="relative w-full max-w-md">
        {/* Background */}
        <div className="absolute inset-0 bg-gray-50 opacity-80 z-10"></div>

        {/* Main content area */}
        <div className="relative bg-white p-8 rounded-lg shadow-lg z-20 max-h-screen overflow-auto">
          {/* Close Button */}
          <button
            onClick={() => navigate('/')}
            className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 text-2xl"
          >
            &times;
          </button>

          {/* Ministry Logo */}
          <div className="flex justify-center mb-6">
            <img src={MinistryLogo} alt="Ministry of Coal" className="h-[80px] object-contain" />
          </div>

          <h2 className="text-4xl font-bold text-center text-gray-800 mb-6">
            Create <span className="text-yellow-600">Account</span>
          </h2>

          <form className="mt-8">
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
                First Name
              </label>
              <input
                id="name"
                type="text"
                placeholder="Enter your first name"
                className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500"
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
                Last Name
              </label>
              <input
                id="name"
                type="text"
                placeholder="Enter your last name"
                className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500"
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
                Mobile Number
              </label>
              <input
                id="name"
                type="text"
                placeholder="Enter your mobile number"
                className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500"
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
                Email Address
              </label>
              <input
                id="email"
                type="email"
                placeholder="Enter your email"
                className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500"
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
                Password
              </label>
              <input
                id="password"
                type="password"
                placeholder="Create a password"
                className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500"
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
                Confirm Password
              </label>
              <input
                id="password"
                type="password"
                placeholder="Confirm the password"
                className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500"
              />
            </div>
            <button
              type="submit"
              className="bg-yellow-600 text-white font-bold py-2 px-4 rounded-lg w-full hover:bg-yellow-700"
            >
              Sign Up
            </button>
          </form>

          <div className="text-center mt-6">
            <p className="text-gray-600">Or continue with:</p>
            <div className="flex flex-col space-y-4 mt-4">
              {/* Facebook Sign-In Button */}
              <button className="bg-blue-600 text-white font-bold py-2 px-4 rounded-lg flex items-center justify-center hover:bg-blue-700">
                <img src={Facebook} alt="Facebook" className="h-6 w-6 mr-2" />
                Continue with Facebook
              </button>

              {/* Google Sign-In Button */}
              <button className="bg-white text-gray-700 border border-gray-300 font-bold py-2 px-4 rounded-lg flex items-center justify-center hover:bg-gray-100">
                <img src={Google} alt="Google" className="h-6 w-6 mr-2" />
                Continue with Google
              </button>

              {/* Apple Sign-In Button */}
              <button className="bg-white text-gray-700 border border-gray-300 font-bold py-2 px-4 rounded-lg flex items-center justify-center hover:bg-gray-100">
                <img src={Apple} alt="Apple" className="h-6 w-6 mr-2" />
                Continue with Apple
              </button>
            </div>
          </div>

          <div className="text-center mt-6">
            <a href="/login" className="text-yellow-600 hover:underline">
              Already have an account? Sign in
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignupPage;
