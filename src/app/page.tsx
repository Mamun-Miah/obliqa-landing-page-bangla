"use client";

import React from "react";
import {
  MessageCircle,
  RulerDimensionLine,
  Monitor,
  Users,
  Zap,
  List,
  Eye,
  BaggageClaim,
} from "lucide-react";
import Price from "./price";
import Faq from "./Faq";
import Footer from "./Footer";
import DiscountPopup from "./DiscountPopup";
import Navbar from "./Navbar";
import ContactPage from "./contact/page";
const page = () => {
  return (
    <>
      <div>
        <DiscountPopup />
      </div>
      <div className="relative lg:min-h-screen bg-[#209689]">
        {/* Navbar */}
        <Navbar />

        {/* Hero Content */}
        <div className="hero pt-8 pb-4">
          <div className="hero-content text-center">
            <div className="max-w-xl">
              <h1 className="text-5xl leading-tight text-white font-bold">
                নিশ্চিন্তে সার্ভিস নিন,
                <br /> পরে পেমেন্ট করুন!
              </h1>
              <p className="py-6 text-xl leading-relaxed text-white">
                আপনার ব্যবসার জন্য নিন সাশ্রয়ী, ঝামেলামুক্ত এবং রেডি টু ইউজ
                ওয়েবসাইট, যা আপনার ব্যাবসা কে করবে আরও উন্নত। আমাদের প্রিমিয়াম
                অফার নিশ্চিত করছে ইউজার ফ্রেন্ডলি ডিজাইন, কার্যকরী ফিচার এবং
                দ্রুত ফলাফল। আজই শুরু করুন এবং আপনার অনলাইন ব্যাবসা শক্তিশালী
                করুন!
              </p>
              <div className="flex gap-6 items-center justify-center sm:flex-row flex-col">
                <button
                  onClick={() =>
                    document
                      .getElementById("contact-section")
                      ?.scrollIntoView({ behavior: "smooth" })
                  }
                  className="btn btn-outline border-white bg-orange-400 hover:text-white hover:bg-transparent duration-300"
                >
                  বিস্তারিত জানতে চাই
                </button>
                <button
                  onClick={() =>
                    document
                      .getElementById("pricing")
                      ?.scrollIntoView({ behavior: "smooth" })
                  }
                  className="btn btn-outline border-white bg-orange-400 hover:text-white hover:bg-transparent duration-300 text-black"
                >
                  প্যাকেজগুলো দেখুন
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className=" bg-gradient-to-br from-purple-50 to-blue-50 px-4 lg:px-12">
        <div className="container mx-auto px-4 py-12 lg:py-20">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Left Section */}
            <div className="space-y-8">
              <div className="space-y-6">
                <h1 className="text-3xl lg:text-4xl font-bold text-gray-900 leading-tight">
                  বিশ্বাস তৈরি হোক কাজের মাধ্যমেই
                </h1>
                <p className="text-lg text-gray-600 leading-relaxed">
                  ✅ ১০০% নিরাপদ ও নির্ভরযোগ্য সার্ভিস।
                  <br />
                  ✅ আপনার সন্তুষ্টিই আমাদের দায়িত্ব ও অঙ্গীকার।
                  <br />
                  ✅ দ্রুততম সময়ে সেরা মানের সেবা নিশ্চিত করি।
                  <br />
                  ✅ অভিজ্ঞ ও দক্ষ টিম দ্বারা পরিচালিত।
                  <br />
                  ✅ সাশ্রয়ী মূল্যে প্রিমিয়াম মানের সেবা।
                  <br />
                  ✅ নিরবচ্ছিন্ন সাপোর্ট ও সহায়তা।
                  <br />
                  ✅ আপনার প্রয়োজন অনুযায়ী কাস্টমাইজড সমাধান।
                  <br />
                  ✅ প্রতিটি প্রজেক্টে আধুনিক প্রযুক্তি ও সেরা প্র্যাকটিস অনুসরণ
                  করি।
                  <br />
                  ✅ ক্লায়েন্টের আইডিয়া ও ভিশনকে গুরুত্ব দিয়ে কাজ করি।
                  <br />
                  ✅ দীর্ঘমেয়াদী সম্পর্ক ও আস্থার ভিত্তিতে সার্ভিস প্রদান করি।
                  <br />
                  ✅ আন্তর্জাতিক মান বজায় রেখে ইউজার-ফ্রেন্ডলি ও রেসপন্সিভ
                  ওয়েবসাইট তৈরি করি।
                  <br />
                  ✅ ব্যবসার লক্ষ্য পূরণে কার্যকর ডিজিটাল সমাধান নিশ্চিত করি।
                  <br />
                </p>
              </div>

              <button
                onClick={() =>
                  document
                    .getElementById("contact-section")
                    ?.scrollIntoView({ behavior: "smooth" })
                }
                className="btn btn-outline shadow border-black btn-lg bg-orange-400 hover:text-orange-400 hover:bg-transparent duration-300"
              >
                কথা বলতে চাই
              </button>
            </div>

            {/* Right Section */}
            <div className="space-y-8 px-2">
              {/* Project Management */}
              <div className="lg:flex max-md:flex-col items-start space-x-4">
                <div className="flex-shrink-0 w-12 h-12 bg-orange-400 rounded-full flex items-center justify-center lg:mb-0 mb-5">
                  <RulerDimensionLine className="w-6 h-6 text-white" />
                </div>
                <div className="space-y-2">
                  <h3 className="text-xl font-semibold text-gray-900">
                    প্রজেক্ট ম্যানেজমেন্ট
                  </h3>
                  <p className="text-gray-600 leading-relaxed text-justify">
                    আমাদের অভিজ্ঞ টিম একটি ধাপে ধাপে সুসংগঠিত প্রক্রিয়া অনুসরণ
                    করে, যা কার্যকর প্রজেক্ট ম্যানেজমেন্ট নিশ্চিত করে। প্রতিটি
                    ধাপ নির্ধারিত সময়সীমার মধ্যে সম্পন্ন করা হয়, যাতে আপনার
                    ওয়েবসাইট নির্ধারিত সময়ে, ঝামেলামুক্তভাবে এবং সর্বোচ্চ মান
                    বজায় রেখে ডেলিভার করা যায়।
                  </p>
                </div>
              </div>

              {/* Creative Work List */}
              <div className="lg:flex max-md:flex-col items-start space-x-4">
                <div className="flex-shrink-0 w-12 h-12 lg:mb-0 mb-5  bg-orange-400 rounded-full flex items-center justify-center">
                  <List className="w-6 h-6 text-white" />
                </div>
                <div className="space-y-2">
                  <h3 className="text-xl font-semibold text-gray-900">
                    আমাদের কাজের প্রক্রিয়া
                  </h3>
                  <p className="text-gray-600 text-justify leading-relaxed">
                    প্রতিটি ওয়েবসাইট ডেভেলপমেন্ট শুরুর আগে আমরা ক্লায়েন্টের
                    চাহিদা ও লক্ষ্য গভীরভাবে বিশ্লেষণ করি। এরপর একটি সম্পূর্ণ
                    পরিকল্পনা ও স্ট্র্যাটেজি তৈরি করি, যাতে প্রজেক্টের প্রতিটি
                    ধাপ স্পষ্টভাবে নির্ধারিত থাকে এবং কোনো গুরুত্বপূর্ণ অংশ বাদ
                    না যায়। এর মাধ্যমে আমরা নিশ্চিত করি যে, ফাইনাল ওয়েবসাইটটি
                    ক্লায়েন্টের প্রত্যাশার সাথে সামঞ্জস্যপূর্ণ এবং ব্যবসায়িক
                    লক্ষ্যে কার্যকরভাবে সহায়ক হবে।
                  </p>
                </div>
              </div>

              {/* Customer Follower View */}
              <div className="lg:flex max-md:flex-col items-start space-x-4">
                <div className="flex-shrink-0 lg:mb-0 mb-5 w-12 h-12 bg-orange-400 rounded-full flex items-center justify-center">
                  <Eye className="w-6 h-6 text-white" />
                </div>
                <div className="space-y-2">
                  <h3 className="text-xl font-semibold text-gray-900">
                    কাস্টমাইজড ভিউ ও স্ট্র্যাটেজি
                  </h3>
                  <p className="text-gray-600 leading-relaxed text-justify">
                    প্রতিটি ব্যবসার লক্ষ্য আলাদা, তাই আমরা দিই সম্পূর্ণ
                    কাস্টমাইজ সমাধান। আপনার ব্যবসা যদি ই-কমার্স, সার্ভিস বা
                    পার্সোনাল ব্র্যান্ডিং হয়,
                    <br /> আমরা প্রদান করবো আপনার প্রয়োজন অনুযায়ী:
                    <br />
                    🎨 ইউনিক ও প্রফেশনাল ডিজাইন সাজেশন <br />
                    ✍️ কনটেন্ট স্ট্র্যাটেজি ও রেকমেন্ডেশন <br />
                    ⚙️ সঠিক ফিচার ও ফাংশনালিটি ইন্টিগ্রেশন <br />
                    আমাদের লক্ষ্য শুধু একটি ওয়েবসাইট বানানো নয়, বরং এমন একটি
                    ডিজিটাল অভিজ্ঞতা তৈরি করা, যা আপনার ব্র্যান্ডকে প্রতিযোগীদের
                    থেকে আলাদা করে তুলে ধরে।
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* WhatsApp Float Button */}
        <div className="fixed bottom-6 right-6">
          <button className="btn btn-circle btn-lg bg-green-500 hover:bg-green-600 text-white border-none shadow-lg">
            <MessageCircle className="w-6 h-6" />
          </button>
        </div>
      </div>

      <div className="min-h-screen bg-gradient-to-br from-purple-50 to-blue-50 px-4 lg:px-12">
        {/* Why Choose Us & How to Order Section */}
        <div className="grid md:grid-cols-2 gap-10 mb-16">
          {/* Why Choose Us Card */}
          <div className="bg-white shadow-xl border border-purple-100 rounded-2xl p-8">
            <h2 className="text-3xl font-extrabold text-gray-900 mb-4">
              কেন আমাদের সার্ভিস বেছে নেবেন?
            </h2>
            <ul className="space-y-2 text-gray-700 text-lg leading-snug">
              <li className="flex items-start space-x-2">
                <span className="text-orange-500 font-bold">১.</span>
                <span>
                  অভিজ্ঞ ও দক্ষ টিম, যাদের রয়েছে দীর্ঘদিনের বাস্তব অভিজ্ঞতা।
                </span>
              </li>
              <li className="flex items-start space-x-2">
                <span className="text-orange-500 font-bold">২.</span>
                <span>
                  অত্যন্ত দ্রুতগতির (Livespeed) ওয়েবসাইট ও মোবাইল অ্যাপ
                  ডেভেলপমেন্ট।
                </span>
              </li>
              <li className="flex items-start space-x-2">
                <span className="text-orange-500 font-bold">৩.</span>
                <span>সম্পূর্ণ SEO Friendly ও User-Friendly ডিজাইন।</span>
              </li>
              <li className="flex items-start space-x-2">
                <span className="text-orange-500 font-bold">৪.</span>
                <span>২৪/৭ সাপোর্ট (Messenger, WhatsApp, Call & Email)।</span>
              </li>
              <li className="flex items-start space-x-2">
                <span className="text-orange-500 font-bold">৫.</span>
                <span>
                  প্রতিটি প্রজেক্টে ১ বছর ফ্রি হোস্টিং ও টেকনিক্যাল সাপোর্ট।
                </span>
              </li>
              <li className="flex items-start space-x-2">
                <span className="text-orange-500 font-bold">৬.</span>
                <span>
                  আন্তর্জাতিক মান বজায় রেখে সাশ্রয়ী মূল্যে সেবা প্রদান।
                </span>
              </li>
            </ul>

            <div className="mt-6 flex items-center justify-center space-x-6">
              <div className="w-16 h-16 rounded-full bg-purple-100 flex items-center justify-center shadow-md">
                <Monitor className="w-8 h-8 text-orange-400" />
              </div>
              <div className="w-16 h-16 rounded-full bg-yellow-100 flex items-center justify-center shadow-md">
                <Users className="w-8 h-8 text-orange-400" />
              </div>
            </div>
          </div>

          {/* How to Order Card */}
          <div className="flex flex-col bg-white shadow-xl border border-purple-100 rounded-2xl p-8">
            <h2 className="text-3xl font-extrabold text-gray-900 mb-4">
              কিভাবে অর্ডার করবেন?
            </h2>
            <ul className="space-y-2 text-gray-700 text-lg leading-snug">
              <li className="flex items-start space-x-2">
                <span className="text-orange-400 font-bold">১.</span>
                <span>
                  আমাদের যেকোনো প্যাকেজ থেকে আপনার প্রয়োজন অনুযায়ী একটি বেছে
                  নিন।
                </span>
              </li>
              <li className="flex items-start space-x-2">
                <span className="text-orange-400 font-bold">২.</span>
                <span>প্রয়োজনীয় তথ্য পূরণ করে অর্ডার কনফার্ম করুন।</span>
              </li>
              <li className="flex items-start space-x-2">
                <span className="text-orange-400 font-bold">৩.</span>
                <span>
                  আমাদের টিম আপনার সাথে যোগাযোগ করে বিস্তারিত আলোচনা করবে।
                </span>
              </li>
              <li className="flex items-start space-x-2">
                <span className="text-orange-400 font-bold">৪.</span>
                <span>
                  ৭-১৫ কার্যদিবসের মধ্যে আপনার ওয়েবসাইট সম্পূর্ণ করে ডেলিভারি
                  করা হবে।
                </span>
              </li>
            </ul>
            <div className=" flex-grow items-end mt-6 flex justify-center space-x-6">
              <div className="w-16 h-16 rounded-full bg-red-100 flex items-center justify-center shadow-md">
                <Zap className="w-8 h-8 text-orange-400" />
              </div>
              <div className="w-16 h-16 rounded-full bg-red-100 flex items-center justify-center shadow-md">
                <BaggageClaim className="w-8 h-8 text-orange-400" />
              </div>
            </div>
          </div>
        </div>

        {/* Prcing & FAQ */}
        <Price />

        {/* FAQ Section */}
        <Faq />
      </div>
      {/* ContactUS */}
      <ContactPage />
      {/* Footer CTA Section */}
      <Footer />
    </>
  );
};

export default page;
