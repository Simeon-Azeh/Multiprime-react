// src/pages/Dashboard.jsx
import React from 'react';
import Sidebar from '../../components/Sidebar';
import Navbar from '../../components/Navbar';
import { Outlet } from 'react-router-dom';

const Dashboard = () => {
  return (
    <div className="flex">
      <Sidebar />
      <div className="flex flex-col flex-1">
        <Navbar />
        <main className="flex-1 p-4 bg-dark-body">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default Dashboard;