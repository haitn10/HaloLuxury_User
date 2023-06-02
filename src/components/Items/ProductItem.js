import React from "react";
import { Card, CardBody } from "@material-tailwind/react";
import { StarIcon } from "@heroicons/react/24/solid";
import { useDispatch } from "react-redux";
import { AddCart } from "../../pages/Cart/action";
import { useNavigate } from "react-router";

const ProductItem = ({ product }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const AddToCart = async (product) => {
    dispatch(await AddCart(product));
  };

  return (
    <div className="py-6 px-3">
      <Card className="border-1 min-h-full rounded-20 border-primary hover:shadow-xl transition-shadow duration-300 ease-in-out">
        <div className="relative flex h-62 mb-3">
          <img
            src={product.image}
            alt={product.name}
            className="h-62 w-full object-fill rounded-20"
          />
        </div>
        <CardBody className="h-full flex flex-col justify-between">
          <div className="flex flex-wrap ">
            <div className="w-full xl:flex xl:justify-between mb-3">
              <div className="flex items-center text-sm mb-1">
                <StarIcon className="w-4 h-4 mr-1 mb-1 text-yellow" />
                <span className="text-gray whitespace-nowrap mr-2">
                  {product.store.rate}
                </span>
                <span className="font-medium">{product.store.name}</span>
              </div>
              <div className="xl:flex xl:items-center max-w-max text-center bg-green text-light text-xs px-2 py-1 xl:ml-3 rounded-10">
                {product.category.name}
              </div>
            </div>
            <div
              className="flex items-center w-full justify-between min-w-0 "
              onClick={() => navigate(`/products/${product.id}/details`)}
            >
              <p className="text-sm mr-auto h-14 cursor-pointer text-gray line-clamp-3">
                {product.name}
              </p>
            </div>
          </div>
          <div className="flex justify-between items-center mt-2">
            <div className="text-white font-medium mr-2">
              {Intl.NumberFormat("vi-VN").format(product.price)}
            </div>
            <div className="bg-primary ml-2">
              <button
                className="p-2 text-xs text-light"
                onClick={() => AddToCart(product)}
              >
                Add to Cart
              </button>
            </div>
          </div>
        </CardBody>
      </Card>
    </div>
  );
};

export default ProductItem;
