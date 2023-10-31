import React from "react"
import Link from "next/link"
import { socials } from "../../../utils/constants"
import Image from "next/image"

type SocialsType = {
  img: string 
  link: string
}

function Socials({ img, link }: SocialsType) {
  return (
    <>
      <Link href={link}>
        <div className="rounded-full border border-neutral-900 bg-black/40 p-4 duration-200 ease-in-out hover:scale-105 active:-rotate-[360deg]">
          <Image src={img} alt="img" width={36} height={36} />
        </div>
      </Link>
    </>
  )
}

const Footer = (props: any) => {
  return (
    <div className="flex flex-col items-center justify-center pt-[70px]">
      <div className="flex flex-wrap justify-between">
        <div
          className={`mt-[50px] flex-1 text-[55px] ${props.mediumFont.className}`}
        >
          Tullochstudio
        </div>
        <div className="mt-[100px] flex min-h-[370px] min-w-[270px] flex-1 flex-col justify-between">
          <div className="relative flex flex-col p-8">
            <div className="border-b border-black">
              <h1 className={`p-3 ${props.h1Font.className}`}>
                {`Let's get in touch -`}{" "}
              </h1>
            </div>
            <div className="flex items-center justify-center pt-4">
              <div className="grid grid-cols-2 place-items-center gap-2 md:grid-cols-4">
                {socials.map((social, index) => (
                  <Socials key={index} img={social.img} link={social.url} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer

/* 
<button className="border-2 border-[#ffe8e1] font-bold w-[150px] bg-black h-[50px] my-3 flex items-center justify-center rounded-full cursor-pointer relative overflow-hidden transition-all duration-500 ease-in-out shadow-md hover:scale-105 hover:shadow-lg before:absolute before:top-0 before:-right-full before:w-full before:h-full before:bg-[#ffe8e1] before:transition-all before:duration-300 before:ease-in-out before:z-[-1] before:rounded-xl hover:before:right-0 text-[#fff]">
                  Button
</button>
*/
