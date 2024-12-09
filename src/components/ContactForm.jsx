'use client'

import { useState } from 'react'
import { ChevronDownIcon } from '@heroicons/react/16/solid'
import { Field, Label, Switch } from '@headlessui/react'
import { PhoneInput } from 'react-international-phone'
import 'react-international-phone/style.css'

export default function ContactForm() {
  const [agreed, setAgreed] = useState(false)
  const [phone, setPhone] = useState('')

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
      <form action="#" method="POST" className="max-w-xl mx-auto mt-16 sm:mt-20">
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
                className="block w-full rounded-md bg-white dark:bg-transparent px-3.5 py-2 text-base text-gray-900 dark:text-gray-100 outline outline-1 -outline-offset-1 outline-gray-300 dark:outline-gray-700 placeholder:text-gray-400 dark:placeholder:text-gray-500 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-[#FF5722]"
              />
            </div>
          </div>
          <div className="sm:col-span-2">
            <label htmlFor="company" className="block font-semibold text-gray-900 dark:text-gray-100 text-sm/6">
              Company
            </label>
            <div className="mt-2.5">
              <input
                id="company"
                name="company"
                type="text"
                autoComplete="organization"
                className="block w-full rounded-md bg-white dark:bg-transparent px-3.5 py-2 text-base text-gray-900 dark:text-gray-100 outline outline-1 -outline-offset-1 outline-gray-300 dark:outline-gray-700 placeholder:text-gray-400 dark:placeholder:text-gray-500 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-[#FF5722]"
              />
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
                className="block w-full rounded-md bg-white dark:bg-transparent px-3.5 py-2 text-base text-gray-900 dark:text-gray-100 outline outline-1 -outline-offset-1 outline-gray-300 dark:outline-gray-700 placeholder:text-gray-400 dark:placeholder:text-gray-500 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-[#FF5722]"
                defaultValue={''}
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
          >
            Let's talk
          </button>
        </div>
      </form>
    </div>
  )
}