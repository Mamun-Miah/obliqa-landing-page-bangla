"use client";

import Image from "next/image";
import Link from "next/link";
import {
  TiSocialFacebook,
  TiSocialInstagram,
  TiSocialLinkedin,
} from "react-icons/ti";

const Footer = () => {
  return (
    <div>
      <footer className="grid lg:gap-8 lg:grid-cols-5 bg-[#263238] text-white min-h-80 py-12 px-5 pt-8">
        {/* Logo + Social Links */}
        <div>
          <nav className="flex flex-col gap-4 items-center my-4">
            <Image src='./logo.svg' alt="Company Logo" width={160} height={80} />
            <div className="flex gap-4">
              <a
                className="text-3xl"
                href="https://www.facebook.com/people/OBLIQA-IT-Solutions/61574924409322/?mibextid=ZbWKwL"
                target="_blank"
                rel="noopener noreferrer"
              >
                <TiSocialFacebook />
              </a>
              <a
                className="text-3xl"
                href="https://www.linkedin.com/company/obliqa-it-solutions/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <TiSocialLinkedin />
              </a>
              <a
                className="text-3xl"
                href="https://www.instagram.com/obliqa_it_solutions/?igsh=MWlpNTU1b3k5eGtybg%3D%3D#"
                target="_blank"
                rel="noopener noreferrer"
              >
                <TiSocialInstagram />
              </a>
            </div>
          </nav>
        </div>
<div></div>
        {/* Information */}
        <div className="flex flex-col text-current space-y-2 mb-5">
          <h6 className="text-2xl font-bold mb-3 text-white uppercase tracking-wider">
            Quick Links
          </h6>
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

        {/* Quick Links */}
        <div className="flex flex-col space-y-2 mb-5">
          {/* <h6 className="text-2xl font-bold mb-3 text-white uppercase tracking-wider">
            Quick Links
          </h6>
          <div className="text-gray-300 flex flex-col space-y-2 text-xl">
            <Link href="/" className="hover:text-white">Home</Link>
            <Link href="/about" className="hover:text-white">About</Link>
            <Link href="/services" className="hover:text-white">Services</Link>
            <Link href="/portfolio" className="hover:text-white">Portfolio</Link>
            <Link href="/contact" className="hover:text-white">Contact Us</Link>
          </div> */}
        </div>

        {/* Contact Info */}
        <div className="flex flex-col text-lg space-y-2">
          <h6 className="text-2xl font-bold mb-3 text-white uppercase tracking-wider ">
            Contact Info
          </h6>
          <p className="text-gray-300 text-xl">
            <span className="font-medium text-white">
              <i className="fa-solid fa-location-dot" style={{ color: "white" }} /> Address:
            </span>
            <br />
            Dhaka, Bangladesh
          </p>
          <p className="text-gray-300 text-xl">
            <span className="font-medium text-white">
              <i className="fa-solid fa-phone" style={{ color: "#ffffff" }} /> Phone:
            </span>
            <br /> +880 170 680 3616
          </p>
          <p className="text-gray-300 text-xl">
            <span className="font-medium text-white">
              <i className="fa-solid fa-envelope" style={{ color: "#ffffff" }} /> Email:
            </span>
            <br />
            contact@obliqa.com
          </p>
        </div>
      </footer>

      {/* Copyright */}
      <div className="bg-[#717171] text-white flex items-center justify-center p-4">
        <aside className="text-center">
          <p>© 2025 OBLIQA All rights reserved.</p>
        </aside>
      </div>
    </div>
  );
};

export default Footer;
