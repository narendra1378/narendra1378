import React from "react";
// Ensure you have Tailwind CSS imported
import image from "../image/Prada-Sunglasses-brands-StartupTalky.jpg";
const BookAppointment = () => {
  return (
    <div className="container mx-auto p-4 section-main-container">
      <div className="flex flex-col">
        <div className="book-an-appointment">
          <div className="flex flex-wrap">
            <div className="w-full md:w-7/12 text-left left-box p-4">
              <div className="content-box ">
                <h6 className="text-xl font-bold text-left">About Us</h6>
                <p className="mt-2 text-center p-4">
                  Welcome to [Your Brand Name] At [Your Brand Name], we believe
                  that your vision deserves the best. Our passion for eyewear
                  drives us to provide innovative solutions tailored to your
                  unique needs. With a commitment to quality, style, and
                  affordability, we offer a comprehensive range of optical
                  products, from trendy frames to advanced lenses.
                </p>
                <h4 className="text-bold">Our Mission</h4>
                <p className="mt-2 text-center p-4">
                  {" "}
                  Our Mission Our mission is to empower individuals by enhancing
                  their vision and style. We strive to offer the latest
                  technology in eyewear while ensuring exceptional customer
                  service. Your satisfaction is our top priority, and we aim to"
                  create a personalized experience for every customer.
                </p>

                <span className="text-center ">
                  <button className="mt-4 bg-light text-black px-4 py-2 rounded border-2 border-pink-800 hover:border-2 hover:border-red-500 hover:bg-white">
                    Try Now
                  </button>
                </span>
              </div>
            </div>
            <div className="w-full md:w-5/12 text-right p-4">
              <img src={image} alt="3D Try-On" className="w-full h-auto" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookAppointment;
