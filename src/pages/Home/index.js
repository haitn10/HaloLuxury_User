import React from "react";
import "./index.css";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import banner from "../../assets/Banner.png";
import girl from "../../assets/Main Girl.png";
import fire from "../../assets/Rectangle 199.png";
import cn from "../../assets/cn.png";
import vl from "../../assets/vl.png";
import line1 from "../../assets/Line 20.png";
import line2 from "../../assets/Line 21.png";
import bg1 from "../../assets/image 12.png";
import bg4 from "../../assets/image 15.png";
import HomeItem from "../../components/Items/HomeItem";
import ServiceItem from "../../components/Items/ServiceItem";
import { Button } from "@material-tailwind/react";
import { ArrowLongRightIcon } from "@heroicons/react/24/outline";
import { logos, services } from "../../constants/Logo";
import { useNavigate } from "react-router";

const HomePage = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="font-second">
        <Header />
        <div className="relative">
          {/* Banner */}
          <div className="min-h-screen">
            <div className="absolute w-full bg-black">
              <img
                src={banner}
                alt="banner"
                className="w-full h-screen object-scale-down"
              />
            </div>
            <div className="absolute flex justify-center h-[calc(100vh-125px)] items-center w-full top-75">
              <div className="z-20 absolute grid grid-cols-3 w-full container mx-auto mt-20">
                <div className="mt-20 p-5 text-light z-50">
                  <p className=" mt-20 mb-5 text-xs md:text-base">
                    At vero eos et accusamus et iusto odio dignis ducimus qui
                    blanditiis praesentium
                  </p>
                  <Button
                    variant="text"
                    className="flex items-center gap-2 rounded-10 border-1 border-white hover:bg-second transition-all"
                    onClick={() => navigate("/products")}
                  >
                    Go to Shop
                    <ArrowLongRightIcon strokeWidth={2} className="h-5 w-5" />
                  </Button>
                </div>
              </div>
              <img
                src={girl}
                alt="banner"
                className="max-h-[calc(80vh-40%)] md:max-h-[calc(100vh-200px)] md:shadow-sm mb-20 ml-16 md:ml-32 align-middle"
              />
            </div>
          </div>

          {/* Invite */}
          <div className="h-150 container mx-auto my-10">
            <div className="grid grid-cols-4 text-center">
              {services.map((service) => (
                <ServiceItem
                  key={service.id}
                  image={service.image}
                  text={service.text}
                />
              ))}
            </div>
          </div>

          {/* Famous */}
          <div className="bg-third h-450">
            <div className="container mx-auto h-full">
              <div className="flex h-full w-full items-center">
                <div className="flex w-full">
                  <div className="absolute container mx-auto flex justify-center">
                    <div className="text-center lg:w-950">
                      <h1 className="bg-third uppercase text-yellow tracking-widest md:text-2xl lg:text-4xl">
                        Many famous brands around the world
                      </h1>
                    </div>
                  </div>
                  <div className="w-full h-275 border-2 border-second lg:mt-5 md:mt-4 sm:mt-2">
                    <div className="grid grid-cols-5 items-center justify-items-center h-full gap-2 mx-10 p-5">
                      {logos.map((logo) => (
                        <img key={logo.id} src={logo.logo} alt={`logo ${logo.id}`} />
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* New Products */}
          <div className="h-700 container mx-auto">
            <div className="flex justify-center items-center h-1/4">
              <div>
                <img src={line1} alt="line-1" />
              </div>
              <h1 className="font-third lg:text-7xl md:text-5xl text-3xl text-center mx-10 p-5 text-blue">
                New Products
              </h1>
              <div>
                <img src={line2} alt="line-2" />
              </div>
            </div>
            <div className="lg:max-w-full px-12">
              <div className="snap-x flex snap-mandatory overflow-x-auto">
                <HomeItem
                  logo={cn}
                  storeName={"Chanel"}
                  productImg={cn}
                  productName={
                    "Gucci Blondie Shoulder Bag In Beige And Ebony Supreme"
                  }
                  oldPrice={1999}
                  newPrice={999}
                />
              </div>
            </div>
          </div>

          {/* Hot Sale */}

          <div className="min-h-min md:container mx-auto">
            <div className="flex justify-start items-center">
              <h1 className="font-third text-4xl ml-10 text-blue">Hot Sale</h1>
              <div>
                <img src={fire} alt="line-2" />
              </div>
            </div>
            <div className="grid gap-5 p-10">
              <div className="bg-third-1 min-h-min rounded-10 grid grid-cols-3 p-5">
                <div className="flex col-span-2 items-center">
                  <div className="border-1 border-second w-225 h-225 rounded-10">
                    <img
                      src={vl}
                      alt="image1"
                      className="w-full h-full object-scale-down bg-light rounded-10"
                    />
                  </div>
                  <div className="flex flex-col p-2 mx-3">
                    <div className="">
                      <div className="border-b-2 border-second">
                        <h1 className="font-medium md:text-xl">
                          Chanel Mini Love Flap Bag Black
                        </h1>
                      </div>
                      <h2 className="font-semibold text-red md:text-2xl my-1">
                        Sold Out with $299
                      </h2>
                    </div>
                    <div className="mt-1 text-ellipsis overflow-hidden">
                      <h4 className="font-semibold text-sm md:text-lg">
                        Product Details:
                      </h4>
                      <ul className="list-disc ml-5 text-xs md:text-base">
                        <li>Use original cowhide material</li>
                        <li>Made entirely by hand</li>
                        <li>98% standard compared to genuine</li>
                        <li>Full box and accessories</li>
                        <li>
                          <strong>Size:</strong> 19 x 13 x 5 cm
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="">
                  <div className="flex flex-col items-center mb-2">
                    <div className="h-12 w-12 md:h-24 md:w-24">
                      <img
                        src={cn}
                        alt=""
                        className="w-full h-full object-scale-down rounded-full"
                      />
                    </div>
                    <h1 className="md:text-3xl font-semibold text-yellow">
                      Chanel Store
                    </h1>
                  </div>
                  <div className="mt-3">
                    <ul className="list-none text-sm md:text-lg">
                      <li>
                        <strong>HotLine:</strong> 0344444567
                      </li>
                      <li>
                        <strong>Email:</strong> channelstore1@gmail.com
                      </li>
                      <li>
                        <strong>Address:</strong> High-tech Zone, 9 District, Ho
                        Chi Minh - VN
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Show */}
          <div className="max-h-700 bg-third-2">
            <div className="container h-full mx-auto">
              <div className="grid grid-cols-4 gap-4 h-full p-10 justify-items-center">
                <div class="col-span-4 md:col-span-2">
                  <img src={bg1} alt="item3" className="h-275" />
                </div>
                <div class="col-span-4 md:col-span-2">
                  <img src={bg4} alt="item1" className="h-275" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default HomePage;
