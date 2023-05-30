import React, { useState } from "react";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import bg from "../../assets/bglogin.png";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { register } from "../Login/action";

function Register() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [checkPassword, setCheckPassword] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const onRegister = async (e) => {
    e.preventDefault();
    if (password !== checkPassword) {
      return;
    }

    if (
      email === "" ||
      password === "" ||
      firstName === "" ||
      lastName === ""
    ) {
      return;
    }

    const result = await dispatch(
      register({ firstName, lastName, email, password })
    );

    if (result.statusCode === 200) {
      navigate("/login");
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
            <form
              className="flex flex-col gap-2 mt-5"
              onSubmit={(e) => onRegister(e)}
            >
              <div className="mb-1">
                <input
                  type="text"
                  required
                  className="h-12 w-full rounded-20 border-1 border-second bg-transparent px-5 outline-none transition-all focus:border-second-1 focus:border-2"
                  placeholder="Type first name"
                  onChange={(e) => setFirstName(e.target.value)}
                />
              </div>
              <div className="mb-1">
                <input
                  type="text"
                  required
                  className="h-12 w-full rounded-20 border-1 border-second bg-transparent px-5 outline-none transition-all focus:border-second-1 focus:border-2"
                  placeholder="Type last name"
                  onChange={(e) => setLastName(e.target.value)}
                />
              </div>
              <div className="mb-1">
                <input
                  type="email"
                  required
                  className="h-12 w-full rounded-20 border-1 border-second bg-transparent px-5 outline-none transition-all focus:border-second-1 focus:border-2"
                  placeholder="Type your email"
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className="mb-1">
                <input
                  type="password"
                  required
                  className="h-12 rounded-20 w-full border-1 border-second bg-transparent px-5 outline-none transition-all focus:border-second-1 focus:border-2"
                  placeholder="Password"
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              <div className="mb-1">
                <input
                  type="password"
                  required
                  className="h-12 rounded-20 w-full border-1 border-second bg-transparent px-5 outline-none transition-all focus:border-second-1 focus:border-2"
                  placeholder="Confirm password"
                  onChange={(e) => setCheckPassword(e.target.value)}
                />
              </div>
              <div className="flex items-center">
                <input id="checkbox" type="checkbox" />
                <label
                  htmlFor="checkbox"
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
            </form>

            <div className="text-center">
              <span className="text-base">Already have an account?</span>
              <Link
                to={"/login"}
                className="ml-5 text-blue font-medium underline"
              >
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
