import { FaNodeJs, FaPython } from "react-icons/fa";
import { RiReactjsLine } from "react-icons/ri";
import { SiExpress, SiMongodb } from "react-icons/si";
import { TbBrandThreejs } from "react-icons/tb";
import { animate, motion } from "framer-motion";
import { GiDuration } from "react-icons/gi";

const iconVariants = (duration) => ({
  initial: { y: -10 },
  animate: {
    y: [10, -10],
    transition: {
      duration: duration,
      ease: "linear",
      repeat: Infinity,
      repeatType: "reverse",
    },
  },
});

const Technologies = () => {
  return (
    <div className="border-b border-gray-700  pb-24">
      <h1 className="my-20 text-center text-4xl text-gray-500">Technologies</h1>
      <motion.div 
      whileInView={{opacity:1,y:0}}
       initial={{opacity:0, y: -100}} 
       transition={{duration:1}} 
       viewport={{ once: true }}
       className="flex flex-wrap items-center justify-center gap-6 ">
        <motion.div 
        variants={iconVariants(1)} 
        initial="initial"
        animate="animate" className="rounded-2xl border-4 border-gray-500  p-4">
          <RiReactjsLine className="text-7xl text-cyan-500" />
        </motion.div>

        <motion.div 
        variants={iconVariants(3)} 
        initial="initial"
        animate="animate" className="rounded-2xl border-4 border-gray-500  p-4">
          <SiMongodb className="text-7xl text-green-600" />
        </motion.div>

        <motion.div 
        variants={iconVariants(4)} 
        initial="initial"
        animate="animate" className="rounded-2xl border-4 border-gray-500  p-4">
          <SiExpress className="text-7xl text-gray-500 " />
        </motion.div>

        <motion.div
        variants={iconVariants(5)} 
        initial="initial"
        animate="animate"  className="rounded-2xl border-4 border-gray-500  p-4">
          <FaNodeJs className="text-7xl text-green-600" />
        </motion.div>

        <motion.div 
        variants={iconVariants(1)} 
        initial="initial"
        animate="animate" className="rounded-2xl border-4 border-gray-500  p-4">
          <FaPython className="text-7xl text-yellow-500" />
        </motion.div>

        <motion.div
        variants={iconVariants(2)} 
        initial="initial"
        animate="animate"  className="rounded-2xl border-4 border-gray-500  p-4">
          <TbBrandThreejs className="text-7xl text-white" />
        </motion.div>
      </motion.div>
    </div>
  );
};
export default Technologies;
