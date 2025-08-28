import React from "react";

export default function Footer() {
  return (
    <footer className="bg-white shadow-md text-white py-8 ">
      <div className="container mx-auto px-4 md:flex md:justify-between">
        <div className="mb-6 md:mb-0">
          <h1 className="text-2xl text-gray-600 font-bold">Tech Gadgets</h1>
          <p className="text-gray-700 mt-2">
            Quality products for your everyday life.
          </p>
        </div>

        {/* Links */}
        <div className="grid grid-cols-2 gap-6 md:flex md:gap-12">
          <div>
            <h2 className="font-semibold mb-2 text-gray-600">Company</h2>
            <ul className="text-gray-700">
              <li className="hover:text-black cursor-pointer">
                <a href="/about" className="hover:text-black">
                  About Us
                </a>
              </li>
              <li className="hover:text-black cursor-pointer">Products</li>
            </ul>
          </div>
          <div>
            <h2 className="font-semibold text-gray-700 mb-2">Support</h2>
            <ul className="text-gray-600">
              <li className="hover:text-black cursor-pointer">Contact</li>
              <li className="hover:text-black cursor-pointer">FAQs</li>
              <li className="hover:text-black cursor-pointer">Help Center</li>
            </ul>
          </div>
        </div>

        {/* Social Icons */}
        <div className="mt-6 md:mt-0 mr-9">
          <h2 className="font-semibold mb-2 text-gray-700">Follow Us</h2>
          <div className=" space-y-4 text-gray-600">
            <a href="#" className="hover:text-blue-500">
              Facebook
            </a>
            <br />
            <a href="#" className="hover:text-blue-400">
              Twitter
            </a>
            <br />
            <a href="#" className="hover:text-pink-500">
              Instagram
            </a>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="mt-8 border-t border-gray-800 pt-4 text-center text-gray-500 text-sm">
        © {new Date().getFullYear()} Tech Gadgets All rights reserved.
      </div>
    </footer>
  );
}
