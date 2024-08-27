import { FaGithub, FaLink } from "react-icons/fa";
import { PROJECTS } from "../constants";
import Reveal from "./Reveal";
import { motion } from "framer-motion";

const Projects = () => {
  return (
    
    <div className="border-b border-gray-800 pb-4">
      
        <h2 className="my-20 text-center text-4xl text-gray-500">Projects</h2>
     

      <div>
        
        {PROJECTS.map((project, index) => (
          <div key={index} className="mb-8 flex flex-wrap lg:justify-center">
              <motion.div 
              whileInView={{opacity:1,y:0}}
              initial={{opacity:0, y: -100}} 
              transition={{duration:1}}
              viewport={{ once: true }}
              className="w-full lg:w-1/4">
                <img
                  src={project.image}
                  alt={project.title}
                  width={220}
                  height={200}
                  className="mb-6  rounded-lg"
                  />
              </motion.div>

              <div className="w-full max-w-xl lg:w-3/4 ">
                 
              <Reveal>
                <h6 className="mb-2 font-semibold text-gray-300">{project.title}</h6>
              </Reveal>

              <Reveal>
                <p className="mb-4 text-gray-400 ">{project.description}</p>
              </Reveal>

              <Reveal>
                <div className="flex flex-row my-4 gap-3 ">
                  <a
                    className=" px-5 py-1 rounded-lg text-blue-600 bg-gray-900 "
                    href={project.website}
                  >
                    <FaLink />{" "}
                  </a>

                  <a
                    className=" px-5 py-1 rounded-lg text-blue-600 bg-gray-900 "
                    href={project.gitrepo}
                    >
                    <FaGithub />{" "}
                  </a>
                </div>
              </Reveal>

              <Reveal>
                {project.technologies.map((tech, index) => (
                  <span
                    key={index}
                    className="mr-2 rounded bg-gray-900 px-2 py-1 text-sm font-medium text-purple-600"
                  >
                    {tech}
                  </span>
                ))}
              </Reveal>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
export default Projects;
