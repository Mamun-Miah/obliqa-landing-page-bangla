"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"

export default function ObliQADiscountPopup() {
  const [show, setShow] = useState(false)
  const [timeLeft, setTimeLeft] = useState({
    days: 7,
    hours: 0,
    minutes: 0,
    seconds: 0,
  })

  useEffect(() => {
    setShow(true)
  }, [])

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prevTime) => {
        const totalSeconds =
          prevTime.days * 24 * 60 * 60 + prevTime.hours * 60 * 60 + prevTime.minutes * 60 + prevTime.seconds - 1

        if (totalSeconds <= 0) {
          clearInterval(timer)
          return { days: 0, hours: 0, minutes: 0, seconds: 0 }
        }

        const days = Math.floor(totalSeconds / (24 * 60 * 60))
        const hours = Math.floor((totalSeconds % (24 * 60 * 60)) / (60 * 60))
        const minutes = Math.floor((totalSeconds % (60 * 60)) / 60)
        const seconds = totalSeconds % 60

        return { days, hours, minutes, seconds }
      })
    }, 1000)

    return () => clearInterval(timer)
  }, [])

  if (!show) return null

  return (
    <>
      <div className="fixed inset-0 flex items-center justify-center bg-black/60 z-50">
        {/* Popup Box */}
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ type: "spring", stiffness: 120, damping: 10 }}
          className="flex items-center justify-center relative bg-white p-8 rounded-2xl shadow-2xl max-w-md lg:h-[500px]"
        >
          {/* Close Button */}
          <button
            onClick={() => setShow(false)}
            className="absolute top-4 right-4 text-gray-600 hover:text-gray-800 text-2xl font-bold"
          >
            ✖
          </button>

          <div className="text-center">
            {/* Company Logo and Name */}
            <div className="mb-6">
              <h1 className="text-3xl font-bold text-orange-500 mb-1">OBLIQA</h1>
              <p className="text-gray-600 text-sm font-medium">OBLIQA IT SOLUTIONS</p>
            </div>

            {/* Special Offer Section */}
            <div className="mb-2">
              {/* Megaphone Icon with Bengali Text */}
              <div className="flex items-center justify-center mb-2">
                {/* <div className="relative">
                  <div className="bg-orange-100 rounded-full p-3 border-2 border-orange-300">
                    <svg className="w-8 h-8 text-red-600" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.94-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z" />
                    </svg>
                  </div>
                  <div className="absolute -top-2 -right-2 bg-orange-200 rounded-full px-3 py-1 border border-orange-400">
                    <span className="text-sm font-bold text-gray-800">বিশেষ অফার</span>
                  </div>
                </div> */}
                <div>
                  <p className="text-3xl font-bold text-black">বিশেষ ছাড় !</p>
                </div>
              </div>

              {/* Discount Banner */}
              <div className="relative mb-4">
                <div className="bg-gray-800 text-white px-8 py-3 rounded-lg relative overflow-hidden">
                  <div className="absolute left-0 top-0 bottom-0 w-4 bg-orange-400 transform -skew-x-12"></div>
                  <div className="absolute right-0 top-0 bottom-0 w-4 bg-orange-400 transform skew-x-12"></div>
                  <h2 className="text-2xl font-bold">৫০% ছাড়</h2>
                </div>
              </div>

              <div className="flex flex-col lg:flex-row justify-center items-center lg:gap-4 mb-4 p-4 bg-red-50 rounded-lg border-2 border-red-200">
                <p className="text-red-600 font-bold text-sm lg:text-lg mb-2">অফার শেষ হবে:</p>
                <div className="flex justify-center gap-2">
                  <div className="bg-red-600 text-white px-3 py-2 rounded-lg text-center min-w-[50px]">
                    <div className="text-lg font-bold">{timeLeft.days}</div>
                    <div className="text-xs">দিন</div>
                  </div>
                  <div className="bg-red-600 text-white px-3 py-2 rounded-lg text-center min-w-[20px]">
                    <div className="text-lg font-bold">{timeLeft.hours}</div>
                    <div className="text-xs">ঘন্টা</div>
                  </div>
                  <div className="bg-red-600 text-white px-3 py-2 rounded-lg text-center min-w-[50px]">
                    <div className="text-lg font-bold">{timeLeft.minutes}</div>
                    <div className="text-xs">মিনিট</div>
                  </div>
                  <div className="bg-red-600 text-white px-3 py-2 rounded-lg text-center min-w-[50px]">
                    <div className="text-lg font-bold">{timeLeft.seconds}</div>
                    <div className="text-xs">সেকেন্ড</div>
                  </div>
                </div>
              </div>

              {/* Offer Details */}
              <div className="text-gray-700 text-sm mb-6 leading-relaxed">
                <p>ওয়েব ডিজাইন ও সফটওয়্যার ডেভেলপমেন্ট</p>
                <p>সেবায় ৫০% ছাড়।</p>
                <p className="mt-2 font-medium">সীমিত সময়ের জন্য প্রযোজ্য।</p>
              </div>
            </div>

            {/* Order Button */}
            <button
              onClick={() => setShow(false)}
              className="bg-red-600 text-white px-8 py-3 rounded-lg font-bold hover:bg-red-700 transition-colors duration-200 text-lg"
            >
              অর্ডার করুন এখনি
            </button>
          </div>
        </motion.div>
      </div>
    </>
  )
}
