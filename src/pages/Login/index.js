import React, { useState } from "react";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import bg from "../../assets/bglogin.png";
import { Link, useNavigate } from "react-router-dom";
import { login } from "./action";
import { useDispatch } from "react-redux";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const onSubmit = async (e) => {
    e.preventDefault();
    if (email.length === 0 || password.length === 0) {
      return;
    }
    const result = await dispatch(login({ email, password }));
    if (result.statusCode === 200) {
      navigate("/");
    } else {
      
    }
  };

  return (
    <>
      <Header />
      <div className="pt-75">
        <div className="bg-primary h-100">
          <div
            style={{ backgroundImage: `url(${bg})` }}
            className="h-100 flex justify-center items-center"
          >
            <div className="border-3 w-700 h-16 border-light text-center">
              <h1 className="font-third text-light text-5xl stroke-text">
                Login
              </h1>
            </div>
          </div>
        </div>
        <div
          className="flex justify-center items-center font-primary p-5 mt-10"
          onKeyPress={(e) => (e.key === "Enter" ? onSubmit : {})}
        >
          <div className="h-550 w-450 flex-col border-primary border-1 rounded-20 p-10">
            <form className="flex flex-col gap-2 z-50">
              <div className="mb-1">
                <label
                  className="block text-lg font-semibold mb-2 px-5"
                  htmlFor="Email"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="Email"
                  required
                  className="h-12 rounded-20 w-full border-1 border-second bg-transparent px-5 outline-none transition-all focus:border-second-1 focus:border-2"
                  placeholder="Enter email"
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className="mb-1">
                <label
                  className="block text-lg font-semibold mb-2 px-5"
                  htmlFor="Password"
                >
                  Password
                </label>
                <input
                  type="password"
                  id="Password"
                  required
                  className="h-12 rounded-20 w-full border-1 border-second bg-transparent px-5 outline-none transition-all focus:border-second-1 focus:border-2"
                  placeholder="Enter password"
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              <div className="font-medium text-sm p-1 ml-2 flex justify-between mb-5">
                <div>
                  <input
                    type="checkbox"
                    className="border-second checked:bg-primary rounded-20"
                    id="rememberMe"
                  />
                  <label htmlFor="rememberMe" className="ml-2">
                    Remember Me
                  </label>
                </div>
                <Link to={""} className="underline hover:text-blue">
                  Forget Password?
                </Link>
              </div>

              <div className="flex justify-center mt-5 mb-10">
                <button
                  className="h-11 w-32 bg-second rounded-10 border-primary border-1 text-light font-bold text-xl transition-all hover:bg-second-1"
                  onClick={(e) => onSubmit(e)}
                >
                  Sign In
                </button>
              </div>
            </form>

            <div className="text-center">
              <span className="text-lg">Don't have a account?</span>
              <Link
                to={"/register"}
                className="ml-5 text-blue font-medium underline text-lg"
              >
                Register
              </Link>
            </div>
            <div className="text-center my-2 text-xs font-medium">OR</div>

            <div className="mt-5 p-3">Login with:</div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Login;
