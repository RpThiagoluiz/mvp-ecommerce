import { highLightImages } from '@/app/whitelabel/test'
import { useEffect, useState } from 'react'

const maxIndex = highLightImages.length - 1
const timeToChangeImage = 3500 //Milliseconds

export function useCarousel() {
    const [currentImage, setCurrentImage] = useState(0)

    useEffect(() => {
        const interval = setInterval(() => {
            currentImage === maxIndex && setCurrentImage(0)

            setCurrentImage((prevState) => prevState + 1)
        }, timeToChangeImage)
        return () => clearInterval(interval)
    }, [currentImage])

    const handlerManual = () => {
        const next = () => {
            currentImage === maxIndex && setCurrentImage(0)

            setCurrentImage((prevState) => prevState + 1)
        }

        const previous = () => {
            currentImage === 0 && setCurrentImage(maxIndex)

            setCurrentImage((prevState) => prevState - 1)
        }

        return {
            next,
            previous,
        }
    }

    return {
        handlerManual,
        currentImage,
    }
}
