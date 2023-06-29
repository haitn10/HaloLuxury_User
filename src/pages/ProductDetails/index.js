import React, { useEffect, useState } from "react";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import OtherItem from "../../components/Items/OtherItem";
import tote from "../../assets/tote5.jpg";
import {
  BriefcaseIcon,
  BuildingOfficeIcon,
  ChatBubbleLeftEllipsisIcon,
  HeartIcon,
} from "@heroicons/react/24/outline";
import { HomeIcon } from "@heroicons/react/24/solid";
import { Breadcrumbs, Carousel } from "@material-tailwind/react";
import { Link, useLocation } from "react-router-dom";
import { getProductById, getProducts } from "../../api";
import { useDispatch } from "react-redux";
import { AddCart } from "../Cart/action";

const ProductDetails = () => {
  const url = useLocation();
  const dispatch = useDispatch();
  const productId = url.pathname.match(/\d+/)[0];
  const [product, setProduct] = useState();
  const [productOfStore, setProductOfStore] = useState();
  const [imageShow, setImageShow] = useState();

  useEffect(() => {
    async function getProduct() {
      const data = await getProductById(productId);
      setProduct(data);
      setImageShow(data.images[0].linkImage);

      const dataOfStore = await getProducts({ storeId: data.store.id });
      var results = [];
      while (dataOfStore.data.length) {
        results.push(dataOfStore.data.splice(0, 4));
      }
      setProductOfStore(results);
    }
    getProduct();
  }, [productId]);

  const openImage = (id) => {
    product.images.forEach((image) => {
      if (image.id === id) {
        setImageShow(image.linkImage);
      }
    });
  };

  const AddToCart = async (product) => {
    dispatch(
      await AddCart({
        id: product.id,
        quantity: 1,
        name: product.name,
        image: product.images[0].linkImage,
        price: product.price,
      })
    );
  };

  return (
    <>
      {product && productOfStore ? (
        <div className="font-second">
          <Header />
          <div className="relative top-75">
            <div className="max-h-80 flex justify-center bg-primary">
              <h1 className="border-2 snap-center border-light font-third text-light text-5xl stroke-text uppercase py-2 px-64 m-4">
                {product.category.name} Details
              </h1>
            </div>
            <div className="container mx-auto mt-10">
              <Breadcrumbs className="bg-inherit mb-10">
                <Link to="" className="opacity-60">
                  <HomeIcon className="w-4 h-4" />
                </Link>
                <Link to="#" className="opacity-60">
                  <span>{product.category.name}</span>
                </Link>
                <Link href="#">{product.brand.name}</Link>
              </Breadcrumbs>
              <div className="grid grid-cols-2">
                <div className="flex flex-row justify-center gap-5">
                  <div className="item-img w-32 flex flex-col align-middle gap-2">
                    {product.images.map((img) => (
                      <div
                        key={img.id}
                        className="border-1 border-primary rounded-10 hover:drop-shadow-2xl hover:shadow-second cursor-pointer"
                        onClick={() => openImage(img.id)}
                      >
                        <img
                          src={img.linkImage}
                          alt=""
                          className="object-contain mt-5 rounded-10"
                        />
                      </div>
                    ))}
                  </div>
                  <div className="max-w-xl">
                    <img src={imageShow} alt="" />
                  </div>
                </div>
                <div className="grid grid-rows-2 p-3">
                  <div className="flex flex-col">
                    <div>
                      <div className="mb-2">
                        <h2 className="font-light text-blue">
                          {product.category.name} of {product.brand.name}
                        </h2>
                        <h1 className="font-bold text-4xl uppercase ">
                          {product.name}
                        </h1>
                      </div>
                      <p className="my-4">{product.brand.descs}</p>
                    </div>
                    <div className="flex gap-4 items-end mb-3">
                      {product.salePrice ? (
                        <>
                          <h1 className="font-bold text-3xl text-yellow">
                            {Intl.NumberFormat("vi-VN").format(
                              product.salePrice
                            )}
                          </h1>
                          <h3 className="line-through">
                            {Intl.NumberFormat("vi-VN").format(product.price)}
                          </h3>
                        </>
                      ) : (
                        <h1 className="font-bold text-3xl text-yellow">
                          {Intl.NumberFormat("vi-VN").format(product.price)}
                        </h1>
                      )}
                    </div>
                    <div className="flex flex-row items-center">
                      <BriefcaseIcon className="w-7 h-7 font-bold" />
                      <h2 className="ml-4 text-lg">
                        Check Availability in Store
                      </h2>
                    </div>
                  </div>
                  <div className="flex flex-col justify-end">
                    <div className="flex flex-row gap-10 items-center">
                      <button
                        className="bg-primary text-light text-3xl py-2 px-20 rounded-10"
                        onClick={() => AddToCart(product)}
                      >
                        Add to Cart
                      </button>
                      <button className="bg-primary rounded-full w-12 h-12 flex items-center justify-center">
                        <HeartIcon className="w-7 h-7 text-light font-bold" />
                      </button>
                    </div>
                    <div>
                      <div className="flex flex-row items-start mt-5">
                        <h1 className="font-semibold">Mô tả sản phẩm: </h1>
                        <p>{product.descs}</p>
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
                          src={product.store.image}
                          alt=""
                          className="rounded-full w-full h-full shadow object-scale-down"
                        />
                      </div>
                      <div className="flex flex-col gap-1">
                        <h1 className="font-bold text-xl">
                          {product.store.name}
                        </h1>
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
                          <h1 className="font-medium">5</h1>
                        </div>
                        <div className="flex justify-between mt-2">
                          <h1 className="text-gray font-normal">Products</h1>
                          <h1 className="font-medium">20</h1>
                        </div>
                      </div>
                      <div className="flex flex-col">
                        <div className="flex justify-between">
                          <h1 className="text-gray font-normal">
                            Response Rate
                          </h1>
                          <h1 className="font-medium">{product.store.rate}</h1>
                        </div>
                        <div className="flex justify-between mt-2">
                          <h1 className="text-gray font-normal">
                            Response Time
                          </h1>
                          <h1 className="font-medium">a few minutes</h1>
                        </div>
                      </div>
                      <div className="flex flex-col">
                        <div className="flex justify-between">
                          <h1 className="text-gray font-normal">Join</h1>
                          <h1 className="font-medium">200</h1>
                        </div>
                        <div className="flex justify-between mt-2">
                          <h1 className="text-gray font-normal">Followers</h1>
                          <h1 className="font-medium">150</h1>
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
                  {productOfStore.map((product, key) => (
                    <div
                      key={key}
                      className="grid grid-cols-4 justify-items-center px-28"
                    >
                      {product.map((item) => (
                        <OtherItem
                          key={item.id}
                          id={item.id}
                          image={item.image}
                          productName={item.name}
                          price={Intl.NumberFormat("vi-VN").format(item.price)}
                        />
                      ))}
                    </div>
                  ))}
                </Carousel>
              </div>
            </div>
          </div>

          <Footer />
        </div>
      ) : null}
    </>
  );
};

export default ProductDetails;
