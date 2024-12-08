import React from 'react';
import { FaSpotify, FaYoutube, FaShoppingCart } from 'react-icons/fa';
import { IoCloseSharp } from 'react-icons/io5';

const MusicPlayerModal = ({ track, isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 backdrop-blur-md">
      <div
        className="relative w-full max-w-md p-6 bg-white rounded-lg shadow-lg dark:bg-dark-body"
        style={{ animation: 'fadeIn 0.3s ease-in-out' }}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute text-gray-500 top-4 right-4 dark:text-gray-300 hover:text-red-500"
        >
          <IoCloseSharp size={24} />
        </button>

        {/* Track Details */}
        <div className="flex flex-col items-center text-center">
          <img
            src={track.imageUrl}
            alt={track.title}
            className="object-cover w-32 h-32 mb-4 rounded-full"
          />
          <h2 className="mb-2 text-xl font-semibold text-gray-800 dark:text-gray-100">
            {track.title}
          </h2>
          <p className="mb-4 text-gray-600 dark:text-gray-400">{track.artist}</p>

          {/* Audio Player */}
          <audio controls src={track.previewUrl} className="w-full mb-4 rounded-lg">
            Your browser does not support the audio element.
          </audio>

          {/* Action Buttons */}
          <div className="flex gap-4">
            <a
              href={track.spotifyUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center w-12 h-12 text-green-500 transition-all transform bg-green-100 rounded-full hover:scale-110"
            >
              <FaSpotify size={24} />
            </a>
            <a
              href={track.youtubeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center w-12 h-12 text-red-500 transition-all transform bg-red-100 rounded-full hover:scale-110"
            >
              <FaYoutube size={24} />
            </a>
            <a
              href={track.buyUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center w-12 h-12 text-blue-500 transition-all transform bg-blue-100 rounded-full hover:scale-110"
            >
              <FaShoppingCart size={24} />
            </a>
          </div>
        </div>
      </div>

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

export default MusicPlayerModal;
