// src/components/Sidebar.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import { FaHome, FaVideo, FaBlog, FaEnvelope, FaCalendarAlt } from 'react-icons/fa';

const Sidebar = () => {
  return (
    <div className="w-64 h-screen text-white bg-[#1B1B1A] border-r border-gray-800">
      <div className="px-8 py-12 text-xl font-medium font-montserrat-alt ">
        Multi-Prime
      </div>
      <nav className="mt-10 font-inter">
        <Link to="/dashboard" className="flex items-center px-8 py-2 mt-2 text-gray-200 hover:bg-gray-700 hover:text-white">
          <FaHome className="mr-2" />
          Home
        </Link>
        <Link to="/dashboard/events" className="flex items-center px-8 py-2 mt-2 text-gray-200 hover:bg-gray-700 hover:text-white">
          <FaCalendarAlt className="mr-2" />
          Events
        </Link>
        <Link to="/dashboard/videos" className="flex items-center px-8 py-2 mt-2 text-gray-200 hover:bg-gray-700 hover:text-white">
          <FaVideo className="mr-2" />
          Videos
        </Link>
        <Link to="/dashboard/blogs" className="flex items-center px-8 py-2 mt-2 text-gray-200 hover:bg-gray-700 hover:text-white">
          <FaBlog className="mr-2" />
          Blogs
        </Link>
        <Link to="/dashboard/messages" className="flex items-center px-8 py-2 mt-2 text-gray-200 hover:bg-gray-700 hover:text-white">
          <FaEnvelope className="mr-2" />
          Messages
        </Link>
      </nav>
    </div>
  );
};

export default Sidebar;