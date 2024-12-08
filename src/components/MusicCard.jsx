import React from 'react';

const MusicCard = ({ track, onClick }) => {
  return (
    <div
      className="bg-white p-4 border dark:bg-[#1B1B1A] dark:border dark:border-gray-700 dark:border-solid shadow-lg rounded-lg overflow-hidden hover:translate-y-[-5px] duration-300 font-inter cursor-pointer"
      onClick={() => onClick(track)}
    >
      <img
        src={track.imageUrl}
        alt={track.title}
        className="object-cover w-full h-48 mb-4 transition duration-300 rounded-lg hover:opacity-90"
      />
      <h3 className="text-lg font-medium text-gray-800 transition duration-300 dark:text hover:text-blue-500 dark:text-slate-100">
        {track.title}
      </h3>
      <p className="font-normal text-dark-body dark:text-slate-300 font-sm ">{track.artist}</p>
      <p className="text-slate-50">${track.price}</p>
    </div>
  );
};

export default MusicCard;
