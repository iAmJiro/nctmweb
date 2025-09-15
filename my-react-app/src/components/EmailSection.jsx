import React, { useRef } from "react";
import emailjs from "emailjs-com";

function EmailSection() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_hyexll9", // Replace with your Email.js service ID
        "template_yglvh78", // Replace with your Email.js template ID
        form.current,
        "byMpOZOmxO-zU25xa" // Replace with your Email.js public key
      )
      .then(
        (result) => {
          console.log("Email sent:", result.text);
          alert("Message sent successfully!");
          form.current.reset();
        },
        (error) => {
          console.error("Email error:", error.text);
          alert("Failed to send message. Please try again.");
        }
      );
  };

  return (
    <div className="md:pt-6">
      <div className="heading mx-auto text-center">
        <h1 className="mx-auto my-5 text-center text-3xl sm:text-4xl font-bold">
          Your question not in the FAQ?
        </h1>

        <div className="contact-icons flex flex-col sm:flex-row items-center justify-center text-center mx-auto gap-4">
          <div className="flex flex-row items-center">
            <img
              src="https://img.icons8.com/material-sharp/24/marker.png"
              alt="location icon"
              width="25"
              height="25"
              className="mr-2"
            />
            <span>Location</span>
          </div>

          <div className="flex flex-row items-center">
            <img
              src="https://img.icons8.com/material-rounded/96/mail.png"
              alt="mail icon"
              width="25"
              height="25"
              className="ml-5 mr-2"
            />
            <span>Email Id</span>
          </div>
        </div>
      </div>

      <div className="form-portion bg-stone-100 sm:w-[80%] w-[90%] mx-auto mt-10 rounded-xl shadow-md">
        <form ref={form} onSubmit={sendEmail} className="p-5">
          <div className="initials flex flex-col md:flex-row justify-evenly gap-4 mb-5">
            <div className="flex flex-col md:w-[35%]">
              <label htmlFor="from_name" className="text-xl mb-1">
                Full Name:
              </label>
              <input
                type="text"
                name="from_name"
                id="from_name"
                placeholder="Enter your full name"
                className="px-4 py-2 rounded-xl"
                required
              />
            </div>

            <div className="flex flex-col md:w-[35%]">
              <label htmlFor="from_email" className="text-xl mb-1">
                Email Id:
              </label>
              <input
                type="email"
                name="from_email"
                id="from_email"
                placeholder="Enter your email"
                className="px-4 py-2 rounded-xl"
                required
              />
            </div>
          </div>

          <div className="md:p-5 p-1">
            <div className="mb-5">
              <label htmlFor="phone" className="text-xl">
                Phone:
              </label>
              <input
                type="text"
                name="phone"
                id="phone"
                placeholder="Enter your phone number"
                className="w-full px-4 py-2 mt-1 rounded-xl"
              />
            </div>

            <div className="mb-5">
              <label htmlFor="message" className="text-xl">
                Questions / Message:
              </label>
              <textarea
                name="message"
                id="message"
                rows="5"
                placeholder="Write your message here"
                className="w-full px-4 py-2 mt-1 rounded-xl text-md appearance-none"
                autoComplete="off"
                spellCheck="false"
                required
              />
            </div>
          </div>

          <div className="btn w-full flex items-center">
            <button
              type="submit"
              className="px-4 py-2 mx-auto rounded-xl text-xl bg-black text-white hover:text-black hover:bg-white hover:font-bold hover:shadow-xl"
            >
              Send Message
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default EmailSection;
