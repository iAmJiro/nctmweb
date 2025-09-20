import React from "react";

const Footer = () => {
  return (
    <footer className="bg-white">
      <div className="mx-auto max-w-screen-xl space-y-8 px-4 py-16 sm:px-6 lg:space-y-16 lg:px-8">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
          <div>
            <div className="text-teal-600">
              {/* Logo or Icon can go here */}
            </div>

            <p className="mt-4 max-w-xs text-gray-500">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Esse non
              cupiditate quae nam molestias.
            </p>

            <ul className="mt-8 flex gap-6">
              {["Facebook", "Instagram", "Twitter", "GitHub", "Dribbble"].map(
                (platform) => (
                  <li key={platform}>
                    <a
                      href="#"
                      rel="noreferrer"
                      target="_blank"
                      className="text-gray-700 transition hover:opacity-75"
                    >
                      <span className="sr-only">{platform}</span>
                      {/* Icon component can go here */}
                    </a>
                  </li>
                )
              )}
            </ul>
          </div>

          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:col-span-2 lg:grid-cols-4">
            {[
              {
                title: "Services",
                links: [
                  "1on1 Coaching",
                  "Company Review",
                  "Accounts Review",
                  "HR Consulting",
                  "SEO Optimisation",
                ],
              },
              {
                title: "Company",
                links: ["About", "Meet the Team", "Accounts Review"],
              },
              {
                title: "Helpful Links",
                links: ["Contact", "FAQs", "Live Chat"],
              },
              {
                title: "Legal",
                links: [
                  "Accessibility",
                  "Returns Policy",
                  "Refund Policy",
                  "Hiring-3 Statistics",
                ],
              },
            ].map((section) => (
              <div key={section.title}>
                <p className="font-medium text-gray-900">{section.title}</p>
                <ul className="mt-6 space-y-4 text-sm">
                  {section.links.map((link) => (
                    <li key={link}>
                      <a
                        href="#"
                        className="text-gray-700 transition hover:opacity-75"
                      >
                        {link}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <p className="text-xs text-gray-500">
          &copy; 2022. Company Name. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
