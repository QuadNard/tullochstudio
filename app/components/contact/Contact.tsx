"use client"

import React, { useState } from "react"
import LocalFonts from "next/font/local"
import SkillsContent from "../skills/SkillsContent"
import { motion } from "framer-motion"
import { BsArrowUpRight } from "react-icons/bs"
import * as Dialog from "@radix-ui/react-dialog"
import { X } from "lucide-react"
import { Experience } from "../../../types/index"
import ImageSlider from "../slider/ImageSlider"
import Link from "next/link"
import Image from "next/image"
import arrowIcon from "../../../public/imgs/arrow-right-dark.svg"

const TimeFont = LocalFonts({
  src: "../../../public/fonts/subFonts/new-york-small-regular.woff2",
})

const experienceData = [
  {
    id: 1,
    name: "Experience 1",
    date: "Date 1",
    place: "Place 1",
    description: "Description 1",
    images: ["/imgs/pc-3.webp", "/imgs/pc-4.webp"],
  },
  {
    id: 2,
    name: "Experience 2",
    date: "Date 2",
    place: "Place 2",
    description: "Description 2",
    images: ["/imgs/pc-3.webp", "/imgs/pc-4.webp"],
  },
  // Add more experience items as needed
]

const Contact = () => {
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
          <span className="text-2xl leading-tight text-[#171717] md:text-5xl">
            I design and{" "}
            <motion.span
              animate={{
                color: ["#7b1fa2", "#673ab7", "#f48fb1", "#a4dbe8"],
              }}
              transition={{ duration: 8, repeat: Infinity }}
              className=""
            >
              develop applications
            </motion.span>
          </span>
          <p className="pt-8">
            I'm a full-time frontend developer with a passion for great design
            and user experiences.
          </p>
          <Dialog.Root>
            <Dialog.Trigger className=" pt-8 text-[#6f6f6f]">
              <div className=" pt-8 text-[#6f6f6f]">
                <div className="item-center flex gap-4 hover:text-blue-300">
                  <p>Read more</p>
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
                  <Dialog.Title className="text-xl">Edit contact</Dialog.Title>
                  <Dialog.Close className="text-gray-400 hover:text-gray-500">
                    <X />
                  </Dialog.Close>
                </div>
                <div className="d-h-[27dvh] flex h-[27vh] gap-4">
                  <div className="experience-modal-top-part-left-div modal-left-side">
                    <div className="experience-modal-category-header-div">
                      EXPERIENCE
                    </div>
                    <div className="experience-modal-name-div">
                      {experience.name}
                    </div>
                    <div className="experience-modal-date-and-place-div">
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
                  <div className="experience-modal-bottom-part-right-div modal-right-side">
                    {experience.description}
                  </div>
                </div>
                <div className="experience-modal-bottom-buttons-div">
                  <button
                    onClick={openPrevExperience}
                    className="mr-2 rounded bg-blue-300 px-4 py-2 text-white hover:bg-blue-400"
                  >
                    Previous
                  </button>
                  <button
                    onClick={openNextExperience}
                    className="rounded bg-blue-300 px-4 py-2 text-white hover:bg-blue-400"
                  >
                    Next
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
