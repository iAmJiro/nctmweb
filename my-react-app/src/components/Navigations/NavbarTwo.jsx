import React, { useState } from "react";
import { Link } from "react-router-dom";

function NavbarTwo() {
  const [menuOpen, setMenuOpen] = useState(false);

  const navItems = [
    { label: "HOME", path: "/" },
    { label: "RELEASE", path: "/release" },
    { label: "ABOUT US", path: "/aboutus" },
    { label: "FAQ", path: "/faq" },
  ];

  return (
    <>
      {/* Main Navigation */}
      <nav className="fixed top-10 w-full z-50 border-b border-white/10 backdrop-blur-md bg-black/10">
        <div className="max-w-[2000px] mx-auto px-4 sm:px-8">
          <div className="flex justify-between items-center h-24">
            {/* Logo */}
            <div className="text-2xl sm:text-3xl font-light tracking-[0.3em] font-[Cormorant_Garamond]">
              noctem
            </div>

            {/* Desktop Links */}
            <div className="hidden md:flex space-x-16 text-xs tracking-[0.2em]">
              {navItems.map(({ label, path }) => (
                <Link key={label} to={path} className="hover-line relative">
                  {label}
                </Link>
              ))}
            </div>

            {/* Mobile Toggle */}
            <button
              className="md:hidden w-8 h-8 flex flex-col justify-center space-y-2"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Toggle menu"
            >
              <span
                className={`w-full h-[1px] bg-white transition-transform origin-right ${
                  menuOpen ? "rotate-[-45deg]" : ""
                }`}
              ></span>
              <span
                className={`w-full h-[1px] bg-white transition-transform origin-right ${
                  menuOpen ? "rotate-[45deg]" : ""
                }`}
              ></span>
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div
        className={`fixed inset-0 z-40 flex flex-col justify-center items-center space-y-12 bg-black/80 backdrop-blur-md pt-24 md:hidden transition-transform duration-500 ${
          menuOpen ? "translate-y-0" : "-translate-y-full"
        }`}
      >
        {navItems.map(({ label, path }) => (
          <Link
            key={label}
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

export default NavbarTwo;
