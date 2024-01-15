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
        hero: StaticImageData
    }
    products: Product[]
}

const contact = {
    WhatsApp: '+5562981467685',
    Facebook: 'https://www.facebook.com/',
    Instagram: 'https://www.instagram.com/',
    location:
        'https://www.google.com.br/maps/place/SHOPPING+DEZOITO/@-16.6601026,-49.2600789,17z/data=!3m1!4b1!4m6!3m5!1s0x935ef3dee867b6e5:0x281a107b92823af0!8m2!3d-16.6601078!4d-49.257504!16s%2Fg%2F11ks6xr54j?entry=ttu',
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
