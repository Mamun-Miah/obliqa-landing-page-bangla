/* eslint-disable @next/next/no-img-element */
"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

export default function DiscountPopup() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    // Page লোড হলেই popup show হবে
    setShow(true);
  }, []);

  if (!show) return null;

  return (
    <>
      <div className="fixed inset-0 flex items-center justify-center bg-black/60 z-50">
        {/* Popup Box */}
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ type: "spring", stiffness: 120, damping: 10 }}
          className="relative bg-white p-4 rounded-2xl shadow-2xl max-w-md m-4"
        >
          {/* Close Button */}
          <button
            onClick={() => setShow(false)}
            className="absolute top-2 right-2 text-gray-600 hover:text-red-500 text-xl"
          >
            ✖
          </button>

          {/* Discount Image */}
          <Image
            src="/Popup image.png"
            alt="Discount Offer"
            width={500}
            height={300}
            className="rounded-xl h-92"
          />
          <div className="text-center mt-4">
            <button
              onClick={() => setShow(false)}
              className="bg-red-600 text-white px-6 py-2 rounded-lg font-bold hover:bg-red-700 transition"
            >
              অর্ডার করুন এখনি
            </button>
          </div>
        </motion.div>
      </div>
    </>
  );
}
