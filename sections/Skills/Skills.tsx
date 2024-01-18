import styles from "./Skills.module.css"
import React from 'react'

interface SkillProps {
    title: string,
}



const Skills = () => {
  return (
    <div className="flex flex-col items-center w-full gap-8">
        <h1 className="text-center max-w-[75%] text-3xl md:text-6xl font-medium">My <span className="text-mainBlue">Skills & Technologies</span></h1>
        <div className="w-full flex flex-wrap  gap-8 justify-evenly p-8 bg-wallpaper1">

            <div className={`${styles.glass} ${"w-80 h-full px-8 py-4"}`}>
            <h1 className="text-xl font-bold">Front End</h1>
            </div>
            <div className={`${styles.glass} ${"w-80 h-full px-8 py-4"}`}>
            <h1 className="text-xl font-bold">Back End</h1>
            </div>
            <div className={`${styles.glass} ${"w-80 h-full px-8 py-4"}`}>
            <h1 className="text-xl font-bold">Other</h1>
            </div>
        </div>
    </div>
  )
}

export default Skills