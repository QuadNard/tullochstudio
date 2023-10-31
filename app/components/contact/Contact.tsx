"use client"

import React, { useState } from "react"
import LocalFonts from "next/font/local"
import SkillsContent from "../skills/SkillsContent"
import { motion } from "framer-motion"
import * as Dialog from "@radix-ui/react-dialog"
import { X } from "lucide-react"
import ImageSlider from "../slider/ImageSlider"
import Image from "next/image"
import arrowIcon from "../../../public/imgs/arrow-right-dark.svg"
import { ChevronRight } from "lucide-react"
import { ChevronLeft } from "lucide-react"

const TimeFont = LocalFonts({
  src: "../../../public/fonts/subFonts/new-york-small-regular.woff2",
})

const experienceData = [
  {
    id: 1,
    name: "Journey into how I gained my unique skills, in the field of web deevelopment 🛠",
    date: "2021-07-01",
    place: "Local, PA",
    description: "My journey to becoming a software engineer has been a winding and fulfilling one. It all started with my passion for technology, as I began building custom computers from a young age. This hands-on experience laid the foundation for my understanding of hardware and software interactions. When I entered college, I decided to take my first engineering design class, and the experience was truly transformative. It ignited my curiosity and enthusiasm for the world of programming and problem-solving. Eager to learn more, I delved into textbooks and online resources, taking on the role of a self-taught developer. Through countless hours of coding, debugging, and seeking guidance from the vast online community, I honed my skills. This path, from tinkering with hardware to studying engineering and ultimately becoming a self-taught developer, equipped me with the knowledge and tenacity required to excel in my current position as a junior frontend software engineer. The diversity of my experiences has allowed me to approach challenges with a holistic perspective and a passion for continuous learning and innovation.",
    images: ["/imgs/my-custom-pc.jpg", "/imgs/design-class.jpg", "/imgs/books-of-study.jpg", "/imgs/system-design.jpg"],
  },
  {
    id: 2,
    name: "On my free Time 😊",
    date: "2023-01-01",
    place: "Los angeles, CA",
    description: "As a junior frontend software engineer, I find great inspiration and rejuvenation in attending art shows and exhibits after work. These creative and immersive experiences offer a refreshing break from the technical challenges of my job. Art has a unique way of expanding my perspective and sparking new ideas. Whether it's through the vibrant colors, intricate designs, or thought-provoking concepts, I often discover fresh design elements and innovative user interface ideas that I can incorporate into my work. Additionally, the exposure to different forms of artistic expression helps me develop a keen eye for aesthetics and user experience, enhancing my ability to create visually appealing and user-friendly software. So, while my work may revolve around code and pixels, my visits to art shows bring a much-needed infusion of creativity, helping me become a more well-rounded and inspired software engineer.",
    images: ["/imgs/art-show-1.jpg", "/imgs/art-show.jpg", "/imgs/art-show-2.jpg", "/imgs/art-show-3.jpg"],
  },
  // Add more experience items as needed
]

const Contact = (props: any) => {
  const [currentExperience, setCurrentExperience] = useState(0)

  const openNextExperience = () => {
    if (currentExperience < experienceData.length - 1) {
      setCurrentExperience(currentExperience + 1)
    }
  }

  const openPrevExperience = () => {
    if (currentExperience > 0) {
      setCurrentExperience(currentExperience - 1)
    }
  }

  const experience = experienceData[currentExperience]

  return (
    <div className="pageWrapper">
      <div className="boxSection">
        <div className={`p-6  text-left md:text-right ${TimeFont.className}`}>
          <p className="pb-3 text-sm text-[#6f6f6f]">
            {new Intl.DateTimeFormat("en-US", {
              year: "numeric",
              month: "long",
              day: "numeric",
            }).format(Date.now())}
          </p>
          <span
            className={`text-2xl leading-tight text-[#171717] md:text-3xl ${props.mediumFont.className}`}
          >
            General Expertise {" "}
            <motion.span
              animate={{
                color: ["#75d5b9", "#cbd5e1", "#67e8f9", "#5eead4"],
              }}
              transition={{ duration: 8, repeat: Infinity }}
              className=""
            >
              in the field of web development
            </motion.span>
          </span>
          <p className="pt-8">
            Web developer and lifelong curiosity seeker, working with the latest technologies.
          </p>
          <Dialog.Root>
            <Dialog.Trigger className=" pt-8 text-[#6f6f6f]">
              <div className=" pt-8 text-[#6f6f6f]">
                <div className="item-center flex gap-4 hover:text-blue-300">
                  <p>Learn more about my Specialty</p>
                  <div
                    className="ia group flex w-fit items-center gap-4"
                    aria-label="Button to about page"
                  >
                    <div className="flex h-8 w-8 items-center justify-center before:absolute before:h-8 before:w-8 before:rounded-full before:border before:border-crftd-gray before:transition-all before:duration-300 before:ease-out group-hover:before:h-12 group-hover:before:w-12 group-hover:before:border-0 group-hover:before:bg-[#75d5b9]">
                      <Image
                        src={arrowIcon}
                        alt="arrow right icon"
                        className="z-0 "
                      />
                    </div>
                  </div>
                </div>
              </div>
            </Dialog.Trigger>
            <Dialog.Portal>
              <Dialog.Overlay className="fixed inset-0 bg-black/50" />
              <Dialog.Content className="fixed left-1/2 top-1/2 w-full -translate-x-1/2 -translate-y-1/2 rounded-md bg-white p-8 text-gray-900 shadow md:w-2/5">
                <div className="flex items-center justify-between">
                  <Dialog.Title className="text-xl"></Dialog.Title>
                  <Dialog.Close className="text-gray-400 hover:text-gray-500">
                    <X />
                  </Dialog.Close>
                </div>
                <div className="d-h-[27dvh] flex h-[27vh] gap-4">
                  <div className="experience-modal-top-part-left-div modal-left-side">
                    <div className="experience-modal-name-div">
                      {experience.name}
                    </div>
                    <div
                      className={`experience-modal-date-and-place-div text-gray-400 ${props.h1Font.className}`}
                    >
                      <div className="experience-modal-date-div">
                        {experience.date}
                      </div>
                      <div className="experience-modal-place-div">
                        {experience.place}
                      </div>
                    </div>
                  </div>

                  <ImageSlider images={experience.images} />
                </div>
                <div className="experience-modal-bottom-part-div">
                  <div className="experience-modal-bottom-part-left-div modal-left-side">
                    In-depth overview -
                  </div>
                  <div
                    className={`experience-modal-bottom-part-right-div modal-right-side ${props.h1Font.className}`}
                  >
                    {experience.description}
                  </div>
                </div>
                <div className="experience-modal-bottom-buttons-div">
                  <button
                    onClick={openPrevExperience}
                    className="mr-2 flex rounded bg-transparent px-4 py-2 text-black hover:bg-blue-400"
                  >
                    <ChevronLeft className="" />
                    Previous
                  </button>
                  <button
                    onClick={openNextExperience}
                    className="flex rounded bg-transparent px-4 py-2 text-black hover:bg-blue-400"
                  >
                    Next
                    <ChevronRight />
                  </button>
                </div>
              </Dialog.Content>
            </Dialog.Portal>
          </Dialog.Root>
        </div>
      </div>
      <div className="boxSectionTwo">
        <SkillsContent />
      </div>
    </div>
  )
}

export default Contact
