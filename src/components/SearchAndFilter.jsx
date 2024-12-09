import React from 'react';
import { FiSearch } from 'react-icons/fi';
import { BiFilterAlt } from 'react-icons/bi';

const SearchAndFilter = ({ searchTerm, setSearchTerm, filter, setFilter }) => {
  return (
    <div className="flex flex-col gap-4 mb-6 md:flex-row md:items-center">
      {/* Search Input */}
      <div className="relative flex items-center w-full md:w-auto">
        <FiSearch className="absolute text-gray-500 left-3 dark:text-gray-400" />
        <input
          type="text"
          placeholder="Search..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full p-2 pl-10 text-gray-900 bg-white border rounded-lg dark:bg-dark-body dark:text-gray-100 dark:border-gray-700 focus:outline-none focus:ring-1 focus:border-gray-900"
        />
      </div>

      {/* Filter Dropdown */}
      <div className="relative flex items-center w-full md:w-auto">
        <BiFilterAlt className="absolute text-gray-500 left-3 dark:text-gray-400" />
        <select
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
          className="w-full p-2 pl-10 text-gray-900 bg-white border rounded-lg dark:bg-dark-body dark:text-gray-100 focus:outline-none focus:ring-1 dark:border-gray-700 focus:border-gray-900"
        >
          <option value="">All</option>
          <option value="music">Music</option>
          <option value="beats">Beats</option>
          <option value="instrumentals">Instrumentals</option>
          <option value="genres">Genres</option>
          <option value="artists">Artists</option>
        </select>
      </div>
    </div>
  );
};

export default SearchAndFilter;
