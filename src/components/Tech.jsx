import React from 'react'
import {style} from '../style'
import {BallCanvas} from "./canvas"
import {SectionWrapper} from "../hoc"
import {technologies} from "../constants"


const Tech = () => {
  return (
    <div className=" flex flex-wrap flex-row justify-center gap-10">
      {technologies.map((technology) => (
        <div className=' W-28 H-28' key={technology.name}>
          <BallCanvas icon={technology.icon}/>

        </div>
      ))}
    </div>
  )
}

export default SectionWrapper(Tech, "");