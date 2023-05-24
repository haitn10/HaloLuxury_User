import React, { useEffect, useState } from "react";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import ProductItem from "../../components/Items/ProductItem";
import bg from "../../assets/bglogin.png";
import { Button } from "@material-tailwind/react";
import "./index.css";
import { useDispatch, useSelector } from "react-redux";
import { getProducts } from "../../api";
import { setState } from "./action";
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import Skeleton from "react-loading-skeleton";

const Shop = (props) => {
  const products = useSelector((state) => state.products.data);
  const dispatch = useDispatch();
  const [visible, setVisible] = useState(8);
  const [isLoading, setIsLoading] = useState(false);
  const [searchValue, setSearchValue] = useState("");

  useEffect(() => {
    async function fetchMyAPI() {
      dispatch(setState(await getProducts()));
    }
    fetchMyAPI();
  }, [dispatch]);

  const showMoreItems = () => {
    setVisible((visible) => visible + 4);
  };

  const handleSearch = (event) => {
    setSearchValue(event.target.value);
  };
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
          <div className="flex snap-x gap-14">
            <div className="bg-white hover:bg-second active:bg-second rounded-20 transition-all">
              <Button className="border-1 border-primary rounded-20 hover:text-light active:text-light transition-all font-bold text-sm w-32">
                Bags
              </Button>
            </div>
          </div>
        </div>
        <div className="container mx-auto">
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
                  <ul className="menu-selection font-light text-sm">
                    <li className="">
                      <div className="bg-second"></div>Latest Arrivals
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
                  <ul className="menu-selection font-light text-sm">
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
                  <ul className="menu-selection font-light text-sm">
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
                  <ul className="menu-selection font-light text-sm">
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
              </div>
            </div>

            <div className="col-span-4 gap-1 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 justify-center">
              <div className="md:col-span-2 xl:col-span-4 flex justify-center">
                <label
                  htmlFor="default-search"
                  className="mb-2 text-sm font-medium text-gray sr-only"
                >
                  Search
                </label>
                <div className="relative h-14">
                  <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                    <MagnifyingGlassIcon className="w-6 h-6" />
                  </div>
                  <input
                    id="default-search"
                    className="block p-4 w-225 md:w-450 pl-10 text-sm text-gray border-1 border-primary rounded-20 bg-third-2"
                    placeholder="Tên sẩn phẩm...."
                    onChange={handleSearch}
                  />
                </div>
              </div>
              {isLoading ? (
                <Skeleton count={2} />
              ) : (
                products
                  .filter((product) =>
                    product.name.toLowerCase().includes(searchValue)
                  )
                  .slice(0, visible)
                  .map((product) => (
                    <ProductItem key={product.id} product={product} />
                  ))
              )}
            </div>
            <div></div>
            <div className="col-span-4 flex justify-center mt-2 mb-20">
              <button
                className="border-1 bg-primary rounded-10 text-light py-2 px-3 uppercase"
                onClick={showMoreItems}
              >
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
