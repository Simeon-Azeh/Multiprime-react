// src/components/Blog.jsx
function BlogPosts({ posts, loading, error }) {
  if (loading) {
    return (
      <div className="py-24 bg-white dark:bg-dark-body sm:py-32 font-inter">
        <div className="px-8 mx-auto md:w-4/5 md:px-0">
          <h2 className="text-4xl font-semibold tracking-tight text-gray-900 dark:text-gray-100 sm:text-5xl">
            Loading Blog Posts...
          </h2>
          <div className="grid max-w-2xl grid-cols-1 pt-10 mx-auto mt-10 gap-x-8 gap-y-16 sm:mt-16 sm:pt-16 lg:mx-0 lg:max-w-none lg:grid-cols-3">
            {Array.from({ length: 3 }).map((_, index) => (
              <div
                key={index}
                className="flex flex-col items-start justify-between max-w-xl space-y-4 animate-pulse"
              >
                <div className="w-3/4 h-4 bg-gray-300 rounded dark:bg-gray-700"></div>
                <div className="w-full h-6 bg-gray-300 rounded dark:bg-gray-700"></div>
                <div className="w-full h-4 bg-gray-300 rounded dark:bg-gray-700"></div>
                <div className="w-1/2 h-4 bg-gray-300 rounded dark:bg-gray-700"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  if (error) {
    return <p className="text-red-600">{error}</p>;
  }

  const formatDate = (dateString) => {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateString).toLocaleDateString(undefined, options);
  };

  return (
    <div className="py-24 bg-white dark:bg-dark-body sm:py-32 font-inter">
      <div className="px-8 mx-auto md:w-4/5 md:px-0">
        <h2 className="text-4xl font-semibold tracking-tight text-gray-900 dark:text-gray-100 sm:text-5xl">
          From the Blog
        </h2>
        <p className="mt-2 text-gray-600 dark:text-gray-400 text-lg/8">
          Discover our stories, learn how we stay in business.
        </p>
        <div className="grid max-w-2xl grid-cols-1 pt-10 mx-auto mt-10 border-t border-gray-200 dark:border-gray-700 gap-x-8 gap-y-16 sm:mt-16 sm:pt-16 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          {posts.map((post) => (
            <article key={post.id} className="flex flex-col items-start justify-between max-w-xl">
              <div className="flex items-center text-xs gap-x-4">
                <time dateTime={post.datePosted} className="text-gray-500 dark:text-gray-400">
                  {formatDate(post.datePosted)}
                </time>
                {post.type && (
                  <span className="relative z-10 rounded-full bg-gray-50 dark:bg-gray-800 px-3 py-1.5 font-medium text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700">
                    {post.type}
                  </span>
                )}
              </div>
              <div className="relative mt-4">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100">
                  <a href={`/blog/${post.id}`}>
                    <span className="absolute inset-0" />
                    {post.title}
                  </a>
                </h3>
                <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
                  {post.description.split(' ').slice(0, 20).join(' ')}...
                </p>
              </div>
              <div className="relative flex items-center mt-4 gap-x-4">
                {post.userAvatar && (
                  <img src={post.userAvatar} alt="" className="w-10 h-10 bg-gray-100 rounded-full" />
                )}
                <div className="text-sm leading-6">
                  <p className="font-semibold text-gray-900 dark:text-gray-100">
                    <a href="#">
                      <span className="absolute inset-0" />
                      {post.userName}
                    </a>
                  </p>
                  <p className="text-gray-600 dark:text-gray-400">{post.time}</p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}

export default BlogPosts;