"use client"
import { useState } from "react"
import { AnimatePresence, motion } from "framer-motion"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../accordion/Accordion"
import LocalFonts from "next/font/local"
import Link from "next/link"
import classNames from "classnames"
import BlurImage from "../blur/Blur-Image"
import { PROJECT_LIST } from "../../../utils/constants"
import arrowIcon from "../../../public/imgs/arrow-right-dark.svg"
import Image from "next/image"

const ProjectFont = LocalFonts({
  src: "../../../public/fonts/subFonts/new-york-small-regular.woff2",
})

const Projects = () => {
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
                      <feature.icon className="h-5 w-5 text-gray-500" />
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
                      <div className="flex flex-row p-3">
                        {feature.image.map((image, index) => (
                          <div key={index}>
                            <Image
                              className="p-1"
                              src={image}
                              alt={""}
                              width={36}
                              height={36}
                            />
                          </div>
                        ))}
                      </div>
                      <div className="flex space-x-3">
                        <Link
                          href={feature.siteUrl}
                          className="block max-w-fit rounded-full border border-black bg-transparent px-4 py-1.5 text-sm text-black transition-all hover:bg-[#75d5b9] "
                        >
                          View Site
                        </Link>
                        <Link
                          href={feature.siteUrl}
                          className="block max-w-fit rounded-full border border-black bg-transparent px-4 py-1.5 text-sm text-black transition-all hover:bg-[#75d5b9] "
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
        <div className="p-6 text-right md:text-left">
          <p className="pb-3 text-sm text-[#6f6f6f]">
            {new Intl.DateTimeFormat("en-US", {
              year: "numeric",
              month: "long",
              day: "numeric",
            }).format(Date.now())}
          </p>
          <span className="text-2xl leading-tight text-[#171717] md:text-5xl">
            Side{" "}
            <motion.span
              animate={{
                color: ["#7b1fa2", "#673ab7", "#f48fb1", "#a4dbe8"],
              }}
              transition={{ duration: 8, repeat: Infinity }}
              className=""
            >
              projects
            </motion.span>
          </span>
          <p className="pt-8">
            Check out a few of the main projects I have worked on, or some of my
            side projects on the left-hand side.
          </p>
          <div className=" pt-8 text-[#6f6f6f]">
            <div className="item-center flex gap-4 hover:text-blue-300">
              <p>Read more</p>
              <Link
                href="/"
                data-type="button"
                className="ia group flex w-fit items-center gap-4"
                aria-label="Button to about page"
              >
                <button
                  type="button"
                  className="flex h-8 w-8 items-center justify-center before:absolute before:h-8 before:w-8 before:rounded-full before:border before:border-crftd-gray before:transition-all before:duration-300 before:ease-out group-hover:before:h-12 group-hover:before:w-12 group-hover:before:border-0 group-hover:before:bg-[#75d5b9]"
                >
                  <Image
                    src={arrowIcon}
                    alt="arrow right icon"
                    className="z-0 "
                  />
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Projects
