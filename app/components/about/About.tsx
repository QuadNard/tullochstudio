"use client"

import { Suspense } from "react"
import { Canvas } from "@react-three/fiber"
import { OrbitControls } from "@react-three/drei"
import * as THREE from "three"
import { motion } from "framer-motion"
import { data } from "../../../lib/data"
import { Tubes } from "../brain/brain-tubes"
import * as Dialog from "@radix-ui/react-dialog"
import { X } from "lucide-react"
import Image from "next/image"
import { ArrowRight } from "lucide-react"
import sparkleIcon from "../skills/resources/images/star-icon.svg"
function createBrainCurvesFromPaths(): THREE.CatmullRomCurve3[] {
  const paths = data.economics[0].paths

  const brainCurves: THREE.CatmullRomCurve3[] = []
  paths.forEach((path) => {
    const points: THREE.Vector3[] = []
    for (let i = 0; i < path.length; i += 3) {
      points.push(new THREE.Vector3(path[i], path[i + 1], path[i + 2]))
    }
    const tempCurve = new THREE.CatmullRomCurve3(points)
    brainCurves.push(tempCurve)
  })

  return brainCurves
}

const curves = createBrainCurvesFromPaths()

const About = (props: any) => {
  return (
    <div className="pageWrapper">
      <div className="boxSection">
        <div className="text-bold p-6 text-left md:text-right">
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
            Interactive design-{" "}
            <motion.span
              animate={{
                color: ["#75d5b9", "#cbd5e1", "#67e8f9", "#5eead4"],
              }}
              transition={{ duration: 8, repeat: Infinity }}
              className=""
            >
              exploring immersive interfaces
            </motion.span>
          </span>
          <p className={`pt-8 ${props.h1Font.className}`}>
            As a developer, I challenge myself to think outside the box.
            focusing on sleek design, and the latest technologies.
          </p>
          <Dialog.Root>
            <Dialog.Trigger className=" pt-8 text-[#6f6f6f]">
              <div className="item-center flex gap-4 hover:text-blue-300">
                <p>See my thought process</p>
                <div
                  className="ia group flex w-fit items-center gap-4"
                  aria-label="Button to about page"
                >
                  <div className="flex h-8 w-8 items-center justify-center before:absolute before:h-8 before:w-8 before:rounded-full before:border before:border-crftd-gray before:transition-all before:duration-300 before:ease-out group-hover:before:h-12 group-hover:before:w-12 group-hover:before:border-0 group-hover:before:bg-[#75d5b9]">
                    <ArrowRight size={15} className="absolute z-0 text-black" />
                  </div>
                </div>
              </div>
            </Dialog.Trigger>
            <Dialog.Portal>
              <Dialog.Overlay className="fixed inset-0 bg-black/50" />
              <Dialog.Content className="fixed left-1/2 top-1/2 w-full max-w-md -translate-x-1/2 -translate-y-1/2 rounded-md bg-white p-8 text-gray-900 shadow">
                <div className="flex items-center justify-between">
                  <Dialog.Title className="m-1 border-b-2 text-xl">
                    More about me
                  </Dialog.Title>
                  <Dialog.Close className="text-gray-400 hover:text-gray-500">
                    <X />
                  </Dialog.Close>
                </div>
                <div className="flex flex-col items-center">
                  <Image
                    className="pointer-events-none mb-4 mt-2 select-none rounded-md"
                    src="/imgs/profile.jpg"
                    quality={100}
                    priority
                    width="150"
                    height="100"
                    alt="A picture from Mehdi"
                  />
                  <h1 className="select-none text-center text-lg font-medium text-neutral-200 md:text-xl lg:text-3xl">
                    Detail-obsessed Design Engineer
                  </h1>
                  <h2 className="select-none text-center text-base font-normal text-neutral-400 md:text-lg lg:text-xl">
                    @jkinardtulloch@gmail.com
                  </h2>
                  <p className="mt-4 overflow-y-auto text-start text-xs font-normal tracking-tight text-neutral-600 [text-wrap:balance]  md:max-h-36 md:text-lg">
                    <span className="text-blue-500">
                      {" "}
                      Hey, I'm Justin Tulloch 😄{" "}
                    </span>
                    my passion lies in creating software that is both beautiful
                    and functional. I’ve been designing for over 3 years and
                    recently started getting into programming. My thought
                    process revolves around the art of crafting elegant and
                    efficient solutions. I thrive on the thrill of creating
                    functional and user-friendly software that not only meets
                    the technical requirements but also delivers a great user
                    experience. My commitment to continuous learning and staying
                    up-to-date with the latest industry trends ensures that my
                    code is not just functional but also future-proof. For me,
                    coding is not just a profession but a fulfilling journey of
                    turning ideas into reality, one line of code at a time.
                  </p>
                </div>
              </Dialog.Content>
            </Dialog.Portal>
          </Dialog.Root>
        </div>
      </div>
      <div className="boxSectionTwo">
        <div className="m-1 flex flex-row">
          <Image
            src={sparkleIcon}
            className="sparkle-icon"
            width={30}
            height={30}
            alt={""}
          />
          <h1 className="border-b border-black p-2 text-black"> 01.-- ABOUT</h1>
        </div>
        <div className="h-[250px] md:h-[300px]">
          <Suspense fallback={null}>
            <Canvas camera={{ position: [0, 0, 0.2], near: 0.001, far: 5 }}>
              <ambientLight />
              <pointLight position={[10, 10, 10]} />
              <Tubes curves={curves} />
              <OrbitControls />
            </Canvas>
          </Suspense>
        </div>
      </div>
    </div>
  )
}

export default About
