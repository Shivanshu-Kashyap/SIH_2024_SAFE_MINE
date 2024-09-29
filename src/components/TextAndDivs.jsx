import React from 'react';
import Dash from '../assets/Dash.jpg';
import Map from '../assets/map.jpg';

const TextAndDivs = () => {
  return (
    <>
      {/* Header Section */}
      <div className="w-full max-w-screen-xl px-8 mb-12">
        <h1 className="text-3xl font-semibold font-['Roboto'] tracking-[-0.02em]">
          <span className="text-black text-[32px] leading-[22px]">Welcome to </span>
          <span className="text-[#D4B030] text-[40px] leading-[22px]">Ministry of Coal</span>
        </h1>
        <p className="mt-4 text-lg font-['Roboto'] text-[20px] font-light leading-[22px] tracking-[-0.02em]">
          Welcome to the website of Ministry of Coal, Government of India.
        </p>
      </div>

      <div className="relative w-full max-w-screen-xl px-8 mb-12">
        {/* Upper Row */}
        <div className="relative flex gap-8 mb-12">
          {/* 1st div */}
          <div
            className="w-[60%] h-[367px] rounded-[37px] bg-gradient-to-b from-[#CC9F9F] to-[#DFDFDF] shadow-[0px_0px_46.77px_-1.91px_rgba(0,0,0,0.3)] relative"
          >
            <div className="p-6">
              <h2 className="text-left font-['Roboto'] text-[34.36px] font-bold leading-[40.26px]">
                Multilingual Log System
              </h2>
              <p className="mt-2 text-base font-['Roboto'] text-[17.18px] font-normal leading-[22.91px]">
                Multilingual log system filled by supervisor for every shift. Generating a PDF report based on the details filled by the supervisor.
              </p>
            </div>
            {/* Image for 1st div */}
            <img
              src={Dash}
              alt="Dashboard"
              className="absolute bottom-0 right-0 w-[350px] h-[220px] object-cover rounded-[16px]"
            />
          </div>

          {/* 2nd div */}
          <div className="w-[40%] h-[367px] rounded-[24px] bg-gradient-to-b from-[#C2BD8E] via-[#E2B269] to-[#EDEDED] shadow-[0px_0px_46.77px_-1.91px_rgba(0,0,0,0.3)]">
            <div className="p-6">
              <h2 className="text-left font-['Roboto'] text-[34.36px] font-bold leading-[40.26px]">
                Profile
              </h2>
              <p className="mt-2 text-base font-['Roboto'] text-[17.18px] font-normal leading-[22.91px]">
                Important contact details and profile of every worker and supervisor.
              </p>
            </div>
          </div>
        </div>

        {/* Lower Row with Gap */}
        <div className="relative flex gap-8">
          {/* 3rd div */}
          <div className="w-[40%] h-[411.35px] rounded-[24px] bg-gradient-to-b from-[#84FFFF] to-[#FFFFFF] shadow-[0px_2.86px_46.77px_8.59px_rgba(0,0,0,0.09)]">
            <div className="p-6">
              <h2 className="text-left font-['Roboto'] text-[34.36px] font-bold leading-[40.26px]">
                SMP
              </h2>
              <p className="mt-2 text-base font-['Roboto'] text-[17.18px] font-normal leading-[22.91px]">
                Safety Manual (SMP) which will display the safety rules through images, written guidelines, and a specialized chatbot that will suggest the appropriate safety measures whenever asked.
              </p>
            </div>
          </div>

          {/* 4th div */}
          <div className="w-[60%] h-[411.35px] rounded-[24px] bg-gradient-to-b from-[#DFDFDF] to-[#83A2D0] shadow-[0px_0px_46.77px_-1.91px_rgba(0,0,0,0.3)] relative">
            <div className="p-6">
              <h2 className="text-left font-['Roboto'] text-[34.36px] font-bold leading-[40.26px]">
                Worker Tracking Map
              </h2>
            </div>
            {/* Image for 4th div */}
            <img
              src={Map}
              alt="Map"
              className="absolute bottom-0 right-0 w-[550px] h-[300px] object-cover rounded-[16px]"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default TextAndDivs;
