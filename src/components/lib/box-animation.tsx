"use client"

import classNames from "classnames"
import { CSSProperties, useState } from "react"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { AnimatedText } from "./text-animation"

type AnimationBoxProps = {
  once?: boolean
}

export const IntroBoxAnimation = ({ once }: AnimationBoxProps) => {
  const ref = useRef(null)
  const isInView = useInView(ref, { amount: 0.5, once })
  const [lines, setLines] = useState([
    { direction: "to bottom", duration: 2800, size: 20, id: "refbottom" },
    { direction: "to right", duration: 3000, size: 15, id: "refRight" },
  ])

  const removeLine = (id: string) => {
    setLines((prev) => prev.filter((line) => line.id !== id))
  }

  return (
    <div ref={ref} className="[perspective:2000px]">
      <div
        className={classNames(
          " relative transition-transform rounded-lg backdrop-blur-md backdrop-saturate-0 bg-opacity-60 border border-opacity-25",
          isInView ? "transform-none" : "[transform:rotateX(25deg)]",
          "before:absolute before:w-full before:h-full before:top-0 before:left-0 before:bg-hero-glow before:[filter:blur(120px)] before:opacity-0",
          isInView && "before:animate-image-glow"
        )}
      >
        <div className="absolute top-0 left-0 z-20 h-full w-full">
          {lines.map((line, idx) => (
            <span
              onAnimationEnd={() => removeLine(line.id)}
              key={idx}
              style={
                {
                  "--direction": line.direction,
                  "--size": line.size,
                  "--animation-duration": `${line.duration}ms`,
                } as CSSProperties
              }
              className={classNames(
                "absolute top-0 block h-[1px] w-[10rem] bg-glow-lines",
                line.direction === "to right" &&
                  `left-0 h-[1px] w-[calc(var(--size)*1rem)] animate-glow-line-horizontal`,
                line.direction === "to bottom" &&
                  `right-0 h-[calc(var(--size)*1rem)] w-[1px] animate-glow-line-vertical`
              )}
            />
          ))}
        </div>
        <div
          className={classNames(
            "relative z-10 transition-opacity delay-[600ms]",
            isInView ? "opacity-100" : "opacity-0"
          )}
        >
          <div className="rounded-lg bg-opacity-96 backdrop-blur-0 backdrop-saturate-200 border-transparent-white bg-[#e5e7eb] bg-opacity-96 border border-opacity-25">
            <div className="flex space-x-3 p-2">
              <p>
                <span className="text-base text-purple-600 dark:text-fuchsia-500">
                  →
                </span>
                <span className="mx-1 text-green-600 dark:text-green-400">
                  ~/workspace
                </span>
                <span>$</span>
              </p>
              <p className="typing mt-0.5 flex-1 pl-2">
                npx create-nx-workspace
              </p>
            </div>
            <div className="border-t-[1px] border-gray-500"> </div>
            <div className="flex flex-col  p-12">
              <AnimatedText
                text={[
                  "⚙️ Creating Nx workspace",
                  "⚙️ Creating Nx workspace",
                  "⚙️ Creating Nx workspace",
                ]}
                className="text-md"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
