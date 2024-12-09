import React from "react";

const ProfileCard = ({ profile, onClick }) => {
  return (
    <div
      className="flex items-center bg-white p-4 border dark:bg-[#1B1B1A] dark:border-gray-700 shadow-lg rounded-lg overflow-hidden hover:scale-[1.02] transform duration-300 font-inter cursor-pointer"
      onClick={() => onClick(profile)}
    >
      {/* Image Section */}
      <div className="flex-shrink-0 mr-4">
        <img
          src={profile.imageUrl}
          alt={profile.title}
          className="object-cover object-top transition duration-300 border-2 border-gray-200 rounded-full h-28 w-28 dark:border-gray-700 hover:opacity-90"
        />
      </div>

      {/* Text Content */}
      <div>
        <h3 className="text-xl font-semibold text-gray-800 transition duration-300 dark:text-slate-100 hover:text-blue-500">
          {profile.title}
        </h3>
        <p className="text-sm text-gray-500 dark:text-slate-300">{profile.artist}</p>
        <p className="mt-2 text-sm font-normal text-dark-body dark:text-slate-50">{profile.description}</p>
      </div>
    </div>
  );
};

export default ProfileCard;
