import React, { useState } from "react";
import { motion } from "framer-motion";

const faqs = [
  {
    question: "What is a SAAS platform?",
    answer:
      "SAAS platform is a cloud-based software service that allows users to access and use a variety of tools and functionality.",
  },
  {
    question: "How does billing work?",
    answer:
      "We offer a variety of billing options, including monthly and annual subscription plans, as well as pay-as-you-go pricing for certain services. Payment is typically made through a credit card or other secure online payment method.",
  },
  {
    question: "Can I get a refund for my subscription?",
    answer:
      "We offer a 30-day money-back guarantee for most of our subscription plans. If you're not satisfied within the first 30 days, you can request a full refund. Refunds beyond that may be considered case-by-case.",
  },
  {
    question: "How do I cancel my subscription?",
    answer:
      "Log in to your account and navigate to the subscription management page. From there, you can cancel your subscription and stop future billing.",
  },
  {
    question: "Can I try this platform for free?",
    answer:
      "We offer a free trial for a limited time. During the trial, you'll have access to a limited set of features without being charged.",
  },
  {
    question: "How do I access documentation?",
    answer:
      "Documentation is available on the company's website and can be accessed by logging into your account. It includes detailed usage guides, code examples, and other resources.",
  },
  {
    question: "How do I contact support?",
    answer:
      "You can contact our support team by submitting a request through the website or emailing support@We.com.",
  },
  {
    question: "Do you offer any discounts or promotions?",
    answer:
      "We may offer discounts or promotions from time to time. Stay updated by subscribing to our newsletter or following us on social media.",
  },
  {
    question: "How do we compare to other similar services?",
    answer:
      "This platform is highly reliable and feature-rich, offering a wide range of tools. It's competitively priced with flexible billing options.",
  },
];

export default function Faq() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="max-w-screen-xl mx-auto px-5 bg-white min-h-screen md:pt-26 pt-20">
      <div className="flex flex-col items-center">
        <motion.h2
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="font-bold text-5xl mt-5 tracking-tight"
        >
          FAQ
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="text-neutral-500 text-xl mt-3"
        >
          Frequently asked questions
        </motion.p>
      </div>

      <div className="grid divide-y divide-neutral-200 max-w-xl mx-auto mt-8">
        {faqs.map((faq, index) => (
          <motion.div
            key={index}
            initial={{ x: -100, scale: 0.95 }}
            animate={{
              x: 0,
              scale: [1, 1.05, 0.98, 1.02, 1],
            }}
            transition={{
              duration: 0.5,
              ease: [0.6, -0.05, 0.01, 0.99],
              delay: index * 0.08,
              times: [0, 0.2, 0.4, 0.6, 1],
            }}
            className="py-5"
          >
            <div className="group">
              <button
                onClick={() => toggle(index)}
                className="flex justify-between items-center w-full font-medium cursor-pointer list-none"
              >
                <span>{faq.question}</span>
                <span
                  className={`transition transform ${
                    openIndex === index ? "rotate-180" : ""
                  }`}
                >
                  <svg
                    fill="none"
                    height="24"
                    width="24"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M6 9l6 6 6-6" />
                  </svg>
                </span>
              </button>

              <motion.div
                initial={false}
                animate={openIndex === index ? "open" : "closed"}
                variants={{
                  open: { height: "auto", opacity: 1, y: 0 },
                  closed: { height: 0, opacity: 0, y: -10 },
                }}
                transition={{ duration: 0.3, ease: "easeOut" }}
                className="overflow-hidden"
              >
                <p className="text-neutral-600 mt-3">{faq.answer}</p>
              </motion.div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
