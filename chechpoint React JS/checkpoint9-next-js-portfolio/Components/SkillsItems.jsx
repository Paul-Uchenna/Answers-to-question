import React from "react";

// The SkillsItems component displays individual skill or education items.

function SkillsItems(pros) {
  return (
    <>
      <div className="mb-[4rem] md:mb-[8rem]">
        <span className="px-[2rem] text-[#55e6a5] py-[0.9rem] font-bold text-[18px] border-[2px] border-[#55e6a5]">
          {pros.year}
        </span>
        <h1 className="mt-[1.7rem] uppercase font-semibold mb-[1rem] text-[15px] sm:text[25px] md:text-[34px] text-white">
          {pros.title}
        </h1>
        <p className="text-[#aaaaaa] font-normal w-[80%] text-[15px] opacity-80 ">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magni,
          ipsum! Facilis debitis illo praesentium odit voluptates, accusantium
          ducimus culpa? Sunt ea architecto aspernatur odit ratione provident
          nesciunt quisquam dolor fuga!
        </p>
      </div>
    </>
  );
}

export default SkillsItems;
