import React from "react";
import { motion } from "framer-motion";

type Props = {};
//https://scontent.fvga3-1.fna.fbcdn.net/v/t1.6435-9/36247224_242461829895104_1135712202011967488_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=174925&_nc_ohc=ndxkgZqFTO4AX_6rDZI&_nc_ht=scontent.fvga3-1.fna&oh=00_AT9LJuFm7p4zsCO9Qncy-LkRqfaFIYNJZ6fYC3Idy6uKdA&oe=6375AD9D

function About({}: Props) {
  return (
    <div className="flex flex-col relative text-center md:text-left md:flex-row mx-w-7xl px-10 justify-evenly h-screen mx-auto items-center">
      <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">
        about
      </h3>
      <motion.img
        initial={{
          opacity: 0,
          x: -200,
        }}
        whileInView={{
          opacity: 1,
          x: 0,
        }}
        transition={{
          duration: 1.2,
        }}
        viewport={{ once: true }}
        className="object-center   h-[60%]"
        src="https://scontent.fvga3-1.fna.fbcdn.net/v/t1.6435-9/36247224_242461829895104_1135712202011967488_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=174925&_nc_ohc=ndxkgZqFTO4AX_6rDZI&_nc_ht=scontent.fvga3-1.fna&oh=00_AT9LJuFm7p4zsCO9Qncy-LkRqfaFIYNJZ6fYC3Idy6uKdA&oe=6375AD9D"
      />
    </div>
  );
}

export default About;
