import logo from "../assets/finallogo.png";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { Button } from "@material-tailwind/react";
import { motion } from "framer-motion";

const Navbar = () => {
  return (
    <nav
      className=" flex items-center
 justify-between py-12 px-8"
    >
     

      <motion.div
       whileInView={{opacity:1,y:0}}
       initial={{opacity:0, y: -100}} 
       transition={{duration:1}}
       viewport={{ once: true }}
      className="flexflex-shrink-0 items-center justify-center my-6">
     
        <img className="mx-2 my-4 w-12 " src={logo} alt="logo" />
      </motion.div>

      <div>
       
      <Button variant="gradient" color="gray" className="py-4 px-8 text-gray-300 text-xl font-thin ">My Resume</Button>
        </div>

      

     
    </nav>
  );
};
export default Navbar;
