import { gsap } from "gsap"

import { ScrollTrigger } from "gsap/ScrollTrigger"
gsap.registerPlugin(ScrollTrigger)

type registerEffectConfig = {
  elementToAnimate: HTMLElement
  toogleActions?: string
}

gsap.registerEffect({
  name: "mainRevealEffect",
  effect: (targets, config: registerEffectConfig) => {
    return gsap.from(targets, {
      duration: 0.55,
      opacity: 0,
      ease: "power.out",
      scrollTrigger: {
        trigger: config.elementToAnimate,
        start: "top 90%",
        end: "bottom 10%",
        toggleActions: config.toogleActions
          ? config.toogleActions
          : "restart reverse restart reverse",
      },
    })
  },
})

export * from "gsap"
export * from "gsap/Draggable"
