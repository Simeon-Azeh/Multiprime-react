// src/components/VideoGallery.jsx
import React from 'react';
import VideoCard from './VideoCard';

const videos = [
  {
    id: 'xTlNMmZKwpA', // Replace with a YouTube video ID
    title: 'Dance Performance 1',
  },
  {
    id: 'LXb3EKWsInQ',
    title: 'Dance Performance 2',
  },
  {
    id: 'E7wJTI-1dvQ',
    title: 'Dance Performance 3',
  },
];

const VideoGallery = () => {
  return (
    <div className="grid w-4/5 gap-4 mx-auto md:grid-cols-2 lg:grid-cols-3">
      {videos.map((video) => (
        <VideoCard key={video.id} video={video} />
      ))}
    </div>
  );
};

export default VideoGallery;
