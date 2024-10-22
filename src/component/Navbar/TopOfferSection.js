import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEye,
  faRetweet,
  faSmile,
  faTrophy,
} from "@fortawesome/free-solid-svg-icons";

const TopOfferSection = () => {
  return (
    <div className="container mx-auto text-center mt-3   border-2 border-gray-800 p-4 rounded-s">
      <h4 className="text-lg font-semibold">
        Buy Eyewear Collection by Vision Express
      </h4>
      <div className="flex flex-wrap justify-center mt-4 font-bold">
        <div className="w-full sm:w-1/2 md:w-1/4 p-4">
          <FontAwesomeIcon icon={faRetweet} size="2x" className="fas" />
          <p className="mt-2">14 Days Hassle Free Returns</p>
        </div>
        <div className="w-full sm:w-1/2 md:w-1/4 p-4">
          <FontAwesomeIcon icon={faEye} size="2x" className="fas" />
          <p className="mt-2">Safest Eye Test</p>
        </div>
        <div className="w-full sm:w-1/2 md:w-1/4 p-4">
          <FontAwesomeIcon icon={faSmile} size="2x" className="fas" />
          <p className="mt-2">Free Lifelong Service</p>
        </div>
        <div className="w-full sm:w-1/2 md:w-1/4 p-4">
          <FontAwesomeIcon icon={faTrophy} size="2x" className="fas" />
          <p className="mt-2">World's No.1 Eye Care Experts</p>
        </div>
      </div>
    </div>
  );
};

export default TopOfferSection;
