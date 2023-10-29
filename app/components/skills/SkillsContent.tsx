import React from "react"
import { useLayoutEffect, useRef } from "react"
import { gsap } from "../../../utils/gsap"
import { skills } from "./resources/data/skill"
import sparkleIcon from "./resources/images/star-icon.svg"
import Image from "next/image"

const SkillsContent = () => {
  const skillsRef = useRef()

  useLayoutEffect(() => {
    const skillsPageToAnimate = skillsRef.current

    const context = gsap.context(() => {
      if (skillsPageToAnimate) {
        gsap.effects.mainRevealEffect(skillsPageToAnimate, {
          elementToAnimate: skillsPageToAnimate,
        })
      }
    })

    return () => context.revert()
  }, [])

  return (
    <>
      <div className="flex flex-row m-1">
        <Image src={sparkleIcon} className="sparkle-icon" width={30} height={30} alt={""} />
        <h1 className='p-2 text-black border-b border-black'>  03. SKILLS</h1>
      </div>
      <div className="flex flex-wrap gap-4" ref={skillsRef}>
        {skills.map((skill) => {
          return (
            <div key={skill.name} className="skill-div">
              <div className="skill-img-container">
                <Image src={skill.image} className="skill-img" alt={""} />
              </div>

              {skill.secondImage && (
                <Image
                  src={skill.secondImage}
                  className="skill-img second-skill-img"
                  alt={""}
                />
              )}
              {skill.name}
            </div>
          )
        })}
      </div>
    </>
  )
}

export default SkillsContent
