import React from 'react';
import HomeCoal from '../assets/HomeCoal.jpg'; // Update with the correct path to your image

const ImageSection = () => {
  return (
    <div className="w-full max-w-screen-xl px-8 mb-12 mt-8"> {/* Added margin-top for spacing */}
      <img src={HomeCoal} alt="Coal Mine Safety" className="h-[448px] w-full object-cover rounded-[24px] shadow-lg" />
    </div>
  );
};

export default ImageSection;
