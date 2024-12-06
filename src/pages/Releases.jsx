import React from 'react';

function Releases() {
  return (
    <div className="flex flex-col gap-8 lg:flex-row">
      
      {/* Main Content */}
      <div className="w-full lg:w-3/4">
        
        {/* Tracks Section */}
        <section className="mb-8">
          <h2 className="mb-4 text-2xl font-semibold">Tracks</h2>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3">
            {/* Sample Track Cards */}
            <div className="p-4 bg-white rounded shadow dark:bg-dark-body">
              <img src="/path/to/track-image.jpg" alt="Track" className="mb-2 rounded"/>
              <h3 className="text-lg font-medium">Track Title</h3>
              <p className="text-sm text-gray-500">Artist Name</p>
            </div>
          
          </div>
        </section>

        {/* Instrumentals Section */}
        <section className="mb-8">
          <h2 className="mb-4 text-2xl font-semibold">Instrumentals</h2>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3">
            {/* Sample Instrumental Cards */}
            <div className="p-4 bg-white rounded shadow dark:bg-dark-body">
              <img src="/path/to/instrumental-image.jpg" alt="Instrumental" className="mb-2 rounded"/>
              <h3 className="text-lg font-medium">Instrumental Title</h3>
              <p className="text-sm text-gray-500">Producer Name</p>
            </div>
            {/* Repeat for more instrumentals */}
          </div>
        </section>

        {/* Popular Genre Section */}
        <section className="mb-8">
          <h2 className="mb-4 text-2xl font-semibold">Popular Genres</h2>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3">
            {/* Sample Genre Cards */}
            <div className="p-4 bg-white rounded shadow dark:bg-dark-body">
              <img src="/path/to/genre-image.jpg" alt="Genre" className="mb-2 rounded"/>
              <h3 className="text-lg font-medium">Genre Name</h3>
              <p className="text-sm text-gray-500">Genre Description</p>
            </div>
            {/* Repeat for more genres */}
          </div>
        </section>

      </div>

      {/* Custom Music Player */}
      <div className="sticky w-full lg:w-1/4 top-20">
        <div className="p-4 bg-white rounded shadow dark:bg-dark-body">
          <h2 className="mb-4 text-xl font-semibold">Now Playing</h2>
          <div className="flex items-center mb-4">
            <img src="/path/to/current-track.jpg" alt="Now Playing" className="w-16 h-16 mr-4 rounded"/>
            <div>
              <h3 className="text-lg font-medium">Track Title</h3>
              <p className="text-sm text-gray-500">Artist Name</p>
            </div>
          </div>
          <div className="mb-4">
            <input type="range" className="w-full" />
          </div>
          <div className="flex items-center justify-between">
            <button className="bg-[#FF5722] text-white p-2 rounded">Prev</button>
            <button className="bg-[#FF5722] text-white p-2 rounded">Play/Pause</button>
            <button className="bg-[#FF5722] text-white p-2 rounded">Next</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Releases;
