import React from "react";
import { motion } from "framer-motion";

type Props = {};

function ExperienceCard({}: Props) {
  return (
    <article className="flex flex-col items-center space-y-7 flex-shrink-0
    w-[500px] h-[500px] md:w-[600px] xl:w-[900px]  snap-center bg-[#292929] p-10
    hover:opacity-100 opacity-40 cursor-pointer duration-200 overflow-hidden">
      <motion.img
        initial={{
          y: -100,
          opacity: 0,
        }}
        transition={{ duration: 1.2 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        src="data:image/png;base64,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"
        alt=""
        className="w-32 h-32 rounded-full xl:w-[150px] xl:h-[150px]
        object-cover object-center"
      />
      <div className="px-0 md:px-10">
        <h4 className="text-4xl font-light">student at upgrad</h4>
        <p className="font-bold text-2xl mt-1">UpGrad</p>

        <div className="flex space-x-2 my-2">
          <img
            className="h-10 w-10 object-contain"
            src="https://i.imgur.com/zum9Pgc.png"
            alt=""
          />
          <img
            className="h-10 w-10 object-contain"
            src="https://i.imgur.com/jloPLUW.png"
            alt=""
          />
          <img
            className="h-10 w-10 object-contain"
            src="https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png"
            alt=""
          />
           <img
            className="h-10 w-10 object-contain"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/2300px-React-icon.svg.png"
            alt=""
          />
        </div>

        <p className="uppercase text-gray-300">Started at 2021 - Ended 2022</p>
        <ul className="list-disc space-y-4 ml-5 text-lg">
          <li>Summary points</li>
          <li>Summary points</li>
          <li>Summary points</li>
         
        </ul>
      </div>
    </article>
  );
}

export default ExperienceCard;
