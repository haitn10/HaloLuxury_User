import React from "react";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import ProductItem from "../../components/Items/ProductItem";
import bg from "../../assets/bglogin.png";
import "./index.css";

const Shop = () => {
  return (
    <div className="font-second">
      <Header />
      <div className="relative top-75">
        <div className="max-h-80 flex justify-center bg-primary">
          <h1 className="border-2 snap-center border-light font-third text-light text-5xl stroke-text uppercase py-2 px-64 m-4">
            Bag Luxury
          </h1>
        </div>
        <div
          style={{ backgroundImage: `url(${bg})` }}
          className="h-20 flex justify-center items-center"
        >
          <div className="btn-selection flex snap-x gap-14">
            <button className="active">
              Bag Luxury
            </button>
            <button>
              Bag Luxury
            </button>
            <button>
              Bag Luxury
            </button>
            <button>
              Bag Luxury
            </button>
            <button>
              Bag Luxury
            </button>
          </div>
        </div>
        <div className="container mx-auto ">
          <div className="grid grid-cols-5 pt-10">
            <div className="max-w-max">
              <div className="border-1 border-primary p-2 rounded-20">
                <div className="p-2">
                  <h1 className="font-semibold text-2xl uppercase border-b-3 border-second pr-10 mr-5">
                    Refine by
                  </h1>
                </div>
                <div className="p-2 mt-2">
                  <h1 className="font-normal text-lg">Sort By</h1>
                  <ul className="font-light text-sm">
                    <li>
                      <div className=" bg-second"></div>Latest Arrivals
                    </li>
                    <li>
                      <div className="bg-primary"></div>Lowest Price
                    </li>
                    <li>
                      <div className="bg-primary"></div>Highest Price
                    </li>
                  </ul>
                </div>
                <div className="p-2 mt-2">
                  <h1 className="font-normal text-lg">Pattern</h1>
                  <ul className="font-light text-sm">
                    <li>
                      <div className="bg-primary"></div>Color Block
                    </li>
                    <li>
                      <div className="bg-primary"></div>Patterned
                    </li>
                    <li>
                      <div className="bg-primary"></div>Solid Color
                    </li>
                  </ul>
                </div>
                <div className="p-2 mt-2">
                  <h1 className="font-normal text-lg">Price</h1>
                  <ul className="font-light text-sm">
                    <li>
                      <div className="bg-primary"></div>$99 - $299
                    </li>
                    <li>
                      <div className="bg-primary"></div>$299 - $599
                    </li>
                    <li>
                      <div className="bg-primary"></div>$599 - $999
                    </li>
                    <li>
                      <div className="bg-primary"></div>$999 - $1999
                    </li>
                  </ul>
                </div>
                <div className="p-2 mt-2">
                  <h1 className="font-normal text-lg">Brands</h1>
                  <ul className="font-light text-sm">
                    <li>
                      <div className="bg-primary"></div>Dior
                    </li>
                    <li>
                      <div className="bg-primary"></div>Chanel
                    </li>
                    <li>
                      <div className="bg-primary"></div>Luis Vuitton
                    </li>
                  </ul>
                </div>
                <div className="flex justify-center mt-2 mb-5">
                  <button className="border-1 bg-second rounded-20 text-light py-2 px-3">
                    Show More
                  </button>
                </div>
              </div>
            </div>
            <div className="col-span-4 gap-1 grid grid-cols-4 justify-center">
              <ProductItem />
              <ProductItem />
              <ProductItem />
              <ProductItem />
              <ProductItem />
              <ProductItem />
              <ProductItem />
              <ProductItem />
              <ProductItem />
              <ProductItem />
              <ProductItem />
            </div>
            <div></div>
            <div className="col-span-4 flex justify-center mt-2 mb-20">
              <button className="border-1 bg-primary rounded-10 text-light py-2 px-3 uppercase">
                LOAD MORE PRODUCTS
              </button>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Shop;
