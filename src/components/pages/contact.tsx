"use client"

import Image from "next/image"
import { useState } from "react"
import Modal from "../lib/modal"
import dynamic from "next/dynamic"
import markerShadow from "../../../public/imgs/location.png"
import relocationMarker from "../../../public/imgs/relocation.png"
import workMarker from "../../../public/imgs/workplace.png"
import { motion } from "framer-motion"
import { BsArrowUpRight } from "react-icons/bs"

const Map = dynamic(() => import("../lib/dynamic-maps"), { ssr: false })

const DEFAULT_CENTER = [38.907132, -77.036546]
const NEW_YORK_MARKER = [40.73061, -73.935242]
const AUSTIN_MARKER = [30.267153, -97.743057]
const SAN_FRANCISCO_MARKER = [37.774929, -122.419418]
const SEATTLE_MARKER = [47.606209, -122.332069]
const CALIFORNIA_MARKER = [36.778259, -119.417931]
const FLORIDA_MARKER = [27.664827, -81.515754]
const LOS_ANGELES_MARKER = [34.052235, -118.243683]

const ContactPage = () => {
  // Step 2: Create a state variable to track the modal's visibility
  const [isModalOpen, setIsModalOpen] = useState(false)

  // Step 3: Define a click event handler to open the modal
  const openModal = () => {
    setIsModalOpen(true)
  }

  let bodyContent = (
    <div className="flex flex-col gap-8">
      <div className="flex flex-row gap-4">
        <div className="before:absolute before:w-12 before:h-12 before:bg-orange-800 before:rounded-full before:blur-xl before:top-16 relative flex flex-col justify-around items-center w-20 h-24  md:w-44 md:h-44 rounded-2xl shadow-inner shadow-gray-50 bg-neutral-900 text-gray-50">
          <Image
            src={markerShadow}
            alt=""
            width={100}
            height={100}
            className="w-30 h-30"
          />
          <h1>hello</h1>
        </div>
        <div className="before:absolute before:w-12 before:h-12 before:bg-orange-800 before:rounded-full before:blur-xl before:top-16 relative flex flex-col justify-around items-center w-20 h-24  md:w-44 md:h-44 rounded-2xl shadow-inner shadow-gray-50 bg-neutral-900 text-gray-50">
          <Image
            src={relocationMarker}
            alt=""
            width={100}
            height={100}
            className="w-30 h-30"
          />
          <h1>hello</h1>
        </div>
        <div className="before:absolute before:w-12 before:h-12 before:bg-orange-800 before:rounded-full before:blur-xl before:top-16 relative flex flex-col justify-around items-center w-20 h-24  md:w-44 md:h-44 rounded-2xl shadow-inner shadow-gray-50 bg-neutral-900 text-gray-50">
          <Image
            src={workMarker}
            alt=""
            width={100}
            height={100}
            className="w-30 h-30"
          />
          <h1>hello</h1>
        </div>
      </div>
      <hr />
      <Map />
    </div>
  )

  return (
    <div className="pageWrapper">
      <div className="boxSection">
        <div className="relative flex w-80 flex-col rounded-xl bg-white bg-clip text-gray-700 shadow-md">
          <div
            onClick={openModal}
            className="relative mx-4 -mt-4  overflow-hidden rounded-xl h-60 bg-stone-700 bg-clip-border text-white shadow-lg shadow-stone-500/40 bg-gradient-to-r from-stone-600 to-stone-700 duration-300 hover:-translate-y-1 hover:scale-110 transition ease-in-out delay-150 cursor-pointer hover:border-blue-300  hover:border"
          >
            <Image
              src="/imgs/mapsanimation.gif"
              width={100}
              height={100}
              alt="Map"
              className="w-[288px] h-[240px]"
            />
          </div>
          {isModalOpen && (
            <Modal
              isOpen={isModalOpen}
              onClose={() => setIsModalOpen(false)}
              title="Filters"
              actionLabel="Search"
              body={bodyContent}
            />
          )}
          <div className="p-6">
            <h5 className="mb-2 block font-sans text-xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
              Tailwind card
            </h5>
            <p className="block font-sans text-base font-light leading-relaxed text-inherit antialiased">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
              felis ligula.
            </p>
          </div>
        </div>
      </div>
      <div className="boxSectionTwo">
        <div className="text-right md:text-left p-6">
          <p className="text-sm pb-3 text-[#6f6f6f]">
            {new Intl.DateTimeFormat("en-US", {
              year: "numeric",
              month: "long",
              day: "numeric",
            }).format(Date.now())}
          </p>
          <span className="text-5xl text-[#171717] leading-tight">
            The Power of Keys{" "}
            <motion.span
              animate={{
                color: ["#7b1fa2", "#673ab7", "#f48fb1", "#a4dbe8"],
              }}
              transition={{ duration: 8, repeat: Infinity }}
              className=""
            >
              in Framer Motion
            </motion.span>
          </span>
          <p className="pt-8">
            The mystical attribute in SVG paths is actually a series of small
            commands. In this guide, we'll take a look at each path command and
            how we can use them to draw icons.
          </p>
          <button className=" text-[#6f6f6f] pt-8">
            <div className="flex item-center gap-4 hover:text-blue-300">
              <h1>Read more</h1>
              <BsArrowUpRight />
            </div>
          </button>
        </div>
      </div>
    </div>
  )
}

export default ContactPage
