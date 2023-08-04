import { Tilt } from 'react-tilt';
import { motion } from 'framer-motion'

import {style} from '../style'
import { github } from '../assets'
import { projects } from '../constants'
import { fadeIn, textVariant } from '../utils/motion'
import { SectionWrapper } from '../hoc'



const  ProjectCard = ({ index, name, description, tags, image, source_code_link }) => {
  return (
    <motion.div variants={fadeIn("up", "spring", index * 0.5)} >
      {name}
    </motion.div>

  )
}

const Works = () => {
  const subHead = "My Work";
  const mainHead = "Projects";
   return (
    <>
    <motion.div variants={textVariant()}>
      <p className={style.sectionSubText}>{subHead}</p>
      <h2 className={style.sectionHeadText}> {mainHead} </h2>
    </motion.div>
    <div className="w-full flex" >
      <motion.p 
      variants={fadeIn("", "", 0.1, 1)}
      className='mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]'
      >
        Following projcts showacses my skills and experience through real-world examples of my work.
        Each project is briefly describded with links to code repositiories and live demos in it. 
        It reflects my ability to solve complex problems, work with different tech stacks, and manage projects effectivly.

      </motion.p>
    </div>
    <div className='mt-20 flex flex-wrap gap-7'>
      {projects.map((project, index) => (
        <ProjectCard 
        key={`project-${index}`} 
        index={index}
        {...project}
        />
      ))}
    </div>
    </>
  )
}

export default SectionWrapper(Works, "")