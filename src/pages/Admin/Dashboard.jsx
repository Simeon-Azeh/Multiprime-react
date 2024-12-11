// src/pages/Dashboard.jsx
import React, { useState, useEffect } from 'react';
import Sidebar from '../../components/Sidebar';
import Navbar from '../../components/Navbar';
import { Outlet } from 'react-router-dom';
import { Dialog, Transition } from '@headlessui/react';
import { getFirestore, collection, addDoc, doc, getDoc } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';
import { app } from '../../Firebase/firebase'; // Ensure you have the Firebase app initialized
import Table from '../../components/Table';

const db = getFirestore(app);
const auth = getAuth(app);

const Card = ({ title, description, onClick }) => (
  <a
    href="#"
    className="block max-w-xs p-6 mx-auto space-y-3 bg-[#1B1B1A] border border-gray-800 rounded-lg shadow-lg group dark:bg-gray-800 ring-1 ring-slate-900/5 hover:scale-105 hover:ring-gray-800 transition-all font-inter"
    onClick={onClick}
  >
    <div className="flex items-center space-x-3">
      <svg className="w-6 h-6 stroke-gray-500 group-hover:stroke-white" fill="none" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4v16m8-8H4" />
      </svg>
      <h3 className="text-sm font-semibold text-gray-100 group-hover:text-white">{title}</h3>
    </div>
    <p className="text-sm text-slate-500 dark:text-gray-400 group-hover:text-white">{description}</p>
  </a>
);

