import React from "react";
import { Link } from "react-router-dom";
import blackImage from "../image/black1.jpg"; // Adjust path as necessary
import redImage from "../image/red1.webp";
import grayImage from "../image/gray1.jpg";
import winImage from "../image/win1.jpg";
import newImage1 from "../image/new1.jpg";
import newImage2 from "../image/new2.webp";
import newImage3 from "../image/new3.jpg";
import newImage4 from "../image/new4.webp"; // Logo image path

const TrendingAndNewArrivals = () => {
  const trendingItems = [
    {
      imgSrc: blackImage,
      name: "Half Rim Rectangle Black",
      price: 899,
      oldPrice: 1799,
      discount: "50% off",
    },
    {
      imgSrc: redImage,
      name: "Half Rim Rectangle Black",
      price: 899,
      oldPrice: 1799,
      discount: "50% off",
    },
    {
      imgSrc: grayImage,
      name: "Half Rim Rectangle Black",
      price: 899,
      oldPrice: 1799,
      discount: "50% off",
    },
  ];

  const newArrivals = [
    {
      imgSrc: newImage1,
      name: "Half Rim Rectangle Black",
      price: 899,
      oldPrice: 1799,
      discount: "50% off",
    },
    {
      imgSrc: newImage2,
      name: "Half Rim Rectangle Black",
      price: 899,
      oldPrice: 1799,
      discount: "50% off",
    },
    {
      imgSrc: newImage3,
      name: "Half Rim Rectangle Black",
      price: 899,
      oldPrice: 1799,
      discount: "50% off",
    },
  ];

  return (
    <div className="container mx-auto text-center">
      {/* Trending Section */}
      <div className="mb-8">
        <h2 className="text-2xl font-bold mb-4">What's Trending Now</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {trendingItems.map((item, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg p-4">
              <p className="text-sm text-gray-500">TRENDING</p>
              <Link to="#">
                <img
                  src={item.imgSrc}
                  alt={item.name}
                  className="w-full h-48 object-cover rounded-md mb-2"
                />
              </Link>
              <Link to="#">
                <p className="font-semibold">{item.name}</p>
              </Link>
              <p className="mt-2">
                <span className="font-bold text-lg">
                  <i className="fa fa-rupee"></i>
                  {item.price}
                </span>
                <span className="line-through text-gray-500 ml-2">
                  {item.oldPrice}
                </span>
                <span className="text-red-500 font-bold ml-2">
                  {item.discount}
                </span>
              </p>
            </div>
          ))}
        </div>
        <div className="flex justify-end mb-4 mr-10 mt-4 ">
          <Link
            to="#"
            className=" bg-slate-600 text-white rounded-2xl p-2 hover:bg-slate-900 "
          >
            View All
          </Link>
        </div>
      </div>

      {/* New Arrivals Section */}
      <div className="mb-8">
        <h2 className="text-2xl font-bold mb-4">New Arrivals</h2>

        <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-3 gap-6">
          {newArrivals.map((item, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg p-4">
              <p className="text-sm text-gray-500">New Arrivals</p>
              <Link to="#">
                <img
                  src={item.imgSrc}
                  alt={item.name}
                  className="w-full h-48 object-cover rounded-md mb-2"
                />
                <div className="LOGO p-0">
                  <img src={newImage4} alt="Logo" className="w-1/5 mx-auto" />
                </div>
              </Link>
              <Link to="#">
                <p className="font-semibold">{item.name}</p>
              </Link>
              <p className="mt-2">
                <span className="font-bold text-lg">
                  <i className="fa fa-rupee"></i>
                  {item.price}
                </span>
                <span className="line-through text-gray-500 ml-2">
                  {item.oldPrice}
                </span>
                <span className="text-red-500 font-bold ml-2">
                  {item.discount}
                </span>
              </p>
            </div>
          ))}
        </div>
      </div>
      <div className="flex justify-end mb-4 mr-10 mt-4 ">
        <Link
          to="#"
          className=" bg-slate-600 text-white rounded-2xl p-2 hover:bg-slate-900 "
        >
          View All
        </Link>
      </div>
    </div>
  );
};

export default TrendingAndNewArrivals;
