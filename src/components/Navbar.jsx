import React, { useEffect, useState, Fragment } from 'react';
import { FaUserCircle, FaSignOutAlt } from 'react-icons/fa';
import { getAuth, signOut } from 'firebase/auth';
import { doc, getDoc, setDoc } from 'firebase/firestore';
import { db } from '../Firebase/firebase';
import { useNavigate } from 'react-router-dom';
import { Dialog, Transition } from '@headlessui/react';
import { Spin } from 'antd'; // Import the Spin component from antd

const Navbar = () => {
  const [userName, setUserName] = useState('');
  const [userAvatar, setUserAvatar] = useState('');
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [isFirstSignIn, setIsFirstSignIn] = useState(false);
  const [nameInput, setNameInput] = useState('');
  const [avatarInput, setAvatarInput] = useState('');
  const [dobInput, setDobInput] = useState(''); // State for date of birth
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false); // State for saving
  const auth = getAuth();
  const user = auth.currentUser;
  const navigate = useNavigate();

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        if (user) {
          const userDoc = doc(db, 'users', user.uid);
          const userSnapshot = await getDoc(userDoc);

          if (userSnapshot.exists()) {
            const userData = userSnapshot.data();
            setUserName(userData.name || user.email); // Use email as fallback
            setUserAvatar(userData.avatar);
            setNameInput(userData.name || ''); // Set name input if available
            setAvatarInput(userData.avatar || ''); // Set avatar input if available
            setDobInput(userData.dob || ''); // Set dob input if available
          } else {
            setIsFirstSignIn(true); // Show modal for first sign-in
          }
        }
      } catch (error) {
        console.error('Error fetching user data:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchUserData();
  }, [user]);

  const handleLogout = async () => {
    try {
      await signOut(auth);
      navigate('/admin/login');
    } catch (error) {
      console.error('Error during logout:', error);
    }
  };

  const toggleDropdown = () => {
    setDropdownOpen((prev) => !prev);
  };

  const handleSaveDetails = async () => {
    if (user) {
      setSaving(true); // Start saving
      try {
        const userDoc = doc(db, 'users', user.uid);
        await setDoc(userDoc, {
          name: nameInput,
          avatar: avatarInput,
          dob: dobInput, // Save date of birth
          email: user.email,
        });
        setUserName(nameInput);
        setUserAvatar(avatarInput);
        setIsFirstSignIn(false);
      } catch (error) {
        console.error('Error saving user details:', error);
      } finally {
        setSaving(false); // Stop saving
      }
    }
  };

  const handleOutsideClick = (e) => {
    if (!e.target.closest('.dropdown')) setDropdownOpen(false);
  };

  useEffect(() => {
    document.addEventListener('click', handleOutsideClick);
    return () => document.removeEventListener('click', handleOutsideClick);
  }, []);

  if (loading) {
    return <div className="text-center">Loading...</div>;
  }

  return (
    <div className="flex items-center justify-between p-4 text-white bg-[#1B1B1A] font-inter border-b border-gray-800">
      <div className="text-xl font-medium">Hello,</div>
      <div className="relative flex items-center">
        {userAvatar ? (
          <img
            src={userAvatar}
            alt="User Avatar"
            className="w-8 h-8 rounded-full cursor-pointer"
            onClick={toggleDropdown}
          />
        ) : (
          <FaUserCircle className="w-8 h-8 cursor-pointer" onClick={toggleDropdown} />
        )}
        <span className="ml-2 text-sm font-medium cursor-pointer dropdown" onClick={toggleDropdown}>
          {userName || user.email}
        </span>
        {dropdownOpen && (
          <div className="absolute right-0 w-48 mt-2 bg-gray-800 rounded-md shadow-lg dropdown">
            <button
              onClick={handleLogout}
              className="flex items-center w-full px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700"
            >
              <FaSignOutAlt className="mr-2" />
              Log out
            </button>
          </div>
        )}
      </div>

      <Transition appear show={isFirstSignIn} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={() => setIsFirstSignIn(false)}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-25" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex items-center justify-center min-h-full p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-full max-w-md p-6 overflow-hidden text-left align-middle transition-all transform bg-[#1B1B1A] shadow-xl rounded-2xl font-inter border-gray-800 text-white">
                  <Dialog.Title className="text-lg font-normal leading-6 text-white">
                    Welcome! Please provide your details
                  </Dialog.Title>
                  <div className="mt-2">
                    <form className="space-y-4">
                      <div>
                        <label htmlFor="name" className="block text-sm text-white dark:text-gray-300">
                          Name
                        </label>
                        <input
                          type="text"
                          id="name"
                          value={nameInput}
                          onChange={(e) => setNameInput(e.target.value)}
                          className="block w-full px-3 py-2 mt-1 text-base text-white bg-transparent border border-gray-800 rounded-md shadow-sm dark:bg-gray-700 dark:text-gray-100 focus:ring-gray-500 focus:border-gray-500 sm:text-sm"
                        />
                      </div>
                      <div>
                        <label htmlFor="avatar" className="block text-sm text-white dark:text-gray-300">
                          Avatar URL
                        </label>
                        <input
                          type="text"
                          id="avatar"
                          value={avatarInput}
                          onChange={(e) => setAvatarInput(e.target.value)}
                          className="block w-full px-3 py-2 mt-1 text-base text-white bg-transparent border border-gray-800 rounded-md shadow-sm dark:bg-gray-700 dark:text-gray-100 focus:ring-gray-500 focus:border-gray-500 sm:text-sm"
                        />
                      </div>
                      <div>
                        <label htmlFor="dob" className="block text-sm text-white dark:text-gray-300">
                          Date of Birth
                        </label>
                        <input
                          type="date"
                          id="dob"
                          value={dobInput}
                          onChange={(e) => setDobInput(e.target.value)}
                          className="block w-full px-3 py-2 mt-1 text-base text-white bg-transparent border border-gray-800 rounded-md shadow-sm dark:bg-gray-700 dark:text-gray-100 focus:ring-gray-500 focus:border-gray-500 sm:text-sm"
                        />
                      </div>
                      <div className="mt-4">
                        <button
                          type="button"
                          onClick={handleSaveDetails}
                          className="px-4 py-2 text-sm font-medium text-white bg-transparent border border-gray-800 rounded-md"
                        >
                          {saving ? <Spin /> : 'Save'}
                        </button>
                      </div>
                    </form>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </div>
  );
};

export default Navbar;