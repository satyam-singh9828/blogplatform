const HeroSection = ({ onNavClick }) => {
  return (
    <div className="relative bg-gray-800 text-white rounded-lg overflow-hidden mb-12">
      <img
        src="https://tse1.mm.bing.net/th/id/OIP.GZQvYfdxykVHu8GDazRD0QHaEK?pid=Api&P=0&h=180"
        alt="A vibrant blog background"
        className="absolute inset-0 w-full h-full object-cover opacity-60"
      />
      <div className="relative z-10 p-8 md:p-16 text-center">
        <h1 className="text-4xl md:text-6xl font-extrabold mb-4 leading-tight">
          Welcome to My Blog
        </h1>
        <p className="text-lg md:text-xl font-light max-w-2xl mx-auto mb-6">
          Exploring the intersection of technology, design, and personal growth.
        </p>
      
      </div>
    </div>
  );
};

export default HeroSection;
