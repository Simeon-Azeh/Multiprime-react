import { useState } from 'react';
import { CalendarDaysIcon, HandRaisedIcon } from '@heroicons/react/24/outline';
import { getFirestore, collection, addDoc, query, where, getDocs } from 'firebase/firestore';
import { app } from '../Firebase/firebase'; // Ensure you have the Firebase app initialized
import { IoMdCheckmarkCircleOutline } from 'react-icons/io';

const db = getFirestore(app);

export default function SubscribeNews() {
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    setSuccess(false);

    try {
      // Query to check if the email already exists
      const q = query(collection(db, 'subscriptions'), where('email', '==', email));
      const querySnapshot = await getDocs(q);

      if (!querySnapshot.empty) {
        // If the email already exists, show an error message and stop further processing
        setError('This email is already subscribed.');
        setLoading(false);
        return;
      }

      // Proceed to add the new subscription if email does not exist
      await addDoc(collection(db, 'subscriptions'), {
        email,
        subscribedAt: new Date(),
      });
      setSuccess(true);
      setEmail('');
    } catch (err) {
      setError('Failed to subscribe. Please try again.');
      console.error('Error adding document: ', err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="relative py-16 overflow-hidden bg-white dark:bg-dark-body isolate sm:py-24 lg:py-32">
      <div className="px-8 mx-auto md:w-4/5 md:px-0 font-inter">
        <div className="grid max-w-2xl grid-cols-1 mx-auto gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-2">
          <div className="max-w-xl lg:max-w-lg">
            <h2 className="text-4xl font-semibold tracking-tight text-[#FF5722] dark:text-white">
              Subscribe to our newsletter
            </h2>
            <p className="mt-4 text-lg text-gray-700 dark:text-gray-300">
              Get the latest updates, insights, and tips delivered straight to your inbox. Join our growing community
              and stay informed on topics that matter to you.
            </p>
            <form onSubmit={handleSubmit} className="flex max-w-md mt-6 gap-x-4">
              <label htmlFor="email-address" className="sr-only">
                Email address
              </label>
              <input
                id="email-address"
                name="email"
                type="email"
                required
                placeholder="Enter your email"
                autoComplete="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="min-w-0 flex-auto rounded-md bg-transparent dark:bg-transparent px-3.5 py-2 text-base text-gray-900 dark:text-white outline outline-1 -outline-offset-1 outline-gray-300 dark:outline-gray-800 placeholder:text-gray-500 dark:placeholder:text-gray-500 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-[#FF5722] sm:text-sm/6"
              />
              <button
                type="submit"
                className="flex-none rounded-md bg-[#FF5722] dark:bg-transparent dark:border dark:border-gray-800 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-orange-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
                disabled={loading}
              >
                {loading ? 'Subscribing...' : 'Subscribe'}
              </button>
            </form>
            {success && <p className="flex items-center gap-2 p-2 px-6 mt-4 text-sm text-green-600 rounded-md bg-slate-100 dark:bg-gray-800 dark:text-white"><IoMdCheckmarkCircleOutline /> Thank you for subscribing! It means alot.</p>}
            {error && <p className="mt-4 text-sm text-red-600">{error}</p>}
          </div>
          <dl className="grid grid-cols-1 gap-x-8 gap-y-10 sm:grid-cols-2 lg:pt-2">
            <div className="flex flex-col items-start">
              <div className="p-2 bg-gray-200 rounded-md dark:bg-white/5 ring-1 ring-gray-300 dark:ring-white/10">
                <CalendarDaysIcon aria-hidden="true" className="text-gray-900 dark:text-white size-6" />
              </div>
              <dt className="mt-4 text-base font-semibold text-gray-900 dark:text-white">Weekly articles</dt>
              <dd className="mt-2 text-gray-700 dark:text-gray-300 text-base/7">
                Receive curated articles every week on the latest trends, strategies, and best practices.
              </dd>
            </div>
            <div className="flex flex-col items-start">
              <div className="p-2 bg-gray-200 rounded-md dark:bg-white/5 ring-1 ring-gray-300 dark:ring-white/10">
                <HandRaisedIcon aria-hidden="true" className="text-gray-900 dark:text-white size-6" />
              </div>
              <dt className="mt-4 text-base font-semibold text-gray-900 dark:text-white">No spam</dt>
              <dd className="mt-2 text-gray-700 dark:text-gray-300 text-base/7">
                We respect your privacy and ensure that your email is only used for the newsletter.
              </dd>
            </div>
          </dl>
        </div>
      </div>
      <div
        aria-hidden="true"
        className="absolute top-0 -translate-x-1/2 left-1/2 -z-10 blur-3xl xl:-top-6"
      >
        <div
          style={{
            clipPath:
              'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
          }}
          className="aspect-[1155/678] w-[72.1875rem] opacity-30"
        />
      </div>
    </div>
  );
}
