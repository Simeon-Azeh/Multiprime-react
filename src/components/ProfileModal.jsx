import React from "react";
import { FaSpotify, FaYoutube, FaShoppingCart, FaApple, FaSoundcloud, FaInstagram, FaTwitter } from "react-icons/fa";
import { IoCloseSharp } from "react-icons/io5";

const ProfileModal = ({ profile, isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 backdrop-blur-md">
      <div
        className="relative w-full max-w-lg p-6 bg-white rounded-lg shadow-lg dark:bg-dark-body"
        style={{ animation: "fadeIn 0.3s ease-in-out" }}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute text-gray-500 top-4 right-4 dark:text-gray-300 hover:text-red-500"
        >
          <IoCloseSharp size={24} />
        </button>

        {/* Profile Details */}
        <div className="flex flex-col items-center text-center">
          <img
            src={profile.imageUrl}
            alt={profile.title}
            className="object-cover object-top w-32 h-32 mb-4 rounded-full"
          />
          <h2 className="mb-2 text-2xl font-semibold text-gray-800 dark:text-gray-100">
            {profile.title}
          </h2>
          <p className="mb-4 text-lg font-medium text-gray-600 dark:text-gray-400">
            {profile.artist}
          </p>
          <p className="mb-6 text-sm text-gray-500 dark:text-gray-300">
            {profile.description2}
          </p>

          {/* Links and Relevant Info */}
          <div className="w-full mt-4">
            <h3 className="mb-3 text-lg font-medium text-gray-800 dark:text-gray-100">
              Profile Links
            </h3>
            <div className="flex flex-wrap items-center justify-center gap-4">
              <a
                href={profile.spotifyUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center w-12 h-12 text-green-500 transition-all transform bg-green-100 rounded-full hover:scale-110"
                title="Spotify"
              >
                <FaSpotify size={24} />
              </a>
              <a
                href={profile.youtubeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center w-12 h-12 text-red-500 transition-all transform bg-red-100 rounded-full hover:scale-110"
                title="YouTube"
              >
                <FaYoutube size={24} />
              </a>
              <a
                href={profile.buyUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center w-12 h-12 text-blue-500 transition-all transform bg-blue-100 rounded-full hover:scale-110"
                title="Buy Now"
              >
                <FaShoppingCart size={24} />
              </a>
              <a
                href={profile.appleMusicUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center w-12 h-12 text-black transition-all transform bg-gray-200 rounded-full hover:scale-110"
                title="Apple Music"
              >
                <FaApple size={24} />
              </a>
              <a
                href={profile.soundcloudUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center w-12 h-12 text-orange-500 transition-all transform bg-orange-100 rounded-full hover:scale-110"
                title="SoundCloud"
              >
                <FaSoundcloud size={24} />
              </a>
              <a
                href={profile.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center w-12 h-12 text-pink-500 transition-all transform bg-pink-100 rounded-full hover:scale-110"
                title="Instagram"
              >
                <FaInstagram size={24} />
              </a>
              <a
                href={profile.twitterUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center w-12 h-12 text-blue-400 transition-all transform bg-blue-100 rounded-full hover:scale-110"
                title="Twitter"
              >
                <FaTwitter size={24} />
              </a>
            </div>

          
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

export default ProfileModal;
