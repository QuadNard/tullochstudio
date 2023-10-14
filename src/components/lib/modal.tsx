"use client"

import React, { useCallback, useEffect, useState } from "react"
import { IoMdClose } from "react-icons/io"
import Button from "./button"
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
              <div className="relative p-6 flex-auto">{body}</div>
              <div className="flex flex-col gap-2 p-6">
                <div className="flex flex-col items-center gap-4 w-full">
                  <Link
                    href="https://www.joshwcomeau.com/css/designing-shadows/"
                    className="w-full"
                  >
                    <Button disabled={disabled} label={actionLabel} />
                  </Link>
                  <Link
                    href="https://www.joshwcomeau.com/css/designing-shadows/"
                    className="w-full"
                  >
                    <Button disabled={disabled} label={actionLabel} />
                  </Link>
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
