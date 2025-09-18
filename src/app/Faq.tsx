import React from 'react'

export default function Faq() {
  return (
    <div className="pb-16 text-gray-900">
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
              করে দেই। তবে শর্ত সাপেক্ষে ডোমেইন এবং হোস্টিং ক্রয়ের এর জন্য আলাদা চার্জ যুক্ত হতে পারে।
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
  )
}
