import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';

const BlogDetail = ({ posts }) => {
  const { id } = useParams();
  const navigate = useNavigate();
  const post = posts.find((p) => p.id === parseInt(id, 10));

  if (!post) return <p className="text-center text-gray-500 dark:text-gray-400">Post not found</p>;

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
              dateTime={post.datetime}
              className="block text-sm tracking-wide text-gray-500 uppercase dark:text-gray-400"
            >
              {post.date}
            </time>
            <h1 className="text-4xl font-bold leading-tight text-gray-900 dark:text-gray-100">
              {post.title}
            </h1>
          </header>

          {/* Content */}
          <div className="leading-relaxed prose text-gray-700 dark:prose-invert max-w-none dark:text-gray-400">
            <p>{post.description}</p>
          </div>

          {/* Footer */}
          <footer className="flex items-center pt-6 border-t border-gray-200 gap-x-4 dark:border-gray-700">
            <img
              alt={post.author.name}
              src={post.author.imageUrl}
              className="object-cover w-16 h-16 rounded-full shadow-md"
            />
            <div>
              <p className="text-lg font-semibold text-gray-900 dark:text-gray-100">{post.author.name}</p>
              <p className="text-sm text-gray-600 dark:text-gray-400">{post.author.role}</p>
            </div>
          </footer>
        </article>
      </div>
    </div>
  );
};

export default BlogDetail;
