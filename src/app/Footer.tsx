import { MessageCircle } from 'lucide-react'
import React from 'react'

export default function Footer() {
  return (
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
  )
}
