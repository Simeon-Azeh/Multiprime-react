'use client'

import { useState } from 'react'
import { ChevronDownIcon } from '@heroicons/react/16/solid'
import { IoMdCheckmarkCircleOutline } from "react-icons/io";
import { Field, Label, Switch } from '@headlessui/react'
import { PhoneInput } from 'react-international-phone'
import 'react-international-phone/style.css'
import { getFirestore, collection, addDoc } from 'firebase/firestore';
import { app } from '../Firebase/firebase'; // Ensure you have the Firebase app initialized

const db = getFirestore(app);

const subjectSuggestions = [
  'General Inquiry',
  'Product Support',
  'Sales',
  'Partnership',
  'Feedback',
  'Other'
];

export default function ContactForm() {
  const [agreed, setAgreed] = useState(false)
  const [phone, setPhone] = useState('')
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [subject, setSubject] = useState('');
  const [filteredSuggestions, setFilteredSuggestions] = useState([]);
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState('');

  const handleSubjectChange = (e) => {
    const value = e.target.value;
    setSubject(value);
    if (value) {
      const filtered = subjectSuggestions.filter((suggestion) =>
        suggestion.toLowerCase().includes(value.toLowerCase())
      );
      setFilteredSuggestions(filtered);
    } else {
      setFilteredSuggestions([]);
    }
  };

  const handleSuggestionClick = (suggestion) => {
    setSubject(suggestion);
    setFilteredSuggestions([]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!agreed) {
      setError('You must agree to the privacy policy.');
      return;
    }
    setLoading(true);
    setError('');
    setSuccess(false);

    try {
      await addDoc(collection(db, 'messages'), {
        firstName,
        lastName,
        subject,
        email,
        phone,
        message,
        agreed,
        submittedAt: new Date(),
      });
      setSuccess(true);
      setFirstName('');
      setLastName('');
      setSubject('');
      setEmail('');
      setPhone('');
      setMessage('');
      setAgreed(false);
    } catch (err) {
      setError('Failed to send message. Please try again.');
      console.error('Error adding document: ', err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="px-6 py-24 bg-white dark:bg-dark-body font-inter isolate sm:py-32 lg:px-8">
      <div
        aria-hidden="true"
        className="absolute inset-x-0 top-[-10rem] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[-20rem]"
      >
        <div
          style={{
            clipPath:
              'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
          }}
          className="relative left-1/2 -z-10 aspect-[1155/678] w-[36.125rem] max-w-none -translate-x-1/2 rotate-[30deg]  opacity-30 sm:left-[calc(50%-40rem)] sm:w-[72.1875rem]"
        />
      </div>
      <div className="max-w-2xl mx-auto text-center">
        <h2 className="text-3xl font-semibold tracking-tight text-gray-900 dark:text-gray-100 text-balance sm:text-5xl">Contact sales</h2>
        <p className="mt-2 text-gray-600 dark:text-gray-400 text-lg/8">We typically respond within a few minutes to an hour.</p>
      </div>
      <form onSubmit={handleSubmit} className="max-w-xl mx-auto mt-16 sm:mt-20">
        <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
          <div>
            <label htmlFor="first-name" className="block font-semibold text-gray-900 dark:text-gray-100 text-sm/6">
              First name
            </label>
            <div className="mt-2.5">
              <input
                id="first-name"
                name="first-name"
                type="text"
                autoComplete="given-name"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                className="block w-full rounded-md bg-white dark:bg-transparent px-3.5 py-2 text-base text-gray-900 dark:text-gray-100 outline outline-1 -outline-offset-1 outline-gray-300 dark:outline-gray-700 placeholder:text-gray-400 dark:placeholder:text-gray-500 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-[#FF5722]"
              />
            </div>
          </div>
          <div>
            <label htmlFor="last-name" className="block font-semibold text-gray-900 dark:text-gray-100 text-sm/6">
              Last name
            </label>
            <div className="mt-2.5">
              <input
                id="last-name"
                name="last-name"
                type="text"
                autoComplete="family-name"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                className="block w-full rounded-md bg-white dark:bg-transparent px-3.5 py-2 text-base text-gray-900 dark:text-gray-100 outline outline-1 -outline-offset-1 outline-gray-300 dark:outline-gray-700 placeholder:text-gray-400 dark:placeholder:text-gray-500 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-[#FF5722]"
              />
            </div>
          </div>
          <div className="relative sm:col-span-2">
            <label htmlFor="subject" className="block font-semibold text-gray-900 dark:text-gray-100 text-sm/6">
              Subject
            </label>
            <div className="mt-2.5">
              <input
                id="subject"
                name="subject"
                type="text"
                autoComplete="organization"
                value={subject}
                onChange={handleSubjectChange}
                className="block w-full rounded-md bg-white dark:bg-transparent px-3.5 py-2 text-base text-gray-900 dark:text-gray-100 outline outline-1 -outline-offset-1 outline-gray-300 dark:outline-gray-700 placeholder:text-gray-400 dark:placeholder:text-gray-500 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-[#FF5722]"
              />
              {filteredSuggestions.length > 0 && (
                <ul className="absolute z-10 w-full mt-1 overflow-auto bg-white border border-gray-300 rounded-md shadow-lg dark:bg-gray-800 dark:border-gray-700 max-h-60">
                  {filteredSuggestions.map((suggestion) => (
                    <li
                      key={suggestion}
                      onClick={() => handleSuggestionClick(suggestion)}
                      className="px-4 py-2 text-gray-900 cursor-pointer dark:text-gray-100 hover:bg-gray-100 dark:hover:bg-gray-700"
                    >
                      {suggestion}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </div>
          <div className="sm:col-span-2">
            <label htmlFor="email" className="block font-semibold text-gray-900 dark:text-gray-100 text-sm/6">
              Email
            </label>
            <div className="mt-2.5">
              <input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="block w-full rounded-md bg-white dark:bg-transparent px-3.5 py-2 text-base text-gray-900 dark:text-gray-100 outline outline-1 -outline-offset-1 outline-gray-300 dark:outline-gray-700 placeholder:text-gray-400 dark:placeholder:text-gray-500 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-[#FF5722]"
              />
            </div>
          </div>
          <div className="sm:col-span-2">
            <label htmlFor="phone-number" className="block font-semibold text-gray-900 dark:text-gray-100 text-sm/6">
              Phone number
            </label>
            <div className="mt-2.5">
              <PhoneInput
                defaultCountry="CMR"
                value={phone}
                onChange={setPhone}
                className=" w-full flex rounded-md bg-white dark:bg-transparent px-3.5 py-2 text-base text-gray-900 dark:text-gray-100 outline outline-1 -outline-offset-1 outline-gray-300 dark:outline-gray-700 placeholder:text-gray-400 dark:placeholder:text-gray-500 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-[#FF5722]"
                inputProps={{
                  className:
                    'block w-full border-0 bg-transparent px-3 py-2 text-base text-gray-900 dark:text-gray-100 placeholder:text-gray-400 dark:placeholder:text-gray-500 focus:ring-0 focus:outline-none',
                }}
                dropdownClassName="bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-md shadow-lg max-h-60 overflow-auto"
                buttonClassName="text-gray-600 dark:text-gray-400 border-0 bg-transparent focus:outline-none"
                flagClassName="h-5 w-5 bg-white dark:bg-gray-800"
              />
            </div>
          </div>
          <div className="sm:col-span-2">
            <label htmlFor="message" className="block font-semibold text-gray-900 dark:text-gray-100 text-sm/6">
              Message
            </label>
            <div className="mt-2.5">
              <textarea
                id="message"
                name="message"
                rows={4}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className="block w-full rounded-md bg-white dark:bg-transparent px-3.5 py-2 text-base text-gray-900 dark:text-gray-100 outline outline-1 -outline-offset-1 outline-gray-300 dark:outline-gray-700 placeholder:text-gray-400 dark:placeholder:text-gray-500 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-[#FF5722]"
              />
            </div>
          </div>
          <Field className="flex gap-x-4 sm:col-span-2">
            <div className="flex items-center h-6">
              <Switch
                checked={agreed}
                onChange={setAgreed}
                className="group flex w-8 flex-none cursor-pointer rounded-full bg-gray-200 dark:bg-gray-700 p-px ring-1 ring-inset ring-gray-900/5 transition-colors duration-200 ease-in-out focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#FF5722] data-[checked]:bg-[#FF5722]"
              >
                <span className="sr-only">Agree to policies</span>
                <span
                  aria-hidden="true"
                  className="size-4 transform rounded-full bg-white shadow-sm ring-1 ring-gray-900/5 transition duration-200 ease-in-out group-data-[checked]:translate-x-3.5"
                />
              </Switch>
            </div>
            <Label className="text-gray-600 dark:text-gray-400 text-sm/6">
              By selecting this, you agree to our{' '}
              <a href="#" className="font-semibold text-[#FF5722]">
                privacy&nbsp;policy
              </a>
              .
            </Label>
          </Field>
        </div>
        <div className="mt-10">
          <button
            type="submit"
            className="block w-full rounded-md bg-[#FF5722] dark:bg-transparent dark:border dark:border-gray-800 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-orange-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#FF5722]"
            disabled={loading}
          >
            {loading ? 'Sending...' : "Let's talk"}
          </button>
        </div>
        {success && <p className="flex items-center gap-2 p-2 px-6 mt-4 text-sm text-green-600 rounded-md bg-slate-100 dark:bg-gray-800 dark:text-white"><IoMdCheckmarkCircleOutline /> Message sent successfully! We will get back to you soon.</p>}
        {error && <p className="mt-4 text-sm text-red-600">{error}</p>}
      </form>
    </div>
  )
}