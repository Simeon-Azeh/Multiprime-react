import React, { useEffect, useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/footer';
import Banner from '../components/Banner';
import BlogPosts from '../components/Blog'; // Import the renamed component
import { getFirestore, collection, getDocs } from 'firebase/firestore';
import { app } from '../Firebase/firebase'; // Ensure you have the Firebase app initialized

const db = getFirestore(app);

function BlogPage() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, 'blogs'));
        const blogs = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
        setPosts(blogs);
      } catch (err) {
        setError('Failed to fetch blog posts. Please try again.');
        console.error('Error fetching blog posts: ', err);
      } finally {
        setLoading(false);
      }
    };

    fetchPosts();
  }, []);

  return (
    <div>
      <Banner />
      <div className="sticky top-0 z-50 mt-20 md:mt-12">
        <Header />
      </div>
      <div>
        <BlogPosts posts={posts} loading={loading} error={error} /> {/* Pass the posts, loading, and error as props */}
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
}

export default BlogPage;