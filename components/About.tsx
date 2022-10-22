import React from "react";
import { motion } from "framer-motion";

type Props = {};
//https://scontent.fvga3-1.fna.fbcdn.net/v/t1.6435-9/36247224_242461829895104_1135712202011967488_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=174925&_nc_ohc=ndxkgZqFTO4AX_6rDZI&_nc_ht=scontent.fvga3-1.fna&oh=00_AT9LJuFm7p4zsCO9Qncy-LkRqfaFIYNJZ6fYC3Idy6uKdA&oe=6375AD9D

function About({}: Props) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{duration:1.5}}
        
      className="flex flex-col relative text-center md:text-left md:flex-row mx-w-7xl px-10 justify-evenly h-screen mx-auto items-center"
    >
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
        src="https://scontent.fvga3-1.fna.fbcdn.net/v/t1.6435-9/36247224_242461829895104_1135712202011967488_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=174925&_nc_ohc=ndxkgZqFTO4AX_6rDZI&_nc_ht=scontent.fvga3-1.fna&oh=00_AT9LJuFm7p4zsCO9Qncy-LkRqfaFIYNJZ6fYC3Idy6uKdA&oe=6375AD9D"
        className="-mb-20 md:mb-0 flex-shrink-0 w-56 h-56 rounded-full object-cover
        md:rounded-lg md:w-64 md:h-95  xl:w-[500px] xl:h-[550px] mt-20"
      />
      <div className="space-y-10 px-0 md:px-10 mt-10">
        <h4 className="text-4xl">
          Here is a{" "}
          <span className="underline decoration-[#F7AB0A] ">little</span>{" "}
          background
        </h4>
        <p className="text-base">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
          mollitia, molestiae quas vel sint commodi repudiandae consequuntur
          voluptatum laborum numquam blanditiis harum quisquam eius sed odit
          fugiat iusto fuga praesentium optio, eaque rerum! Provident similique
          accusantium nemo autem. Veritatis obcaecati tenetur iure eius earum ut
          molestias architecto voluptate aliquam nihil, eveniet aliquid culpa
          officia aut! Impedit sit sunt quaerat, odit, tenetur error, harum
          nesciunt ipsum debitis quas aliquid. Reprehenderit, quia. Quo neque
          error repudiandae fuga? Ipsa laudantium molestias eos sapiente
          officiis modi at sunt excepturi expedita sint? Sed quibusdam
          recusandae alias error harum maxime adipisci amet laborum.
          Perspiciatis{" "}
        </p>
      </div>
    </motion.div>
  );
}

export default About;
