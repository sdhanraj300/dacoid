import Link from "next/link";
import React from "react";
import { FaFacebook, FaGoogle } from "react-icons/fa";

interface AuthFormProps {
  heading: string;
  isLogin?: boolean;
  action?: string;
}
const AuthForm: React.FC<AuthFormProps> = ({ heading, isLogin, action }) => {
  return (
    <div>
      <div className="flex mt-10 ml-10">
        <h1 className="text-2xl font-semibold text-center mb-6">{heading}</h1>
      </div>
      <div className="container mx-auto px-4">
        <div className="shadow-md rounded-lg px-8 py-10 bg-white">
          <form action="#">
            {!isLogin && (
              <div className="mb-6 relative">
                <label
                  htmlFor="firstName"
                  className="absolute top-4 left-2 text-sm font-medium text-gray-700 block mb-2"
                >
                  First Name
                </label>
                <input
                  type="text"
                  id="firstName"
                  className="shadow appearance-none border rounded-md w-full py-3 px-3 text-gray-700 focus:outline-none focus:ring-primary focus:ring-offset-2 bg-[#F1F1F1] focus:ring-2"
                  required
                />
              </div>
            )}
            {!isLogin && (
              <div className="mb-6 relative">
                <label
                  htmlFor="lastName"
                  className="absolute top-4 left-2 text-sm font-medium text-gray-700 block mb-2"
                >
                  Last Name
                </label>
                <input
                  type="text"
                  id="lastName"
                  className="bg-[#F1F1F1] shadow appearance-none border rounded-md w-full py-3 px-3 text-gray-700 focus:outline-none focus:ring-primary focus:ring-offset-2 focus:ring-2"
                  required
                />
              </div>
            )}
            <div className="mb-6 relative">
              <label
                htmlFor="email"
                className="absolute top-4 left-2 text-sm font-medium text-gray-700 block mb-2"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                className="bg-[#F1F1F1] shadow appearance-none border rounded-md w-full py-3 px-3 text-gray-700 focus:outline-none focus:ring-primary focus:ring-offset-2 focus:ring-2"
                required
              />
            </div>
            <div className="relative mb-6">
              <input
                type="password"
                id="password"
                className="bg-[#F1F1F1] shadow appearance-none border rounded-md w-full py-3 px-3 text-gray-700 focus:outline-none focus:ring-primary focus:ring-offset-2 focus:ring-2"
                required
              />
              <label
                htmlFor="password"
                className="text-sm absolute top-4 left-2 font-medium text-gray-700 block mb-2"
              >
                Password
              </label>
            </div>
            {!isLogin && (
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center">
                  <input
                    type="checkbox"
                    id="terms"
                    className="w-4 h-4 text-primary border-gray-300 rounded focus:ring-primary"
                  />
                  <label htmlFor="terms" className="text-sm ml-2 text-gray-700">
                    By proceeding, I agree to all{" "}
                    <span className="underline text-[#9FB2FF]">T&Cs</span> and{" "}
                    <span className="underline text-[#9FB2FF]">
                      Privacy Policy
                    </span>
                  </label>
                </div>
              </div>
            )}
            <button
              type="submit"
              className={`${
                !isLogin ? "mt-40" : "mt-80"
              } w-full bg-primary h-10 border-2 text-white flex items-center justify-center bg-gradient-to-r from-[#95BEFF] to-[#7B91FF] font-medium rounded-md hover:bg-primary-dark focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary`}
            >
              {action}
            </button>
          </form>
          <div className="flex items-center mt-12 justify-center">
            <div className="text-sm font-bold text-gray-500 mr-2">Or</div>
          </div>
        </div>
      </div>
      <div className="flex flex-row items-center justify-center mt-12 gap-4">
        <FaGoogle className="text-3xl text-gray-700     " />
        <FaFacebook className="text-3xl text-gray-700 " />
      </div>
      <div className="">
        <p className="text-center mt-6 text-gray-700">
          {isLogin ? "Don't have an account?" : "Already have an account?"}{" "}
          <Link
            href={`${isLogin ? "/register" : "/login"}`}
            className="underline text-[#9FB2FF]"
          >
            {isLogin ? "Register" : "Sign In"}
          </Link>
        </p>
      </div>
    </div>
  );
};

export default AuthForm;
