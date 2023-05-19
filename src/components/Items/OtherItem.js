import React from "react";
import { Link } from "react-router-dom";

const OtherItem = ({ image, productName, price }) => {
  return (
    <Link>
      <div className="shadow-2xl p-5 rounded-20">
        <div className="flex flex-col items-center">
          <img
            src={image}
            alt=""
            className="max-h-52 border-1 border-second mb-5"
          />
          <div className="flex w-full justify-between">
            <h1 className="font-light text-sm text-gray">{productName}</h1>
            <h1 className="text-blue text-lg font-semibold">${price}</h1>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default OtherItem;
