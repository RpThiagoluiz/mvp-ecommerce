import React from 'react'
import { Header } from '../components/Header'
import { StaticImageData } from 'next/image'
import { type Product, mockStore } from '../whitelabel/test'
import { Card } from '../components/Card'

const productHeroImages: { image: StaticImageData; id: string }[] =
    mockStore.products.map((product: Product) => ({
        image: product.photo[0],
        id: product.id,
    }))

export default function Product() {
    return (
        <div>
            <div className="divider">
                <Header text="Calças" />
            </div>
            <div className="m-[50px] md:mx-[50px] md:grid md:grid-cols-4 lg:grid-cols-5 flex flex-col gap-6">
                {React.Children.toArray(
                    productHeroImages.map((prod) => <Card {...prod} />)
                )}
            </div>
            <div className="divider">
                <Header text="Calças" />
            </div>
            <div className="m-[50px] md:mx-[50px] md:grid md:grid-cols-4 lg:grid-cols-5 flex flex-col gap-6">
                {React.Children.toArray(
                    productHeroImages.map((prod) => <Card {...prod} />)
                )}
            </div>
            <div className="divider">
                <Header text="Calças" />
            </div>
            <div className="m-[50px] md:mx-[50px] md:grid md:grid-cols-4 lg:grid-cols-5 flex flex-col gap-6">
                {React.Children.toArray(
                    productHeroImages.map((prod) => <Card {...prod} />)
                )}
            </div>
        </div>
    )
}
