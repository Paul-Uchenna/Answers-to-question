import Image from "next/image";
import React from "react";
import p1 from "../public/images/p1.jpg";
import p2 from "../public/images/p2.jpg";
import p3 from "../public/images/p3.jpg";
import p4 from "../public/images/p4.jpg";
import p5 from "../public/images/p5.jpg";

function Project() {
  return (
    <>
      <div className="bg-[#02050a] pt-[4rem] md:pt-[8rem] pb-[1rem]">
        <h1 className="text-3xl md:text-5xl font-bold text-white text-center">
          PRO<span className="text-[#f021b2]">JECT</span>
        </h1>

        <div className="w-[80%] pt-[2rem] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[2rem]">
          <div className="transform cursor-pointer hover:-translate-y-6 transition-all duration-200 relative w-full h-[200px] md:h-[300px]">
            <Image
              src={p1}
              alt=""
              layout="fill"
              objectFit="contain"
              className=""
            />
          </div>

          <div className="transform cursor-pointer hover:-translate-y-6 transition-all duration-200 relative w-full h-[200px] md:h-[300px]">
            <Image
              src={p2}
              alt=""
              layout="fill"
              objectFit="contain"
              className=""
            />
          </div>

          <div className="transform cursor-pointer hover:-translate-y-6 transition-all duration-200 relative w-full h-[200px] md:h-[300px]">
            <Image
              src={p3}
              alt=""
              layout="fill"
              objectFit="contain"
              className=""
            />
          </div>

          <div className="transform cursor-pointer hover:-translate-y-6 transition-all duration-200 relative w-full h-[200px] md:h-[300px]">
            <Image
              src={p4}
              alt=""
              layout="fill"
              objectFit="contain"
              className=""
            />
          </div>

          <div className="transform cursor-pointer hover:-translate-y-6 transition-all duration-200 relative w-full h-[200px] md:h-[300px]">
            <Image
              src={p5}
              alt=""
              layout="fill"
              objectFit="contain"
              className=""
            />
          </div>

          <div className="transform cursor-pointer hover:-translate-y-6 transition-all duration-200 relative w-full h-[200px] md:h-[300px]">
            <Image
              src={p4}
              alt=""
              layout="fill"
              objectFit="contain"
              className=""
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default Project;
