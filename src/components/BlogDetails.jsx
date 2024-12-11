import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { getFirestore, doc, getDoc } from 'firebase/firestore';
import { app } from '../Firebase/firebase'; // Ensure you have the Firebase app initialized

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

  const splitDescription = (text, wordLimit) => {
    const words = text.split(' ');
    const paragraphs = [];
    for (let i = 0; i < words.length; i += wordLimit) {
      paragraphs.push(words.slice(i, i + wordLimit).join(' '));
    }
    return paragraphs;
  };

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
              dateTime={post.datePosted}
              className="block text-sm tracking-wide text-gray-500 uppercase dark:text-gray-400"
            >
              {post.datePosted}
            </time>
            <h1 className="text-4xl font-bold leading-tight text-gray-900 dark:text-gray-100">
              {post.title}
            </h1>
          </header>

          {/* Content */}
          <div className="space-y-6 leading-relaxed prose text-gray-700 dark:prose-invert max-w-none dark:text-gray-400">
            {splitDescription(post.description, 50).map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
          </div>

          {/* Footer */}
          <footer className="flex items-center pt-6 border-t border-gray-200 gap-x-4 dark:border-gray-700">
            <img
              alt={post.userName}
              src={post.userAvatar}
              className="object-cover w-16 h-16 rounded-full shadow-md"
            />
            <div>
              <p className="text-lg font-semibold text-gray-900 dark:text-gray-100">{post.userName}</p>
              <p className="text-sm text-gray-600 dark:text-gray-400">{post.time}</p>
            </div>
          </footer>
        </article>
      </div>
    </div>
  );
};

export default BlogDetail;
