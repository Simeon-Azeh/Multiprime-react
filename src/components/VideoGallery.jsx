// src/components/VideoGallery.jsx
import React from 'react';
import VideoCard from './VideoCard';

const videos = [
  {
    id: 'MzuPKIa7hFg', // Replace with a YouTube video ID
    title: 'Panther Rany - Dirty Vibes',
  },
  {
    id: '5sZh_lRann0',
    title: 'Nasc V - Love Pill',
  },
  {
    id: 'PHWLMoCeVCE',
    title: 'Mel Vimin - You are not alone',
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
