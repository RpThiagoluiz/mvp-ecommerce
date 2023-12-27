'use client'

import { FaChevronLeft, FaChevronRight } from 'react-icons/fa'
import Image, { type StaticImageData } from 'next/image'
import { useCarousel } from './hook/useCarousel'
import React from 'react'

export function Carousel({ slides }: { slides: StaticImageData[] }) {
    const carousel = useCarousel()

    return (
        <div className="overflow-hidden relative flex justify-center align-center  w-full  p-2">
            <div className={`flex transition ease-out duration-40`}>
                <Image
                    width={360}
                    height={360}
                    src={slides[carousel.currentImage]}
                    className="lg:h-[960px] sm:h-96  w-full 
                     rounded-box"
                    alt=""
                    onClick={() =>
                        console.log('TODO:', slides[carousel.currentImage])
                    }
                />
            </div>

            <div className="absolute top-0 h-full w-full justify-between items-center flex text-white px-10 text-3xl">
                <button onClick={carousel.previous}>
                    <FaChevronLeft />
                </button>
                <button onClick={carousel.next}>
                    <FaChevronRight />
                </button>
            </div>

            <div className="absolute bottom-0 py-4 flex justify-center gap-3 w-full">
                {slides.map((_, index) => {
                    return (
                        <div
                            onClick={() => {
                                carousel.selectImage(index)
                            }}
                            key={'circle' + index}
                            className={`rounded-full w-5 h-5 cursor-pointer  ${
                                index == carousel.currentImage
                                    ? 'bg-white'
                                    : 'bg-gray-500'
                            }`}
                        ></div>
                    )
                })}
            </div>
        </div>
    )
}
