import { useEffect, useState } from "react"
import { motion, AnimatePresence } from "framer-motion"

interface ImageSliderProps {
  images: string[]
}

const ImageSlider: React.FC<ImageSliderProps> = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length)
    }, 3000) // Change images every 3 seconds

    return () => clearInterval(interval)
  }, [images])

  return (
    <div>
      <AnimatePresence mode="wait">
        <div className=" max-h-[90vh] max-w-full">
          <motion.img
            key={currentIndex}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            src={images[currentIndex]}
            className={`inset-0 h-[250px] w-[400px] object-cover`}
            width={32}
            height={32}
            alt={`Image ${currentIndex + 1}`}
          />
        </div>
      </AnimatePresence>
    </div>
  )
}

export default ImageSlider
