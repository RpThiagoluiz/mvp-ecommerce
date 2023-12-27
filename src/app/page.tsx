import { highLightImages } from '@/app/whitelabel/test'
import { Carousel } from './components/Carousel'
import { Header } from './components/Header'

export default function Home() {
    return (
        <>
            <Header text="Novidades" />
            <Carousel slides={highLightImages} />

            <Header text="Produto X" />
        </>
    )
}
