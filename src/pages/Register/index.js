import React from "react";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import bg from "../../assets/bglogin.png";
import { Link } from "react-router-dom";

function Register() {
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
              <span className="font-third text-light text-5xl stroke-text">
                Register
              </span>
            </div>
          </div>
        </div>
        <div className="flex justify-center items-center font-primary p-5 mt-10">
          <div className="h-550 w-450 flex-col border-primary border-1 rounded-20 p-10">
            <div>
              <h1 className="font-semibold text-xl">Create an Account</h1>
              <p className="font-normal text-xs">
                Your personal data will be used to support your experience
                throughout this website, to manage access to your account, and
                for other purposes described in our privacy policy.
              </p>
            </div>
            <div className="flex flex-col gap-2 mt-5">
              <div className="mb-1" data-te-input-wrapper-init>
                <input
                  type="text"
                  required
                  className="h-12 w-full rounded-20 border-1 border-second bg-transparent px-5 outline-none transition-all focus:border-second-1 focus:border-2"
                  placeholder="Type your name"
                />
              </div>
              <div className="mb-1" data-te-input-wrapper-init>
                <input
                  type="email"
                  required
                  className="h-12 w-full rounded-20 border-1 border-second bg-transparent px-5 outline-none transition-all focus:border-second-1 focus:border-2"
                  placeholder="Type your email"
                />
              </div>
              <div className="mb-1" data-te-input-wrapper-init>
                <input
                  type="password"
                  required
                  className="h-12 rounded-20 w-full border-1 border-second bg-transparent px-5 outline-none transition-all focus:border-second-1 focus:border-2"
                  placeholder="Password"
                />
              </div>
              <div className="mb-1" data-te-input-wrapper-init>
                <input
                  type="password"
                  required
                  className="h-12 rounded-20 w-full border-1 border-second bg-transparent px-5 outline-none transition-all focus:border-second-1 focus:border-2"
                  placeholder="Confirm password"
                />
              </div>
              <div className="flex items-center">
                <input id="checkbox" type="checkbox" />
                <label
                  for="checkbox"
                  className="ml-2 text-xs font-medium text-gray-900 dark:text-gray-300"
                >
                  I agree with the{" "}
                  <Link to="#" className="text-blue hover:underline">
                    terms and conditions
                  </Link>
                  .
                </label>
              </div>
              <div className="flex justify-center mt-5 mb-10">
                <button className="h-11 w-44 bg-second rounded-10 border-primary border-1 text-light font-semibold text-sm transition-all hover:bg-second-1">
                  Submit & Registger
                </button>
              </div>
            </div>

            <div className="text-center">
              <span className="text-base">Already have an account?</span>
              <Link to={"/login"} className="ml-5 text-blue font-medium underline">
                Sign In Now
              </Link>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Register;
