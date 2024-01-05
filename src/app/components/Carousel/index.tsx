'use client'

import { FaChevronLeft, FaChevronRight } from 'react-icons/fa'
import Image, { type StaticImageData } from 'next/image'
import { useCarousel } from './hook/useCarousel'
import React from 'react'

export function Carousel({
    slides,
    extraStyles,
}: {
    slides: StaticImageData[]
    extraStyles?: React.ComponentProps<'div'>['className']
}) {
    const carousel = useCarousel()

    return (
        <div
            className={`overflow-hidden relative flex justify-center align-center w-full  ${extraStyles}`}
        >
            <div className={`flex transition ease-out duration-40`}>
                <Image
                    width={360}
                    height={360}
                    src={slides[carousel.currentImage]}
                    className="lg:h-[640px] sm:h-96 w-full 
                     rounded-box"
                    alt=""
                    onClick={() =>
                        console.log('TODO:', slides[carousel.currentImage])
                    }
                />
            </div>

            <div className="absolute top-0 h-full w-5/6 justify-between items-center flex text-2xl">
                <button
                    onClick={carousel.previous}
                    className="text-white bg-zinc-200 rounded-full opacity-65 p-3"
                >
                    <FaChevronLeft />
                </button>
                <button
                    onClick={carousel.next}
                    className="text-white bg-zinc-200 rounded-full opacity-65 p-3"
                >
                    <FaChevronRight />
                </button>
            </div>

            <div className="absolute bottom-0 py-4 flex justify-center gap-3 w-full opacity-65">
                {slides.map((_, index) => {
                    return (
                        <div
                            onClick={() => {
                                carousel.selectImage(index)
                            }}
                            key={'circle' + index}
                            className={`rounded-full w-5 h-5 cursor-pointer  ${
                                index == carousel.currentImage
                                    ? 'bg-green-500'
                                    : 'bg-gray-500'
                            }`}
                        ></div>
                    )
                })}
            </div>
        </div>
    )
}
