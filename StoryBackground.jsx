import React from 'react';

function StoryBackground() {
  return (
    <div className="relative h-screen overflow-hidden">
      <div className="absolute w-full h-full transform -skew-y-6 bg-gradient-to-b from-[#EF060F] to-[#b60cf2]"></div>
      <div className="absolute w-full h-full transform -skew-y-6 bg-white opacity-25"></div>
      <div className="absolute w-full h-full transform -skew-y-6 bg-opacity-25 bg-indigo-900"></div>
    </div>
  );
}

export default StoryBackground;
