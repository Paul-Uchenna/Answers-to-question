import React from "react";
import Particle from "./Particle";
import banner from "../public/images/banner.jpg";
import profilepic from "../public/images/profilePic1.jpg";
import Image from "next/image";
import TextEffect from "./TextEffect";

function Hero() {
  return (
    <>
      <div className="relative h-[100vh] pt-[5rem]">
        <Particle />

        <div className="w-[80%] grid-cols-1 mx-auto grid lg:grid-cols-2 gap-[3rem] h-full items-center">
          <div>
            <h1 className="text-[35px] md:text-[50px] text-white font-bold">
              Hi, I am <span className="text-[#f021b2]">Paul!</span>
            </h1>
            <TextEffect />
            <p className="mt-4 text-sm text-[#ffffff92]">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Possimus
              iure totam aspernatur itaque numquam dignissimos fugit atque
              labore ab reprehenderit? Nemo architecto labore animi unde qui.
              Praesentium corrupti earum ipsam.
            </p>

            <div className="mt-4 flex-col space-y-6 sm:space-y-0 sm:flex sm:flex-row items-center sm:space-x-6 text-[#f021b2] text-xl font-semibold">
              <button className="rounded px-[10px] py-[10px] hover:bg-[#55e6a5] hover:text-black transition-all duration-300">
                Let&apos;s Talk
              </button>
              <button className="rounded px-[10px] py-[10px] hover:bg-[#55e6a5] hover:text-black transition-all duration-300">
                Download CV
              </button>
            </div>
          </div>

          <div className="flex justify-center items-center lg:justify-end">
            <div
              data-aos-zoom-in
              className="w-[350px] h-[370px] lg:w-[350px] lg:h-[400px] relative rounded overflow-hidden lg:mr-10"
            >
              <Image
                src={profilepic}
                alt="profile picture"
                layout="fill"
                // objectFit="contain"
              />
            </div>
          </div>
        </div>

        <Image
          src={banner}
          layout="fill"
          objectFit="cover"
          alt="banner"
          className="absolute top-0 left-0 -z-50 h-full w-full"
        />
      </div>
    </>
  );
}

export default Hero;
