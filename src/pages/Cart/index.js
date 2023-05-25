import React, { useMemo } from "react";
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
  Option,
  Select,
} from "@material-tailwind/react";
import { Link } from "react-router-dom";
import { HomeIcon } from "@heroicons/react/24/solid";

import { useDispatch, useSelector } from "react-redux";
import { TrashIcon } from "@heroicons/react/24/outline";
import { DeleteCart } from "./action";

const Cart = () => {
  const cart = useSelector((state) => state.carts.products);
  const dispatch = useDispatch();
  console.log(cart);

  const deleteCart = async (productId) => {
    dispatch(await DeleteCart(productId));
  };

  const totalPrice = useMemo(() => {
    let price = 0;
    cart.forEach((product) => (price = product.price + price));
    return price;
  }, [cart]);

  return (
    <div className="font-second">
      <Header />
      <div className="relative top-75">
        <div className="max-h-80 flex justify-center bg-primary">
          <h1 className="border-2 snap-center border-light font-third text-light text-5xl stroke-text uppercase py-2 px-64 m-4">
            Check out
          </h1>
        </div>
        <div className="container mx-auto mt-10 mb-10">
          <Breadcrumbs className="bg-inherit mb-10">
            <Link to="#" className="opacity-60">
              <HomeIcon className="w-4 h-4" />
            </Link>
            <Link href="#">My Cart</Link>
          </Breadcrumbs>
          <div className="grid grid-cols-2 gap-10">
            <List className="mx-3 gap-3">
              {cart.map((product) => (
                <ListItem
                  key={product.id}
                  ripple={false}
                  className="px-1 pl-4 border-b-2 border-primary gap-3"
                >
                  <Card className="rounded-10 flex flex-row w-full p-5 gap-3">
                    <div className="h-150 w-150">
                      <img
                        src={product.image}
                        alt=""
                        className="w-full h-full rounded-10"
                      />
                    </div>
                    <div className="">
                      <h1 className="font-semibold text-xl">{product.name}</h1>
                      <h2 className="font-medium text-yellow my-1">
                        {Intl.NumberFormat("vi-VN").format(product.price)}
                      </h2>
                      <div className="flex items-start mt-5">
                        <p></p>
                      </div>
                    </div>
                  </Card>
                  <IconButton
                    variant="text"
                    onClick={() => deleteCart(product.id)}
                  >
                    <TrashIcon className="h-6 w-6" />
                  </IconButton>
                </ListItem>
              ))}
            </List>
            <div className="flex flex-col">
              <div className="mb-20">
                <div className="border-b-2 border-primary pb-4 pl-3 mb-3">
                  <h1 className="font-semibold">Địa chỉ: </h1>
                  <p>
                    Nguyễn Văn A{" "}
                    <span className="font-light italic">(+84) 234819381</span>
                  </p>
                  <p>
                    111A - Dinh Phong Phu Street - Tan Nhon Phu B - 9 District -
                    HCM, VN
                  </p>
                </div>
                <div className="border-b-2 border-primary pb-4 p-3 mb-3">
                  <h1 className="font-semibold mb-1">
                    Chọn Phương Thức Vận Chuyển
                  </h1>
                  <div className="flex justify-between items-center">
                    <div className="w-350">
                      <Select className="w-full border-second border-1">
                        <Option defaultValue>Viettel Post</Option>
                        <Option>Giao Hàng Tiết Kiệm</Option>
                        <Option>Shoppe Express</Option>
                      </Select>
                    </div>
                    <span>{Intl.NumberFormat("vi-VN").format(30000)}</span>
                  </div>
                </div>
                <div className="flex justify-between pb-4 p-3 mb-10">
                  <h1 className="font-semibold">Phí Vận Chuyển</h1>
                  <p className="font-semibold text-red">
                    {Intl.NumberFormat("vi-VN").format(30000)}
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
                  <div className="bg-white rounded-20">
                    <Button className="rounded-20 border-1 border-primary border-opacity-60">
                      Apply
                    </Button>
                  </div>
                </div>
                <div>
                  <h1 className="font-semibold mb-2">Shopping Summary</h1>
                  <div className="flex justify-between mb-2">
                    <h1>Tiền sản phẩm ({cart.length} sản phẩm)</h1>
                    <h2>{Intl.NumberFormat("vi-VN").format(totalPrice)}</h2>
                  </div>
                  <div className="flex justify-between mb-2">
                    <h1>Phí vận chuyển</h1>
                    <h2>{Intl.NumberFormat("vi-VN").format(30000)}</h2>
                  </div>
                  <div className="flex justify-between mb-2">
                    <h1>Giảm giá</h1>
                    <h2>{Intl.NumberFormat("vi-VN").format(0)}</h2>
                  </div>
                  <div className="flex justify-between border-y-2 border-primary my-5 py-3">
                    <h1 className="uppercase font-semibold">Total Price</h1>
                    <h2 className="font-semibold text-red">
                      {Intl.NumberFormat("vi-VN").format(totalPrice + 30000)}
                    </h2>
                  </div>
                </div>
                <div className="flex justify-center">
                  <div className="bg-second rounded-10">
                    <Button className="rounded-20 px-6 text-light">
                      Thanh Toán
                    </Button>
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
