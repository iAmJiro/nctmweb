import React, { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import emailjs from "emailjs-com"; // ✅ import EmailJS

const fadeSlide = {
  initial: { opacity: 0, x: -100 },
  animate: { opacity: 1, x: 0 },
  transition: { duration: 0.4, ease: [0.33, 1, 0.68, 1] },
};

const ProductCard = ({
  title = "White Line Dress",
  imageUrl = "https://klbtheme.com/shopwise/fashion/wp-content/uploads/2020/04/product_img10-1.jpg",
  price = "$45.00",
  oldPrice = "$15.00",
  rating = 4,
  reviews = 1,
}) => (
  <div className="w-96">
    <div className="shadow hover:shadow-lg transition duration-300 ease-in-out mb-6 cursor-pointer group">
      <div className="overflow-hidden relative">
        <img
          className="w-full transition duration-700 ease-in-out group-hover:opacity-60"
          src={imageUrl}
          alt={title}
        />
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 flex gap-2 transition duration-500 ease-in-out">
          {["shopping-cart", "random", "search", "heart"].map((icon) => (
            <a
              key={icon}
              href="#"
              className="bg-gray-700 px-3 py-3 hover:bg-red-500 transition duration-300 ease-in-out"
            >
              <i className={`fas fa-${icon} text-gray-100`}></i>
            </a>
          ))}
        </div>
      </div>

      <div className="px-4 py-3 bg-white">
        <a href="#">
          <h1 className="text-gray-800 font-semibold text-lg hover:text-red-500 transition duration-300 ease-in-out">
            {title}
          </h1>
        </a>
        <div className="flex py-2">
          <p className="mr-2 text-xs text-gray-600">{price}</p>
          <p className="mr-2 text-xs text-red-600 line-through">{oldPrice}</p>
        </div>
        <div className="flex items-center">
          {[...Array(5)].map((_, i) => (
            <i
              key={i}
              className={`text-xs ${
                i < rating
                  ? "fas fa-star text-yellow-400"
                  : "far fa-star text-gray-400"
              }`}
            ></i>
          ))}
          <p className="ml-2 text-gray-500 font-medium text-sm">({reviews})</p>
        </div>
      </div>
    </div>
  </div>
);

const HeroSection = ({ scrollToFeatured, openNewsletter }) => (
  <div className="relative flex-1 min-h-screen flex items-center">
    <div className="absolute inset-0">
      <img
        src="https://images.unsplash.com/photo-1507679799987-c73779587ccf"
        alt="Luxury Suit"
        className="w-full h-full object-cover"
      />
      <div className="absolute inset-0 image-gradient"></div>
    </div>

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

        <div className="space-y-4">
          <motion.button
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: [1, 1.05, 0.98, 1.02, 1] }}
            transition={{ delay: 1.4, duration: 0.6 }}
            onClick={scrollToFeatured}
            className="group px-8 sm:px-12 py-4 border bg-black border-white text-xs tracking-[0.2em] hover:text-sm hover:text-black transition-all duration-500 flex items-center gap-4"
          >
            FEATURED COLLECTION
            <span className="h-[1px] w-8 bg-current transform transition-transform group-hover:translate-x-2"></span>
          </motion.button>

          <motion.button
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: [1, 1.05, 0.98, 1.02, 1] }}
            transition={{ delay: 1.6, duration: 0.6 }}
            onClick={openNewsletter}
            className="group px-8 sm:px-12 py-4 border bg-black border-white text-xs tracking-[0.2em] hover:text-sm hover:text-black transition-all duration-500 flex items-center gap-4"
          >
            SUBSCRIBE TO NEWSLETTER
            <span className="h-[1px] w-8 bg-current transform transition-transform group-hover:translate-x-2"></span>
          </motion.button>
        </div>
      </div>
    </motion.div>
  </div>
);

const HeroImageOnly = () => (
  <div className="relative flex-1 min-h-screen">
    <div className="absolute inset-0">
      <img
        src="https://images.unsplash.com/photo-1507679799987-c73779587ccf"
        alt="Luxury Suit"
        className="w-full h-full object-cover"
      />
      <div className="absolute inset-0 image-gradient"></div>
    </div>
  </div>
);

const NewsletterPopup = ({ isOpen, onClose }) => {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    // ✅ Send email using EmailJS
    emailjs
      .send(
        "service_hyexll9", // Service ID
        "template_ojkknut", // Template ID
        { email: email }, // Template parameters
        "byMpOZOmxO-zU25xa" // Public Key
      )
      .then(
        () => {
          setStatus("success");
          setEmail("");
          setTimeout(() => {
            setStatus("");
            onClose();
          }, 2000);
        },
        (error) => {
          console.error("EmailJS error:", error);
          setStatus("error");
        }
      );
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/70 flex items-center justify-center z-50"
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="bg-white text-black p-8 rounded-2xl w-full max-w-md shadow-lg relative"
          >
            <button
              onClick={onClose}
              className="absolute top-4 right-4 text-gray-600 hover:text-black"
            >
              ✕
            </button>
            <h2 className="text-2xl font-semibold mb-4">
              Subscribe to our Newsletter
            </h2>
            <p className="text-gray-600 mb-6">
              Get the latest updates, offers, and style inspiration directly to
              your inbox.
            </p>
            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
              <input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="border px-4 py-3 rounded-md focus:outline-none focus:ring-2 focus:ring-black"
              />
              <button
                type="submit"
                className="bg-black text-white py-3 rounded-md hover:bg-gray-800 transition"
              >
                Subscribe
              </button>
            </form>

            {status === "success" && (
              <p className="text-green-600 mt-4">✅ Subscribed successfully!</p>
            )}
            {status === "error" && (
              <p className="text-red-600 mt-4">
                ❌ Something went wrong. Please try again.
              </p>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

const Home = () => {
  const featuredRef = useRef(null);
  const [isDesktop, setIsDesktop] = useState(false);
  const [showNewsletter, setShowNewsletter] = useState(false);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });

    const mediaQuery = window.matchMedia("(min-width: 768px)");
    setIsDesktop(mediaQuery.matches);

    const handleResize = () => setIsDesktop(mediaQuery.matches);
    mediaQuery.addEventListener("change", handleResize);
    return () => mediaQuery.removeEventListener("change", handleResize);
  }, []);

  const scrollToFeatured = () => {
    featuredRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <main className="bg-black text-white font-[Montserrat] selection:bg-white selection:text-black">
      <section className="flex flex-col md:flex-row min-h-screen">
        <HeroSection
          scrollToFeatured={scrollToFeatured}
          openNewsletter={() => setShowNewsletter(true)}
        />
        {isDesktop && <HeroImageOnly />}
      </section>

      <section ref={featuredRef} className="py-2 sm:py-2 px-4 sm:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-8 justify-items-center">
          {[...Array(5)].map((_, index) => (
            <ProductCard key={index} />
          ))}
        </div>
      </section>

      {/* Newsletter Modal */}
      <NewsletterPopup
        isOpen={showNewsletter}
        onClose={() => setShowNewsletter(false)}
      />
    </main>
  );
};

export default Home;
