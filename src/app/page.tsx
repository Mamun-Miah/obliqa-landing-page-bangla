import React from "react";
import { Check, MessageCircle, Monitor, Users, Zap, List,Eye } from "lucide-react"
const page = () => {
  return (
    <>
      <div className="hero bg-[#c76824] min-h-screen">
        <div className="hero-content text-center">
          <div className="max-w-xl">
            <h1 className="text-5xl leading-tight text-white font-bold">নিশ্চিন্তে আগে সার্ভিস নিন, পরে পেমেন্ট করুন!  </h1>
            <p className="py-6 text-xl leading-relaxed text-white">
             ওয়েবসাইট তৈরি এখন আরও সহজ এবং সুবিধাজনক,<br></br> আমরা দিচ্ছি এমন একটি অফার যা সাশ্রয়ী,<br></br> ঝামেলাবিহীন এবং সম্পূর্ণ রেডি টু ইউজ!
            </p>
            <button className="btn btn-accent">অর্ডার করতে চাই</button>
          </div>
        </div>
      </div>

      <div className=" bg-gradient-to-br from-purple-50 to-blue-50">
      <div className="container mx-auto px-4 py-12 lg:py-20">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Section */}
          <div className="space-y-8">
            <div className="space-y-6">
              <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">বিশ্বাস তৈরি হোক কাজের মাধ্যমেই</h1>
              <p className="text-lg text-gray-600 leading-relaxed">
                ১০০% নিরাপদ ও নির্ভরযোগ্য সার্ভিস। আপনি ওয়েবসাইট দেখে সন্তুষ্ট না হলে, এক পয়সাও দিতে হবে না! আপনার সন্তুষ্টিই আমাদের
                দায়িত্ব।
              </p>
            </div>

            <button className="btn btn-accent btn-lg text-lg">কথা বলতে চাই</button>
          </div>

          {/* Right Section */}
          <div className="space-y-8">
            {/* Project Management */}
            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0 w-12 h-12 bg-purple-600 rounded-full flex items-center justify-center">
                <MessageCircle className="w-6 h-6 text-white" />
              </div>
              <div className="space-y-2">
                <h3 className="text-xl font-semibold text-gray-900">প্রজেক্ট ম্যানেজমেন্ট</h3>
                <p className="text-gray-600 leading-relaxed">
                  আমাদের টিম একটি নিউরোলজি ও স্টেপ-বাই-স্টেপ প্রসেস অনুসরণ করে, যাতে আপনার ওয়েবসাইট সময়মতো ও মানসম্পন্নভাবে ডেলিভারি
                  হয়।
                </p>
              </div>
            </div>

            {/* Creative Work List */}
            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0 w-12 h-12 bg-purple-600 rounded-full flex items-center justify-center">
                <List className="w-6 h-6 text-white" />
              </div>
              <div className="space-y-2">
                <h3 className="text-xl font-semibold text-gray-900">ক্রিয়ার কাজের তালিকা</h3>
                <p className="text-gray-600 leading-relaxed">
                  প্রতিটি ওয়েবসাইট বানানোর আগে আমরা ক্লায়েন্টের প্রত্যাশা অনুযায়ী একটি কমপ্লিট তৈরি করি, যাতে কিছু বাদ না যায়।
                </p>
              </div>
            </div>

            {/* Customer Follower View */}
            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0 w-12 h-12 bg-purple-600 rounded-full flex items-center justify-center">
                <Eye className="w-6 h-6 text-white" />
              </div>
              <div className="space-y-2">
                <h3 className="text-xl font-semibold text-gray-900">কাস্টমারি অনুসারী ভিউ</h3>
                <p className="text-gray-600 leading-relaxed">
                  আপনার ব্যবসা যদি ই-কমার্স, সার্ভিস বা পার্সোনাল ব্র্যান্ডিং হয়, আমরা সেই অনুযায়ী ডিজাইনিং সাজেশন, কনটেন্ট রেকমেন্ড ও ফিচার
                  যুক্ত করি।
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


    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-blue-50">
      {/* Why Choose Us & How to Order Section */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {/* Why Choose Us Card */}
          <div className="card bg-white shadow-lg border border-purple-200">
            <div className="card-body">
              <h2 className="card-title text-2xl font-bold text-gray-900 mb-4">কেন আমাদের সার্ভিস নিবেন?</h2>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start space-x-2">
                  <span className="text-purple-600 font-bold">১.</span>
                  <span>অভিজ্ঞ টিম, নতুন টিম</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="text-purple-600 font-bold">২.</span>
                  <span>Livespeed ওয়েবসাইট/মোবাইল অ্যাপ</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="text-purple-600 font-bold">৩.</span>
                  <span>সম্পূর্ণ ওয়েবসাইট SEO Friendly</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="text-purple-600 font-bold">৪.</span>
                  <span>২৪/৭ সাপোর্ট (Messenger, WhatsApp, Call)</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="text-purple-600 font-bold">৫.</span>
                  <span>প্রতিটি ওয়েবসাইট ১ বছর ফ্রি হোস্টিং</span>
                </li>
              </ul>
              <div className="mt-6 mx-auto">
                <div className="flex items-center space-x-4">
                  <div className="">
                    <div className="w-16 h-16 rounded-full bg-purple-100 flex items-center justify-center">
                      <Monitor className="w-8 h-8 text-purple-600" />
                    </div>
                  </div>
                  <div className="">
                    <div className="w-16 h-16 rounded-full bg-yellow-100 flex items-center justify-center">
                      <Users className="w-8 h-8 text-yellow-600" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* How to Order Card */}
          <div className="card bg-white shadow-lg border border-purple-200">
            <div className="card-body">
              <h2 className="card-title text-2xl font-bold text-gray-900 mb-4">কিভাবে অর্ডার করবেন?</h2>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start space-x-2">
                  <span className="text-purple-600 font-bold">১.</span>
                  <span>নিচে আমাদের যেকোনো প্যাকেজ থেকে পছন্দ করুন</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="text-purple-600 font-bold">২.</span>
                  <span>প্রয়োজনীয় তথ্য দিয়ে অর্ডার করার জন্য ক্লিক করুন</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="text-purple-600 font-bold">৩.</span>
                  <span>আমরা আপনার সাথে যোগাযোগ করব এবং বিস্তারিত আলোচনার মাধ্যমে কাজ শুরু করব</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="text-purple-600 font-bold">৪.</span>
                  <span>আমাদের দক্ষ ডেভেলপারী টিম ৭-১৫ কার্য দিবসে আপনার ওয়েবসাইট সম্পন্ন করে ডেলিভারি দেবে</span>
                </li>
              </ul>
              <div className="mt-6 flex justify-center">
                <div className="flex items-center space-x-4">
                  <div className="">
                    <div className="w-16 h-16 rounded-full bg-red-100 flex items-center justify-center">
                      <Zap className="w-8 h-8 text-red-600" />
                    </div>
                  </div>
                  <div className="mockup-browser bg-base-300 w-32 h-20 scale-75">
                    <div className="mockup-browser-toolbar">
                      <div className="input">website.com</div>
                    </div>
                    <div className="flex justify-center px-4 py-2 bg-base-200">
                      <div className="w-full h-8 bg-purple-200 rounded"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Pricing Packages Section */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-8">আমাদের ওয়েবসাইট প্যাকেজ সমূহ</h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {/* Standard Package */}
          <div className="card bg-white shadow-lg">
            <div className="card-body">
              <h3 className="card-title text-xl font-bold text-center mb-2">স্ট্যান্ডার্ড প্যাকেজ</h3>
              <p className="text-center text-gray-600 mb-4">ছোট ব্যবসার জন্য, স্বল্প খরচে একটি সুন্দর ওয়েবসাইট পান</p>
              <div className="text-center mb-6">
                <span className="text-3xl font-bold text-purple-600">৪,৯৯০/-</span>
                <span className="text-gray-600"> টাকা</span>
              </div>
              <ul className="space-y-2 mb-6">
                <li className="flex items-center space-x-2">
                  <Check className="w-4 h-4 text-green-500" />
                  <span className="text-sm">Up to 5 Pages</span>
                </li>
                <li className="flex items-center space-x-2">
                  <Check className="w-4 h-4 text-green-500" />
                  <span className="text-sm">১ বছর ফ্রি হোস্টিং (১ বছর)</span>
                </li>
                <li className="flex items-center space-x-2">
                  <Check className="w-4 h-4 text-green-500" />
                  <span className="text-sm">Responsive Design</span>
                </li>
                <li className="flex items-center space-x-2">
                  <Check className="w-4 h-4 text-green-500" />
                  <span className="text-sm">কনটেন্ট ম্যানেজমেন্ট সিস্টেম</span>
                </li>
                <li className="flex items-center space-x-2">
                  <Check className="w-4 h-4 text-green-500" />
                  <span className="text-sm">বেসিক SEO</span>
                </li>
                <li className="flex items-center space-x-2">
                  <Check className="w-4 h-4 text-green-500" />
                  <span className="text-sm">সোশ্যাল মিডিয়া লিংক SEO Ready</span>
                </li>
                <li className="flex items-center space-x-2">
                  <Check className="w-4 h-4 text-green-500" />
                  <span className="text-sm">Standard Website Speed</span>
                </li>
                <li className="flex items-center space-x-2">
                  <Check className="w-4 h-4 text-green-500" />
                  <span className="text-sm">৩০ দিনের সাপোর্ট</span>
                </li>
                <li className="flex items-center space-x-2">
                  <Check className="w-4 h-4 text-green-500" />
                  <span className="text-sm">Maintain Support</span>
                </li>
                <li className="flex items-center space-x-2">
                  <Check className="w-4 h-4 text-green-500" />
                  <span className="text-sm">২ Admin Access</span>
                </li>
                <li className="flex items-center space-x-2">
                  <Check className="w-4 h-4 text-green-500" />
                  <span className="text-sm">২ Admin domain</span>
                </li>
                <li className="flex items-center space-x-2">
                  <Check className="w-4 h-4 text-green-500" />
                  <span className="text-sm">ডেলিভারি ৭-১০ কার্যদিবস</span>
                </li>
              </ul>
              <button className="btn btn-outline btn-accent w-full">অর্ডার করুন এখনি</button>
            </div>
          </div>

          {/* Premium Package */}
          <div className="card bg-white shadow-xl border-2 border-purple-500 relative">
            <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
              <span className="badge badge-accent text-white px-4 py-2">Best Choice</span>
            </div>
            <div className="card-body">
              <h3 className="card-title text-xl font-bold text-center mb-2">প্রিমিয়াম প্যাকেজ</h3>
              <p className="text-center text-gray-600 mb-4">মাঝারি ব্যবসার জন্য, আরও ফিচার ও সুবিধা সহ</p>
              <div className="text-center mb-6">
                <span className="text-3xl font-bold text-purple-600">৭,৯৯০/-</span>
                <span className="text-gray-600"> টাকা</span>
              </div>
              <ul className="space-y-2 mb-6">
                <li className="flex items-center space-x-2">
                  <Check className="w-4 h-4 text-green-500" />
                  <span className="text-sm">Up to 10 Pages</span>
                </li>
                <li className="flex items-center space-x-2">
                  <Check className="w-4 h-4 text-green-500" />
                  <span className="text-sm">১ বছর ফ্রি হোস্টিং (১ বছর)</span>
                </li>
                <li className="flex items-center space-x-2">
                  <Check className="w-4 h-4 text-green-500" />
                  <span className="text-sm">Responsive Design</span>
                </li>
                <li className="flex items-center space-x-2">
                  <Check className="w-4 h-4 text-green-500" />
                  <span className="text-sm">কনটেন্ট ম্যানেজমেন্ট সিস্টেম</span>
                </li>
                <li className="flex items-center space-x-2">
                  <Check className="w-4 h-4 text-green-500" />
                  <span className="text-sm">Advanced SEO</span>
                </li>
                <li className="flex items-center space-x-2">
                  <Check className="w-4 h-4 text-green-500" />
                  <span className="text-sm">সোশ্যাল মিডিয়া ইন্টিগ্রেশন</span>
                </li>
                <li className="flex items-center space-x-2">
                  <Check className="w-4 h-4 text-green-500" />
                  <span className="text-sm">Contact Form & Google Map Integration</span>
                </li>
                <li className="flex items-center space-x-2">
                  <Check className="w-4 h-4 text-green-500" />
                  <span className="text-sm">Payment Gateway</span>
                </li>
                <li className="flex items-center space-x-2">
                  <Check className="w-4 h-4 text-green-500" />
                  <span className="text-sm">Blog Functionality</span>
                </li>
                <li className="flex items-center space-x-2">
                  <Check className="w-4 h-4 text-green-500" />
                  <span className="text-sm">৬০ দিনের সাপোর্ট</span>
                </li>
                <li className="flex items-center space-x-2">
                  <Check className="w-4 h-4 text-green-500" />
                  <span className="text-sm">Maintain Support</span>
                </li>
                <li className="flex items-center space-x-2">
                  <Check className="w-4 h-4 text-green-500" />
                  <span className="text-sm">৫ Admin Access</span>
                </li>
                <li className="flex items-center space-x-2">
                  <Check className="w-4 h-4 text-green-500" />
                  <span className="text-sm">৫ Admin domain</span>
                </li>
                <li className="flex items-center space-x-2">
                  <Check className="w-4 h-4 text-green-500" />
                  <span className="text-sm">ডেলিভারি ৭-১০ কার্যদিবস</span>
                </li>
              </ul>
              <button className="btn btn-accent w-full">অর্ডার করুন এখনি</button>
            </div>
          </div>

          {/* Enterprise Package */}
          <div className="card bg-white shadow-lg">
            <div className="card-body">
              <h3 className="card-title text-xl font-bold text-center mb-2">এন্টারপ্রাইজ প্যাকেজ</h3>
              <p className="text-center text-gray-600 mb-4">বড় ব্যবসার জন্য, সম্পূর্ণ ফিচার ও কাস্টমাইজেশন সহ</p>
              <div className="text-center mb-6">
                <span className="text-3xl font-bold text-purple-600">১৫,৯৯০/-</span>
                <span className="text-gray-600"> টাকা</span>
              </div>
              <ul className="space-y-2 mb-6">
                <li className="flex items-center space-x-2">
                  <Check className="w-4 h-4 text-green-500" />
                  <span className="text-sm">Unlimited Pages</span>
                </li>
                <li className="flex items-center space-x-2">
                  <Check className="w-4 h-4 text-green-500" />
                  <span className="text-sm">Unlimited SSD Hosting</span>
                </li>
                <li className="flex items-center space-x-2">
                  <Check className="w-4 h-4 text-green-500" />
                  <span className="text-sm">১ বছর ফ্রি SSL</span>
                </li>
                <li className="flex items-center space-x-2">
                  <Check className="w-4 h-4 text-green-500" />
                  <span className="text-sm">Google Analytics, Facebook Pixel</span>
                </li>
                <li className="flex items-center space-x-2">
                  <Check className="w-4 h-4 text-green-500" />
                  <span className="text-sm">Business Tools Integration</span>
                </li>
                <li className="flex items-center space-x-2">
                  <Check className="w-4 h-4 text-green-500" />
                  <span className="text-sm">Fully customizable</span>
                </li>
                <li className="flex items-center space-x-2">
                  <Check className="w-4 h-4 text-green-500" />
                  <span className="text-sm">Unlimited Business Email</span>
                </li>
                <li className="flex items-center space-x-2">
                  <Check className="w-4 h-4 text-green-500" />
                  <span className="text-sm">Maximum Website Speed</span>
                </li>
                <li className="flex items-center space-x-2">
                  <Check className="w-4 h-4 text-green-500" />
                  <span className="text-sm">Unlimited page design</span>
                </li>
                <li className="flex items-center space-x-2">
                  <Check className="w-4 h-4 text-green-500" />
                  <span className="text-sm">৯০ দিনের সাপোর্ট</span>
                </li>
                <li className="flex items-center space-x-2">
                  <Check className="w-4 h-4 text-green-500" />
                  <span className="text-sm">১০ Admin domain</span>
                </li>
                <li className="flex items-center space-x-2">
                  <Check className="w-4 h-4 text-green-500" />
                  <span className="text-sm">Delivery 7-15 Work Days</span>
                </li>
              </ul>
              <button className="btn btn-outline btn-accent w-full">অর্ডার করুন এখনি</button>
            </div>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="mb-16">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">প্রায়শই জিজ্ঞাসিত প্রশ্নাবলী (FAQs)</h2>

          <div className="space-y-4 max-w-4xl mx-auto">
            <div className="collapse collapse-plus bg-white shadow-lg">
              <input type="radio" name="faq-accordion" defaultChecked />
              <div className="collapse-title text-xl font-medium">ওয়েবসাইট ডেলিভারির পর কতো দিন পর্যন্ত সাপোর্ট পাবো?</div>
              <div className="collapse-content">
                <p>
                  প্যাকেজ অনুযায়ী আলাদা আলাদা সময় পর্যন্ত সাপোর্ট পাবেন। স্ট্যান্ডার্ড প্যাকেজে ৩০ দিন, প্রিমিয়াম প্যাকেজে ৬০ দিন এবং এন্টারপ্রাইজ
                  প্যাকেজে ৯০ দিন।
                </p>
              </div>
            </div>

            <div className="collapse collapse-plus bg-white shadow-lg">
              <input type="radio" name="faq-accordion" />
              <div className="collapse-title text-xl font-medium">ওয়েবসাইট কি ডেস্কটপ, মোবাইলসহ সব ডিভাইসে ভাল দেখাবে?</div>
              <div className="collapse-content">
                <p>হ্যাঁ, আমাদের সকল ওয়েবসাইট রেসপন্সিভ ডিজাইনে তৈরি করা হয় যা সব ডিভাইসে পারফেক্ট দেখায়।</p>
              </div>
            </div>

            <div className="collapse collapse-plus bg-white shadow-lg">
              <input type="radio" name="faq-accordion" />
              <div className="collapse-title text-xl font-medium">ওয়েবসাইটের কনটেন্ট (লেখা/ছবি) কি আমাকে দিতে হবে?</div>
              <div className="collapse-content">
                <p>
                  আমরা আপনার ব্যবসার তথ্য, ছবি এবং কনটেন্ট সংগ্রহ করে ওয়েবসাইট তৈরি করি। তবে আপনার নিজস্ব কনটেন্ট থাকলে সেটা আরও ভালো
                  হবে।
                </p>
              </div>
            </div>

            <div className="collapse collapse-plus bg-white shadow-lg">
              <input type="radio" name="faq-accordion" />
              <div className="collapse-title text-xl font-medium">
                আমার কোন টেকনিক্যাল জ্ঞান নেই, তবু কি আমি ওয়েবসাইট পরিচালনা করতে পারবো?
              </div>
              <div className="collapse-content">
                <p>অবশ্যই! আমরা খুবই সহজ কনটেন্ট ম্যানেজমেন্ট সিস্টেম ব্যবহার করি যা কোন টেকনিক্যাল জ্ঞান ছাড়াই পরিচালনা করা যায়।</p>
              </div>
            </div>

            <div className="collapse collapse-plus bg-white shadow-lg">
              <input type="radio" name="faq-accordion" />
              <div className="collapse-title text-xl font-medium">ডোমেইন ও হোস্টিং কি আলাদা নাম রেজিস্ট্রেশন করতে হবে?</div>
              <div className="collapse-content">
                <p>না, আমরা আপনার জন্য ডোমেইন রেজিস্ট্রেশন এবং হোস্টিং সেটআপ করে দেই। আপনাকে আলাদা কিছু করতে হবে না।</p>
              </div>
            </div>

            <div className="collapse collapse-plus bg-white shadow-lg">
              <input type="radio" name="faq-accordion" />
              <div className="collapse-title text-xl font-medium">পেমেন্ট কিভাবে করব? নাকি অ্যাডভান্স টাকা দিতে হবে?</div>
              <div className="collapse-content">
                <p>আমরা বিকাশ, নগদ, রকেট এবং ব্যাংক ট্রান্সফারের মাধ্যমে পেমেন্ট গ্রহণ করি। ৫০% অ্যাডভান্স এবং বাকি ৫০% ডেলিভারির সময়।</p>
              </div>
            </div>

            <div className="collapse collapse-plus bg-white shadow-lg">
              <input type="radio" name="faq-accordion" />
              <div className="collapse-title text-xl font-medium">ওয়েবসাইট রিভিশন করতে চাই টাকা লাগবে?</div>
              <div className="collapse-content">
                <p>প্রতিটি প্যাকেজে নির্দিষ্ট সংখ্যক রিভিশন ফ্রি দেওয়া হয়। অতিরিক্ত রিভিশনের জন্য আলাদা চার্জ প্রযোজ্য।</p>
              </div>
            </div>

            <div className="collapse collapse-plus bg-white shadow-lg">
              <input type="radio" name="faq-accordion" />
              <div className="collapse-title text-xl font-medium">আমার ওয়েবসাইট-এ কিভাবে আরো, আমাকে কি সময় দিতে হবে?</div>
              <div className="collapse-content">
                <p>হ্যাঁ, ওয়েবসাইট তৈরির সময় আমাদের সাথে নিয়মিত যোগাযোগ রাখতে হবে এবং প্রয়োজনীয় তথ্য ও ফিডব্যাক দিতে হবে।</p>
              </div>
            </div>

            <div className="collapse collapse-plus bg-white shadow-lg">
              <input type="radio" name="faq-accordion" />
              <div className="collapse-title text-xl font-medium">ওয়েবসাইটের এডমিনিস্ট্রেটর প্যানেল কি আমাকে দেওয়া হবে?</div>
              <div className="collapse-content">
                <p>হ্যাঁ, ওয়েবসাইট ডেলিভারির সময় আপনাকে সম্পূর্ণ এডমিন প্যানেলের এক্সেস দেওয়া হবে।</p>
              </div>
            </div>

            <div className="collapse collapse-plus bg-white shadow-lg">
              <input type="radio" name="faq-accordion" />
              <div className="collapse-title text-xl font-medium">আমি কি রেডিমেড টেমপ্লেট পেয়ে ওয়েবসাইট পেতে পারি?</div>
              <div className="collapse-content">
                <p>আমরা কাস্টম ডিজাইন করি, তবে আপনি চাইলে রেডিমেড টেমপ্লেট কাস্টমাইজ করেও ওয়েবসাইট তৈরি করতে পারি।</p>
              </div>
            </div>

            <div className="collapse collapse-plus bg-white shadow-lg">
              <input type="radio" name="faq-accordion" />
              <div className="collapse-title text-xl font-medium">আমি কি রেডিমেড টেমপ্লেট পেয়ে ওয়েবসাইট পেতে পারি?</div>
              <div className="collapse-content">
                <p>আমাদের সাথে যোগাযোগ করুন হোয়াটসঅ্যাপ/কল/মেসেঞ্জারে। আমরা আপনার প্রয়োজন অনুযায়ী সমাধান দেব।</p>
              </div>
            </div>

            <div className="collapse collapse-plus bg-white shadow-lg">
              <input type="radio" name="faq-accordion" />
              <div className="collapse-title text-xl font-medium">নেক্সট কিভাবে করবো?</div>
              <div className="collapse-content">
                <p>আমাদের সাথে যোগাযোগ করুন এবং আপনার প্রয়োজন জানান। আমরা আপনাকে সঠিক গাইডলাইন দেব।</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer CTA Section */}
      <div className="bg-[#c76824] py-16">
        <div className="container mx-auto px-4">
          <div className="card bg-white max-w-2xl mx-auto">
            <div className="card-body text-center">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">তাহলেই সীমিত সময়ের জন্য দেরি না করে এখনই অর্ডার করুন।</h2>
              <p className="text-gray-600 mb-6">
                এখন অর্ডার করুন, ওয়েবসাইট ডেলিভারির পর পেমেন্ট করুন। তবু যদি সন্তুষ্ট না হন, একটাকাও দিতে হবে না। ডেলিভারি প্রসেসিং এর
                পূর্বে কল করুন: +880 1706-803616
              </p>
              <button className="btn btn-accent btn-lg">অর্ডার করুন এখনি</button>
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
    </>
  );
};

export default page;
