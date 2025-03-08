import React, { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full bg-gradient-to-r from-pink-500 to-red-500 bg-opacity-90 shadow-xl backdrop-blur-md py-4 px-8 z-50">
      <div className="flex justify-between items-center">
        {/* Logo */}
        <h1 className="text-3xl font-bold text-white tracking-wide drop-shadow-lg">
        💖 Made with Love 💖
        </h1>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-8 text-lg">
          {["Home", "Gallery", "Letter", "Video"].map((item, index) => (
            <li key={index}>
              <a
                href={`#${item.toLowerCase()}`}
                className="text-white font-bold relative group transition-all duration-300"
              >
                {item}
                {/* Underline Animation */}
                <span className="absolute left-0 bottom-[-4px] w-0 h-[3px] bg-white transition-all duration-300 group-hover:w-full"></span>
              </a>
            </li>
          ))}
        </ul>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-white text-2xl focus:outline-none hover:scale-110 active:scale-95 transition-all duration-300"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? "✖" : "☰"}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden fixed top-16 left-0 w-full bg-black bg-opacity-50 backdrop-blur-lg 
                    transform transition-transform duration-500 ease-in-out ${
                      isOpen ? "translate-y-0 opacity-100" : "-translate-y-full opacity-0"
                    }`}
      >
        <ul className="flex flex-col space-y-4 text-center text-lg p-6 rounded-lg">
          {["Home", "Gallery", "Letter", "Video"].map((item, index) => (
            <li key={index}>
              <a
                href={`#${item.toLowerCase()}`}
                className="block font-extrabold text-2xl bg-gradient-to-r from-fuchsia-500 to-cyan-400 
                           bg-clip-text text-transparent hover:scale-110 hover:from-cyan-400 hover:to-fuchsia-500 
                           hover:shadow-lg hover:shadow-cyan-400/50 transition-all duration-300"
                onClick={() => setIsOpen(false)}
              >
                {item}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
