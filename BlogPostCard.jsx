import React from 'react';

const BlogPostCard = ({ post }) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300">
      <img
        src={post.image}
        alt={post.title}
        className="w-full h-48 object-cover"
      />
      <div className="p-6">
        <h3 className="text-xl font-semibold text-gray-800 mb-2">{post.title}</h3>
        <p className="text-gray-600 text-sm mb-4">{post.excerpt}</p>
        <div className="text-gray-500 text-xs">
          By <span className="font-medium text-gray-600">{post.author}</span> on {post.date}
        </div>
      </div>
    </div>
  );
};

export default BlogPostCard;