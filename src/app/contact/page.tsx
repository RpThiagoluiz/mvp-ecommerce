import Image from 'next/image'
import { contact, mockStore } from '../whitelabel/test'
import Link from 'next/link'
import { FaInstagram, FaWhatsapp } from 'react-icons/fa'
import { FaLocationDot } from 'react-icons/fa6'

export default function Page() {
    return (
        <div className="md:relative  md:mx-20 mx-2">
            <Image
                width={480}
                height={480}
                src={mockStore.images.hero}
                className="md:absolute md:-top-20 md:-left-40   w-[1020px]"
                alt=""
            />

            <section className="md:relative md:ml-auto mt-20  md:w-2/3 w-full grid grid-cols-2  gap-4 bg-zinc-200 p-5 rounded-lg shadow-2xl">
                <Link
                    href={`https://api.whatsapp.com/send?l=pt_br?phone=${contact.WhatsApp}&text=Ol%C3%A1%2C+....`}
                    target="_blank"
                    className="bg-white  mb-5 rounded-lg flex flex-row gap-5 items-center justify-center h-40 cursor-pointer"
                >
                    <FaWhatsapp className="text-[32px] text-green-500" />
                    <h5 className="text-green-500">Fale conosco</h5>
                </Link>

                <Link
                    href={`https://www.instagram.com/${contact.Instagram}`}
                    target="_blank"
                    className="bg-white  mb-5 rounded-lg flex flex-row gap-5 items-center justify-center h-40 cursor-pointer"
                >
                    <FaInstagram className="text-[32px] text-pink-500" />
                    <h5>Nos siga no Instagram</h5>
                </Link>

                <div className="flex flex-row items-center justify-evenly bg-white col-span-2 rounded-lg  h-40">
                    <Link
                        href={contact.location}
                        target="_blank"
                        className="flex flex-1 h-full flex-col items-center justify-center  gap-5  cursor-pointer"
                    >
                        <FaLocationDot className="text-[32px] items-center justify-center " />
                        <h5>Venha nos visitar</h5>
                    </Link>

                    <div className="flex flex-1 flex-col h-full items-left justify-center gap-2 ">
                        <p>Shopping 18, loja 33</p>
                        <p>Segunda a Sábado </p>
                        <p>das 8:00 as 17:00</p>
                    </div>
                </div>
            </section>
        </div>
    )
}
