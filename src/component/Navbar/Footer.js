import React from "react";
import {
  FaTwitter,
  FaInstagram,
  FaFacebook,
  FaYoutube,
  FaLinkedin,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-slate-900 text-white" id="footer">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-4 ml-10 md:ml-0">
          <div className="col-span-1 flex flex-col items-start ">
            <span className="text-4xl font-bold mb-4 ml-10">Optics</span>
            <div className="flex space-x-4 mt-2 ml-10">
              <FaTwitter className="text-gray-200 hover:text-gray-400" />
              <FaInstagram className="text-gray-200 hover:text-gray-400" />
              <FaFacebook className="text-gray-200 hover:text-gray-400" />
              <FaYoutube className="text-gray-200 hover:text-gray-400" />
              <FaLinkedin className="text-gray-200 hover:text-gray-400" />
            </div>
          </div>

          <div className="col-span-1">
            <h5 className="font-semibold">About Us</h5>
            <div className="flex flex-col space-y-2 text-gray-200">
              <span>Meet the team</span>
              <span>Contact Us</span>
            </div>
          </div>

          <div className="col-span-1">
            <h5 className="font-semibold">Designer Eyewear</h5>
            <div className="flex flex-col space-y-2 text-gray-200">
              <span>Our Brands</span>
              <span>Men's glasses</span>
              <span>Women's glasses</span>
              <span>Sunglasses</span>
            </div>
          </div>

          <div className="col-span-1">
            <h5 className="font-semibold">Eye Care</h5>
            <div className="flex flex-col space-y-2 text-gray-200">
              <span>Eye Examination</span>
              <span>OCT Scan</span>
              <span>Contact Lenses</span>
            </div>
          </div>

          <div className="col-span-1">
            <h5 className="font-semibold">Contact Us</h5>
            <div className="flex flex-col space-y-2 text-gray-200">
              <span>Quick Contacts</span>
              <span>Email</span>
              <span>FAQs</span>
            </div>
          </div>
        </div>

        <div className="my-4 border-t border-gray-300 pt-4">
          <p className="text-center text-gray-200">
            Copyright by &copy; 2024 i2s2, Inc. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
