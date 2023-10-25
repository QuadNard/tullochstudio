"use client"

import { Suspense, useMemo, useRef } from "react"
import { Canvas, ReactThreeFiber, extend, useFrame } from "@react-three/fiber"
import { OrbitControls, shaderMaterial } from "@react-three/drei"
import * as THREE from "three"
import { motion } from "framer-motion"
import { data } from "../../../lib/data"
import { Tubes } from "../brain/brain-tubes"

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

const About = () => {
  return (
    <div className="pageWrapper">
      <div className="boxSection">
        <div className={`text-bold  p-6 text-left md:text-right `}>
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
        </div>
      </div>
      <div className="boxSectionTwo">
        <div className="h-[250px] md:h-[300px]">
          <Canvas camera={{ position: [0, 0, 0.2], near: 0.001, far: 5 }}>
            <ambientLight />
            <pointLight position={[10, 10, 10]} />
            <Tubes curves={curves} />
            <OrbitControls />
          </Canvas>
        </div>
      </div>
    </div>
  )
}

export default About
