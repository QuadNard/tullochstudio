"use client"

import React, { useCallback, useEffect, useState } from "react"
import { IoMdClose } from "react-icons/io"
import Link from "next/link"

type Props = {
  isOpen?: boolean
  title?: string
  body?: React.ReactElement
  footer?: React.ReactElement
  actionLabel: string
  disabled?: boolean
  onClose?: () => void
}

function Modal({
  isOpen,
  title,
  body,
  actionLabel,
  footer,
  onClose,
  disabled,
}: Props) {
  const [showModal, setShowModal] = useState(isOpen)

  useEffect(() => {
    setShowModal(isOpen)
  }, [isOpen, onClose])

  const handleClose = useCallback(() => {
    setShowModal(false)
    setTimeout(() => {}, 300)
  }, [disabled])

  return (
    <>
      <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none bg-neutral-800/70">
        <div className="relative w-full md:w-4/6 lg:w-3/6 xl:w-2/5 my-6 mx-auto h-full lg:h-auto md:h-auto">
          <div
            className={`translate duration-300 h-full ${
              showModal ? "translate-y-0" : "translate-y-full"
            } ${showModal ? "opacity-100" : "opacity-0"}`}
          >
            <div className="translate h-full lg:h-auto md:h-auto border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
               <div className="flex items-center p-6 rounded-t justify-center relative border-b-[1px]">
                <button
                  className="p-1 border-0 hover:opacity-70 transition absolute left-9"
                  onClick={onClose}
                >
                  <IoMdClose size={18} />
                </button>
                <div className="text-lg font-semibold">{title}</div>
              </div>
              <div className="relative p-6 flex-auto">{body}d</div>
              <div className="flex flex-col gap-2 p-6">
                <div className="flex w-full">
                  <div className='space-x-8'>
                      <Link
                    href="https://www.joshwcomeau.com/css/designing-shadows/"
                    className="w-full"
                  >
                    <button className="inline-flex items-center w-full px-5 py-3 mb-3 mr-1 text-base font-semibold text-white no-underline align-middle bg-blue-600 border border-transparent border-solid rounded-md cursor-pointer select-none sm:mb-0 sm:w-auto hover:bg-blue-700 hover:border-blue-700 hover:text-white focus-within:bg-blue-700 focus-within:border-blue-700">
                    Button Text
                    <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
                    </button> 
                  </Link>
                  <Link
                    href="https://www.joshwcomeau.com/css/designing-shadows/"
                    className="w-full"
                  >
                      <button className="inline-flex items-center w-full px-5 py-3 mb-3 mr-1 text-base font-semibold text-white no-underline align-middle bg-blue-600 border border-transparent border-solid rounded-md cursor-pointer select-none sm:mb-0 sm:w-auto hover:bg-blue-700 hover:border-blue-700 hover:text-white focus-within:bg-blue-700 focus-within:border-blue-700">
                    Button Text
                    <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
                    </button> 
                  </Link>
                  </div>
                </div>
                {footer}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}



export default Modal
