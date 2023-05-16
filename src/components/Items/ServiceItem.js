import React from "react";

const ServiceItem = ({image, text}) => {
  return (
    <div className="flex flex-col items-center">
      <img src={image} alt="" className="w-150" />
      <h1 className="font-medium text-xl">{text}</h1>
    </div>
  );
};

export default ServiceItem;
