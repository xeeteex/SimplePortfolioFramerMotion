import aboutImg from "../assets/about.jpg";
import { ABOUT_TEXT } from "../constants";
import Reveal from "./Reveal";
import { motion } from "framer-motion";
const About = () => {
  return (
    <div className="border-b border-gray-700 pb-4">

      <h1 className="text-center my-20 text-4xl tracking-tight text-gray-500">
        About
        <span className="text-gray-700">   Me</span>
      </h1>

      <div className="flex flex-wrap">
        <div className="w-full lg:w-1/2 lg:p-8">
          <motion.div 
          whileInView={{opacity:1,y:0}}
          initial={{opacity:0, y: -100}} 
          transition={{duration:1}}
          viewport={{ once: true }}

          className="flex items-center justify-center">

            
              <img className="" src={aboutImg} alt="" />
            

          </motion.div>
        </div>

        <div className="w-full lg:w-1/2">
          <div className="flex justify-center lg:justify-start">
            
            <Reveal>
              <p className="my-3 max-w-xl py-6 text-lg text-gray-500 tracking-wide">
                {ABOUT_TEXT}
              </p>
            </Reveal>
            
          </div>
          
        </div>
      </div>
    </div>
  );
};
export default About;
