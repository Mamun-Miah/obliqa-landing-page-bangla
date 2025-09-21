"use client";

import { useState } from "react";
import emailjs from "emailjs-com";
// import Map from "../Map/Map";
import { FiMapPin, FiPhone, FiMail, FiSend } from "react-icons/fi";

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    number: "",
    message: "",
  });

  const [status, setStatus] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("Sending...");

    emailjs
      .send(
        "service_wtov8ck", // service ID
        "template_syejxgv", // template ID
        formData,
        "6ToSd4r0vmxRi_zYC" // public key
      )
      .then(
        (response) => {
          console.log("SUCCESS!", response.status, response.text);
          setStatus("Message Sent Successfully!");
          setFormData({ name: "", number: "", email: "", message: "" });
        },
        (error) => {
          console.log("FAILED...", error);
          setStatus("Error Sending Message.");
        }
      );
  };

  return (
    <>
      <section className="min-h-screen flex items-center justify-center bg-gray-50 pt-32 px-4 pb-12">
        <div className="max-w-6xl w-full bg-white rounded-xl shadow-lg overflow-hidden">
          <div className="md:flex">
            {/* Contact Form Section */}
            <div className="w-full md:w-1/2 p-8 md:p-12">
              <h2 className="text-3xl font-bold text-gray-800 mb-2">Contact Us</h2>
              <p className="text-gray-600 mb-8">
                Have questions or want to discuss a project? Send us a message and we'll get back to you soon.
              </p>

              <form onSubmit={handleSubmit} className="space-y-6 text-black">
                <div>
                  <label className="block text-gray-700 text-sm font-medium mb-2" htmlFor="name">
                    Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    placeholder="e.g. John Doe"
                    className="w-full px-4 py-3 border border-gray-500 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent placeholder-gray-400"
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-gray-700 text-sm font-medium mb-2" htmlFor="number">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      name="number"
                      value={formData.number}
                      onChange={handleChange}
                      required
                      placeholder="e.g. +880 1234 567890"
                      className="w-full px-4 py-3 border border-gray-500 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent placeholder-gray-400"
                    />
                  </div>

                  <div>
                    <label className="block text-gray-700 text-sm font-medium mb-2" htmlFor="email">
                      Email
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      placeholder="e.g. example@domain.com"
                      className="w-full px-4 py-3 border border-gray-500 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent placeholder-gray-400"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-gray-700 text-sm font-medium mb-2" htmlFor="message">
                    Message
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    placeholder="Tell us about your project or inquiry..."
                    className="w-full px-4 py-3 border border-gray-500 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent placeholder-gray-400"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full bg-orange-500 hover:bg-blue-700 text-white font-medium py-3 px-6 rounded-lg transition duration-300 flex items-center justify-center"
                >
                  <FiSend className="mr-2" />
                  Send Message
                </button>

                {status && (
                  <p
                    className={`text-center ${status.includes("Success") ? "text-green-600" : "text-red-600"
                      }`}
                  >
                    {status}
                  </p>
                )}
              </form>
            </div>

            {/* Contact Info Section */}
            <div className="w-full md:w-1/2 bg-gradient-to-br from-blue-50 to-indigo-50 p-8 md:p-12">
              <h3 className="text-2xl font-bold text-gray-800 mb-6">Contact Information</h3>

              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="bg-blue-100 p-3 rounded-full mr-4">
                    <FiMapPin className="text-orange-600" size={20} />
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-1">Address</h4>
                    <p className="text-gray-700">Dhaka, Bangladesh</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-blue-100 p-3 rounded-full mr-4">
                    <FiPhone className="text-orange-600" size={20} />
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-1">Phone</h4>
                    <p className="text-gray-700">+880 170 680 3616</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-blue-100 p-3 rounded-full mr-4">
                    <FiMail className="text-orange-600" size={20} />
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-1">Email</h4>
                    <p className="text-gray-700">contact@obliqa.com</p>
                  </div>
                </div>

                <div className="space-y-3">
                  {/* 24/7 Online Support Highlight */}
                  <div className="flex items-center justify-between bg-gradient-to-r from-orange-400 via-orange-500 to-orange-600 text-white px-4 py-2 rounded-lg shadow-md">
                    <div className="flex items-center gap-2">
                      <svg
                        className="w-5 h-5 text-white animate-pulse"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M18.364 5.636A9 9 0 105.636 18.364 9 9 0 0018.364 5.636z"
                        />
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                        />
                      </svg>
                      <span className="font-semibold">24/7 Online Support</span>
                    </div>
                    <span className="font-bold">Always Available</span>
                  </div>

                  {/* Weekly Schedule */}
                  {["Saturday", "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday"].map(
                    (day) => (
                      <div className="flex justify-between" key={day}>
                        <span className="text-gray-600">{day}</span>
                        <span className="text-gray-800 font-medium">9:00 AM - 6:00 PM</span>
                      </div>
                    )
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <Map /> */}
    </>
  );
};

export default ContactPage;
