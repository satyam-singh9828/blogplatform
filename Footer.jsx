import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-6 mt-12">
      <div className="container mx-auto text-center text-sm">
        <p>&copy; {new Date().getFullYear()} My Blog. All rights reserved.</p>
        <p className="mt-2">
          Designed with ❤️ using React and Tailwind CSS
        </p>
      </div>
    </footer>
  );
};

export default Footer;