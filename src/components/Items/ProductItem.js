import React from "react";
import tote from "../../assets/tote5.jpg";
import { Card, CardBody, CardHeader } from "@material-tailwind/react";

const ProductItem = () => {
  return (
    <div className="py-6 px-3">
      <Card className="flex cursor-pointer flex-col max-w-xs min-h-max p-3 rounded-20 hover:outline-1 hover:outline-double outline-primary hover:shadow-xl transition-shadow duration-300 ease-in-out">
        <CardHeader className="flex mt-3 justify-between items-start shadow-none">
          <div className="w-auto mr-4 h-20 text-ellipsis overflow-hidden">
            <p className="text-sm font-medium text-gray">Dior Book Tote</p>
          </div>
          <div className="flex flex-col items-end">
            <h1 className="font-medium text-xl bg-primary text-light px-2 rounded-10">
              $999
            </h1>
          </div>
        </CardHeader>

        <CardBody className="max-h-275 rounded-20 shadow-xl">
          <img src={tote} alt="" className="h-72 object-scale-down" />
        </CardBody>
      </Card>
    </div>
  );
};

export default ProductItem;
