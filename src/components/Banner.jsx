import React, { useState, useEffect } from 'react';
import { X } from 'lucide-react';
import { getFirestore, collection, getDocs } from 'firebase/firestore';
import { app } from '../Firebase/firebase'; // Ensure you have the Firebase app initialized

const db = getFirestore(app);

export default function Banner() {
  const [events, setEvents] = useState([]);
  const [currentEventIndex, setCurrentEventIndex] = useState(0);
  const [loading, setLoading] = useState(true); // State for loading

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, 'events'));
        const eventsData = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
        setEvents(eventsData);
      } catch (err) {
        console.error('Error fetching events: ', err);
      } finally {
        setLoading(false); // Set loading to false once fetch completes
      }
    };

    fetchEvents();
  }, []);

  useEffect(() => {
    if (events.length > 0) {
      const interval = setInterval(() => {
        setCurrentEventIndex(prevIndex => (prevIndex + 1) % events.length);
      }, 10000); // Change event every 10 seconds

      return () => clearInterval(interval);
    }
  }, [events.length]);

  if (loading) {
    return (
      <div className="fixed top-0 w-full bg-gray-50 px-6 py-2.5 z-50 flex items-center justify-center">
        <p className="text-sm text-gray-600 animate-pulse">Loading events...</p>
      </div>
    );
  }

  if (events.length === 0) {
    return (
      <div className="fixed top-0 w-full bg-gray-50 px-6 py-2.5 z-50 flex items-center justify-center">
        <p className="text-sm text-gray-600">No events available at the moment.</p>
      </div>
    );
  }

  const currentEvent = events[currentEventIndex];

  return (
    <div className="isolate fixed top-0 flex w-full items-center gap-x-6 overflow-hidden bg-gray-50 px-6 py-2.5 sm:px-3.5 sm:before:flex-1 z-50">
      <div
        aria-hidden="true"
        className="absolute left-[max(-7rem,calc(50%-52rem))] top-1/2 -z-10 -translate-y-1/2 transform-gpu blur-2xl"
      >
        <div
          style={{
            clipPath:
              'polygon(74.8% 41.9%, 97.2% 73.2%, 100% 34.9%, 92.5% 0.4%, 87.5% 0%, 75% 28.6%, 58.5% 54.6%, 50.1% 56.8%, 46.9% 44%, 48.3% 17.4%, 24.7% 53.9%, 0% 27.9%, 11.9% 74.2%, 24.9% 54.1%, 68.6% 100%, 74.8% 41.9%)',
          }}
          className="aspect-[577/310] w-[36.0625rem] bg-gradient-to-r from-[#ff80b5] to-[#9089fc] opacity-30"
        />
      </div>
      <div
        aria-hidden="true"
        className="absolute left-[max(45rem,calc(50%+8rem))] top-1/2 -z-10 -translate-y-1/2 transform-gpu blur-2xl"
      >
        <div
          style={{
            clipPath:
              'polygon(74.8% 41.9%, 97.2% 73.2%, 100% 34.9%, 92.5% 0.4%, 87.5% 0%, 75% 28.6%, 58.5% 54.6%, 50.1% 56.8%, 46.9% 44%, 48.3% 17.4%, 24.7% 53.9%, 0% 27.9%, 11.9% 74.2%, 24.9% 54.1%, 68.6% 100%, 74.8% 41.9%)',
          }}
          className="aspect-[577/310] w-[36.0625rem] bg-gradient-to-r from-[#ff80b5] to-[#9089fc] opacity-30"
        />
      </div>
      <div className="flex flex-wrap items-center gap-x-4 gap-y-2">
        <p className="text-xs text-gray-900 md:text-sm/6">
          <strong className="font-semibold">{currentEvent.name}</strong>
          <svg viewBox="0 0 2 2" aria-hidden="true" className="mx-2 inline size-0.5 fill-current">
            <circle r={1} cx={1} cy={1} />
          </svg>
          {currentEvent.description}
        </p>
        <a
          href="#"
          className="flex-none rounded-full bg-gray-900 px-3.5 py-1 text-sm font-semibold text-white shadow-sm hover:bg-gray-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-900"
        >
          Learn More <span aria-hidden="true">&rarr;</span>
        </a>
      </div>
      <div className="flex justify-end flex-1">
        <button type="button" className="-m-3 p-3 focus-visible:outline-offset-[-4px]">
          <span className="sr-only">Dismiss</span>
          <X aria-hidden="true" className="text-gray-900 size-5" />
        </button>
      </div>
    </div>
  );
}
