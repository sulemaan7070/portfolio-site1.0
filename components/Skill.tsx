import React from "react";
import { motion } from "framer-motion";

type Props = {
  directionLeft: boolean;
};

function Skill({ directionLeft }: Props) {
  return (
    <div className="group realtive flex cursor-pointer ">
      <motion.img
        initial={{
          x: directionLeft ? -200 : 200,
          opacity: 0,
        }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/2300px-React-icon.svg.png"
        className="rounded-full w-24 h-24 object-contain border border-gray-500 xl:w-28 xl:h-28 filter group-hover:grayscale 
        transition duration:300 ease-in-out "
      />
      <div className="absolute opacity-0 group-hover:opacity-80 transition duration-300 ease-in-out
      group-hover:bg-white h-24  w-24 rounded-full xl:w-28 xl:h-28 z-0   ">
      <div className="flex items-center justify-center h-full">
        <p className="text-3xl flex font-bold justify-center h-full items-center text-black">
          100%
        </p>
       </div>
      </div>
    </div>
  );
}

export default Skill;