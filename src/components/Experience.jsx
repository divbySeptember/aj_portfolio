import React from 'react'
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component'
import { motion } from 'framer-motion'
import 'react-vertical-timeline-component/style.min.css';
import { style } from '../style';
import {SectionWrapper} from '../hoc'
import {experiences } from '../constants'
import { textVariant } from '../utils/motion';



const ExperienceCard = ({experience}) => {
  return (
    <VerticalTimelineElement 
    contentStyle={{background: '#1d1836', color: '#fff'}}
    >
      {experience.date}

    </VerticalTimelineElement>
  )
}

const Experience = () => {
  return (
    <>
    <motion.div variants={textVariant()}>
      <p className={style.sectionSubText}>What I've been upto!</p>
      <h2 className={style.sectionHeadText}> Work Experience </h2>
    </motion.div>
    <div className='mt-20 flex flex-col'>
      <VerticalTimeline>
        {experiences.map((experience, index) => (
          <ExperienceCard  key={index} experience={experience}/>
        ))}
      </VerticalTimeline>

    </div>
    </>
  )
}

export default SectionWrapper(Experience, "experience")