"use client"
import { useState } from "react"
import { AnimatePresence, motion } from "framer-motion"
import {   
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger } from '../accordion/Accordion'
import { BsArrowUpRight } from "react-icons/bs"
import LocalFonts from "next/font/local"
import Link from "next/link"
import classNames from "classnames"

const Projects = () => {
  return (
    <div className="pageWrapper">
      <div className="boxSection"></div>
      <div className="boxSectionTwo"></div>
    </div>
  )
}

export default Projects
