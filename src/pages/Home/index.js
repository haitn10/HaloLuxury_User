import React from "react";
import Header from "../../components/Header/Header";
import banner from "../../assets/Banner.png";
import girl from "../../assets/Main Girl.png";
import bag from "../../assets/Rectangle 192.png";
import intallment from "../../assets/Rectangle 193.png";
import warranty from "../../assets/Rectangle 194.png";
import ship from "../../assets/Rectangle 195.png";
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

const HomePage = () => {
  return (
    <>
      <div className=" font-second">
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
              <div className="flex flex-col items-center">
                <img src={bag} alt="" className="w-150" />
                <h1 className="font-medium text-xl">
                  Order more than 100 models
                </h1>
              </div>
              <div className="flex flex-col items-center">
                <img src={ship} alt="" className="w-150" />
                <h1 className="font-medium text-xl ">Installment 0%</h1>
              </div>
              <div className="flex flex-col items-center">
                <img src={warranty} alt="" className="w-150" />
                <h1 className="font-medium text-xl">A year warranty</h1>
              </div>
              <div className="flex flex-col items-center">
                <img src={intallment} alt="" className="w-150" />
                <h1 className="font-medium text-xl">Freeship</h1>
              </div>
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
            <div className="flex justify-center items-center">
              <div>
                <img src={line1} alt="line-1" />
              </div>
              <h1 className="font-third text-7xl text-center m-10 p-5 text-blue">
                New Products
              </h1>
              <div>
                <img src={line2} alt="line-2" />
              </div>
            </div>
            <div className=""></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomePage;
