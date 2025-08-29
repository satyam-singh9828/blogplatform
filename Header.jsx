

// assets/components/Header.jsx
// assets/components/Header.jsx

import React from 'react';
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

const Header = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
        scrolled
          ? "bg-white/80 backdrop-blur-md shadow-lg"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 flex justify-between items-center h-16 animate-fade-in-down">
        {/* Logo */}
        <Link
          to="/"
          className="text-2xl font-bold text-black-600 hover:text-blue-700 transition-colors duration-300"
        >
          MyBlog
        </Link>

        {/* Navigation */}
        <nav className="space-x-6">
          {["Home", "Blog", "About", "Contact"].map((item, idx) => (
            <Link
              key={idx}
              to={item === "Home" ? "/" : `/${item.toLowerCase()}`}
              className="relative text-gray-700 font-medium transition-colors duration-300 hover:text-blue-600 after:content-[''] after:absolute after:-bottom-1 after:left-0 after:w-0 after:h-[2px] after:bg-blue-600 after:transition-all after:duration-300 hover:after:w-full"
            >
              {item}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
};

export default Header;