const Dashboard = () => {
  const [isEventModalOpen, setIsEventModalOpen] = useState(false);
  const [isBlogModalOpen, setIsBlogModalOpen] = useState(false);
  const [eventName, setEventName] = useState('');
  const [eventTime, setEventTime] = useState('');
  const [eventType, setEventType] = useState('');
  const [eventDescription, setEventDescription] = useState('');
  const [eventDate, setEventDate] = useState('');
  const [blogTitle, setBlogTitle] = useState('');
  const [blogTime, setBlogTime] = useState('');
  const [blogType, setBlogType] = useState('');
  const [blogDescription, setBlogDescription] = useState('');
  const [blogDate, setBlogDate] = useState('');
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState('');
  const [userName, setUserName] = useState('');
  const [userAvatar, setUserAvatar] = useState('');
  const [subDescription, setSubDescription] = useState('');
    const [links, setLinks] = useState(['']);
    const [listItems, setListItems] = useState(['']);
    

    const handleAddLink = () => {
        setLinks([...links, '']);
      };
      
      const handleLinkChange = (index, value) => {
        const newLinks = [...links];
        newLinks[index] = value;
        setLinks(newLinks);
      };
      
      const handleAddListItem = () => {
        setListItems([...listItems, '']);
      };
      
      const handleListItemChange = (index, value) => {
        const newListItems = [...listItems];
        newListItems[index] = value;
        setListItems(newListItems);
      };

  useEffect(() => {
    const fetchUserData = async () => {
      const user = auth.currentUser;
      if (user) {
        const userDoc = await getDoc(doc(db, 'users', user.uid));
        if (userDoc.exists()) {
          const userData = userDoc.data();
          setUserName(userData.name);
          setUserAvatar(userData.avatar);
        } else {
          console.error('No such user document!');
        }
      }
    };

    fetchUserData();
  }, []);

  const handleEventSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    setSuccess(false);

    try {
      await addDoc(collection(db, 'events'), {
        name: eventName,
        time: eventTime,
        type: eventType,
        description: eventDescription,
        date: eventDate,
        createdAt: new Date(),
      });
      setSuccess(true);
      setEventName('');
      setEventTime('');
      setEventType('');
      setEventDescription('');
      setEventDate('');
      setIsEventModalOpen(false);
    } catch (err) {
      setError('Failed to create event. Please try again.');
      console.error('Error adding document: ', err);
    } finally {
      setLoading(false);
    }
  };

  const handleBlogSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    setSuccess(false);

    const timePosted = new Date().toLocaleTimeString();
    const datePosted = new Date().toLocaleDateString();

    try {
      await addDoc(collection(db, 'blogs'), {
        title: blogTitle,
      time: blogTime,
      type: blogType,
      description: blogDescription,
      subDescription: subDescription,
      links: links,
      listItems: listItems,
      date: blogDate,
      timePosted: timePosted,
      datePosted: datePosted,
      userName: userName,
      userAvatar: userAvatar,
      createdAt: new Date(),
      });
      setSuccess(true);
    setBlogTitle('');
    setBlogTime('');
    setBlogType('');
    setBlogDescription('');
    setSubDescription('');
    setLinks(['']);
    setListItems(['']);
    setBlogDate('');
    setIsBlogModalOpen(false);
  } catch (err) {
    setError('Failed to create blog. Please try again.');
    console.error('Error adding document: ', err);
  } finally {
    setLoading(false);
  }
};

  return (
    <div className="flex">
      <div className='overflow-hidden'>
        <Sidebar />
      </div>
      <div className="flex flex-col flex-1 ml-64">
        <Navbar />
        <main className="flex-1 p-4 overflow-x-auto bg-dark-body">
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
            <Card
              title="Create Event"
              description="Create a new event and manage it."
              onClick={() => setIsEventModalOpen(true)}
            />
            <Card
              title="Create Blog"
              description="Create a new blog post and share your thoughts."
              onClick={() => setIsBlogModalOpen(true)}
            />
            {/* Add more cards as needed */}
          </div>
          <div>
            <Table />
          </div>
          <Outlet />
        </main>
      </div>

      {/* Event Modal */}
      <Transition appear show={isEventModalOpen} as={React.Fragment}>
        <Dialog as="div" className="relative z-10" onClose={() => setIsEventModalOpen(false)}>
          <Transition.Child
            as={React.Fragment}
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
                as={React.Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-full max-w-md p-6 overflow-hidden text-left align-middle transition-all transform border border-gray-800 shadow-xl rounded-2xl bg-dark-body font-inter">
                  <Dialog.Title as="h3" className="text-lg font-medium leading-6 text-gray-100">
                    Create Event
                  </Dialog.Title>
                  <form onSubmit={handleEventSubmit} className="mt-4">
                    <div className="mt-2">
                      <label htmlFor="eventName" className="block text-sm font-medium text-white">
                        Event Name
                      </label>
                      <input
                        id="eventName"
                        name="eventName"
                        type="text"
                        required
                        value={eventName}
                        onChange={(e) => setEventName(e.target.value)}
                        className="block w-full h-10 px-4 mt-1 bg-transparent border border-gray-800 rounded-md shadow-sm sm:text-sm"
                      />
                    </div>
                    <div className="mt-2">
                      <label htmlFor="eventTime" className="block text-sm font-medium text-white">
                        Event Time
                      </label>
                      <input
                        id="eventTime"
                        name="eventTime"
                        type="time"
                        required
                        value={eventTime}
                        onChange={(e) => setEventTime(e.target.value)}
                        className="block w-full h-10 px-4 mt-1 bg-transparent border border-gray-800 rounded-md shadow-sm sm:text-sm"
                      />
                    </div>
                    <div className="mt-2">
                      <label htmlFor="eventType" className="block text-sm font-medium text-white">
                        Event Type
                      </label>
                      <input
                        id="eventType"
                        name="eventType"
                        type="text"
                        required
                        value={eventType}
                        onChange={(e) => setEventType(e.target.value)}
                        className="block w-full h-10 px-4 mt-1 bg-transparent border border-gray-800 rounded-md shadow-sm sm:text-sm"
                      />
                    </div>
                    <div className="mt-2">
                      <label htmlFor="eventDescription" className="block text-sm font-medium text-white">
                        Event Description
                      </label>
                      <textarea
                        id="eventDescription"
                        name="eventDescription"
                        required
                        value={eventDescription}
                        onChange={(e) => setEventDescription(e.target.value)}
                        className="block w-full h-10 px-4 mt-1 bg-transparent border border-gray-800 rounded-md shadow-sm sm:text-sm"
                      />
                    </div>
                    <div className="mt-2">
                      <label htmlFor="eventDate" className="block text-sm font-medium text-white">
                        Event Date
                      </label>
                      <input
                        id="eventDate"
                        name="eventDate"
                        type="date"
                        required
                        value={eventDate}
                        onChange={(e) => setEventDate(e.target.value)}
                        className="block w-full h-10 px-4 mt-1 bg-transparent border border-gray-800 rounded-md shadow-sm sm:text-sm"
                      />
                    </div>
                    <div className="mt-4">
                      <button
                        type="submit"
                        className="inline-flex justify-center px-4 py-2 text-sm font-medium text-white border border-gray-800 rounded-md"
                        disabled={loading}
                      >
                        {loading ? 'Creating...' : 'Create Event'}
                      </button>
                    </div>
                    {success && <p className="mt-4 text-sm text-green-600">Event created successfully!</p>}
                    {error && <p className="mt-4 text-sm text-red-600">{error}</p>}
                  </form>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>

      {/* Blog Modal */}
      <Transition appear show={isBlogModalOpen} as={React.Fragment}>
        <Dialog as="div" className="relative z-50" onClose={() => setIsBlogModalOpen(false)}>
          <Transition.Child
            as={React.Fragment}
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
                as={React.Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="z-50 w-full max-w-md p-6 overflow-hidden text-left align-middle transition-all transform border border-gray-800 shadow-xl bg-dark-body rounded-2xl font-inter">
                  <Dialog.Title as="h3" className="z-50 text-lg font-medium leading-6 text-gray-100">
                    Create Blog
                  </Dialog.Title>
                  <form onSubmit={handleBlogSubmit} className="mt-4">
                    <div className="mt-2">
                      <label htmlFor="blogTitle" className="block text-sm text-white">
                        Blog Title
                      </label>
                      <input
                        id="blogTitle"
                        name="blogTitle"
                        type="text"
                        required
                        value={blogTitle}
                        onChange={(e) => setBlogTitle(e.target.value)}
                        className="block w-full h-10 px-4 mt-1 bg-transparent border border-gray-800 rounded-md shadow-sm sm:text-sm"
                      />
                    </div>
                    <div className="mt-2">
                      <label htmlFor="blogTime" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                        Blog Time
                      </label>
                      <input
                        id="blogTime"
                        name="blogTime"
                        type="time"
                        required
                        value={blogTime}
                        onChange={(e) => setBlogTime(e.target.value)}
                        className="block w-full h-10 px-4 mt-1 bg-transparent border border-gray-800 rounded-md shadow-sm sm:text-sm"
                      />
                    </div>
                    <div className="mt-2">
                      <label htmlFor="blogType" className="block text-sm font-medium text-white">
                        Blog Type
                      </label>
                      <input
                        id="blogType"
                        name="blogType"
                        type="text"
                        required
                        value={blogType}
                        onChange={(e) => setBlogType(e.target.value)}
                        className="block w-full h-10 px-4 mt-1 bg-transparent border border-gray-800 rounded-md shadow-sm sm:text-sm"
                      />
                    </div>
                    <div className="mt-2">
                      <label htmlFor="blogDescription" className="block text-sm font-medium text-white">
                        Blog Description
                      </label>
                      <textarea
                        id="blogDescription"
                        name="blogDescription"
                        required
                        value={blogDescription}
                        onChange={(e) => setBlogDescription(e.target.value)}
                        className="block w-full h-40 px-4 mt-1 bg-transparent border border-gray-800 rounded-md shadow-sm sm:text-sm"
                      />
                    </div>
                    <div className="mt-2">
    <label htmlFor="subDescription" className="block text-sm font-medium text-white">
      Sub Description
    </label>
    <textarea
      id="subDescription"
      name="subDescription"
      value={subDescription}
      onChange={(e) => setSubDescription(e.target.value)}
      className="block w-full h-20 px-4 mt-1 bg-transparent border border-gray-800 rounded-md shadow-sm sm:text-sm"
    />
  </div>
  <div className="mt-2">
    <label className="block text-sm font-medium text-white">Links</label>
    {links.map((link, index) => (
      <input
        key={index}
        type="url"
        value={link}
        onChange={(e) => handleLinkChange(index, e.target.value)}
        className="block w-full h-10 px-4 mt-1 bg-transparent border border-gray-800 rounded-md shadow-sm sm:text-sm"
      />
    ))}
    <button type="button" onClick={handleAddLink} className="mt-2 text-sm text-blue-500">
      Add another link
    </button>
  </div>
  <div className="mt-2">
    <label className="block text-sm font-medium text-white">List Items</label>
    {listItems.map((item, index) => (
      <input
        key={index}
        type="text"
        value={item}
        onChange={(e) => handleListItemChange(index, e.target.value)}
        className="block w-full h-10 px-4 mt-1 bg-transparent border border-gray-800 rounded-md shadow-sm sm:text-sm"
      />
    ))}
    <button type="button" onClick={handleAddListItem} className="mt-2 text-sm text-blue-500">
      Add another list item
    </button>
  </div>
                    <div className="mt-2">
                      <label htmlFor="blogDate" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                        Blog Date
                      </label>
                      <input
                        id="blogDate"
                        name="blogDate"
                        type="date"
                        required
                        value={blogDate}
                        onChange={(e) => setBlogDate(e.target.value)}
                        className="block w-full h-10 px-4 mt-1 bg-transparent border border-gray-800 rounded-md shadow-sm sm:text-sm"
                      />
                    </div>
                    <input type="hidden" name="userName" value={userName} />
                    <input type="hidden" name="userAvatar" value={userAvatar} />
                    <input type="hidden" name="timePosted" value={new Date().toLocaleTimeString()} />
                    <input type="hidden" name="datePosted" value={new Date().toLocaleDateString()} />
                    <div className="mt-4">
                      <button
                        type="submit"
                        className="inline-flex justify-center px-4 py-2 text-sm font-medium text-white border border-gray-800 rounded-md shadow-sm "
                        disabled={loading}
                      >
                        {loading ? 'Creating...' : 'Create Blog'}
                      </button>
                    </div>
                    {success && <p className="mt-4 text-sm text-green-600">Blog created successfully!</p>}
                    {error && <p className="mt-4 text-sm text-red-600">{error}</p>}
                  </form>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </div>
  );
};

export default Dashboard;