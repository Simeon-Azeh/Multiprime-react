import React, { useEffect, useState } from 'react';
import { getFirestore, collection, getDocs, deleteDoc, doc } from 'firebase/firestore';
import { app } from '../Firebase/firebase';
import { FaTrashAlt, FaSpinner } from 'react-icons/fa'; // Importing FontAwesome icons
import { MdEmail } from 'react-icons/md';

const db = getFirestore(app);

const Table = () => {
  const [subscriptions, setSubscriptions] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [subscriptionsPerPage] = useState(5); // Number of subscriptions per page

  useEffect(() => {
    const fetchSubscriptions = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, 'subscriptions'));
        const subs = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
        setSubscriptions(subs);
      } catch (err) {
        setError('Failed to fetch subscriptions. Please try again.');
        console.error('Error fetching subscriptions: ', err);
      } finally {
        setLoading(false);
      }
    };

    fetchSubscriptions();
  }, []);

  const handleDelete = async (id) => {
    try {
      await deleteDoc(doc(db, 'subscriptions', id));
      setSubscriptions(subscriptions.filter(sub => sub.id !== id));
    } catch (err) {
      setError('Failed to delete subscription. Please try again.');
      console.error('Error deleting subscription: ', err);
    }
  };

  // Get current subscriptions
  const indexOfLastSubscription = currentPage * subscriptionsPerPage;
  const indexOfFirstSubscription = indexOfLastSubscription - subscriptionsPerPage;
  const currentSubscriptions = subscriptions.slice(indexOfFirstSubscription, indexOfLastSubscription);

  // Change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <FaSpinner className="text-4xl text-blue-500 animate-spin" />
      </div>
    );
  }

  if (error) {
    return <p className="text-center text-red-600">{error}</p>;
  }

  return (
    <div className="pt-10 overflow-x-auto ">
      <table className="min-w-full bg-[#1a1a1a] border border-gray-800 font-inter rounded-lg shadow-lg">
        <thead>
          <tr>
            <th className="px-6 py-3 text-sm font-medium tracking-wider text-left text-gray-300 uppercase border-b border-gray-700">Email</th>
            <th className="px-6 py-3 text-sm font-medium tracking-wider text-left text-gray-300 uppercase border-b border-gray-700">Subscribed At</th>
            <th className="px-6 py-3 text-sm font-medium tracking-wider text-left text-gray-300 uppercase border-b border-gray-700">Actions</th>
          </tr>
        </thead>
        <tbody>
          {currentSubscriptions.map((sub) => (
            <tr key={sub.id} className="hover:bg-gray-700">
              <td className="flex items-center gap-2 px-6 py-4 text-gray-100">
                <MdEmail className="text-blue-400" /> {sub.email}
              </td>
              <td className="px-6 py-4 text-gray-100">
                {new Date(sub.subscribedAt.seconds * 1000).toLocaleString()}
              </td>
              <td className="px-6 py-4 text-gray-100">
                <button
                  onClick={() => handleDelete(sub.id)}
                  className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-white transition duration-200 bg-red-600 rounded-md hover:bg-red-700"
                >
                  <FaTrashAlt /> Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="flex justify-center mt-6">
        <nav>
          <ul className="flex gap-2">
            {Array.from({ length: Math.ceil(subscriptions.length / subscriptionsPerPage) }, (_, index) => (
              <li key={index}>
                <button
                  onClick={() => paginate(index + 1)}
                  className={`px-4 py-2 rounded-md text-sm font-medium ${
                    currentPage === index + 1
                      ? 'bg-blue-500 text-white'
                      : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                  } transition duration-200`}
                >
                  {index + 1}
                </button>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Table;