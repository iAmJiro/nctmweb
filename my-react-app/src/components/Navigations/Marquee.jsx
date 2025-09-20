import React from "react";
import { motion } from "framer-motion";

function Marquee() {
  return (
    <section className="fixed top-0 left-0 w-full z-40 overflow-hidden py-6 sm:py-2 bg-white text-black border-y border-black/20">
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
          <div className="flex gap-12 text-[12px] sm:text-[16px] md:text-[18px] font-light leading-tight opacity-90">
            {Array(100)
              .fill("TAILORED EXCELLENCE")
              .map((text, i) => (
                <span key={i}>{text}</span>
              ))}
          </div>
          <div className="flex gap-12 text-[12px] sm:text-[16px] md:text-[20px] font-light leading-tight opacity-90">
            {Array(100)
              .fill("TAILORED EXCELLENCE")
              .map((text, i) => (
                <span key={`clone-${i}`}>{text}</span>
              ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default Marquee;
