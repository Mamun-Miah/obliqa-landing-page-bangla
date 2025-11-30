"use client";

import { useState } from "react";
import { Check } from "lucide-react";
import { FiSend } from "react-icons/fi";
import emailjs from "emailjs-com";

export default function Price() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    number: "",
    price: "",
    message: "",
  });

  const [status, setStatus] = useState("");

  const handleChange = (e: { target: { name: any; value: any; }; }) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    setStatus("Sending...");

    emailjs
      .send(
        "service_ry6rlfd",       // your service ID
        "template_j8bx9dc",      // your template ID
        formData,
        "0YllvmGmbCyANgFRr"      // your public key
      )
      .then(
        (response) => {
          console.log("SUCCESS!", response.status, response.text);
          setStatus("Success: Message Sent Successfully!");
          setFormData({
            name: "",
            email: "",
            number: "",
            price: "",
            message: "",
          });
        },
        (error) => {
          console.log("FAILED...", error);
          setStatus("Error Sending Message.");
        }
      );
  };

  return (
    <div id="pricing">
      <div className="text-gray-600 px-2">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-8">
            আমাদের ওয়েবসাইট প্যাকেজ সমূহ
          </h2>
        </div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">

          {/* ---- Standard Package ---- */}
          <div className="card bg-white shadow-lg relative">
            <div className="absolute top-2 right-2 bg-red-500 text-white px-3 py-1 rounded-full text-sm font-bold">
              50% OFF
            </div>

            <div className="card-body">
              <h3 className="card-title text-xl font-bold text-center mb-2">
                স্ট্যান্ডার্ড প্যাকেজ
              </h3>

              <p className="text-center text-gray-600 mb-4">
                ছোট ব্যবসার জন্য, স্বল্প খরচে মানসম্মত ওয়েবসাইট
              </p>

              <div className="text-center mb-6">
                <span className="text-lg line-through text-gray-400">
                  ১৪,৯৯০/-
                </span>
                <div className="text-3xl font-bold text-purple-600">
                  ৬,৯৯০/- টাকা
                </div>
              </div>

              <ul className="space-y-2 mb-6">
                {[
                  "Up to 5 Pages",
                  "১ বছর ফ্রি হোস্টিং (১ বছর)",
                  "Responsive Design",
                  "কনটেন্ট ম্যানেজমেন্ট সিস্টেম",
                  "বেসিক SEO",
                  "সোশ্যাল মিডিয়া লিংক SEO Ready",
                  "Standard Website Speed",
                  "৩০ দিনের সাপোর্ট",
                  "Maintain Support",
                  "ডেলিভারি ৭-১০ কার্যদিবস",
                ].map((item, i) => (
                  <li key={i} className="flex items-center space-x-2">
                    <Check className="w-4 h-4 text-green-500" />
                    <span className="text-sm">{item}</span>
                  </li>
                ))}
              </ul>

              <button
                onClick={() =>
                  document
                    .getElementById("contact-section")
                    ?.scrollIntoView({ behavior: "smooth" })
                }
                className="btn btn-outline btn-accent w-full"
              >
                যোগাযোগ করুন এখনি
              </button>
            </div>
          </div>

          {/* ---- Premium Package ---- */}
          <div className="card bg-white shadow-xl border-2 border-purple-500 relative">
            <div className="absolute top-2 right-2 bg-red-500 text-white px-3 py-1 rounded-full text-sm font-bold">
              50% OFF
            </div>

            <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
              <span className="badge badge-accent text-white px-4 py-2">Best Choice</span>
            </div>

            <div className="card-body">
              <h3 className="card-title text-xl font-bold text-center mb-2">
                প্রিমিয়াম প্যাকেজ
              </h3>

              <p className="text-center text-gray-600 mb-4">
                মাঝারি ব্যবসার জন্য, আরও ফিচার ও সুবিধা সহ
              </p>

              <div className="text-center mb-6">
                <span className="text-lg line-through text-gray-400">
                  ১৭,৯৯০/-
                </span>
                <div className="text-3xl font-bold text-purple-600">
                  ৮,৯৯০/- টাকা
                </div>
              </div>

              <ul className="space-y-2 mb-6">
                {[
                  "Up to 10 Pages",
                  "১ বছর ফ্রি হোস্টিং (১ বছর)",
                  "Responsive Design",
                  "কনটেন্ট ম্যানেজমেন্ট সিস্টেম",
                  "Advanced SEO",
                  "সোশ্যাল মিডিয়া ইন্টিগ্রেশন",
                  "Contact Form & Google Map Integration",
                  "Payment Gateway",
                  "Blog Functionality",
                  "৬০ দিনের সাপোর্ট",
                  "Maintain Support",
                  "ডেলিভারি ৭-১০ কার্যদিবস",
                ].map((item, i) => (
                  <li key={i} className="flex items-center space-x-2">
                    <Check className="w-4 h-4 text-green-500" />
                    <span className="text-sm">{item}</span>
                  </li>
                ))}
              </ul>

              <button
                onClick={() =>
                  document
                    .getElementById("contact-section")
                    ?.scrollIntoView({ behavior: "smooth" })
                }
                className="btn btn-accent w-full"
              >
                যোগাযোগ করুন এখনি
              </button>
            </div>
          </div>

          {/* ---- Enterprise Package ---- */}
          <div className="card bg-white shadow-lg relative">
            <div className="absolute top-2 right-2 bg-red-500 text-white px-3 py-1 rounded-full text-sm font-bold">
              50% OFF
            </div>

            <div className="card-body">
              <h3 className="card-title text-xl font-bold text-center mb-2">
                এন্টারপ্রাইজ প্যাকেজ
              </h3>

              <p className="text-center text-gray-600 mb-4">
                বড় ব্যবসার জন্য, সম্পূর্ণ ফিচার ও কাস্টমাইজেশন সহ
              </p>

              <div className="text-center mb-6">
                <span className="text-lg line-through text-gray-400">
                  ৩০,৯৯০/-
                </span>
                <div className="text-3xl font-bold text-purple-600">
                  ১৫,৯৯০/- টাকা
                </div>
              </div>

              <ul className="space-y-2 mb-6">
                {[
                  "Unlimited Pages",
                  "Unlimited SSD Hosting",
                  "১ বছর ফ্রি SSL",
                  "Google Analytics, Facebook Pixel",
                  "Business Tools Integration",
                  "Fully customizable",
                  "Unlimited Business Email",
                  "Maximum Website Speed",
                  "Unlimited page design",
                  "৯০ দিনের সাপোর্ট",
                  "ডেলিভারি ৭-১৫ কর্মদিবস",
                ].map((item, i) => (
                  <li key={i} className="flex items-center space-x-2">
                    <Check className="w-4 h-4 text-green-500" />
                    <span className="text-sm">{item}</span>
                  </li>
                ))}
              </ul>

              <button
                onClick={() =>
                  document
                    .getElementById("contact-section")
                    ?.scrollIntoView({ behavior: "smooth" })
                }
                className="btn btn-outline btn-accent w-full"
              >
                যোগাযোগ করুন এখনি
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* ---- Custom Plan Form ---- */}
      <div className="bg-white my-6 w-full p-4 md:p-8" id="contact-section">
        <div className="flex flex-col items-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-2">কাস্টম প্ল্যান</h2>
          <p className="text-gray-600 mb-8">
            আপনার লক্ষ্য আমাদের বলুন, আমরা আপনার প্রয়োজন ও বাজেট অনুযায়ী সমাধান তৈরি করে দেবো।
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">

          {/* Name + Email */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-gray-700 text-sm font-medium mb-2">
                নাম
              </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border border-black rounded-lg focus:ring-2 text-gray-900 placeholder:text-gray-400"
                placeholder="উদাহরণ: জন ডো"
              />
            </div>

            <div>
              <label className="block text-gray-700 text-sm font-medium mb-2">
                ইমেইল
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border border-black rounded-lg focus:ring-2 text-gray-900 placeholder:text-gray-400"
                placeholder="উদাহরণ: example@domain.com"
              />
            </div>
          </div>

          {/* Phone + Budget */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-gray-700 text-sm font-medium mb-2">
                ফোন নম্বর
              </label>
              <input
                type="tel"
                name="number"
                value={formData.number}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border border-black rounded-lg focus:ring-2 text-gray-900 placeholder:text-gray-400"
                placeholder="উদাহরণ: +880 1234 567890"
              />
            </div>

            <div>
              <label className="block text-gray-700 text-sm font-medium mb-2">
                বাজেট রেঞ্জ
              </label>
              <input
                type="text"
                name="price"
                value={formData.price}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border border-black rounded-lg focus:ring-2 text-gray-900 placeholder:text-gray-400"
                placeholder="উদাহরণ: ১০,০০০ - ৫০,০০০ টাকা"
              />
            </div>
          </div>

          {/* Message */}
          <div>
            <label className="block text-gray-700 text-sm font-medium mb-2">
              প্ল্যানের বর্ণনা
            </label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows={5}
              required
              className="w-full px-4 py-3 border border-black rounded-lg focus:ring-2 text-gray-900 placeholder:text-gray-400"
              placeholder="আপনার প্রয়োজনগুলো বিস্তারিত লিখুন..."
            ></textarea>
          </div>

          {/* Submit */}
          <button
            type="submit"
            className="w-full bg-orange-500 hover:bg-blue-700 text-white font-medium py-3 px-6 rounded-lg flex items-center justify-center"
          >
            <FiSend className="mr-2" />
            অনুরোধ পাঠান
          </button>

          {status && (
            <p
              className={`text-center ${status.includes("Success") ? "text-green-600" : "text-red-600"
                }`}
            >
              {status.includes("Success")
                ? "সফলভাবে পাঠানো হয়েছে"
                : "পাঠাতে সমস্যা হয়েছে"}
            </p>
          )}
        </form>
      </div>


    </div>
  );
}
