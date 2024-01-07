import { highLightImages, photos } from '@/app/whitelabel/test'
import { Carousel } from './components/Carousel'
import { Header } from './components/Header'
import Image from 'next/image'
import { Card } from './components/Card'
import { products } from './whitelabel/test/assets'
import React from 'react'

export default function Home() {
    return (
        <div className="w-full">
            <div className="flex flex-col  md:flex-row m-2 py-2 gap-10">
                <div
                    className="basis-1/3 flex flex-col justify-center align-center gap-10 lg:h-[640px] sm:h-96 w-full
                     rounded-box "
                >
                    <h1 className="text-5xl md:text-8xl font-black  text-center bg-gradient-to-r from-blue-600 via-green-500 to-indigo-400 inline-block text-transparent bg-clip-text">
                        Novidades
                    </h1>
                    <h2 className="text-3xl md:text-5xl font-bold text-center bg-gradient-to-r from-blue-600 via-green-500 to-indigo-400 inline-block text-transparent bg-clip-text">
                        novas cores, novos estilos!
                    </h2>
                </div>
                <Carousel slides={highLightImages} />
            </div>

            <div className="divider">
                <Header text="Destaques" />
            </div>

            <div className="m-[50px] md:mx-[50px]  flex flex-col md:flex-row gap-8 h-full ">
                <Image
                    width={480}
                    height={480}
                    src={photos.photoOne}
                    className="object-cover  h-full w-full
                     rounded-box"
                    alt=""
                    // onClick={() =>
                    //     console.log('TODO:', 'photos.photoOne')
                    // }
                />

                <Image
                    width={360}
                    height={360}
                    src={photos.photoTwo}
                    className="object-cover rounded-box"
                    alt=""
                    // onClick={() =>
                    //     console.log('TODO:', 'photos.photoOne')
                    // }
                />
                <Image
                    width={360}
                    height={360}
                    src={photos.photoThree}
                    className="object-cover
                     rounded-box"
                    alt=""
                    // onClick={() =>
                    //     console.log('TODO:', 'photos.photoOne')
                    // }
                />
            </div>

            <div className="divider">
                <Header text="Calças" />
            </div>
            <div className="m-[50px] md:mx-[50px] md:grid md:grid-cols-4 lg:grid-cols-5 flex flex-col gap-6">
                {React.Children.toArray(
                    products.map((prod) => <Card image={prod} />)
                )}
            </div>
            <div className="divider">
                <Header text="Calças" />
            </div>
            <div className="m-[50px] md:mx-[50px] md:grid md:grid-cols-4 lg:grid-cols-5 flex flex-col gap-6">
                {React.Children.toArray(
                    products.map((prod) => <Card image={prod} />)
                )}
            </div>
            <div className="divider">
                <Header text="Calças" />
            </div>
            <div className="m-[50px] md:mx-[50px] md:grid md:grid-cols-4 lg:grid-cols-5 flex flex-col gap-6">
                {React.Children.toArray(
                    products.map((prod) => <Card image={prod} />)
                )}
            </div>
        </div>
    )
}
