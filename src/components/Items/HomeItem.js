import React from "react";
import { useNavigate } from "react-router-dom";

const HomeItem = ({ product }) => {
  const navigate = useNavigate();

  return (
    <div
      className="flex-none py-6 px-3"
      onClick={() => navigate(`/products/${product.id}/details`)}
    >
      <div className="flex flex-col sm:w-60 md:w-80 max-h-450 border-2 p-4 border-primary rounded-20 hover:shadow-xl transition-shadow duration-300 ease-in-out">
        <div className="flex gap-3 items-center cursor-pointer">
          <img
            src={product.store.image}
            alt="channel"
            className="rounded-20 w-8 h-8 md:w-10 md:h-10 object-scale-down ml-5"
          />
          <h1 className="font-semibold">{product.store.name}</h1>
        </div>
        <div className="max-h-195 md:max-h-275 border-2 rounded-20 border-second flex justify-center mt-2 cursor-pointer hover:bg-opacity-25 transition-colors ease-linear">
          <img
            src={product.image}
            alt=""
            className="h-150 md:h-225 object-scale-down rounded-20"
          />
        </div>
        <div className="flex mt-3 p-3">
          <div className="w-auto mr-4 h-20 text-ellipsis overflow-hidden">
            <p className="text-sm font-medium text-gray">{product.name}</p>
          </div>
          <div className="flex flex-col items-end">
            {product.salePrice === null ? (
              <h1 className="font-semibold md:text-xl text-blue">
                {Intl.NumberFormat("vi-VN").format(product.price)}
              </h1>
            ) : (
              <>
                <h1 className="font-semibold md:text-xl">
                  {Intl.NumberFormat("vi-VN").format(product.salePrice)}
                </h1>
                <h2 className="font-normal text-sm line-through text-red">
                  {Intl.NumberFormat("vi-VN").format(product.price)}
                </h2>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeItem;
