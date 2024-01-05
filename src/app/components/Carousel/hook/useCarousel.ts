import { highLightImages } from '@/app/whitelabel/test'
import { useEffect, useState } from 'react'

const maxIndex = highLightImages.length - 1
const timeToChangeImage = 3500 //Milliseconds

export function useCarousel() {
    const [currentImage, setCurrentImage] = useState(0)

    useEffect(() => {
        const interval = setInterval(() => {
            if (currentImage === maxIndex) {
                setCurrentImage(0)
                return
            }

            setCurrentImage((prevState) => prevState + 1)
        }, timeToChangeImage)
        return () => clearInterval(interval)
    }, [currentImage])

    const next = () => {
        if (currentImage === maxIndex) {
            setCurrentImage(0)
            return
        }

        setCurrentImage((prevState) => prevState + 1)
    }

    const previous = () => {
        if (currentImage === 0) {
            setCurrentImage(maxIndex)
            return
        }

        setCurrentImage((prevState) => prevState - 1)
    }

    const selectImage = (index: number) => {
        setCurrentImage(index)
    }

    return {
        next,
        previous,
        selectImage,
        currentImage,
    }
}
