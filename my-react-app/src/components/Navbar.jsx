import React, { useState } from "react";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <>
      {/* Navigation */}
      <nav className="fixed w-full z-50 nav-blur border-b border-white/10">
        <div className="max-w-[2000px] mx-auto px-4 sm:px-8">
          <div className="flex justify-between h-24 items-center">
            <div className="text-2xl sm:text-3xl font-light tracking-[0.3em] font-[Cormorant_Garamond]">
              noctem
            </div>
            <div className="hidden md:flex space-x-16 text-xs tracking-[0.2em]">
              {["HOME", "RELEASE", "CONTACT US", "FAQ"].map((item) => (
                <a key={item} href="#" className="hover-line relative">
                  {item}
                </a>
              ))}
            </div>
            <button
              className="md:hidden w-8 h-8 flex flex-col justify-center space-y-2"
              onClick={toggleMenu}
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
        className={`fixed inset-0 bg-black z-40 flex flex-col justify-center items-center space-y-12 nav-blur md:hidden pt-24 mobile-menu ${
          menuOpen ? "active translate-y-0" : "-translate-y-full"
        } transition-transform duration-500`}
      >
        {["HOME", "RELEASE", "CONTACT US", "FAQ"].map((item) => (
          <a
            key={item}
            href="#"
            className="text-2xl tracking-[0.2em] hover:text-white/50 transition-colors"
          >
            {item}
          </a>
        ))}
      </div>
    </>
  );
}

export default Navbar;
