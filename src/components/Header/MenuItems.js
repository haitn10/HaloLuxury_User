import React from "react";
import { Link } from "react-router-dom";
import Item from "../../assets/tote5.jpg";

const items = [
  { id: 1, items: "Bags" },
  { id: 2, items: "Clothes" },
  { id: 3, items: "Shoes" },
  { id: 4, items: "Watches" },
  { id: 5, items: "Eye Wear" },
  { id: 6, items: "Hats" },
];

const MenuItems = ({ show }) => {
  return (
    <div
      className="bg-light absolute pb-2 md:h-275 md:w-550 mt-8 ml-2 rounded-10 shadow-md transition-all z-0"
      hidden={show}
    >
      <div className="grid grid-cols-1 md:grid-cols-2 h-full">
        <ul className="inline-block ml-5 mt-4 list-none">
          <li className="font-bold text-xl uppercase w-275 border-b-2 border-second ">
            Type Clothes
          </li>
          {items.map((item) => (
            <li
              key={item.id}
              className="mt-2 font-medium hover:underline transition-all"
            >
              <Link to={""} className="uppercase">
                {item.items}
              </Link>
            </li>
          ))}
        </ul>
        <div className="flex-col hover:shadow-lg transition-all">
          <span className="absolute right-0 pl-3 mt-5 bg-red text-light w-20 font-semibold">
            NEW
          </span>
          <Link to={"/products"}>
            <div className="flex justify-center rounded-10">
              <img src={Item} alt="item" className="w-195" />
            </div>
            <div className="ml-5 mt-3 w-full h-10 text-yellow">
              <h2 className="font-normal">DIOR Relaxed Sweatshirt</h2>
              <h2 className="font-bold">$ 2999</h2>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default MenuItems;
