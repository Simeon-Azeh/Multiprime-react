// src/components/Blog.jsx
function BlogPosts({ posts }) {
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
                  <time dateTime={post.datetime} className="text-gray-500 dark:text-gray-400">
                    {post.date}
                  </time>
                  <a
                    href={post.category.href}
                    className="relative z-10 rounded-full bg-gray-50 dark:bg-gray-800 px-3 py-1.5 font-medium text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700"
                  >
                    {post.category.title}
                  </a>
                </div>
                <h3 className="mt-3 font-semibold text-gray-900 dark:text-gray-100 text-lg/6">
                  <a href={`/blog/${post.id}`}>{post.title}</a>
                </h3>
                <p className="mt-5 text-gray-600 dark:text-gray-400 line-clamp-3 text-sm/6">
                  {post.description}
                </p>
                <div className="flex items-center mt-5 gap-x-4">
                  <img
                    src={post.author.imageUrl}
                    alt={post.author.name}
                    className="w-10 h-10 rounded-full"
                  />
                  <p className="text-sm font-medium text-gray-900 dark:text-gray-100">
                    {post.author.name} <span className="text-gray-600 dark:text-gray-400">({post.author.role})</span>
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    );
  }
  
  export default BlogPosts;
  