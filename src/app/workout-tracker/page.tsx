import Image from "next/image";
import React from "react";
import img from "../../images/chart.png";
import weight from "../../images/weight.png";
import toggle from "../../images/Toggle.png";
import yoga from "../../images/yoga.png";
import girlWeight from "../../images/girl-weight.png";
import {
  FaArrowLeft,
  FaCamera,
  FaHome,
  FaInfoCircle,
  FaSearch,
  FaUser,
} from "react-icons/fa";
import { IoMdTrendingUp } from "react-icons/io";

const page = () => {
  return (
    <div className="flex flex-col relative">
      <div className="flex justify-between mt-20">
        <FaArrowLeft className="text-2xl" />
        <h1 className="text-3xl font-bold">Workout Tracker</h1>
        <p></p>
      </div>
      <div className="flex justify-between mt-20">
        <p></p>
        <p>Good Job</p>
        <p>Less than 320cal</p>
      </div>
      <div className="flex items-center justify-center">
        <Image src={img} className="" alt="chart" height={90} width={343} />
      </div>
      <div className="flex items-center justify-center gap-5 mt-[2rem] rounded-md shadow-xsm  bg-gradient-to-r from-[#4545450A] to-white">
        <FaInfoCircle className="text-2xl" />
        <p className="font-semibold">
          You have burned fewer calories than <br /> yesterday. Time to get
          moving!{" "}
        </p>
      </div>
      <div className="">
        <div className="flex px-10 mt-5 gap-10">
          <h1 className="text-xl font-bold">Upcoming Workout</h1>
          <p className="text-[#7F7F7F]">See more</p>
        </div>
        <div className="flex flex-col gap-10 mt-8">
          <div className="flex h-[75px] w-[380px] mx-auto gap-[10rem] border-2 shadow-md items-center justify-center rounded-xl">
            <div className="flex">
              <Image
                src={weight}
                className="rounded-full"
                alt="weight"
                height={50}
                width={50}
              />
              <div className="flex flex-col">
                <h1 className="font-bold ">Full Body Workout</h1>
                <p className="text-[#7F7F7F] text-sm font-light">Today 3pm</p>
              </div>
            </div>
            <Image
              src={toggle}
              className="h-[20px] w-[40px]"
              alt="toggle"
              height={20}
              width={40}
            />
          </div>
          <div className="flex h-[75px] w-[380px] mx-auto gap-[10rem] border-2 shadow-md items-center justify-center rounded-xl">
            <div className="flex">
              <Image
                src={yoga}
                className="rounded-full"
                alt="weight"
                height={50}
                width={50}
              />
              <div className="flex flex-col">
                <h1 className="font-bold ">Upper Body Workout</h1>
                <p className="text-[#7F7F7F] text-sm font-light">Feb 4, 3pm</p>
              </div>
            </div>
            <Image
              src={toggle}
              className="h-[20px] w-[40px]"
              alt="toggle"
              height={20}
              width={40}
            />
          </div>
        </div>
      </div>
      <div className="flex flex-col mt-10">
        <h1 className="font-semibold text-2xl ml-4">
          What Do You Want to Train
        </h1>
        <div className="flex justify-between pr-10 mt-5 rounded-xl bg-gradient-to-r from-[#8CB1FF99] to-[#fff] ">
          <div className="font-semibold text-xl flex flex-col justify-center">
            <h1>Full Body Workout</h1>
            <p>Arms</p>
            <p>Chest</p>
          </div>
          <div className="">
            <Image
              src={girlWeight}
              className="rounded-full"
              alt="girlWeight"
              height={100}
              width={100}
            />
          </div>
        </div>
      </div>
      <div className="flex items-center font-semibold justify-center w-full gap-10 mt-10 text-[#7F7F7F]">
        <FaHome className="text-3xl" />
        <IoMdTrendingUp className="text-3xl" />
        <FaSearch className="text-3xl" />
        <FaCamera className="text-3xl" />
        <FaUser className="text-3xl" />
      </div>
    </div>
  );
};

export default page;
