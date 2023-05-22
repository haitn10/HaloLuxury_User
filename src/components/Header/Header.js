import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import logo from "../../assets/HL-Logo.png";
import {
  Bars3Icon,
  BellIcon,
  ShoppingBagIcon,
  UserCircleIcon,
} from "@heroicons/react/24/outline";
import MenuItems from "./MenuItems";
import { Badge } from "@material-tailwind/react";

const Navbar = () => {
  const navigate = useNavigate();
  const [checkToken, setCheckToken] = useState(false);

  const [show, setShow] = useState(true);
  return (
    <nav className="bg-second h-75 font-second fixed w-full z-50">
      <div className="grid grid-cols-3 items-center h-full">
        <div className="flex justify-start ml-8">
          <button onClick={() => setShow(!show)}>
            <Bars3Icon className="w-10 h-10 text-light hover:bg-second-1 hover:rounded-20 transition-all" />
          </button>
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
