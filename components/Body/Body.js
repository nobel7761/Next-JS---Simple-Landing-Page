import { Image } from "next/image";
import { ArrowNarrowRightIcon } from "@heroicons/react/solid";

const Body = () => {
  return (
    <div>
      {/* 1st row */}
      <div className="relative">
        <div className="w-4/5 mx-auto flex absolute top-[-300px] left-[10%]">
          {/* left side */}
          <div className="w-1/2">
            {/* number */}
            <div className="text-9xl font-bold text-[200px] text-white opacity-10 -z-10">
              01
            </div>
            <div className="flex flex-col align-center absolute left-[100px] w-1/2 px-8 top-[120px]">
              <div className="flex items-center">
                <hr className="w-28 bg-[#FBD784] mr-8"></hr>
                <div className="font-extrabold tracking-[6px] text-[#FBD784] uppercase">
                  GEt Started
                </div>
              </div>
              <div className="mt-7">
                <h1 className="text-5xl text-white leading-[50px]">
                  What level of hiker are you?
                </h1>
              </div>
              <div className="my-5">
                <p className="font-bold text-sm text-white">
                  Determining what level of hiker you are can be an important
                  tool when planning future hikes. This hiking level guide will
                  help you plan hikes according to different hike ratings set by
                  various websites like All Trails and Modern Hiker. What type
                  of hiker are you – novice, moderate, advanced moderate,
                  expert, or expert backpacker?
                </p>
              </div>
              <div className="flex items-center">
                <p className="text-[#FBD784] mr-2">read more</p>
                <ArrowNarrowRightIcon className="h-5 w-5 text-[#FBD784] mr-3" />
              </div>
            </div>
          </div>
          {/* right side */}
          <div className="ml-36">
            <img
              src="/images/1.jpg"
              alt="Picture of the mountain"
              width="350px"
              height="200px"
            />
          </div>
        </div>
      </div>

      {/* 2nd row */}
      <div className="relative">
        <div className="w-4/5 mx-auto flex absolute top-[400px] left-[10%]">
          {/* left side */}
          <div className="float-left">
            <img
              src="/images/2.jpg"
              alt="Picture of the mountain"
              width="350px"
              height="200px"
            />
          </div>

          {/* right side */}
          <div className="w-1/2">
            {/* number */}
            <div className="text-9xl font-bold text-[200px] text-white opacity-10 -z-10 absolute left-[500px]">
              02
            </div>
            <div className="flex flex-col align-center absolute -right-4 w-1/2 px-8 top-[120px]">
              <div className="flex items-center">
                <hr className="w-28 bg-[#FBD784] mr-8"></hr>
                <div className="font-extrabold tracking-[6px] text-[#FBD784] uppercase">
                  Hiking Essentials
                </div>
              </div>
              <div className="mt-7">
                <h1 className="text-5xl text-white leading-[50px]">
                  Picking the right Hiking Gear!
                </h1>
              </div>
              <div className="my-5">
                <p className="font-bold text-sm text-white">
                  The nice thing about beginning hiking is that you don’t really
                  need any special gear, you can probably get away with things
                  you already have. Let’s start with clothing. A typical mistake
                  hiking beginners make is wearing jeans and regular clothes,
                  which will get heavy and chafe wif they get sweaty or wet.
                </p>
              </div>
              <div className="flex items-center">
                <p className="text-[#FBD784] mr-2">read more</p>
                <ArrowNarrowRightIcon className="h-5 w-5 text-[#FBD784] mr-3" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 3rd row */}
      <div className="relative">
        <div className="w-4/5 mx-auto flex absolute top-[1000px] left-[10%]">
          {/* left side */}
          <div className="w-1/2">
            {/* number */}
            <div className="text-9xl font-bold text-[200px] text-white opacity-10 -z-10">
              03
            </div>
            <div className="flex flex-col align-center absolute left-[100px] w-1/2 px-8 top-[120px]">
              <div className="flex items-center">
                <hr className="w-28 bg-[#FBD784] mr-8"></hr>
                <div className="font-extrabold tracking-[6px] text-[#FBD784] uppercase">
                  where you go is the key
                </div>
              </div>
              <div className="mt-7">
                <h1 className="text-5xl text-white leading-[50px]">
                  Understand Your Map &amp; Timing
                </h1>
              </div>
              <div className="my-5">
                <p className="font-bold text-sm text-white">
                  To start, print out the hiking guide and map. If it’s raining,
                  throw them in a Zip-Lock bag. Read over the guide, study the
                  map, and have a good idea of what to expect. I like to know
                  what my next landmark is as I hike. For example, I’ll read the
                  guide and know that say, in a mile, I make a right turn at the
                  junction..
                </p>
              </div>
              <div className="flex items-center">
                <p className="text-[#FBD784] mr-2">read more</p>
                <ArrowNarrowRightIcon className="h-5 w-5 text-[#FBD784] mr-3" />
              </div>
            </div>
          </div>
          {/* right side */}
          <div className="ml-36">
            <img
              src="/images/3.jpg"
              alt="Picture of the mountain"
              width="350px"
              height="200px"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Body;
