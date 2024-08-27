import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import profilePic from "../assets/profile.jpg";
import { motion, useAnimation } from "framer-motion";
import { useEffect, useRef } from "react";
import Reveal from "./Reveal";

const Hero = () => {
  return (
    <div className="border-b border-gray-700 flex items-center justify-center pb-4 lg:mb-35">
      <div className="flex flex-wrap ">
        <div className="w-full lg:w-1/2">
          <div className=" flex flex-col items-center lg:items-start">
            <Reveal>
              <h1 className="pb-12 text-6xl font-extralight  font-sans  tracking-tight lg:mt-16 lg:text-8xl lg:font-extralight   text-gray-500">
                Kshitij Shrestha
              </h1>
            </Reveal>

            <Reveal>
              <span className="bg-gradient-to-r from-pink-200 via-slate-500 to-purple-400 bg-clip-text text-3xl tracking-tighter text-transparent">
                Aspiring Full Stack Developer
              </span>
            </Reveal>

            <div
              className="my-7 py-9
               flex items-center justify-center gap-9
             text-6xl text-gray-50"
            >
              <Reveal>
                <a href="https://www.linkedin.com/in/kshitij-shrestha-858614245/">
                  <FaLinkedin />
                </a>
              </Reveal>
              <Reveal>
                <a href="https://github.com/xeeteex">
                  <FaGithub />
                </a>
              </Reveal>

              <Reveal>
                <a href="https://www.instagram.com">
                  <FaInstagram />
                </a>
              </Reveal>

              <Reveal>
                <a href="https://x.com">
                  <FaSquareXTwitter />
                </a>
              </Reveal>
            </div>
          </div>
        </div>
        <div className="w-full lg:w-1/2 lg:p-8">
          <motion.div
            whileInView={{opacity:1,y:0}}
            initial={{opacity:0, y: -100}} 
            transition={{duration:1}}
            viewport={{ once: true }}
            
            className="flex justify-center items-center m-6"
          >
            <img src={profilePic} alt="Kshitij Picture" />
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
