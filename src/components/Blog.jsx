

const posts = [
  {
    id: 1,
    title: 'Boost your conversion rate',
    href: '#',
    description:
      'Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel. Iusto corrupti dicta.',
    date: 'Mar 16, 2020',
    datetime: '2020-03-16',
    category: { title: 'Marketing', href: '#' },
    author: {
      name: 'Zama Protus',
      role: 'Co-Founder / CEO',
      href: '#',
      imageUrl:
        'https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
  },
  {
    id: 2,
    title: 'How to use search engine optimization to drive traffic to your site',
    href: '#',
    description:
      'Optio cum necessitatibus dolor voluptatum provident commodi et. Qui aperiam fugiat nemo cumque.',
    date: 'Mar 10, 2020',
    datetime: '2020-03-10',
    category: { title: 'SEO', href: '#' },
    author: {
      name: 'Simeon Azeh',
      role: 'Web Developer',
      href: '#',
      imageUrl:
        'https://images.unsplash.com/photo-1502685104226-ee32379fefbe?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
  },
  {
    id: 3,
    title: 'Improve your customer experience',
    href: '#',
    description:
      'Cupiditate maiores ullam eveniet adipisci in doloribus nulla minus. Voluptas iusto libero adipisci rem et corporis.',
    date: 'Feb 12, 2020',
    datetime: '2020-02-12',
    category: { title: 'Customer Experience', href: '#' },
    author: {
      name: 'Tom Cook',
      role: 'Director of Product',
      href: '#',
      imageUrl:
        'https://images.unsplash.com/photo-1500917293891-ef795e70e1f6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
  },
  // Add more posts as needed
];

export default function Blog() {
  return (
    <div className="py-24 bg-white dark:bg-dark-body sm:py-32 font-inter">
      <div className="px-8 mx-auto md:w-4/5 md:px-0">
        <div className="max-w-2xl mx-auto lg:mx-0">
          <h2 className="text-4xl font-semibold tracking-tight text-gray-900 dark:text-gray-100 sm:text-5xl">From the blog</h2>
          <p className="mt-2 text-gray-600 dark:text-gray-400 text-lg/8">Discover our stories, learn how we stay in business.</p>
        </div>
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
              <div className="relative group">
                <h3 className="mt-3 font-semibold text-gray-900 dark:text-gray-100 text-lg/6 group-hover:text-gray-600 dark:group-hover:text-gray-400">
                  <a href={post.href}>
                    <span className="absolute inset-0" />
                    {post.title}
                  </a>
                </h3>
                <p className="mt-5 text-gray-600 dark:text-gray-400 line-clamp-3 text-sm/6">{post.description}</p>
              </div>
              <div className="relative flex items-center mt-8 gap-x-4">
                <img alt="" src={post.author.imageUrl} className="rounded-full size-10 bg-gray-50 dark:bg-gray-800" />
                <div className="text-sm/6">
                  <p className="font-semibold text-gray-900 dark:text-gray-100">
                    <a href={post.author.href}>
                      <span className="absolute inset-0" />
                      {post.author.name}
                    </a>
                  </p>
                  <p className="text-gray-600 dark:text-gray-400">{post.author.role}</p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}