import React, { Fragment, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import logo from "../../assets/HL-Logo.png";
import {
  Bars3Icon,
  BellIcon,
  ShoppingBagIcon,
  UserCircleIcon,
} from "@heroicons/react/24/outline";
import MenuItems from "./MenuItems";
import {
  Badge,
  Menu,
  MenuHandler,
  MenuItem,
  MenuList,
} from "@material-tailwind/react";
import Item from "../../assets/tote5.jpg";

const items = [
  { id: 1, items: "Bags" },
  { id: 2, items: "Clothes" },
  { id: 3, items: "Shoes" },
  { id: 4, items: "Watches" },
  { id: 5, items: "Eye Wear" },
  { id: 6, items: "Hats" },
];

const Navbar = () => {
  const navigate = useNavigate();
  const [checkToken, setCheckToken] = useState(false);

  const [show, setShow] = useState(true);
  return (
    <nav className="bg-second h-75 font-second fixed w-full z-50">
      <div className="grid grid-cols-3 items-center h-full">
        <div className="flex justify-start ml-8">
          <Fragment>
            <Menu placement="bottom-start" className="hover: border-none">
              <MenuHandler>
                <button>
                  <Bars3Icon className="w-10 h-10 text-light font-bold hover:bg-second-1 hover:rounded-20 transition-all" />
                </button>
              </MenuHandler>
              <MenuList className="md:h-275 md:w-550 rounded-10">
                <MenuItem className="grid grid-cols-1 md:grid-cols-2 h-full hover:bg-white focus:bg-white active:bg-white">
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
                  <div className="flex-col">
                    <span className="absolute right-0 pl-3 mt-5 bg-red text-light w-20 font-semibold">
                      NEW
                    </span>
                    {/* <Link to={"/products"}> */}
                    <div className="flex justify-center">
                      <img src={Item} alt="item" className="w-44 mb-3" />
                    </div>
                    <div className="ml-3 h-10 text-yellow">
                      <h2 className="font-normal">DIOR Relaxed Sweatshirt</h2>
                      <h2 className="font-bold">$ 2999</h2>
                    </div>
                    {/* </Link> */}
                  </div>
                </MenuItem>
              </MenuList>
            </Menu>
          </Fragment>
          <MenuItems show={show} />
        </div>
        <div className="flex justify-center">
          <Link to={"/"}>
            <img
              src={logo}
              alt="Halo Luxury Logo"
              className="h-35 md:cursor-pointer"
            />
          </Link>
        </div>
        <div className="inline-flex justify-end gap-5 mr-10 items-center">
          <ul className="flex gap-5 items-center">
            <li className="w-10 h-10 flex justify-center hover:bg-second-1 hover:rounded-20 transition-all">
              <Link to={"/mycart"} className="flex items-center ">
                <Badge content="5" className="bg-red text-light">
                  <ShoppingBagIcon className="w-7 h-7 text-light font-bold" />
                </Badge>
              </Link>
            </li>
            <li className="w-10 h-10 flex justify-center hover:bg-second-1 hover:rounded-20 transition-all">
              <Link to={""} className="flex items-center">
                <Badge className="bg-red">
                  <BellIcon className="w-7 h-7 text-light font-bold" />
                </Badge>
              </Link>
            </li>
          </ul>

          {checkToken ? (
            <div>
              <Link to={"/myprofile"} className="flex items-center">
                <UserCircleIcon className="w-7 h-7 text-light font-bold" />
              </Link>
            </div>
          ) : (
            <div className="md:flex hidden md:shrink-0 gap-5">
              <button
                onClick={() => {
                  navigate("/login");
                }}
                className="border-1 rounded-20 h-9 w-24 border-admin text-light font-medium text-base hover:bg-second-1 transition-all"
              >
                Login
              </button>
              <button
                onClick={() => {
                  navigate("/register");
                }}
                className="border-1 rounded-20 h-9 w-24 border-admin text-light font-medium text-base hover:bg-second-1 transition-all"
              >
                Register
              </button>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
