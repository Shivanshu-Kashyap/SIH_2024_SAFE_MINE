// FillForm.jsx
import React from 'react';
// Assuming you store the image locally after uploading

const FillForm = () => {
  return (
    <div className="p-8 bg-gray-100 shadow-lg">
      <div className="flex space-x-4 mb-6">
        {['All', 'Safety', 'Complain', 'Feedback', 'Tracking'].map((tab, index) => (
          <button
            key={index}
            className={`px-4 py-2 rounded-full font-medium transition-colors duration-300 ${
              index === 0
                ? 'bg-blue-100 text-blue-500'
                : 'bg-gray-100 text-gray-500 hover:bg-blue-100 hover:text-blue-500'
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-3 gap-4">
        <div className="p-4 bg-white rounded-md shadow-md">
          <img src={UploadedImage} alt="Statutory Form" className="h-[100px] w-auto mb-4" />
          <p className="text-center">Statutory Form</p>
        </div>
        <div className="p-4 bg-white rounded-md shadow-md">
          <img src={UploadedImage} alt="Non-Statutory Form" className="h-[100px] w-auto mb-4" />
          <p className="text-center">Non-Statutory Form</p>
        </div>
        <div className="p-4 bg-white rounded-md shadow-md">
          <img src={UploadedImage} alt="Worker Details" className="h-[100px] w-auto mb-4" />
          <p className="text-center">Worker Details</p>
        </div>
      </div>
    </div>
  );
};

export default FillForm;
