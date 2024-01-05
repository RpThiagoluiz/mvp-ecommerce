import { highLightImages } from '@/app/whitelabel/test'
import { Carousel } from './components/Carousel'
import { Header } from './components/Header'

export default function Home() {
    return (
        <>
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

            <Header text="Produto X" />
        </>
    )
}
