import React from "react";
import Skill from "./Skill";
import { motion } from "framer-motion";


type Props = {};

function Skills({}: Props) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="h-screen flex flex-col  relative
      text-center md:text-left xl:flex-row max-w-[2000px] xl:px-10 xl:space-y-0 mx-auto min-h-screen justify-center items-center"
    >
      <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">
        skills
      </h3>
      <h3 className="absolute top-36 text-gray-500 uppercase tracking-[3px] xl:mb-6">
        Hover over for a skill currency proficiency
      </h3>
      <div className="grid grid-cols-3 gap-5 ">
        <Skill
          directionLeft={true}
          num={90}
          imgSrc="https://i.imgur.com/zum9Pgc.png"
        />
        <Skill
          directionLeft={true}
          num={80}
          imgSrc="https://i.imgur.com/jloPLUW.png"
        />
        <Skill
          directionLeft={true}
          num={60}
          imgSrc="https://i.imgur.com/YQJedeU.png"
        />

        <Skill
          directionLeft={true}
          num={75}
          imgSrc="https://i.imgur.com/yzPpS6p.png"
        />
        <Skill
          directionLeft={true}
          num={75}
          imgSrc="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/2300px-React-icon.svg.png"
        />
        <Skill
          directionLeft={true}
          num={70}
          imgSrc="https://i.imgur.com/wWhTxVP.png"
        />
        <Skill
          directionLeft={true}
          num={70}
          imgSrc="https://i.imgur.com/2eO0lLF.jpg"
        />
        
        {/* <Skill directionLeft={true} />
        <Skill directionLeft={true} />
        <Skill directionLeft={true} />
        <Skill directionLeft={true} />
        <Skill directionLeft={false} />
        <Skill directionLeft={false} />
        <Skill directionLeft={false} />
        <Skill directionLeft={false} />
        <Skill directionLeft={false} />
        <Skill directionLeft={false} />
        <Skill directionLeft={false} />
        <Skill directionLeft={false} /> */}
      </div>
    </motion.div>
  );
}

export default Skills;
