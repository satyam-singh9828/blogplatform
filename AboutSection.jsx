const AboutPage = () => {
  return (
    <section id="about" className="py-16 bg-gray-100">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold text-gray-800 mb-4">About My Blog</h2>
        <div className="max-w-3xl mx-auto text-lg text-gray-600 space-y-4">
          <p>
            This blog is a passion project dedicated to sharing insights and knowledge on modern web development. My goal is to demystify complex topics, provide practical guides, and inspire fellow developers to build amazing things. Whether you're a beginner just starting your coding journey or a seasoned professional looking to stay updated, you'll find valuable content here.
          </p>
          <p>
            I believe in the power of an open and collaborative developer community. I'm always learning and evolving, and this blog is a space for me to share those learnings with you. I focus on technologies like React, Tailwind CSS, JavaScript, and Node.js, and explore topics ranging from front-end design principles to back-end architecture.
          </p>
        </div>
      </div>
    </section>
  );
};
export default AboutPage;