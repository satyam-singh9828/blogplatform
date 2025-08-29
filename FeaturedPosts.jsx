// assets/components/FeaturedPosts.jsx

import React from 'react';
import { Link } from 'react-router-dom';

const FeaturedPosts = ({ posts }) => {
  return (
    <section className="py-12">
      <h2 className="text-3xl font-bold text-gray-800 mb-8">Featured Articles</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {posts.map(post => (
          <Link to={`/posts/${post.id}`} key={post.id} className="block group">
            <div className="bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 overflow-hidden">
              <img
                src={post.image}
                alt={post.title}
                className="w-full h-48 object-cover transform group-hover:scale-105 transition-transform duration-300"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-800 mb-2 group-hover:text-indigo-600 transition-colors duration-300">
                  {post.title}
                </h3>
                <p className="text-sm text-gray-500 mb-4">
                  By {post.author} on {post.date}
                </p>
                <p className="text-gray-700">{post.excerpt}</p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default FeaturedPosts;