import React from "react";
import { Link } from "react-router-dom";
import menImage from "../image/men.jpg"; // Adjust the path as needed
import womenImage from "../image/woman.jpg"; // Adjust the path as needed
import kidsImage from "../image/kids.jpg"; // Adjust the path as needed

const Trending = () => {
  return (
    <div className="container mx-auto px-4">
      <h2 className="text-center text-2xl font-bold mb-6">
        Glasses for Everyone
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="p-4">
          <h3 className="text-center text-lg font-semibold">Men</h3>
          <Link to="/men">
            <div className="relative">
              <img
                src={menImage}
                alt="Men's Glasses"
                className="w-full h-80 object-cover border-2 border-gray-300 transition-transform duration-300 hover:scale-105 hover:shadow-lg"
              />
              <div className="absolute bottom-0 left-0 right-0 flex items-center justify-center bg-black bg-opacity-50 text-white text-lg p-2">
                <button className="bg-transparent border border-white p-2 rounded-xl hover:bg-white hover:text-black">
                  View Range
                </button>
              </div>
            </div>
          </Link>
        </div>
        <div className="p-4">
          <h3 className="text-center text-lg font-semibold">Women</h3>
          <Link to="/women">
            <div className="relative">
              <img
                src={womenImage}
                alt="Women's Glasses"
                className="w-full h-80 object-cover border-2 border-gray-300 transition-transform duration-300 hover:scale-105 hover:shadow-lg"
              />
              <div className="absolute bottom-0 left-0 right-0 flex items-center justify-center bg-black bg-opacity-50 text-white text-lg p-2">
                <button className="bg-transparent border border-white p-2 rounded-xl hover:bg-white hover:text-black">
                  View Range
                </button>
              </div>
            </div>
          </Link>
        </div>
        <div className="p-4">
          <h3 className="text-center text-lg font-semibold">Kids</h3>
          <Link to="/kids">
            <div className="relative">
              <img
                src={kidsImage}
                alt="Kids' Glasses"
                className="w-full h-80 object-cover border-2 border-gray-300 transition-transform duration-300 hover:scale-105 hover:shadow-lg"
              />
              <div className="absolute bottom-0 left-0 right-0 flex items-center justify-center bg-black bg-opacity-50 text-white text-lg p-2">
                <button className="bg-transparent border border-white p-2 rounded-xl hover:bg-white hover:text-black">
                  View Range
                </button>
              </div>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Trending;
