"use client"
import { useState } from "react"
import { AnimatePresence, motion } from "framer-motion"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../lib/accordion"
import { BsArrowUpRight } from "react-icons/bs"
import { PROJECT_LIST } from "@/utils/constants"
import LocalFonts from "next/font/local"
import Link from "next/link"
import BlurImage from "../lib/blur-image"
import classNames from "classnames"

const ProjectFont = LocalFonts({
  src: "../../fonts/subFont/new-york-small-regular.woff2",
})

const ProjectPage = () => {
  const [activeFeature, setActiveFeature] = useState(0)

  return (
    <div className="pageWrapper">
      <div className="boxSection">
        <div className="my-10 w-full overflow-hidden rounded-xl border border-gray-200 bg-white shadow-[inset_10px_-50px_94px_0_rgb(199,199,199,0.2)] backdrop-blur lg:h-[600px]">
          <div className="grid grid-cols-1 gap-10 p-5 lg:grid-cols-1">
            <Accordion
              type="single"
              defaultValue="giphy-app"
              onValueChange={(e) => {
                setActiveFeature(
                  PROJECT_LIST.findIndex(({ slug }) => slug === e)
                )
              }}
            >
              {PROJECT_LIST.map((feature, idx) => (
                <AccordionItem key={idx} value={feature.slug}>
                  <AccordionTrigger>
                    <div className="flex items-center space-x-3 p-3">
                      <feature.icon className="w-5 h-5 text-gray-500" />
                      <h3
                        className={`text-base text-gray-600 ${ProjectFont.className}`}
                      >
                        {feature.accordionTitle}
                      </h3>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent>
                    <div className="p-3">
                      <p
                        className={`mb-4 text-sm text-gray-500 ${ProjectFont.className}`}
                      >
                        {feature.description}
                      </p>
                      <div className="flex space-x-3">
                        <Link
                          href={feature.siteUrl}
                          className="block max-w-fit rounded-full border border-black bg-black px-4 py-1.5 text-sm text-white transition-all hover:bg-white hover:text-black"
                        >
                          View Site
                        </Link>
                        <Link
                          href={feature.siteUrl}
                          className="block max-w-fit rounded-full border border-black bg-black px-4 py-1.5 text-sm text-white transition-all hover:bg-white hover:text-black"
                        >
                          View Site
                        </Link>
                      </div>
                    </div>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
            <div className="">
              <AnimatePresence mode="wait">
                {PROJECT_LIST.map((feature, index) => {
                  if (index === activeFeature) {
                    return (
                      <motion.div
                        key={index}
                        initial={{ y: 10, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        exit={{ y: -10, opacity: 0 }}
                        transition={{
                          duration: 0.15,
                          stiffness: 300,
                          damping: 30,
                        }}
                        className="relative -mb-6 aspect-[1735/990] w-full overflow-hidden rounded-t-2xl shadow-2xl lg:mt-3 lg:h-[300px] lg:w-[300px]"
                      >
                        <BlurImage
                          src={feature.imageUrls}
                          placeholder="blur"
                          blurDataURL={feature.thumbnailBlurHash}
                          alt={feature.slug}
                          className={classNames(
                            "absolute h-full object-cover",
                            feature.slug === "branded-links" &&
                              "object-left-top"
                          )}
                          width={1735}
                          height={990}
                        />
                      </motion.div>
                    )
                  }
                })}
              </AnimatePresence>
            </div>
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
          <span className="md:text-5xl text-2xl text-[#171717] leading-tight">
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

export default ProjectPage
