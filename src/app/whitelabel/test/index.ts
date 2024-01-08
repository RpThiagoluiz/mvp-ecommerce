import Logo from './assets/Logo.png'
import { mockImages } from './mock'

import pantsFemaleHero from './mock/images/products/pantsFemale/hero.jpg'
import pantsFemaleImageTwo from './mock/images/products/pantsFemale/imageTwo.jpg'
import pantsFemaleImageThree from './mock/images/products/pantsFemale/imageThree.jpg'

import pantsFemaleTwoHero from './mock/images/products/pantsFemaleTwo/hero.jpg'
import pantsFemaleTwoImageTwo from './mock/images/products/pantsFemaleTwo/imageTwo.jpg'
import pantsFemaleTwoImageThree from './mock/images/products/pantsFemaleTwo/imageThree.jpg'

import pantsMaleHero from './mock/images/products/pantsMale/teste_01.jpg'
import pantsMaleImageTwo from './mock/images/products/pantsMale/teste_02.jpg'
import pantsMaleImageThree from './mock/images/products/pantsMale/teste_03.jpg'
import pantsMaleImageFour from './mock/images/products/pantsMale/teste_04.jpg'

import pantsMaleTwoHero from './mock/images/products/pantsMaleModel2/hero.jpg'
import pantsMaleTwoImageTwo from './mock/images/products/pantsMaleModel2/imageOne.jpg'
import pantsMaleTwoImageThree from './mock/images/products/pantsMaleModel2/imageTwo.jpg'
import pantsMaleTwoImageFour from './mock/images/products/pantsMaleModel2/imageThree.jpg'
import { StaticImageData } from 'next/image'

export type Product = {
    id: string
    name: string
    photo: StaticImageData[]
}

export type MockData = {
    images: {
        carouselImages: StaticImageData[]
        highlight: StaticImageData[]
    }
    products: Product[]
}

const contact = {
    WhatsApp: '+5562981467685',
    Facebook: 'thiago.luiz.5621',
    Instagram: 'thi.luizg',
}

const mockStore: MockData = {
    images: mockImages,
    products: [
        {
            id: 'uuidV4-001',
            name: 'Calça feminina infantil',
            photo: [
                pantsFemaleHero,
                pantsFemaleImageTwo,
                pantsFemaleImageThree,
            ],
        },

        {
            id: 'uuidV4-002',
            name: 'Calça feminina infantil',
            photo: [
                pantsFemaleTwoHero,
                pantsFemaleTwoImageTwo,
                pantsFemaleTwoImageThree,
            ],
        },

        {
            id: 'uuidV4-003',
            name: 'Calça masculina infantil',
            photo: [
                pantsMaleHero,
                pantsMaleImageTwo,
                pantsMaleImageThree,
                pantsMaleImageFour,
            ],
        },

        {
            id: 'uuidV4-004',
            name: 'Calça masculina infantil',
            photo: [
                pantsMaleTwoHero,
                pantsMaleTwoImageTwo,
                pantsMaleTwoImageThree,
                pantsMaleTwoImageFour,
            ],
        },
    ],
}

export { contact, Logo, mockStore }
