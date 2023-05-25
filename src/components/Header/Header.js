import React, { Fragment, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import logo from "../../assets/HL-Logo.png";
import {
  Bars3Icon,
  BellIcon,
  ClockIcon,
  Cog6ToothIcon,
  PowerIcon,
  ShoppingBagIcon,
  UserCircleIcon,
} from "@heroicons/react/24/outline";
import MenuItems from "./MenuItems";
import {
  Avatar,
  Badge,
  Menu,
  MenuHandler,
  MenuItem,
  MenuList,
  Typography,
} from "@material-tailwind/react";
import Item from "../../assets/tote5.jpg";
import { useDispatch, useSelector } from "react-redux";

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
  const [checkToken, setCheckToken] = useState(true);
  const dispatch = useDispatch();
  const numberProducts = useSelector((state) => state.carts.numberProduct);

  return (
    <nav className="bg-second h-75 font-second fixed w-full z-50">
      <div className="grid grid-cols-3 items-center h-full">
        <div className="flex justify-start ml-8">
          <Fragment>
            <Menu placement="bottom-start">
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
                        <Link to={"/products"} className="uppercase">
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
                <Badge
                  content={numberProducts}
                  className="bg-red text-light w-5 h-5"
                >
                  <ShoppingBagIcon className="w-7 h-7 text-light font-bold" />
                </Badge>
              </Link>
            </li>
            <li className="w-10 h-10 flex justify-center hover:bg-second-1 hover:rounded-20 transition-all">
              <Menu placement="bottom-end">
                <Badge className="bg-red mt-2 mr-2">
                  <MenuHandler>
                    <button>
                      <BellIcon className="w-7 h-7 text-light font-bold" />
                    </button>
                  </MenuHandler>
                </Badge>
                <MenuList className="flex flex-col gap-2 rounded-10">
                  <MenuItem className="flex items-center gap-4 py-2 pr-8 pl-2">
                    <Avatar
                      variant="circular"
                      alt="candice wu"
                      src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1480&q=80"
                    />
                    <div className="flex flex-col gap-1">
                      <Typography
                        variant="small"
                        color="gray"
                        className="font-normal"
                      >
                        <span className="font-medium text-blue-gray-900">
                          Wu
                        </span>{" "}
                        send you a message
                      </Typography>
                      <Typography
                        variant="small"
                        className="flex items-center gap-1 text-xs text-gray-600"
                      >
                        <ClockIcon className="h-3 w-3" />
                        13 minutes ago
                      </Typography>
                    </div>
                  </MenuItem>
                  <MenuItem className="flex items-center gap-4 py-2 pr-8 pl-2">
                    <Avatar
                      variant="circular"
                      alt="natali craig"
                      src="https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1061&q=80"
                    />
                    <div className="flex flex-col gap-1">
                      <Typography
                        variant="small"
                        color="gray"
                        className="font-normal"
                      >
                        <span className="font-medium text-blue-gray-900">
                          Natali
                        </span>{" "}
                        reply to your email
                      </Typography>
                      <Typography
                        variant="small"
                        className="flex items-center gap-1 text-xs text-gray-600"
                      >
                        <ClockIcon className="h-3 w-3" />a hour ago
                      </Typography>
                    </div>
                  </MenuItem>
                  <MenuItem className="flex items-center gap-4 py-2 pr-8 pl-2">
                    <Avatar
                      variant="circular"
                      alt="paypal"
                      src="https://dwglogo.com/wp-content/uploads/2016/08/PayPal_Logo_Icon.png"
                    />
                    <div className="flex flex-col gap-1">
                      <Typography
                        variant="small"
                        color="gray"
                        className="font-normal"
                      >
                        <span className="font-medium text-blue-gray-900">
                          PayPal
                        </span>{" "}
                        you&apos;ve received a payment.
                      </Typography>
                      <Typography
                        variant="small"
                        className="flex items-center gap-1 text-xs text-gray-600"
                      >
                        <ClockIcon className="h-3 w-3" />5 hours ago
                      </Typography>
                    </div>
                  </MenuItem>
                </MenuList>
              </Menu>
            </li>
          </ul>

          {checkToken ? (
            <div>
              <Menu placement="bottom-end">
                <MenuHandler>
                  <Avatar
                    variant="circular"
                    alt="candice wu"
                    className="cursor-pointer w-9 h-9"
                    src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1480&q=80"
                  />
                </MenuHandler>
                <MenuList className="rounded-10">
                  <MenuItem className="flex items-center gap-2">
                    <UserCircleIcon strokeWidth={2} className="h-4 w-4" />
                    <Typography variant="small" className="font-normal">
                      My Profile
                    </Typography>
                  </MenuItem>
                  <MenuItem className="flex items-center gap-2">
                    <Cog6ToothIcon strokeWidth={2} className="h-4 w-4" />
                    <Typography variant="small" className="font-normal">
                      Edit Profile
                    </Typography>
                  </MenuItem>
                  <hr className="my-2 border-blue-gray-50" />
                  <MenuItem className="flex items-center gap-2 ">
                    <PowerIcon strokeWidth={2} className="h-4 w-4" />
                    <Typography variant="small" className="font-normal">
                      Sign Out
                    </Typography>
                  </MenuItem>
                </MenuList>
              </Menu>
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
