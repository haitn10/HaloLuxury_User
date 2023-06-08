import React from "react";
import { Button, Card, CardBody, CardFooter } from "@material-tailwind/react";
import dior from "../../assets/dior.png";
import tote from "../../assets/tote5.jpg";
import moment from "moment/moment";

const Items = ({ order }) => {
  return (
    <Card className="p-2">
      <div className="flex justify-between items-center my-2 px-3">
        <div className="flex items-center">
          <img
            src={order.store.image}
            alt=""
            className="rounded-full h-10 w-10 object-scale-down border-1 border-primary"
          />
          <h1 className="font-semibold uppercase mx-3 text-xl">
            {order.store.name}
          </h1>
        </div>
        <div>
          <h1>
            Order Number: <strong>#{order.id}</strong>
          </h1>
        </div>
      </div>
      <CardBody className="border-t-2 border-primary md:px-20">
        <div className="flex justify-between">
          <div className="flex">
            <img
              src={order.orderItem.imageLink}
              alt=""
              className="h-20 w-20 md:h-36 md:w-36 object-scale-down shadow-xl"
            />
            <div className="ml-3">
              <h1 className="font-medium text-base md:text-xl">
                {order.orderItem.productName}
              </h1>
              <h3 className="text-yellow text-sm md:text-lg font-medium">
                $1.999
              </h3>
            </div>
          </div>
        </div>
      </CardBody>
      <CardFooter className="border-t-2 border-primary">
        <div className="flex justify-between md:mx-5">
          <div className="md:flex gap-5 text-xs md:text-base">
            <p className="">Orders will be prepared and shipped in advance </p>
            <strong>
              {moment(order.orderTime).add(5, "days").format("DD/MM/YYYY")}
            </strong>
          </div>
          <div className="md:flex items-center gap-4">
            <h1>
              Price: <strong>{Intl.NumberFormat("vi-VN").format(order.total)}</strong>
            </h1>
            {/* <div className="bg-primary text-light">
              <Button>Cancel Order</Button>
            </div> */}
          </div>
        </div>
      </CardFooter>
    </Card>
  );
};

export default Items;
