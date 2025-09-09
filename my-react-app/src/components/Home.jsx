import React, { useState } from "react";

const Home = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className="bg-black text-white selection:bg-white selection:text-black font-[Montserrat] w-full">
      {/* Navigation */}
      <nav className="fixed w-full z-50 nav-blur border-b border-white/10">
        <div className="max-w-[2000px] mx-auto px-4 sm:px-8">
          <div className="flex justify-between h-24 items-center">
            <div className="text-2xl sm:text-3xl font-light tracking-[0.3em] font-[Cormorant_Garamond]">
              ATELIER
            </div>
            <div className="hidden md:flex space-x-16 text-xs tracking-[0.2em]">
              {["COLLECTIONS", "BESPOKE", "LOOKBOOK", "CONTACT"].map((item) => (
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
        {["COLLECTIONS", "BESPOKE", "LOOKBOOK", "CONTACT"].map((item) => (
          <a
            key={item}
            href="#"
            className="text-2xl tracking-[0.2em] hover:text-white/50 transition-colors"
          >
            {item}
          </a>
        ))}
      </div>

      {/* Hero Section */}
      <section className="min-h-screen relative flex items-center">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1507679799987-c73779587ccf"
            alt="Luxury Suit"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 image-gradient"></div>
        </div>
        <div className="relative z-10 max-w-[2000px] mx-auto px-4 sm:px-8 pt-32">
          <div className="max-w-4xl">
            <p
              className="text-sm tracking-[0.3em] mb-8 fade-in"
              style={{ animationDelay: "0.5s" }}
            >
              WELCOME TO ATELIER
            </p>
            <h1
              className="text-[12vw] md:text-[7vw] font-light leading-[0.9] mb-8 fade-in font-[Cormorant_Garamond]"
              style={{ animationDelay: "0.8s" }}
            >
              CRAFTED WITH
              <br />
              PRECISION
            </h1>
            <div
              className="h-[1px] w-32 bg-white reveal-line mb-12"
              style={{ animationDelay: "1.2s" }}
            ></div>
            <p
              className="text-lg sm:text-xl font-light tracking-wide text-white/80 max-w-xl mb-16 fade-in leading-relaxed"
              style={{ animationDelay: "1.5s" }}
            >
              Experience the epitome of tailoring excellence, where every stitch
              tells a story of uncompromising quality and timeless elegance.
            </p>
            <button
              className="group w-full sm:w-auto px-8 sm:px-12 py-4 border border-white hover:bg-white hover:text-black transition-all duration-500 text-xs tracking-[0.2em] fade-in flex items-center justify-center sm:justify-start gap-4"
              style={{ animationDelay: "1.8s" }}
            >
              EXPLORE COLLECTION
              <span className="h-[1px] w-8 bg-current transform transition-transform group-hover:translate-x-2"></span>
            </button>
          </div>
        </div>
      </section>

      {/* Scrolling Text */}
      <div className="overflow-hidden py-4 sm:py-8 bg-white text-black border-y border-black/20">
        <div className="whitespace-nowrap marquee inline-block text-[80px] sm:text-[120px] md:text-[180px] font-light leading-none opacity-90">
          TAILORED EXCELLENCE &nbsp;&nbsp;&nbsp; TAILORED EXCELLENCE
          &nbsp;&nbsp;&nbsp;
        </div>
      </div>

      {/* Featured Collection */}
      <section className="py-20 sm:py-40 px-4 sm:px-8">
        <div className="max-w-[2000px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 sm:gap-20">
          <div className="space-y-8 sm:space-y-12 self-center">
            <div className="space-y-4">
              <p className="text-sm tracking-[0.2em] text-white/60">
                2024 COLLECTION
              </p>
              <h2 className="text-4xl sm:text-5xl font-light tracking-wide font-[Cormorant_Garamond]">
                AUTUMN /<br />
                WINTER
              </h2>
            </div>
            <p className="text-white/70 leading-relaxed text-base sm:text-lg">
              Our latest collection embodies the perfect fusion of traditional
              craftsmanship and contemporary design. Each piece is meticulously
              crafted to stand the test of time.
            </p>
            <button className="group w-full sm:w-auto text-sm tracking-[0.2em] hover:text-white/50 transition-colors flex items-center justify-center sm:justify-start gap-6">
              VIEW COLLECTION
              <span className="h-[1px] w-12 bg-current transform transition-transform group-hover:translate-x-4"></span>
            </button>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <img
              src="https://images.unsplash.com/photo-1594938328870-9623159c8c99"
              alt="Suit Detail"
              className="w-full aspect-[3/4] object-cover hover:scale-[1.02] transition-transform duration-700"
            />
            <img
              src="https://images.unsplash.com/photo-1598808503746-f34c53b9323e"
              alt="Suit Detail"
              className="w-full aspect-[3/4] object-cover sm:mt-20 hover:scale-[1.02] transition-transform duration-700"
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
