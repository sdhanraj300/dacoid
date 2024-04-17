import React from "react";
import img from "../../images/running1.png";
import arrow from "../../images/arrow.png";
import Image from "next/image";
import Link from "next/link";
type Props = {};

const FirstPage = (props: Props) => {
  return (
    <div className="flex h-screen flex-col justify-between">
      <div className="flex justify-between">
        <p></p>
        <p className="mr-2 mt-[44px] ml-[323px] text-[16px] font-bold  text-[#9FB2FF] underline">Skip</p>
      </div>
      <div className="flex justify-center items-center">
        <Image src={img} height={282} width={282} alt="running-person" />
      </div>
      <div className="flex justify-center ml-[50px]  flex-col">
        <h1 className="text-[20px] font-semibold text-[#2C2B2B]">Track Your Goal</h1>
        <p className="text-[#787878] text-[16px]">
          Don’t worry if you have trouble <br /> determining your goals, We can
          help you <br /> determine your goals and track your goals
        </p>
      </div>
      <Link href="/second-page" className="flex justify-between">
        <p></p>
        <Image src={arrow} className="mb-10 mr-4" height={60} width={60} alt="arrow" />
      </Link>
    </div>
  );
};

export default FirstPage;
