import { Link } from "react-router-dom";

const BlogPage = ({ posts }) => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">Featured Articles</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map(post => (
            <Link
              key={post.id}
              to={`/blog/${post.id}`}
              className="bg-gray-50 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 overflow-hidden block"
            >
              <img
                src={post.image}
                alt={post.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-800 mb-2">{post.title}</h3>
                <p className="text-sm text-gray-500 mb-4">
                  By {post.author} on {post.date}
                </p>
                <p className="text-gray-700">{post.excerpt}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogPage;
