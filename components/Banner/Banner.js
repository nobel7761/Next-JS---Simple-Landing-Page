import React from "react";
import Link from "next/link";
import { UserCircleIcon, ArrowDownIcon } from "@heroicons/react/solid";
import HeadlessTab from "./../../pages/headlessTab";

const Banner = () => {
  return (
    <div className="banner-background">
      <section className="w-11/12 mx-auto pt-14 px-20 flex justify-between items-center text-white">
        <div>
          <p className="text-3xl font-bold">MNTN</p>
        </div>
        <div className="flex justify-between">
          <Link href="/headlessTab">
            <a className="mr-10 hover:text-red-500">HEADLESS TAB</a>
          </Link>
          <p className="mr-10">ABOUT US</p>
          <p>BLOG</p>
        </div>
        <div className="flex items-center">
          <UserCircleIcon className="h-5 w-5 text-white mr-3" />
          <p>ACCOUNT</p>
        </div>
      </section>

      <section className="w-[550px] mx-auto pt-32">
        <div className="flex items-center">
          <div className="border-y w-28 bg-[#FBD784] mr-8"></div>
          <div className="font-extrabold tracking-[6px] text-[#FBD784]">
            A HIKING GUIDE
          </div>
        </div>
        <div>
          <p className="capitalize text-5xl mt-4 font-semibold leading-[60px]">
            Be prepared for the<br></br>Mountains and beyond!
          </p>
        </div>
        <div className="ml-2 text-xl font-bold mt-3 flex items-center">
          <p>
            <small>scroll down</small>
          </p>
          <ArrowDownIcon className="h-5 w-5 text-white mr-3 ml-3" />
        </div>
      </section>
    </div>
  );
};

export default Banner;
