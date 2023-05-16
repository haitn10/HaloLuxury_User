import React from "react";

const HomeItem = ({ logo, storeName, productImg, productName, oldPrice, newPrice }) => {
  return (
    <div className="flex-none py-6 px-3">
      <div className="flex flex-col max-w-xs max-h-450 border-2 p-4 border-primary rounded-20 hover:shadow-xl transition-shadow duration-300 ease-in-out">
        <div className="flex gap-3 items-center cursor-pointer">
          <img
            src={logo}
            alt="channel"
            className="rounded-20 w-10 h-10 object-scale-down ml-5"
          />
          <h1 className="font-semibold">{storeName}</h1>
        </div>
        <div className="max-h-275 border-2 rounded-20 border-second flex justify-center mt-2 cursor-pointer hover:bg-second hover:bg-opacity-25 transition-colors ease-linear">
          <img src={productImg} alt="" className="h-275 object-scale-down" />
        </div>
        <div className="flex mt-3 p-3">
          <div className="w-auto mr-4 h-20 text-ellipsis overflow-hidden">
            <p className="text-sm font-medium text-gray ">
              {productName}
            </p>
          </div>
          <div className="flex flex-col items-end">
            <h1 className="font-semibold text-xl">${newPrice}</h1>
            <h2 className="font-normal text-sm line-through text-red">${oldPrice}</h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeItem;
