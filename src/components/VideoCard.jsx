import React, { useState } from 'react';
import { FaPlay } from 'react-icons/fa';
import { IoClose } from 'react-icons/io5';

const VideoCard = ({ video }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleModalToggle = () => {
    setIsModalOpen(!isModalOpen);
  };

  return (
    <div>
      {/* Video Card */}
      <div
        className="relative w-full p-4 bg-white rounded-lg shadow-md cursor-pointer dark:bg-[#1B1B1A] dark:text-gray-300 hover:scale-105 transform transition duration-300 dark:border-gray-700 border dark:border dark:border-solid dark:hover:border-gray-500"
        onClick={handleModalToggle}
      >
        <img
          src={`https://img.youtube.com/vi/${video.id}/hqdefault.jpg`}
          alt={video.title}
          className="object-cover w-full rounded-lg h-[140px]"
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <FaPlay className="text-4xl text-white opacity-80" />
        </div>
        <h3 className="mt-4 text-lg font-semibold text-gray-800 dark:text-gray-100">{video.title}</h3>
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 backdrop-blur-md">
          <div
            className="relative w-full max-w-6xl p-8 bg-white rounded-lg dark:bg-[#1B1B1A] dark:text-gray-300"
            style={{ animation: 'fadeIn 0.3s ease-in-out' }}
          >
            {/* Close Button */}
            <button
              onClick={handleModalToggle}
              className="absolute text-gray-500 top-4 right-4 dark:text-gray-300 hover:text-red-500"
            >
              <IoClose size={24} />
            </button>
            {/* Video Player */}
            <iframe
              width="100%"
              height="400"
              src={`https://www.youtube.com/embed/${video.id}`}
              title={video.title}
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="rounded-lg"
            ></iframe>
          </div>
        </div>
      )}

      {/* Animation Keyframes */}
      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: scale(0.95);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }
      `}</style>
    </div>
  );
};

export default VideoCard;