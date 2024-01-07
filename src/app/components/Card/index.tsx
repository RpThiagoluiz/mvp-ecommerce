'use client'
import { FaEye } from 'react-icons/fa'
import { StaticImport } from 'next/dist/shared/lib/get-img-props'
import Image from 'next/image'
;<FaEye />
type CardProps = {
    image: string | StaticImport
}

export function Card({ image }: CardProps) {
    return (
        <div className="group relative w-full h-full p-8 flex flex-col gap-5 shadow-xl md:hover:scale-110 transition-all ease-in-out delay-350 border border-zinc-300  rounded-box justify-between">
            <FaEye
                className="text-[25px] text-cyan-500  md:hidden  group-hover:inline-flex"
                onClick={() => console.log('Details', image)}
            />
            <Image
                width={480}
                height={480}
                src={image}
                className="
              h-full  md:w-full w-3/4 group-hover:opacity-50 cursor-pointer"
                alt=""
                onClick={() => console.log('TODO:', 'photos.photoOne')}
            />
            <div>
                <p>Calça jeans infantil</p>
                <span className="font-bold mr-2">R$ 39,90</span>
                <span className="line-through text-xs">R$ 69,90</span>
            </div>
            <button
                className="md:absolute md:bottom-20 md:left-5 md:right-5 md:hidden  group-hover:inline-flex p-3 items-center justify-center mb-2 me-2 text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-blue-600  to-indigo-400 group-hover:from-cyan-500 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-cyan-200 dark:focus:ring-cyan-800"
                onClick={() => {
                    console.log('navigate to product')
                }}
            >
                <span className="">Adicionar a sacola</span>
            </button>
        </div>
    )
}
