import React from "react";
import {
  FaArrowAltCircleLeft,
  FaArrowAltCircleRight,
  FaCamera,
  FaHome,
  FaSearch,
  FaUser,
} from "react-icons/fa";
import Image from "next/image";
import calender from "../../images/Calendar.png";
import { IoMdTrendingUp } from "react-icons/io";
type Props = {};

const page = (props: Props) => {
  return (
    <div>
      <div className="flex items-center mt-20 gap-10 justify-center">
        <FaArrowAltCircleLeft />
        <h1 className="font-bold text-3xl">Workout Schedule</h1>
      </div>
      <div className="mt-10 gap-3 text-md flex items-center justify-center">
        <FaArrowAltCircleLeft />
        <p className="font-bold">Feb 2024</p>
        <FaArrowAltCircleRight />
      </div>
      <div className="flex items-center justify-center mt-10">
        <Image src={calender} alt="calender" height={77} width={345} />
      </div>
      <div className="flex flex-col mt-10 gap-2 justify-center">
        <div className="font-bold">
          <p className="ml-5 mt-2">6:00 AM</p>
          <hr />
        </div>
        <div className="font-bold">
          <p className="ml-5 mt-2">6:00 AM</p>
          <hr />
        </div>
        <div className="font-bold">
          <p className="ml-5 mt-2">6:00 AM</p>
          <hr />
        </div>
        <div className="font-bold">
          <p className="ml-5 mt-2">6:00 AM</p>
          <hr />
        </div>
        <div className="font-bold">
          <p className="ml-5 mt-2">6:00 AM</p>
          <hr />
        </div>
        <div className="font-bold">
          <p className="ml-5 mt-2">6:00 AM</p>
          <hr />
        </div>
        <div className="font-bold">
          <p className="ml-5 mt-2">6:00 AM</p>
          <hr />
        </div>
        <div className="font-bold">
          <p className="ml-5 mt-2">6:00 AM</p>
          <hr />
        </div>
        <div className="font-bold">
          <p className="ml-5 mt-2">6:00 AM</p>
          <hr />
        </div>
        <div className="font-bold">
          <p className="ml-5 mt-2">6:00 AM</p>
          <hr />
        </div>
        <div className="font-bold">
          <p className="ml-5 mt-2">6:00 AM</p>
          <hr />
        </div>
      </div>
      <div className="flex items-center font-semibold justify-center w-full gap-10 mt-[6rem] text-[#7F7F7F]">
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
