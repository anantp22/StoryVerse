import React from 'react';
import { useState } from 'react';

function GetInTouchSection() {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your form submission logic here
    setIsSubmitted(true);
  };

  return (
    <section className="py-16 px-4 bg-gradient-to-r from-[#EF060F] to-[#b60cf2] text-white border border-[#081A42] rounded-lg shadow-lg">
      <div className="container mx-auto flex flex-col lg:flex-row items-center justify-center space-y-8 lg:space-y-0">
        {/* Image on the left side */}
        <div className="w-full lg:w-1/2">
          <img
            src="src\assets\brooke-cagle-g1Kr4Ozfoac-unsplash.jpg" // Replace with your image path
            alt="Contact"
            className="max-w-full h-auto rounded-lg shadow-lg"
          />
        </div>
        {/* Contact form on the right side */}
        <div className="w-full lg:w-1/2 bg-white rounded-lg p-8">
          <h2 className="text-3xl font-semibold text-[#081A42] mb-6">Get in Touch</h2>
          {isSubmitted ? (
            <div className="text-[#081A42] font-semibold text-lg mb-6">Thank you for your message!</div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-[#081A42] font-semibold">
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="w-full border border-gray-300 p-2 rounded-md focus:outline-none focus:border-[#081A42]"
                  placeholder="Enter your name"
                  required
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-[#081A42] font-semibold">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="w-full border border-gray-300 p-2 rounded-md focus:outline-none focus:border-[#081A42]"
                  placeholder="Enter your email"
                  required
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-[#081A42] font-semibold">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows="4"
                  className="w-full border border-gray-300 p-2 rounded-md focus:outline-none focus:border-[#081A42]"
                  placeholder="Your message here"
                  required
                ></textarea>
              </div>
              <div className="text-center">
                <button
                  type="submit"
                  className="bg-[#EF060F] text-white px-4 py-2 rounded-md hover:bg-[#b60cf2] transition duration-300 ease-in-out"
                >
                  Send Message
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}

export default GetInTouchSection;
