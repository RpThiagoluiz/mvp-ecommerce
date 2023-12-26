'use client'
import { highLightImages } from '@/app/whitelabel/test'
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa'
import Image from 'next/image'
import { useCarousel } from './hook/useCarousel'

export function Carousel() {
    const { handlerManual, currentImage } = useCarousel()

    return (
        <div className='relative bg-red-500 py-2'>
            <Image
                width={400}
                height={400}
                src={highLightImages[currentImage]}
                className="h-dvh w-full  rounded-box self-center object-contain"
                alt=""
                onClick={() => console.log(highLightImages[currentImage])}
            />
            
            <button className="absolute bottom-10 left-20 rounded-full bg-gray-900 opacity-35 p-2" onClick={handlerManual().previous}>
                <FaChevronLeft />
            </button>
            <button className="absolute bottom-10 right-20  rounded-full bg-gray-900 opacity-35 p-2" onClick={handlerManual().next}>
                <FaChevronRight />
            </button>
           
           
        </div>
    )
}

// export function Carousel() {
//     return (
//         <div className="carousel carousel-center  p-5 mt-5 space-x-4 bg-neutral">
//             <div className="carousel-item">
//                 <Image
//                     width={350}
//                     height={350}
//                     src="https://daisyui.com/images/stock/photo-1559703248-dcaaec9fab78.jpg"
//                     className="rounded-box"
//                     alt=""
//                 />
//             </div>
//             <div className="carousel-item">
//                 <Image
//                     width={350}
//                     height={350}
//                     src="https://daisyui.com/images/stock/photo-1565098772267-60af42b81ef2.jpg"
//                     className="rounded-box"
//                     alt=""
//                 />
//             </div>
//             <div className="carousel-item">
//                 <Image
//                     width={350}
//                     height={350}
//                     src="https://daisyui.com/images/stock/photo-1572635148818-ef6fd45eb394.jpg"
//                     className="rounded-box"
//                     alt=""
//                 />
//             </div>
//             <div className="carousel-item">
//                 <Image
//                     width={350}
//                     height={350}
//                     src="https://daisyui.com/images/stock/photo-1494253109108-2e30c049369b.jpg"
//                     className="rounded-box"
//                     alt=""
//                 />
//             </div>
//             <div className="carousel-item">
//                 <Image
//                     width={350}
//                     height={350}
//                     src="https://daisyui.com/images/stock/photo-1550258987-190a2d41a8ba.jpg"
//                     className="rounded-box"
//                     alt=""
//                 />
//             </div>
//             <div className="carousel-item">
//                 <Image
//                     width={350}
//                     height={350}
//                     src="https://daisyui.com/images/stock/photo-1559181567-c3190ca9959b.jpg"
//                     className="rounded-box"
//                     alt=""
//                 />
//             </div>
//             <div className="carousel-item">
//                 <Image
//                     width={350}
//                     height={350}
//                     src="https://daisyui.com/images/stock/photo-1601004890684-d8cbf643f5f2.jpg"
//                     className="rounded-box"
//                     alt=""
//                 />
//             </div>
//         </div>
//     )
// }
