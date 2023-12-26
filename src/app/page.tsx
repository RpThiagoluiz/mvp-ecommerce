import { Carousel } from './components/Carousel'
import { FaHeart } from 'react-icons/fa'

export default function Home() {
    return (
        <>
            <div className="h-20 mt-5 flex flex-row gap-5 items-center justify-center">
                <FaHeart className="text-pink-500 animate-ping" />
                <h2 className="text-stone-500 font-semibold">Novidades</h2>
                <FaHeart className="text-pink-500 animate-ping" />
            </div>
            <Carousel />
        </>
    )
}
