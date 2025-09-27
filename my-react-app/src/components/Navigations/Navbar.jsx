import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FiSearch, FiShoppingCart } from "react-icons/fi"; // react-icons
import { FlagIcon } from "@heroicons/react/24/outline"; // example heroicon

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const navItems = [
    { label: "HOME", path: "/" },
    { label: "NEW RELEASE", path: "/newrelease" },
    { label: "ABOUT US", path: "/aboutus" },
    { label: "FAQ", path: "/faq" },
  ];

  const shopItems = [
    { label: "TOPS", path: "/tops" },
    { label: "BOTTOMS", path: "/bottoms" },
    { label: "HEADWEAR", path: "/headwear" },
  ];

  return (
    <>
      {/* Top Navigation */}
      <nav className="fixed top-6 w-full z-50 border-b border-white/10 bg-white">
        <div className="max-w-[2000px] mx-auto px-4 sm:px-8">
          <div className="relative flex items-center justify-between h-7">
            {/* Left: nav links */}
            <div className="hidden md:flex space-x-16 text-xs tracking-[0.2em]">
              {navItems.map(({ label, path }) => (
                <Link key={label} to={path} className="hover-line relative">
                  {label}
                </Link>
              ))}
            </div>

            {/* Center: logo */}
            <div className="absolute left-1/2 transform -translate-x-1/2 text-2xl sm:text-3xl font-light tracking-[0.3em] font-[Cormorant_Garamond]">
              noctem
            </div>

            {/* Right: icons */}
            <div className="hidden md:flex items-center space-x-4">
              <FlagIcon className="w-5 h-5 text-black cursor-pointer hover:text-gray-600" />
              <FiSearch className="w-5 h-5 text-black cursor-pointer hover:text-gray-600" />
              <FiShoppingCart className="w-5 h-5 text-black cursor-pointer hover:text-gray-600" />
            </div>

            {/* Mobile Menu Toggle */}
            <button
              className="md:hidden w-8 h-8 flex flex-col justify-center space-y-2"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Toggle menu"
            >
              <span
                className={`w-full h-[1px] bg-black transition-transform origin-right ${
                  menuOpen ? "rotate-[-45deg]" : ""
                }`}
              ></span>
              <span
                className={`w-full h-[1px] bg-black transition-transform origin-right ${
                  menuOpen ? "rotate-[45deg]" : ""
                }`}
              ></span>
            </button>
          </div>
        </div>
      </nav>

      {/* Second Navigation */}
      <nav className="fixed top-12 w-full z-50 border-b border-white/10 bg-white">
        <div className="max-w-[2000px] mx-auto px-4 sm:px-8">
          <div className="flex justify-start items-center h-7">
            <div className="hidden md:flex space-x-16 text-xs tracking-[0.2em]">
              {shopItems.map(({ label, path }) => (
                <Link
                  key={`shop-${label}`}
                  to={path}
                  className="hover-line relative"
                >
                  {label}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 z-40 flex flex-col justify-center items-center space-y-12 bg-black/80 backdrop-blur-md pt-24 md:hidden transition-transform duration-500 ${
          menuOpen ? "translate-y-0" : "-translate-y-full"
        }`}
      >
        {[...navItems, ...shopItems].map(({ label, path }) => (
          <Link
            key={`mobile-${label}`}
            to={path}
            className="text-2xl tracking-[0.2em] hover:text-white/50 transition-colors"
            onClick={() => setMenuOpen(false)}
          >
            {label}
          </Link>
        ))}
      </div>
    </>
  );
}

export default Navbar;
