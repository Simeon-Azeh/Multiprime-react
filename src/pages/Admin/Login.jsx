// src/pages/Login.jsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../Firebase/firebase';
import { Spin } from 'antd'; // Import the Spin component from antd

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false); // State for loading
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    setError('');
    setLoading(true); // Start loading

    if (!email || !password) {
      setError('Please fill in all fields.');
      setLoading(false); // Stop loading
      return;
    }

    try {
      await signInWithEmailAndPassword(auth, email, password);
      navigate('/dashboard');
    } catch (err) {
      setLoading(false); // Stop loading
      switch (err.code) {
        case 'auth/invalid-email':
          setError('Invalid email address.');
          break;
        case 'auth/user-disabled':
          setError('User account is disabled.');
          break;
        case 'auth/user-not-found':
          setError('No user found with this email.');
          break;
        case 'auth/wrong-password':
          setError('Incorrect password.');
          break;
        case 'auth/too-many-requests':
          setError('Too many requests. Try again later.');
          break;
        case 'auth/network-request-failed':
          setError('A network error occurred. Please try again.');
          break;
        case 'auth/invalid-credentials':
          setError('Invalid credentials. Please try again.');
          break;
        default:
          setError('An error occurred. Please try again.');
      }
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-dark-body font-inter">
      <div className="flex flex-wrap w-full max-w-4xl bg-[#1B1B1A] rounded-lg overflow-hidden border border-gray-800">
        {/* Left Section: Image */}
        <div className="hidden w-full md:w-1/2 md:block">
          <img
            src="/images/login.svg"
            alt="Login Illustration"
            className="object-cover w-full h-full"
          />
        </div>

        {/* Right Section: Login Form */}
        <div className="w-full p-8 md:w-1/2">
          <div className="flex flex-col">
            <h2 className="text-xl font-medium text-white">Hello admin,</h2>
            <p className="text-gray-400">Please log into your account</p>
          </div>
          {error && <p className="mt-4 text-sm text-red-500">{error}</p>}
          <form onSubmit={handleLogin} className="mt-16 space-y-6">
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-300"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="block w-full px-3 py-2 mt-1 text-base text-gray-100 bg-transparent border border-gray-600 rounded-md shadow-sm focus:outline-none focus:ring-[#FF5722] focus:border-[#FF5722] sm:text-sm"
              />
            </div>
            <div>
              <label
                htmlFor="password"
                className="block text-sm font-medium text-gray-300"
              >
                Password
              </label>
              <input
                type="password"
                id="password"
                name="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="block w-full px-3 py-2 mt-1 text-base text-gray-100 bg-transparent border border-gray-600 rounded-md shadow-sm focus:outline-none focus:ring-[#FF5722] focus:border-[#FF5722] sm:text-sm"
              />
            </div>
            <div>
              <button
                type="submit"
                className="w-full px-4 py-2 text-sm font-medium text-white bg-transparent border border-gray-800 rounded-md shadow-sm hover:scale-105 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-600"
              >
                {loading ? <Spin /> : 'Login'}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;