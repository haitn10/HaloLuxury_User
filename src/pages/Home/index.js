import React from "react";
import "./index.css";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import banner from "../../assets/Banner.png";
import girl from "../../assets/Main Girl.png";
import bag from "../../assets/Rectangle 192.png";
import intallment from "../../assets/Rectangle 193.png";
import warranty from "../../assets/Rectangle 194.png";
import ship from "../../assets/Rectangle 195.png";
import fire from "../../assets/Rectangle 199.png";
import cn from "../../assets/cn.png";
import add from "../../assets/add.png";
import bb from "../../assets/bb.png";
import dg from "../../assets/dg.png";
import dior from "../../assets/dior.png";
import hm from "../../assets/hm.png";
import nike from "../../assets/nike.png";
import rp from "../../assets/rp.png";
import vl from "../../assets/vl.png";
import vr from "../../assets/vr.png";
import line1 from "../../assets/Line 20.png";
import line2 from "../../assets/Line 21.png";
import bg1 from "../../assets/image 12.png";
import bg2 from "../../assets/image 16.jpeg";
import bg3 from "../../assets/image 14.png";
import bg4 from "../../assets/image 15.png";
import bg5 from "../../assets/image 11.jpg";
import HomeItem from "../../components/Items/HomeItem";
import ServiceItem from "../../components/Items/ServiceItem";

const logos = [
  { id: 1, logo: `${cn}` },
  { id: 2, logo: `${bb}` },
  { id: 3, logo: `${dg}` },
  { id: 4, logo: `${dior}` },
  { id: 5, logo: `${hm}` },
  { id: 6, logo: `${nike}` },
  { id: 7, logo: `${vl}` },
  { id: 8, logo: `${vr}` },
  { id: 9, logo: `${add}` },
  { id: 10, logo: `${rp}` },
];

const services= [
  { id:1, image: `${bag}`, text: "Order more than 100 models" },
  { id:2, image: `${ship}`, text: "Installment 0%" },
  { id:3, image: `${warranty}`, text: "A year warranty" },
  { id:4, image: `${intallment}`, text: "Freeship" },
]

const HomePage = () => {
  return (
    <>
      <div className="font-second">
        <Header />
        <div className="relative">
          {/* Banner */}
          <div className="h-screen">
            <div className="absolute w-full">
              <img src={banner} alt="banner" className="w-full h-screen" />
            </div>
            <div className="absolute flex justify-center h-[calc(100vh-125px)] items-center w-full top-75">
              <div className="absolute grid grid-cols-3 w-full container mx-auto mt-20">
                <div className="mt-20 p-5 text-light z-50">
                  <p className=" mt-20 mb-5">
                    At vero eos et accusamus et iusto odio dignis ducimus qui
                    blanditiis praesentium
                  </p>
                  <button className="bg-second w-150 h-16 rounded-10 border-1 border-primary hover:bg-second-1">
                    See Collection
                  </button>
                </div>
              </div>
              <img
                src={girl}
                alt="banner"
                className="max-h-[calc(100vh-200px)] mb-20 ml-32"
              />
            </div>
          </div>

          {/* Invite */}
          <div className="h-150 container mx-auto my-10">
            <div className="grid grid-cols-4 text-center">
              {services.map((service)=> (
                <ServiceItem key={service.id} image={service.image} text={service.text} />
              ) )}
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
                        <img src={logo.logo} alt={`logo ${logo.id}`} />
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

          <div className="min-h-min container mx-auto">
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
                        <h1 className="font-medium text-xl">
                          Chanel Mini Love Flap Bag Black
                        </h1>
                      </div>
                      <h2 className="font-semibold text-red text-2xl my-1">
                        Sold Out with $299
                      </h2>
                    </div>
                    <div className="mt-1 text-ellipsis overflow-hidden">
                      <h4 className="font-semibold text-lg">
                        Product Details:
                      </h4>
                      <ul className="list-disc ml-5">
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
                    <div className="h-24 w-24">
                      <img
                        src={cn}
                        alt=""
                        className="w-full h-full object-scale-down rounded-full"
                      />
                    </div>
                    <h1 className="text-3xl font-semibold text-yellow">
                      Chanel Store
                    </h1>
                  </div>
                  <div className="mt-3">
                    <ul className="list-none text-lg">
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
              <div className="grid grid-cols-3 gap-4 h-full p-10 items-center ">
                <div class="md:col-span-2">
                  <img src={bg4} alt="item1" className="max-h-350" />
                </div>
                <div class="">
                  <img src={bg3} alt="item2" className="max-h-350" />
                </div>
                <div class="">
                  <img src={bg1} alt="item3" className="h-275" />
                </div>
                <div class="">
                  <img src={bg2} alt="item4" className="h-275" />
                </div>
                <div class="">
                  <img src={bg5} alt="item5" className="h-275" />
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
