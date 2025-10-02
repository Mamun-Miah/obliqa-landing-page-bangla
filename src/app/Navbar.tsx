"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  // const menuItems = [
  //   { label: "Home", href: "https://obliqa.com/" },
  //   { label: "About", href: "https://obliqa.com/about" },
  //   { label: "Services", href: "https://obliqa.com/services" },
  //   { label: "Portfolio", href: "https://obliqa.com/portfolio" },
  //   { label: "Contact Us", href: "/contact" },
  // ];

  return (
    <div className="top-0 left-0 right-0 z-50 bg-transparent backdrop-blur-md">
      <div className="navbar px-4 lg:px-8">
        {/* Left Side (Logo + Mobile Menu) */}
        <div className="navbar-start">
          {/* Mobile Dropdown */}
          {/* <div className="dropdown">
            <label
              tabIndex={0}
              className="btn btn-ghost lg:hidden"
              role="button"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 text-white"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-[#127a14] rounded-box z-50 mt-3 w-52 p-2 shadow text-white"
            >
              {menuItems.map(({ label, href }) => (
                <li key={label}>
                  <Link href={href}>{label}</Link>
                </li>
              ))}
              <li className="mt-2 flex gap-2 px-2">
                <Link
                  href="https://crm.obliqa.com/index.php/signin"
                  className="btn btn-outline border-white text-white hover:bg-orange-400 hover:text-white flex-1"
                >
                  লগইন
                </Link>
                <Link
                  href="https://crm.obliqa.com/index.php/signup"
                  className="btn btn-outline border-white text-white hover:bg-orange-400 hover:text-white flex-1"
                >
                  সাইন আপ
                </Link>
              </li>
            </ul>
          </div> */}

          {/* Logo (Desktop) */}
          <Link href="#">
            <Image
              src='./logo.svg'
              alt="Logo"
              width={150}
              height={50}
              className="cursor-pointer"
            />
          </Link>
        </div>

        {/* Center Menu (Desktop) */}
        {/* <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 text-white font-semibold text-xl gap-8 font-normal">
            {menuItems.map(({ label, href }) => (
              <li key={label} className="hover:text-[#ff9800]">
                <Link href={href}>{label}</Link>
              </li>
            ))}
          </ul>
        </div> */}

        {/* Right Side (Mobile Logo + Login/Signup) */}
        <div className="navbar-end flex items-center gap-3">
          {/* Mobile Logo */}
          {/* <Link href="/" className="lg:hidden">
            <Image
              src="https://obliqa.com/assets/logo-v5XmxzuU.svg"
              alt="Logo"
              width={100}
              height={35}
              className="cursor-pointer"
            />
          </Link> */}

          {/* Buttons */}
          <Link
            href="https://crm.obliqa.com/index.php/signin"
            className="btn btn-outline text-white border-white hover:bg-orange-400 hover:text-white"
          >
            লগইন
          </Link>
          <Link
            href="https://crm.obliqa.com/index.php/signup"
            className="btn bg-orange-500 border-white text-white hover:bg-transparent hover:border-orange-400"
          >
            সাইন আপ
          </Link>
        </div>
      </div>
    </div>
  );
}
