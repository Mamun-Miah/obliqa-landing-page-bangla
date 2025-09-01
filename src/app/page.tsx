import React from "react";
import {
  Check,
  MessageCircle,
  RulerDimensionLine,
  Monitor,
  Users,
  Zap,
  List,
  Eye,
  BaggageClaim,
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";
const page = () => {

  const menuItems = [
    { label: "Home", href: "https://obliqa.com/" },
    { label: "About", href: "https://obliqa.com/about" },
    { label: "Services", href: "https://obliqa.com/services" },
    { label: "Portfolio", href: "https://obliqa.com/portfolio" },
    { label: "Contact Us", href: "https://obliqa.com/contact" },
  ];

  return (
    <>
      <div className="relative min-h-screen bg-[#209689]">
        {/* Navbar */}
        <div className="absolute top-4 left-6 right-6">
          <div className="navbar bg-transparent px-auto">
            {/* Navbar Start: Logo + Mobile Dropdown */}
            <div className="navbar-start">
              <div className="dropdown">
                <label tabIndex={0} className="btn btn-ghost lg:hidden" role="button">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 text-white"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h8m-8 6h16" />
                  </svg>
                </label>
                <ul
                  tabIndex={0}
                  className="font-sans menu menu-sm dropdown-content bg-[#127a14] rounded-box z-50 mt-3 w-52 p-2 shadow-lg text-white"
                >
                  {menuItems.map(({ label, href }) => (
                    <Link key={label} href={href}><li>{label}</li></Link>
                  ))}
                  <li className="mt-2 flex gap-2 px-2">
                    <Link
                      href="https://crm.obliqa.com/index.php/signin"
                      className="btn btn-outline border-white text-white hover:bg-orange-400 hover:text-white flex-grow"
                    >
                      লগইন
                    </Link>
                    <Link
                      href="https://crm.obliqa.com/index.php/signup"
                      className="btn btn-outline bg-transparent border-white flex-grow hover:bg-orange-400 hover:text-white"
                    >
                      সাইন আপ
                    </Link>
                  </li>
                </ul>
              </div>

              <Link href="/">
                <Image
                  src="https://obliqa.com/assets/logo-v5XmxzuU.svg"
                  alt="Logo"
                  width={150}
                  height={50}
                  className="cursor-pointer hidden lg:block"
                />
              </Link>
            </div>

            {/* Navbar Center: Menu for lg+ */}
            <div className="navbar-center hidden lg:flex">
              <ul className="menu menu-horizontal px-1 text-white font-semibold text-lg gap-8">
                {menuItems.map(({ label, href }) => (
                  <li key={label} className="hover:text-[#ff9800]">
                    <Link href={href}>{label}</Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Navbar End: Logo for mobile + Login/Signup */}
            <div className="navbar-end flex items-center gap-3">
              {/* Show logo on mobile here */}
              <Link href="/">
                <Image
                  src="https://obliqa.com/assets/logo-v5XmxzuU.svg"
                  alt="Logo"
                  width={100}
                  height={35}
                  className="cursor-pointer lg:hidden"
                />
              </Link>

              <Link
                href="https://crm.obliqa.com/index.php/signin"
                className="btn btn-outline text-white border-white hover:bg-orange-400 hover:text-white"
              >
                লগইন
              </Link>
              <Link
                href="https://crm.obliqa.com/index.php/signup"
                className="btn btn-outline bg-orange-500 hover:bg-transparent border-white  hover:text-white"
              >
                সাইন আপ
              </Link>
            </div>
          </div>
        </div>

        {/* Hero Content */}
        <div className="hero min-h-screen">
          <div className="hero-content text-center mt-24">
            <div className="max-w-xl">
              <h1 className="text-5xl leading-tight text-white font-bold">
                নিশ্চিন্তে সার্ভিস নিন,<br /> পরে পেমেন্ট করুন!
              </h1>
              {/* <p className="py-6 text-xl leading-relaxed text-white">
              ওয়েবসাইট তৈরি এখন আরও সহজ এবং সুবিধাজনক,<br />
              আমরা দিচ্ছি এমন একটি অফার যা সাশ্রয়ী,<br />
              ঝামেলাবিহীন এবং সম্পূর্ণ রেডি টু ইউজ!
            </p> */}
              <p className="py-6 text-xl leading-relaxed text-white">
                আপনার ব্যবসার জন্য নিন সাশ্রয়ী, ঝামেলামুক্ত এবং রেডি টু ইউজ ওয়েবসাইট, যা আপনার ব্যাবসা কে করবে আরও উন্নত।
                আমাদের প্রিমিয়াম অফার নিশ্চিত করছে ইউজার ফ্রেন্ডলি ডিজাইন, কার্যকরী ফিচার এবং দ্রুত ফলাফল। আজই শুরু করুন এবং আপনার অনলাইন ব্যাবসা শক্তিশালী করুন!
              </p>
              <button
                className="btn btn-outline border-white bg-orange-400 hover:text-white hover:bg-transparent duration-300"
              >
                অর্ডার করতে চাই
              </button>
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
                  ✅ ১০০% নিরাপদ ও নির্ভরযোগ্য সার্ভিস।<br />
                  ✅ আপনার সন্তুষ্টিই আমাদের দায়িত্ব ও অঙ্গীকার।<br />
                  ✅ দ্রুততম সময়ে সেরা মানের সেবা নিশ্চিত করি।<br />
                  ✅ অভিজ্ঞ ও দক্ষ টিম দ্বারা পরিচালিত।<br />
                  ✅ সাশ্রয়ী মূল্যে প্রিমিয়াম মানের সেবা।<br />
                  ✅ নিরবচ্ছিন্ন সাপোর্ট ও সহায়তা।<br />
                  ✅ আপনার প্রয়োজন অনুযায়ী কাস্টমাইজড সমাধান।<br />
                  ✅ প্রতিটি প্রজেক্টে আধুনিক প্রযুক্তি ও সেরা প্র্যাকটিস অনুসরণ করি।<br />
                  ✅ ক্লায়েন্টের আইডিয়া ও ভিশনকে গুরুত্ব দিয়ে কাজ করি।<br />
                  ✅ দীর্ঘমেয়াদী সম্পর্ক ও আস্থার ভিত্তিতে সার্ভিস প্রদান করি।<br />
                  ✅ আন্তর্জাতিক মান বজায় রেখে ইউজার-ফ্রেন্ডলি ও রেসপন্সিভ ওয়েবসাইট তৈরি করি।<br />
                  ✅ ব্যবসার লক্ষ্য পূরণে কার্যকর ডিজিটাল সমাধান নিশ্চিত করি।<br />
                </p>

              </div>

              <button
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
                    আমাদের অভিজ্ঞ টিম একটি ধাপে ধাপে সুসংগঠিত প্রক্রিয়া অনুসরণ করে, যা কার্যকর প্রজেক্ট ম্যানেজমেন্ট নিশ্চিত করে। প্রতিটি ধাপ নির্ধারিত সময়সীমার মধ্যে সম্পন্ন করা হয়, যাতে আপনার ওয়েবসাইট নির্ধারিত সময়ে, ঝামেলামুক্তভাবে এবং সর্বোচ্চ মান বজায় রেখে ডেলিভার করা যায়।
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
                    প্রতিটি ওয়েবসাইট ডেভেলপমেন্ট শুরুর আগে আমরা ক্লায়েন্টের চাহিদা ও লক্ষ্য গভীরভাবে বিশ্লেষণ করি। এরপর একটি সম্পূর্ণ পরিকল্পনা ও স্ট্র্যাটেজি তৈরি করি, যাতে প্রজেক্টের প্রতিটি ধাপ স্পষ্টভাবে নির্ধারিত থাকে এবং কোনো গুরুত্বপূর্ণ অংশ বাদ না যায়। এর মাধ্যমে আমরা নিশ্চিত করি যে, ফাইনাল ওয়েবসাইটটি ক্লায়েন্টের প্রত্যাশার সাথে সামঞ্জস্যপূর্ণ এবং ব্যবসায়িক লক্ষ্যে কার্যকরভাবে সহায়ক হবে।
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
                    প্রতিটি ব্যবসার লক্ষ্য আলাদা, তাই আমরা দিই সম্পূর্ণ কাস্টমাইজ সমাধান। আপনার ব্যবসা যদি ই-কমার্স, সার্ভিস বা পার্সোনাল ব্র্যান্ডিং হয়,<br /> আমরা প্রদান করবো আপনার প্রয়োজন অনুযায়ী:<br />

                    🎨 ইউনিক ও প্রফেশনাল ডিজাইন সাজেশন <br />

                    ✍️ কনটেন্ট স্ট্র্যাটেজি ও রেকমেন্ডেশন <br />

                    ⚙️ সঠিক ফিচার ও ফাংশনালিটি ইন্টিগ্রেশন <br />

                    আমাদের লক্ষ্য শুধু একটি ওয়েবসাইট বানানো নয়, বরং এমন একটি ডিজিটাল অভিজ্ঞতা তৈরি করা, যা আপনার ব্র্যান্ডকে প্রতিযোগীদের থেকে আলাদা করে তুলে ধরে।
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
                <span>অভিজ্ঞ ও দক্ষ টিম, যাদের রয়েছে দীর্ঘদিনের বাস্তব অভিজ্ঞতা।</span>
              </li>
              <li className="flex items-start space-x-2">
                <span className="text-orange-500 font-bold">২.</span>
                <span>অত্যন্ত দ্রুতগতির (Livespeed) ওয়েবসাইট ও মোবাইল অ্যাপ ডেভেলপমেন্ট।</span>
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
                <span>প্রতিটি প্রজেক্টে ১ বছর ফ্রি হোস্টিং ও টেকনিক্যাল সাপোর্ট।</span>
              </li>
              <li className="flex items-start space-x-2">
                <span className="text-orange-500 font-bold">৬.</span>
                <span>আন্তর্জাতিক মান বজায় রেখে সাশ্রয়ী মূল্যে সেবা প্রদান।</span>
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
                <span>আমাদের যেকোনো প্যাকেজ থেকে আপনার প্রয়োজন অনুযায়ী একটি বেছে নিন।</span>
              </li>
              <li className="flex items-start space-x-2">
                <span className="text-orange-400 font-bold">২.</span>
                <span>প্রয়োজনীয় তথ্য পূরণ করে অর্ডার কনফার্ম করুন।</span>
              </li>
              <li className="flex items-start space-x-2">
                <span className="text-orange-400 font-bold">৩.</span>
                <span>আমাদের টিম আপনার সাথে যোগাযোগ করে বিস্তারিত আলোচনা করবে।</span>
              </li>
              <li className="flex items-start space-x-2">
                <span className="text-orange-400 font-bold">৪.</span>
                <span>৭-১৫ কার্যদিবসের মধ্যে আপনার ওয়েবসাইট সম্পূর্ণ করে ডেলিভারি করা হবে।</span>
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
        <div className="text-gray-600 px-2">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-8">
              আমাদের ওয়েবসাইট প্যাকেজ সমূহ
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {/* Standard Package */}
            <div className="card bg-white shadow-lg">
              <div className="card-body">
                <h3 className="card-title text-xl font-bold text-center mb-2">
                  স্ট্যান্ডার্ড প্যাকেজ
                </h3>
                <p className="text-center text-gray-600 mb-4">
                  ছোট ব্যবসার জন্য, স্বল্প খরচে একটি সুন্দর ওয়েবসাইট পান
                </p>
                <div className="text-center mb-6">
                  <span className="text-3xl font-bold text-purple-600">
                    ১৫৯৯০/-
                  </span>
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
                    <span className="text-sm">
                      কনটেন্ট ম্যানেজমেন্ট সিস্টেম
                    </span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <Check className="w-4 h-4 text-green-500" />
                    <span className="text-sm">বেসিক SEO</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <Check className="w-4 h-4 text-green-500" />
                    <span className="text-sm">
                      সোশ্যাল মিডিয়া লিংক SEO Ready
                    </span>
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
                <button className="btn btn-outline btn-accent w-full">
                  অর্ডার করুন এখনি
                </button>
              </div>
            </div>

            {/* Premium Package */}
            <div className="card bg-white shadow-xl border-2 border-purple-500 relative">
              <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                <span className="badge badge-accent text-white px-4 py-2">
                  Best Choice
                </span>
              </div>
              <div className="card-body">
                <h3 className="card-title text-xl font-bold text-center mb-2">
                  প্রিমিয়াম প্যাকেজ
                </h3>
                <p className="text-center text-gray-600 mb-4">
                  মাঝারি ব্যবসার জন্য, আরও ফিচার ও সুবিধা সহ
                </p>
                <div className="text-center mb-6">
                  <span className="text-3xl font-bold text-purple-600">
                    ১৭৯৯০/-
                  </span>
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
                    <span className="text-sm">
                      কনটেন্ট ম্যানেজমেন্ট সিস্টেম
                    </span>
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
                    <span className="text-sm">
                      Contact Form & Google Map Integration
                    </span>
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
                <button className="btn btn-accent w-full">
                  অর্ডার করুন এখনি
                </button>
              </div>
            </div>

            {/* Enterprise Package */}
            <div className="card bg-white shadow-lg">
              <div className="card-body">
                <h3 className="card-title text-xl font-bold text-center mb-2">
                  এন্টারপ্রাইজ প্যাকেজ
                </h3>
                <p className="text-center text-gray-600 mb-4">
                  বড় ব্যবসার জন্য, সম্পূর্ণ ফিচার ও কাস্টমাইজেশন সহ
                </p>
                <div className="text-center mb-6">
                  <span className="text-3xl font-bold text-purple-600">
                    ৩০৯৯০/-
                  </span>
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
                    <span className="text-sm">
                      Google Analytics, Facebook Pixel
                    </span>
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
                <button className="btn btn-outline btn-accent w-full">
                  অর্ডার করুন এখনি
                </button>
              </div>
            </div>
          </div>
        </div>
        
        {/* FAQ Section */}
        <div className="mb-16">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">
            প্রায়শই জিজ্ঞাসিত প্রশ্নাবলী (FAQs)
          </h2>

          <div className="space-y-4 max-w-4xl mx-auto">
            <div className="collapse collapse-plus bg-white shadow-lg">
              <input type="radio" name="faq-accordion" defaultChecked />
              <div className="collapse-title text-xl font-medium">
                ওয়েবসাইট ডেলিভারির পর কতো দিন পর্যন্ত সাপোর্ট পাবো?
              </div>
              <div className="collapse-content">
                <p>
                  প্যাকেজ অনুযায়ী আলাদা আলাদা সময় পর্যন্ত সাপোর্ট পাবেন।
                  স্ট্যান্ডার্ড প্যাকেজে ৩০ দিন, প্রিমিয়াম প্যাকেজে ৬০ দিন
                  এবং এন্টারপ্রাইজ প্যাকেজে ৯০ দিন।
                </p>
              </div>
            </div>

            <div className="collapse collapse-plus bg-white shadow-lg">
              <input type="radio" name="faq-accordion" />
              <div className="collapse-title text-xl font-medium">
                ওয়েবসাইট কি ডেস্কটপ, মোবাইলসহ সব ডিভাইসে ভাল দেখাবে?
              </div>
              <div className="collapse-content">
                <p>
                  হ্যাঁ, আমাদের সকল ওয়েবসাইট রেসপন্সিভ ডিজাইনে তৈরি করা হয়
                  যা সব ডিভাইসে পারফেক্ট দেখায়।
                </p>
              </div>
            </div>

            <div className="collapse collapse-plus bg-white shadow-lg">
              <input type="radio" name="faq-accordion" />
              <div className="collapse-title text-xl font-medium">
                ওয়েবসাইটের কনটেন্ট (লেখা/ছবি) কি আমাকে দিতে হবে?
              </div>
              <div className="collapse-content">
                <p>
                  আমরা আপনার ব্যবসার তথ্য, ছবি এবং কনটেন্ট সংগ্রহ করে
                  ওয়েবসাইট তৈরি করি। তবে আপনার নিজস্ব কনটেন্ট থাকলে সেটা আরও
                  ভালো হবে।
                </p>
              </div>
            </div>

            <div className="collapse collapse-plus bg-white shadow-lg">
              <input type="radio" name="faq-accordion" />
              <div className="collapse-title text-xl font-medium">
                আমার কোন টেকনিক্যাল জ্ঞান নেই, তবু কি আমি ওয়েবসাইট পরিচালনা
                করতে পারবো?
              </div>
              <div className="collapse-content">
                <p>
                  অবশ্যই! আমরা খুবই সহজ কনটেন্ট ম্যানেজমেন্ট সিস্টেম ব্যবহার
                  করি যা কোন টেকনিক্যাল জ্ঞান ছাড়াই পরিচালনা করা যায়।
                </p>
              </div>
            </div>

            <div className="collapse collapse-plus bg-white shadow-lg">
              <input type="radio" name="faq-accordion" />
              <div className="collapse-title text-xl font-medium">
                ডোমেইন ও হোস্টিং কি আলাদা নাম রেজিস্ট্রেশন করতে হবে?
              </div>
              <div className="collapse-content">
                <p>
                  না, আমরা আপনার জন্য ডোমেইন রেজিস্ট্রেশন এবং হোস্টিং সেটআপ
                  করে দেই। আপনাকে আলাদা কিছু করতে হবে না।
                </p>
              </div>
            </div>

            <div className="collapse collapse-plus bg-white shadow-lg">
              <input type="radio" name="faq-accordion" />
              <div className="collapse-title text-xl font-medium">
                পেমেন্ট কিভাবে করব? নাকি অ্যাডভান্স টাকা দিতে হবে?
              </div>
              <div className="collapse-content">
                <p>
                  আমরা বিকাশ, নগদ, রকেট এবং ব্যাংক ট্রান্সফারের মাধ্যমে
                  পেমেন্ট গ্রহণ করি। ৫০% অ্যাডভান্স এবং বাকি ৫০% ডেলিভারির
                  সময়।
                </p>
              </div>
            </div>

            <div className="collapse collapse-plus bg-white shadow-lg">
              <input type="radio" name="faq-accordion" />
              <div className="collapse-title text-xl font-medium">
                ওয়েবসাইট রিভিশন করতে চাই টাকা লাগবে?
              </div>
              <div className="collapse-content">
                <p>
                  প্রতিটি প্যাকেজে নির্দিষ্ট সংখ্যক রিভিশন ফ্রি দেওয়া হয়।
                  অতিরিক্ত রিভিশনের জন্য আলাদা চার্জ প্রযোজ্য।
                </p>
              </div>
            </div>

            <div className="collapse collapse-plus bg-white shadow-lg">
              <input type="radio" name="faq-accordion" />
              <div className="collapse-title text-xl font-medium">
                আমার ওয়েবসাইট-এ কিভাবে আরো, আমাকে কি সময় দিতে হবে?
              </div>
              <div className="collapse-content">
                <p>
                  হ্যাঁ, ওয়েবসাইট তৈরির সময় আমাদের সাথে নিয়মিত যোগাযোগ
                  রাখতে হবে এবং প্রয়োজনীয় তথ্য ও ফিডব্যাক দিতে হবে।
                </p>
              </div>
            </div>

            <div className="collapse collapse-plus bg-white shadow-lg">
              <input type="radio" name="faq-accordion" />
              <div className="collapse-title text-xl font-medium">
                ওয়েবসাইটের এডমিনিস্ট্রেটর প্যানেল কি আমাকে দেওয়া হবে?
              </div>
              <div className="collapse-content">
                <p>
                  হ্যাঁ, ওয়েবসাইট ডেলিভারির সময় আপনাকে সম্পূর্ণ এডমিন
                  প্যানেলের এক্সেস দেওয়া হবে।
                </p>
              </div>
            </div>

            <div className="collapse collapse-plus bg-white shadow-lg">
              <input type="radio" name="faq-accordion" />
              <div className="collapse-title text-xl font-medium">
                আমি কি রেডিমেড টেমপ্লেট পেয়ে ওয়েবসাইট পেতে পারি?
              </div>
              <div className="collapse-content">
                <p>
                  আমরা কাস্টম ডিজাইন করি, তবে আপনি চাইলে রেডিমেড টেমপ্লেট
                  কাস্টমাইজ করেও ওয়েবসাইট তৈরি করতে পারি।
                </p>
              </div>
            </div>

            <div className="collapse collapse-plus bg-white shadow-lg">
              <input type="radio" name="faq-accordion" />
              <div className="collapse-title text-xl font-medium">
                আমি কি রেডিমেড টেমপ্লেট পেয়ে ওয়েবসাইট পেতে পারি?
              </div>
              <div className="collapse-content">
                <p>
                  আমাদের সাথে যোগাযোগ করুন হোয়াটসঅ্যাপ/কল/মেসেঞ্জারে। আমরা
                  আপনার প্রয়োজন অনুযায়ী সমাধান দেব।
                </p>
              </div>
            </div>

            <div className="collapse collapse-plus bg-white shadow-lg">
              <input type="radio" name="faq-accordion" />
              <div className="collapse-title text-xl font-medium">
                নেক্সট কিভাবে করবো?
              </div>
              <div className="collapse-content">
                <p>
                  আমাদের সাথে যোগাযোগ করুন এবং আপনার প্রয়োজন জানান। আমরা
                  আপনাকে সঠিক গাইডলাইন দেব।
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Footer CTA Section */}
        
      </div>
      <div className="bg-[#c76824]">
         <div className=" py-16">
          <div className="container mx-auto px-4">
            <div className="card bg-white max-w-2xl mx-auto">
              <div className="card-body text-center">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                  তাহলেই সীমিত সময়ের জন্য দেরি না করে এখনই অর্ডার করুন।
                </h2>
                <p className="text-gray-600 mb-6">
                  এখন অর্ডার করুন, ওয়েবসাইট ডেলিভারির পর পেমেন্ট করুন। তবু যদি
                  সন্তুষ্ট না হন, একটাকাও দিতে হবে না। ডেলিভারি প্রসেসিং এর
                  পূর্বে কল করুন: +880 1706-803616
                </p>
                <button className="btn btn-accent btn-lg">
                  অর্ডার করুন এখনি
                </button>
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
