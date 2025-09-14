import React from "react";
import { motion } from "framer-motion";

const fadeSlide = {
  initial: { opacity: 0, x: -100 },
  animate: { opacity: 1, x: 0 },
  transition: {
    duration: 0.4,
    ease: [0.33, 1, 0.68, 1], // aggressive easeOut
  },
};

const Home = () => {
  return (
    <main className="bg-black text-white font-[Montserrat] selection:bg-white selection:text-black">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1507679799987-c73779587ccf"
            alt="Luxury Suit"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 image-gradient"></div>
        </div>

        {/* Hero Content */}
        <motion.div
          {...fadeSlide}
          className="relative z-10 max-w-[2000px] px-4 sm:px-8 ml-10 pt-32"
        >
          <div className="max-w-4xl space-y-8">
            <motion.p
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.5 }}
              className="text-sm tracking-[0.3em]"
            >
              NCTM - Graveyard Shift
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: [1, 1.1, 0.98, 1.02, 1] }}
              transition={{ delay: 0.5, duration: 0.7 }}
              className="text-[12vw] md:text-[7vw] font-light leading-[0.9] font-[Cormorant_Garamond]"
            >
              seize the
              <br />
              NIGHT
            </motion.h1>

            <motion.div
              initial={{ width: 0 }}
              animate={{ width: "8rem" }}
              transition={{ delay: 0.8, duration: 0.4 }}
              className="h-[1px] bg-white"
            />

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.1, duration: 0.5 }}
              className="text-lg sm:text-xl font-light tracking-wide text-white/80 max-w-xl leading-relaxed"
            >
              Experience the epitome of tailoring excellence, where every stitch
              tells a story of uncompromising quality and timeless elegance.
            </motion.p>

            <motion.button
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: [1, 1.05, 0.98, 1.02, 1] }}
              transition={{ delay: 1.4, duration: 0.6 }}
              className="group px-8 sm:px-12 py-4 border border-white text-xs tracking-[0.2em] hover:bg-white hover:text-black transition-all duration-500 flex items-center gap-4"
            >
              EXPLORE COLLECTION
              <span className="h-[1px] w-8 bg-current transform transition-transform group-hover:translate-x-2"></span>
            </motion.button>
          </div>
        </motion.div>
      </section>

      {/* Scrolling Marquee */}
      <section className="overflow-hidden py-4 sm:py-8 bg-white text-black border-y border-black/20">
        <div className="relative w-full">
          <motion.div
            initial={{ x: 0 }}
            animate={{ x: "-50%" }}
            transition={{
              repeat: Infinity,
              repeatType: "loop",
              duration: 50, // slower for smoother flow
              ease: "linear",
            }}
            className="flex whitespace-nowrap min-w-[200%]"
          >
            <div className="flex gap-24 text-[80px] sm:text-[120px] md:text-[180px] font-light leading-none opacity-90">
              {Array(4)
                .fill("TAILORED EXCELLENCE")
                .map((text, i) => (
                  <span key={i}>{text}</span>
                ))}
            </div>
            <div className="flex gap-24 text-[80px] sm:text-[120px] md:text-[180px] font-light leading-none opacity-90">
              {Array(4)
                .fill("TAILORED EXCELLENCE")
                .map((text, i) => (
                  <span key={`clone-${i}`}>{text}</span>
                ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Featured Collection */}
      <section className="py-20 sm:py-40 px-4 sm:px-8">
        <div className="max-w-[2000px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 sm:gap-20">
          {/* Text Content */}
          <motion.div
            {...fadeSlide}
            className="space-y-8 sm:space-y-12 self-center"
          >
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
          </motion.div>

          {/* Image Grid */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="grid grid-cols-1 sm:grid-cols-2 gap-6"
          >
            <motion.img
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.4 }}
              src="https://images.unsplash.com/photo-1594938328870-9623159c8c99"
              alt="Suit Detail"
              className="w-full aspect-[3/4] object-cover"
            />
            <motion.img
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.4 }}
              src="https://images.unsplash.com/photo-1598808503746-f34c53b9323e"
              alt="Suit Detail"
              className="w-full aspect-[3/4] object-cover sm:mt-20"
            />
          </motion.div>
        </div>
      </section>
    </main>
  );
};

export default Home;
