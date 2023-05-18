import React from "react";
import img from "../../assets/bb.png"

const ProductItem = () => {
  return (
    <div className="py-6 px-3 cursor-pointer">
      <div className="flex flex-col max-w-xs min-h-max p-3 border-1 border-primary rounded-20 hover:shadow-xl transition-shadow duration-300 ease-in-out">
        
        <div className="flex mt-3 justify-between items-start">
          <div className="w-auto mr-4 h-20 text-ellipsis overflow-hidden">
            <p className="text-sm font-medium text-gray">productName</p>
          </div>
          <div className="flex flex-col items-end">
            <h1 className="font-medium text-xl bg-primary text-light px-2 rounded-10">$999</h1>
          </div>
        </div>

        <div className="max-h-275 shadow-inner shadow-primary transition-shadow bg-blend-saturation rotate-180 rounded-20 flex justify-center mt-2">
          <img src={img} alt="" className="h-72 object-scale-down rotate-180 blur-none" />
        </div>
      </div>
    </div>
  );
};

export default ProductItem;
