import React from "react";
import computerGlasses from "../image/computer-glasses.webp"; // Update the path as necessary
import contactLenses from "../image/contact-lens.webp"; // Update the path as necessary
import eyeGlasses from "../image/front.webp"; // Update the path as necessary
import sunglasses from "../image/SG-front.webp"; // Update the path as necessary

const ProductsSection = () => {
  return (
    <div className="container mx-auto text-center py-8">
      <h2 className="text-2xl font-bold mb-6">Our Products</h2>
      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-6">
        <div className="flex flex-col items-center">
          <div className="oval overflow-hidden rounded-full shadow-lg">
            <a href="#">
              <img
                src={computerGlasses}
                alt="Computer Glasses"
                className="w-full h-auto"
              />
            </a>
          </div>
          <h6 className="mt-2 text-lg">Computer Glasses</h6>
        </div>
        <div className="flex flex-col items-center">
          <div className="oval overflow-hidden rounded-full shadow-lg">
            <a href="#">
              <img
                src={contactLenses}
                alt="Contact Lenses"
                className="w-full h-auto"
              />
            </a>
          </div>
          <h6 className="mt-2 text-lg">Contact Lenses</h6>
        </div>
        <div className="flex flex-col items-center">
          <div className="oval overflow-hidden rounded-full shadow-lg">
            <a href="#">
              <img
                src={eyeGlasses}
                alt="EyeGlasses"
                className="w-full h-auto"
              />
            </a>
          </div>
          <h6 className="mt-2 text-lg">EyeGlasses</h6>
        </div>
        <div className="flex flex-col items-center">
          <div className="oval overflow-hidden rounded-full shadow-lg">
            <a href="#">
              <img
                src={sunglasses}
                alt="Sunglasses"
                className="w-full h-auto"
              />
            </a>
          </div>
          <h6 className="mt-2 text-lg">Sunglasses</h6>
        </div>
      </div>
    </div>
  );
};

export default ProductsSection;
