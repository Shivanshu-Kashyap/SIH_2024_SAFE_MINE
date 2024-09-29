// src/components/InteractiveChatbot.jsx
import React from 'react';
import ChatImage from '../assets/chat.png'; // Import your image

const InteractiveChatbot = () => {
  return (
    <div className="w-full max-w-screen-xl  px-8 mb-12">
      {/* Heading */}
      <div className="font-roboto text-left text-[#4F4F4F] text-[35.15px] font-bold leading-[42.18px] mb-4">
Interactive Chatbot
</div>
      
      {/* Image */}
      <img 
        src={ChatImage} 
        alt="Interactive Chatbot" 
        className="w-full h-[448px] object-cover rounded-[24px] shadow-lg"
      />
    </div>
  );
};

export default InteractiveChatbot;



