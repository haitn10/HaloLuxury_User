import React from "react";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import OtherItem from "../../components/Items/OtherItem";
import tote from "../../assets/tote5.jpg";
import dior from "../../assets/dior.png";
import {
  BriefcaseIcon,
  BuildingOfficeIcon,
  ChatBubbleLeftEllipsisIcon,
  HeartIcon,
} from "@heroicons/react/24/outline";
import { HomeIcon } from "@heroicons/react/24/solid";
import { Breadcrumbs, Carousel } from "@material-tailwind/react";
import { Link } from "react-router-dom";

const ProductDetails = () => {
  return (
    <div className="font-second">
      <Header />
      <div className="relative top-75">
        <div className="max-h-80 flex justify-center bg-primary">
          <h1 className="border-2 snap-center border-light font-third text-light text-5xl stroke-text uppercase py-2 px-64 m-4">
            Bag Details
          </h1>
        </div>
        <div className="container mx-auto mt-10">
          <Breadcrumbs className="bg-inherit mb-10">
            <Link to="#" className="opacity-60">
              <HomeIcon className="w-4 h-4" />
            </Link>
            <Link to="#" className="opacity-60">
              <span>Bags</span>
            </Link>
            <Link href="#">Dior</Link>
          </Breadcrumbs>
          <div className="grid grid-cols-2">
            <div className="flex flex-row justify-center gap-5">
              <div className="item-img w-32 flex flex-col align-middle gap-2">
                <div className="border-1 border-primary rounded-10 hover:drop-shadow-2xl hover:shadow-second cursor-pointer">
                  <img
                    src={tote}
                    alt=""
                    className="object-contain mt-5 rounded-10"
                  />
                </div>
                <div className="rounded-10 drop-shadow-md hover:drop-shadow-2xl hover:shadow-second cursor-pointer">
                  <img
                    src={tote}
                    alt=""
                    className="object-contain mt-5 rounded-10"
                  />
                </div>
              </div>
              <div className="max-w-xl">
                <img src={tote} alt="" />
              </div>
            </div>
            <div className="grid grid-rows-2 p-3">
              <div className="flex flex-col">
                <div>
                  <div className="mb-2">
                    <h2 className="font-light text-blue">Bag of Dior</h2>
                    <h1 className="font-bold text-4xl uppercase ">
                      DIOR BOOK TOTE
                    </h1>
                  </div>
                  <p className="my-4">
                    H&M Essentials. No. 5: The Sweatshirt. Top in sweatshirt
                    fabric made from a cotton blend. Relaxed fit with dropped
                    shoulders and ribbing around the neckline, cuffs and hem.
                    Soft brushed inside.
                  </p>
                </div>
                <div className="flex gap-4 items-end mb-3">
                  <h1 className="font-bold text-3xl text-yellow">$4999</h1>
                  <h3 className="line-through">$4999</h3>
                </div>
                <div className="flex flex-row items-center">
                  <BriefcaseIcon className="w-7 h-7 font-bold" />
                  <h2 className="ml-4 text-lg">Check Availability in Store</h2>
                </div>
              </div>
              <div className="flex flex-col justify-end">
                <div className="flex flex-row gap-10 items-center">
                  <button className="bg-primary text-light text-3xl py-2 px-20 rounded-10">
                    Add to Cart
                  </button>
                  <button className="bg-primary rounded-full w-12 h-12 flex items-center justify-center">
                    <HeartIcon className="w-7 h-7 text-light font-bold" />
                  </button>
                </div>
                <div>
                  <div className="flex flex-row items-start mt-5">
                    <div className="font-bold">
                      <ul className="">
                        <li>Size</li>
                        <li>Fit</li>
                        <li>Composition</li>
                        <li>Art. No.</li>
                      </ul>
                    </div>
                    <div className="ml-5 font-bold">
                      <ul className="list-disc">
                        <li>Size</li>
                        <li>Fit</li>
                        <li>Composition</li>
                        <li>Art. No.</li>
                      </ul>
                    </div>
                  </div>
                  <div className="mt-2">
                    <span className="text-red font-bold">
                      * Standard delivery in 2-7 days
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Store */}
          <div className="flex justify-center my-16">
            <div className="max-h-32 max-w-7xl rounded-20 shadow-xl">
              <div className="grid grid-cols-3 items-center py-5 px-12 gap-5">
                <div className="flex flex-row">
                  <div className="w-20 h-20 mx-5">
                    <img
                      src={dior}
                      alt=""
                      className="rounded-full w-full h-full shadow object-scale-down"
                    />
                  </div>
                  <div className="flex flex-col gap-1">
                    <h1 className="font-bold text-xl">Dior Store</h1>
                    <div className="flex items-center">
                      <div className="w-2 h-2 bg-green rounded-full"></div>
                      <h6 className="text-sm ml-2">online</h6>
                    </div>
                    <div className="flex gap-4">
                      <button className="flex items-center border-1 border-primary py-1 px-2 rounded-10 text-sm hover:bg-admin">
                        <BuildingOfficeIcon className="w-4 mr-2" />
                        Show shop
                      </button>
                      <button className="flex items-center border-1 border-primary py-1 px-2 rounded-10 text-sm hover:bg-admin">
                        <ChatBubbleLeftEllipsisIcon className="w-4 mr-2" />
                        Chat Now
                      </button>
                    </div>
                  </div>
                </div>
                <div className="col-span-2 grid grid-cols-3 gap-8 border-l-1 border-gray text-sm">
                  <div className="flex flex-col ml-10">
                    <div className="flex justify-between">
                      <h1 className="text-gray font-normal">Feedback</h1>
                      <h1 className="font-medium">Feedbacks</h1>
                    </div>
                    <div className="flex justify-between mt-2">
                      <h1 className="text-gray font-normal">Products</h1>
                      <h1 className="font-medium">Products</h1>
                    </div>
                  </div>
                  <div className="flex flex-col">
                    <div className="flex justify-between">
                      <h1 className="text-gray font-normal">Response Rate</h1>
                      <h1 className="font-medium">Response Rate</h1>
                    </div>
                    <div className="flex justify-between mt-2">
                      <h1 className="text-gray font-normal">Response Time</h1>
                      <h1 className="font-medium">Response Time</h1>
                    </div>
                  </div>
                  <div className="flex flex-col">
                    <div className="flex justify-between">
                      <h1 className="text-gray font-normal">Join</h1>
                      <h1 className="font-medium">Join</h1>
                    </div>
                    <div className="flex justify-between mt-2">
                      <h1 className="text-gray font-normal">Followers</h1>
                      <h1 className="font-medium">Followers</h1>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Other Products */}

          <div className="mb-150">
            <div className="flex justify-center mb-10">
              <h1 className="text-5xl font-medium font-third text-yellow">
                Products Others
              </h1>
            </div>
            <Carousel className="rounded-xl h-350">
              <div className="grid grid-cols-4 justify-items-center px-28">
                <OtherItem
                  image={tote}
                  productName={"Polo Ralph Lauren"}
                  price={900}
                />
              </div>
              <div className="grid grid-cols-4 justify-items-center px-28">
                <OtherItem
                  image={tote}
                  productName={"Polo Ralph Lauren"}
                  price={900}
                />
              </div>
              <div className="grid grid-cols-4 justify-items-center px-28">
                <OtherItem
                  image={tote}
                  productName={"Polo Ralph Lauren"}
                  price={900}
                />
              </div>
            </Carousel>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default ProductDetails;
