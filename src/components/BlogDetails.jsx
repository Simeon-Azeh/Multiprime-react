import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { getFirestore, doc, getDoc } from 'firebase/firestore';
import { app } from '../Firebase/firebase'; // Ensure Firebase app is initialized

const db = getFirestore(app);

const BlogDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchPost = async () => {
      try {
        const docRef = doc(db, 'blogs', id);
        const docSnap = await getDoc(docRef);
        if (docSnap.exists()) {
          setPost(docSnap.data());
        } else {
          setError('Post not found');
        }
      } catch (err) {
        setError('Failed to fetch post. Please try again.');
        console.error('Error fetching post: ', err);
      } finally {
        setLoading(false);
      }
    };

    fetchPost();
  }, [id]);

  if (loading) {
    return (
      <div className="min-h-screen px-6 py-16 bg-white dark:bg-dark-body font-inter">
        <div className="space-y-6">
          <div className="w-32 h-6 bg-gray-300 rounded dark:bg-gray-700 animate-pulse"></div>
          <div className="w-full h-10 bg-gray-300 rounded dark:bg-gray-700 animate-pulse"></div>
          <div className="w-3/4 h-6 bg-gray-300 rounded dark:bg-gray-700 animate-pulse"></div>
          <div className="space-y-4">
            {Array.from({ length: 5 }).map((_, index) => (
              <div
                key={index}
                className="w-full h-4 bg-gray-300 rounded dark:bg-gray-700 animate-pulse"
              ></div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  if (error) {
    return <p className="text-center text-gray-500 dark:text-gray-400">{error}</p>;
  }

  if (!post) {
    return <p className="text-center text-gray-500 dark:text-gray-400">Post not found</p>;
  }

  return (
    <div className="min-h-screen bg-white dark:bg-dark-body font-inter">
      <div className="container px-6 py-16 mx-auto md:px-12 lg:px-20">
        <button
          className="flex items-center mb-8 text-sm font-medium text-gray-600 transition-all gap-x-2 dark:text-gray-400 hover:text-blue-500"
          onClick={() => navigate(-1)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-5 h-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
          Back to Blog
        </button>

        <article className="space-y-8">
          {/* Header */}
          <header className="space-y-4">
            <time
              dateTime={post.createdAt}
              className="block text-sm tracking-wide text-gray-500 uppercase dark:text-gray-400"
            >
              {post.datePosted}
            </time>
            <h1 className="text-4xl font-bold leading-tight text-gray-900 dark:text-gray-100">
              {post.title}
            </h1>
          </header>

          {/* Description and Sub-Description */}
          <div className="leading-relaxed prose text-gray-700 dark:prose-invert max-w-none dark:text-gray-400">
            <p>{post.description}</p>
            <h2 className="mt-6 text-2xl font-semibold text-gray-900 dark:text-gray-100">
              Sub-Description
            </h2>
            <p>{post.subDescription}</p>
          </div>

          {/* List Items */}
          <div className="mt-8">
            <h3 className="mb-4 text-xl font-semibold text-gray-900 dark:text-gray-100">
              Key Points:
            </h3>
            <ul className="pl-6 space-y-2 text-gray-700 list-disc dark:text-gray-400">
              {post.listItems.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </div>

          {/* Links */}
          {post.links && post.links.length > 0 && (
            <div className="mt-8">
              <h3 className="mb-4 text-xl font-semibold text-gray-900 dark:text-gray-100">
                Related Links:
              </h3>
              <ul className="space-y-2 list-none">
                {post.links.map((link, index) => (
                  <li key={index}>
                    <a
                      href={link}
                      className="text-blue-500 hover:underline"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Footer */}
          <footer className="flex items-center pt-6 border-t border-gray-200 gap-x-4 dark:border-gray-700">
            <img
              alt={post.userName}
              src={post.userAvatar}
              className="object-cover w-16 h-16 rounded-full shadow-md"
            />
            <div>
              <p className="text-lg font-semibold text-gray-900 dark:text-gray-100">
                {post.userName}
              </p>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Posted at {post.timePosted}
              </p>
            </div>
          </footer>
        </article>
      </div>
    </div>
  );
};

export default BlogDetail;