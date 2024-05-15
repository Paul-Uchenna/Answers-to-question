import React from "react";
import SkillsItems from "./SkillsItems";
import SkillLanguages from "./SkillLanguages";

// The Skills component renders the section displaying the user's education and skills.

function Skills() {
  return (
    <>
      <div className="pt-[4rem] md:pt-[8rem] pb-[3rem] bg-[#09101a]">
        <h1 className="text-3xl md:text-5xl font-bold text-white text-center">
          Education & <span className="text-[#f021b2]">Skills</span>
        </h1>

        <div className="w-[80%] mx-auto  md:pt-[8rem] grid grid-cols-1 md:grid-cols-2 gap-[2rem] items-center">
          <div>
            <SkillsItems title="React Developer" year="2023 - 2024" />
            <SkillsItems title="MERN Stack Developer" year="2023 - 2022" />
            <SkillLanguages
              skill1="HTML"
              skill2="CSS"
              skill3="JavaScript"
              level1="w-[92%]"
              level2="w-[78%]"
              level3="w-[68%]"
            />
          </div>

          <div>
            <SkillsItems title="Next JS Developer" year="2022 - 2021" />
            <SkillsItems title="Node JS Developer" year="2021 - 2020" />
            <SkillLanguages
              skill1="React JS"
              skill2="Next JS"
              skill3="TypeScript"
              level1="w-[81%]"
              level2="w-[75%]"
              level3="w-[68%]"
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default Skills;
