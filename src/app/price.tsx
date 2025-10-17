"use client"

import { Check } from "lucide-react"
import React from "react"

export default function Price() {
  return (
    <div id="pricing">
      <div className="text-gray-600 px-2">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-8">
            আমাদের ওয়েবসাইট প্যাকেজ সমূহ
          </h2>
        </div>
   
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {/* Standard Package */}
          <div className="card bg-white shadow-lg relative">
            {/* Discount Badge */}
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
                  <span className="text-sm">ডেলিভারি ৭-১০ কার্যদিবস</span>
                </li>
              </ul>
              <button onClick={() =>
                document
                  .getElementById("contact-section")
                  ?.scrollIntoView({ behavior: "smooth" })
              } className="btn btn-outline btn-accent w-full">
                যোগাযোগ করুন এখনি
              </button>
            </div>
          </div>

          {/* Premium Package */}
          <div className="card bg-white shadow-xl border-2 border-purple-500 relative">
            {/* Discount Badge */}
            <div className="absolute top-2 right-2 bg-red-500 text-white px-3 py-1 rounded-full text-sm font-bold">
              50% OFF
            </div>
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
                <span className="text-lg line-through text-gray-400">
                  ১৭,৯৯০/-
                </span>
                <div className="text-3xl font-bold text-purple-600">
                  ৮,৯৯০/- টাকা
                </div>
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
                  <span className="text-sm">ডেলিভারি ৭-১০ কার্যদিবস</span>
                </li>
              </ul>
              <button onClick={() =>
                document
                  .getElementById("contact-section")
                  ?.scrollIntoView({ behavior: "smooth" })
              } className="btn btn-accent w-full">যোগাযোগ করুন এখনি</button>
            </div>
          </div>

          {/* Enterprise Package */}
          <div className="card bg-white shadow-lg relative">
            {/* Discount Badge */}
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
                  <span className="text-sm">ডেলিভারি ৭-১৫ কর্মদিবস</span>
                </li>
              </ul>
              <button onClick={() =>
                document
                  .getElementById("contact-section")
                  ?.scrollIntoView({ behavior: "smooth" })
              } className="btn btn-outline btn-accent w-full">
                যোগাযোগ করুন এখনি
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
