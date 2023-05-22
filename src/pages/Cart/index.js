import React from "react";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import {
  Breadcrumbs,
  Button,
  Card,
  IconButton,
  Input,
  List,
  ListItem,
  ListItemSuffix,
  Option,
  Select,
} from "@material-tailwind/react";
import { Link } from "react-router-dom";
import { HomeIcon } from "@heroicons/react/24/solid";
import tote from "../../assets/tote5.jpg";
import { TrashIcon } from "@heroicons/react/24/outline";

const Cart = () => {
  return (
    <div className="font-second">
      <Header />
      <div className="relative top-75">
        <div className="max-h-80 flex justify-center bg-primary">
          <h1 className="border-2 snap-center border-light font-third text-light text-5xl stroke-text uppercase py-2 px-64 m-4">
            Check out
          </h1>
        </div>
        <div className="container mx-auto mt-10">
          <Breadcrumbs className="bg-inherit mb-10">
            <Link to="#" className="opacity-60">
              <HomeIcon className="w-4 h-4" />
            </Link>
            <Link href="#">My Cart</Link>
          </Breadcrumbs>
          <div className="grid grid-cols-2 gap-10">
            <List className="mx-3 gap-3">
              <ListItem
                ripple={false}
                className="px-1 pl-4 border-b-2 border-primary gap-3"
              >
                <Card className="rounded-10 flex flex-row w-full p-5">
                  <div>
                    <img src={tote} alt="" className="max-h-150 rounded-10" />
                  </div>
                  <div className="ml-3">
                    <h1 className="font-semibold text-xl">DIOR BOOK TOTE</h1>
                    <h2 className="font-medium text-yellow my-1">$4999</h2>
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
                        <ul className="inline-block list-disc break-words">
                          <li>
                            khi ma khong con yeu thi dem nao ta cung say vi
                            khong con ai o ben canh ta lau that lau dau that dau
                          </li>
                          <li>Fit</li>
                          <li>Composition</li>
                          <li>Art. No.</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </Card>
                <ListItemSuffix>
                  <IconButton variant="text">
                    <TrashIcon className="h-6 w-6" />
                  </IconButton>
                </ListItemSuffix>
              </ListItem>
            </List>
            <div className="flex flex-col">
              <div className="mb-20">
                <div className="border-b-2 border-primary pb-4 pl-3 mb-3">
                  <h1 className="font-semibold">Customer 1 (+84570626405)</h1>
                  <p>
                    111A - Dinh Phong Phu Street - Tan Nhon Phu B - 9 District -
                    HCM, VN
                  </p>
                </div>
                <div className="border-b-2 border-primary pb-4 p-3 mb-3">
                  <h1 className="font-semibold mb-1">Choose Delivery</h1>
                  <div className="flex justify-between items-center">
                    <div className="w-275">
                      <Select className="w-full border-second border-1">
                        <Option>Material Tailwind HTML</Option>
                        <Option>Material Tailwind React</Option>
                        <Option>Material Tailwind Vue</Option>
                        <Option>Material Tailwind Angular</Option>
                        <Option>Material Tailwind Svelte</Option>
                      </Select>
                    </div>
                    <span className="text-red font-semibold text-xl">$123</span>
                  </div>
                </div>
                <div className="border-b-2 border-primary pb-4 p-3 mb-10">
                  <h1 className="font-semibold">Customer 1 (+84570626405)</h1>
                  <p>
                    111A - Dinh Phong Phu Street - Tan Nhon Phu B - 9 District -
                    HCM, VN
                  </p>
                </div>
              </div>
              <div className="mb-100">
                <div className="flex pr-5 gap-10 mb-6">
                  <Input
                    type="text"
                    className="border-1 text-yellow uppercase"
                    placeholder="Enter code discount"
                  />
                  <div className="bg-primary rounded-20">
                    <Button className="rounded-20 text-light">Apply</Button>
                  </div>
                </div>
                <div>
                  <h1 className="font-semibold mb-2">Shopping Summary</h1>
                  <div className="flex justify-between mb-2">
                    <h1>Total Price(1 item)</h1>
                    <h2>$1999</h2>
                  </div>
                  <div className="flex justify-between mb-2">
                    <h1>Ship Cost</h1>
                    <h2>$1999</h2>
                  </div>
                  <div className="flex justify-between mb-2">
                    <h1>Shipping Insurance</h1>
                    <h2>$1999</h2>
                  </div>
                  <div className="flex justify-between border-y-2 border-primary my-5 py-3">
                    <h1 className="uppercase font-semibold">Total</h1>
                    <h2 className="font-semibold">$1999</h2>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Cart;
