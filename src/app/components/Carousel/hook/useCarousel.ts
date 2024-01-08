import { useEffect, useState } from 'react'

const timeToChangeImage = 3500 //Milliseconds

export function useCarousel(carouselLength: number) {
    const maxIndex = carouselLength - 1

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
    }, [currentImage, maxIndex])

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
