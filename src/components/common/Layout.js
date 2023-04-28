import React, { useState } from "react";
import logo from "../../assets/HL-Logo.png";
import { Bars3Icon } from "@heroicons/react/24/solid";
import { BellIcon, ShoppingBagIcon } from "@heroicons/react/24/outline";
import { Link } from "react-router-dom";

const Layout = () => {
  const [profile, setProfile] = useState(false);
  return (
    <>
      <header className="flex w-full h-75 bg-second">
        <div className="grid grid-cols-3 w-full items-center">
          <div className="flex justify-start ml-8">
            <Link>
              <Bars3Icon className="w-10 h-10 text-light font-bold" />
            </Link>
          </div>
          <div className="flex justify-center">
            <Link>
              <img src={logo} alt="Halo Luxury Logo" className="h-35" />
            </Link>
          </div>
          <div className="flex justify-end mr-10 gap-5 items-center">
            {profile ? (
              <>
                <Link>
                  <BellIcon className="w-7 h-7 text-light font-bold" />
                </Link>
                <Link>
                  <ShoppingBagIcon className="w-7 h-7 text-light font-bold" />
                </Link>
              </>
            ) : (
              <>
                <Link>
                  <BellIcon className="w-7 h-7 text-light font-bold" />
                </Link>
                <Link>
                  <ShoppingBagIcon className="w-7 h-7 text-light font-bold" />
                </Link>
                <button className="border-1 rounded-20 h-9 w-24 border-admin text-light font-medium text-base">
                  Login
                </button>
                <button className="border-1 rounded-20 h-9 w-24 border-admin text-light font-medium text-base">
                  Register
                </button>
              </>
            )}
          </div>
        </div>
      </header>
    </>
  );
};

export default Layout;
