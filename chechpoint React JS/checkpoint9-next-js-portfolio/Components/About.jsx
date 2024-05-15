import Image from "next/image";
import aboutImg from "../public/images/about.jpg";

function About() {
  return (
    <>
      <div className="bg-[#121121] pb-[3rem] pt-[3rem] md:pt-[8rem]">
        <div className="grid grid-cols-1 md:grid-cols-2 w-[80%] mx-auto gap-[3rem] items-center">
          <div>
            <h1 className="text-[20px] font-bold uppercase text-[#55e6a5] md:[1rem]">
              About Me
            </h1>
            <h2 className="text-[20px] md:text-[35px] lg:text-[30px] font-semibold text-white lg:mt-6 mb-[3rem]">
              <span className="whitespace-nowrap">
                I am Paul Uchenna a{" "}
                <span className="font-bold text-[#f021b2]">Web Developer</span>
              </span>
            </h2>
            <div className="mb-[3rem] flex items-center md:space-x-10">
              <sapn className="w-[100px] hidden md:block h-[5px] bg-slate-400 rounded-sm"></sapn>
              <p className="text-[19px] text-slate-300 w-[75%] text-start">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Dolorum, quia consequuntur commodi veritatis harum distinctio
                illo sapiente exercitationem vitae voluptate rerum?
              </p>
            </div>
            {""}
            <button className="text-black bg-[#55e6a5] text-xl font-semibold  rounded px-[10px] py-[10px]">
              Download CV
            </button>{" "}
          </div>

          <div className="lg:w-[450px] lg:ml-4 mx-auto md:mx-0 mt-[2rem] lg:mt-0 lg:h-[500px] w-[300px] h-[300px] relative">
            <Image
              src={aboutImg}
              alt="about user"
              layout="fill"
              objectFit="contain"
              className="relative z-10 w-full h-full object-contain"
            />
            <div className="absolute w-full h-[90%] z-9 bg-[#55e6a5] top:[-2rem] right-[-2rem]"></div>
          </div>
        </div>
      </div>
    </>
  );
}

export default About;
