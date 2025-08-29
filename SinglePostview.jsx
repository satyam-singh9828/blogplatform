import { useParams, Link } from "react-router-dom";

const SinglePostView = ({ posts }) => {
  const { id } = useParams();
  const post = posts.find(p => p.id === parseInt(id));

  if (!post) {
    return (
      <section className="py-16 bg-white min-h-screen">
        <div className="container mx-auto px-4">
          <p className="text-red-600 font-semibold">Post not found!</p>
          <Link to="/blog" className="text-blue-600 hover:underline">
            ← Back to Blog
          </Link>
        </div>
      </section>
    );
  }

  return (
    <section className="py-16 bg-white min-h-screen">
      <div className="container mx-auto px-4">
        <Link
          to="/blog"
          className="flex items-center text-blue-600 hover:underline mb-8"
        >
          <svg
            className="w-4 h-4 mr-2"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M10 19l-7-7m0 0l7-7m-7 7h18"
            ></path>
          </svg>
          Back to Blog
        </Link>
        <img
          src={post.image}
          alt={post.title}
          className="w-full h-96 object-cover rounded-lg shadow-md mb-8"
        />
        <h1 className="text-4xl font-extrabold text-gray-900 mb-2">
          {post.title}
        </h1>
        <div className="text-sm text-gray-500 mb-6">
          By {post.author} on {post.date} &bull; Category: {post.category}
        </div>
        <p className="text-lg text-gray-700 leading-relaxed whitespace-pre-wrap">
          {post.content}
        </p>
      </div>
    </section>
  );
};

export default SinglePostView;
