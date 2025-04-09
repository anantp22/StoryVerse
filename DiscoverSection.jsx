// src/components/DiscoverSection.js

import React from 'react';

function DiscoverSection() {
  return (
    <section className="py-16 px-4 bg-opacity-60 backdrop-blur-md bg-gradient-to-r from-[#EF060F]  to-[#b60cf2]">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl lg:text-4xl font-semibold text-[#081A42] mb-8">
          Discover the Power of Your Story
        </h2>
        <p className="text-lg font- mb-12 text-white">
          Ignite your story's discovery with the dynamic synergy of community and technology on Storyverse—where your words become a worldwide sensation!
        </p>
        <div className="flex justify-center items-center space-x-8">
  {/* Subsection 1: Create */}
  <div className="group relative">
    <div className="flex flex-col items-center p-4 border border-white hover:shadow-lg transform hover:scale-105 transition-transform duration-300">
      <h3 className="text-2xl font-semibold text-white mb-2 hover:text-[#081A42] group-hover:text-[#081A42] transition-colors">Create</h3>
      <p className="text-white hover:text-[#081A42] transition-colors">Craft your stories with creativity and passion.</p>
    </div>
  </div>

  {/* Subsection 2: Build */}
  <div className="group relative">
    <div className="flex flex-col items-center p-4 border border-white hover:shadow-lg transform hover:scale-105 transition-transform duration-300">
      <h3 className="text-2xl font-semibold text-white mb-2 hover:text-[#081A42] group-hover:text-[#081A42] transition-colors">Build</h3>
      <p className="text-white hover:text-[#081A42] transition-colors">Build a loyal readership and engage your audience.</p>
    </div>
  </div>

  {/* Subsection 3: Amplify */}
  <div className="group relative">
    <div className="flex flex-col items-center p-4 border border-white hover:shadow-lg transform hover:scale-105 transition-transform duration-300">
      <h3 className="text-2xl font-semibold text-white mb-2 hover:text-[#081A42] group-hover:text-[#081A42] transition-colors">Amplify</h3>
      <p className="text-white hover:text-[#081A42] transition-colors">Amplify your reach and share your stories with the world.</p>
    </div>
  </div>
</div>

      </div>
    </section>
  );
}

export default DiscoverSection;
