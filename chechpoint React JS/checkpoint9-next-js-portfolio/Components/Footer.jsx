import React from "react";
import {
  DevicePhoneMobileIcon,
  EnvelopeIcon,
  MapIcon,
} from "@heroicons/react/20/solid";

function Footer() {
  return (
    <>
      <div className="pt-[8rem] pb-[4rem] bg-[#02050a]">
        <div className="grid border-b-[1px] pb-[6rem] border-gray-400 grid-cols-1 lg:grid-cols-3 md:grid-cols-2 w-[80%] mx-auto gap-[3rem]">
          <div className="flex items-center space-x-6">
            <div className="md:w-[6.5rem] md:h-[6.5rem] w-[5rem] h-[5rem] flex items-center justify-center rounded-full bg-[#55e6a5]">
              <MapIcon className=" md:w-[4rem] md:h-[4rem] w-[3.5rem] h-[3.5rem] text-black" />
            </div>
            <div>
              <h1 className="text-[25px] font-semibold mb-[0.2rem] text-white">
                Adresse
              </h1>
              <p className="text-[17px] w-[90%] text-white opacity-60">
                Lorem ipsum dolor sit amet.
              </p>
            </div>
          </div>

          <div className="flex items-center space-x-6">
            <div className="md:w-[6.5rem] md:h-[6.5rem] w-[5rem] h-[5rem] flex items-center justify-center rounded-full bg-[#55e6a5]">
              <DevicePhoneMobileIcon className=" md:w-[4rem] md:h-[4rem] w-[3.5rem] h-[3.5rem] text-black" />
            </div>
            <div>
              <h1 className="text-[25px] font-semibold mb-[0.2rem] text-white">
                Phone
              </h1>
              <p className="text-[17px] w-[90%] text-white opacity-60">
                +221 78 161 08 00 <br /> +221 09 293 97 23
              </p>
            </div>
          </div>

          <div className="flex items-center space-x-6">
            <div className="md:w-[6.5rem] md:h-[6.5rem] w-[5rem] h-[5rem] flex items-center justify-center rounded-full bg-[#55e6a5]">
              <EnvelopeIcon className=" md:w-[4rem] md:h-[4rem] w-[3.5rem] h-[3.5rem] text-black" />
            </div>

            <div>
              <h1 className="text-[25px] font-semibold mb-[0.2rem] text-white">
                Send me an Email
              </h1>
              <p className="text-[17px] w-[90%] text-white opacity-60">
                paulportfolio@gmail.com
              </p>
            </div>
          </div>
        </div>

        <div className="w-[80%] mt-[2rem] mx-auto grid grid-cols-1 md:grid-cols-2 items-center justify-between">
          <div className="text-[18px]  mb-[2rem] md:mb-0 text-white opacity-20">
            Paul UCHENNA 2024 || Code with passion
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;
