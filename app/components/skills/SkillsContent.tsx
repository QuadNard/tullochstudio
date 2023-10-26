import React from "react"
import { useLayoutEffect, useRef } from "react"
import { gsap } from "../../../utils/gsap"
import { getRandom } from "../../../utils/utils"
import { skills } from "./resources/data/skill"
import sparkleIcon from "./resources/images/sparkle-icon.svg"
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
      <h1 className="p-2 text-black">02.1. SKILLS</h1>
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
