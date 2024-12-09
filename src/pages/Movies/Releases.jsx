import React from 'react';
import Header from '../../components/Header';
import VideoGallery from '../../components/VideoGallery';
import Footer from '../../components/footer';
import Highlights from '../../components/Highlights';
import SubscribeNews from '../../components/SubscribeNew';
import { FilmIcon } from '@heroicons/react/24/outline';

function MovieReleases() {
  const hasReleases = false; // Set this to true if there are releases

  return (
    <div className="min-h-screen text-gray-900 bg-white dark:bg-dark-body dark:text-gray-100">
      <div className="sticky top-0 z-50">
        <Header />
      </div>

      <div className="justify-center p-4 px-8 mx-auto md:w-4/5 pt-28 font-inter md:px-0">
        {hasReleases ? (
          <>
            <VideoGallery />
            <button className="flex px-6 py-2 mx-auto mt-6 font-normal border rounded font-inter dark:border-gray-800 text-dark-body dark:text-slate-50">
              <a href="https://www.youtube.com/channel/UCJFZDBl7YQv9Y5wV7Ew9aCg" target="_blank" rel="noopener noreferrer">
                Watch More
              </a>
            </button>
          </>
        ) : (
          <div className="flex flex-col items-center justify-center h-full pt-16">
            <FilmIcon className="w-24 h-24 text-gray-400 dark:text-gray-600" />
            <p className="mt-4 text-lg font-semibold text-gray-700 dark:text-gray-300">No releases yet</p>
            <p className="mt-2 text-gray-600 dark:text-gray-400">Subscribe to our newsletter to be the first to know.</p>
          </div>
        )}
      </div>

   

      <div className="mt-16">
        <SubscribeNews />
      </div>

      <Footer />
    </div>
  );
}

export default MovieReleases;