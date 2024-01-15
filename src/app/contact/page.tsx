'use client'

import Image from 'next/image'
import { contact, mockStore } from '../whitelabel/test'
import Link from 'next/link'
import { FaInstagram, FaWhatsapp } from 'react-icons/fa'
import { FaLocationDot } from 'react-icons/fa6'
import {
    DotsBottomLeft,
    DotsTopRight,
    SemicircleTopRight,
} from './components/DotsSvg'
import { useCallback, useState } from 'react'
import { formattedWhatsAppMsg } from 'utils/formattedWhatsAppMsg'

const FORM_INITIAL_VALUES = {
    name: '',
    message:
        'Cheguei até vocês pelo site e gostaria de conhecer mais sobre a sua loja.',
}

const whatsApp = `https://api.whatsapp.com/send?l=pt_br?phone=${contact.WhatsApp}&text=`
const whatsAppDirect = `https://api.whatsapp.com/send?l=pt_br?phone=${
    contact.WhatsApp
}&text=${formattedWhatsAppMsg({ message: FORM_INITIAL_VALUES.message })}`

export default function Contact() {
    const [formValues, setFormValues] = useState<{
        name: string
        message: string
    }>(FORM_INITIAL_VALUES)

    const disabledButton = !formValues.message.length || !formValues.name.length

    const handleSubmit = useCallback(() => {
        const whatsAppLink = whatsApp.concat(
            formattedWhatsAppMsg({
                message: formValues.message,
                name: formValues.name,
            })
        )

        setFormValues(FORM_INITIAL_VALUES)
        window.open(whatsAppLink, '_blank')
    }, [formValues.message, formValues.name])

    return (
        <>
            {/* contact start */}
            <div className="max-w-screen font-poppins overflow-hidden ">
                <section className="relative z-10 bg-gradient-to-br from-blue-100  py-20  sm:px-20 sm:py-40 ">
                    <div className="container mx-auto">
                        <div className="-mx-4 flex flex-wrap lg:justify-between">
                            <div className="w-full px-4 lg:w-1/2 xl:w-6/12">
                                <div className="mb-12 max-w-[570px] lg:mb-0 pl-4">
                                    <span className="text-blue-600 mb-4 block text-base font-semibold">
                                        Fale conosco
                                    </span>
                                    <h2 className="text-black mb-6 text-[32px] font-bold uppercase sm:text-[40px] lg:text-[36px] xl:text-[40px]">
                                        Entre em contato
                                    </h2>
                                    <p className="text-gray-700 mb-9 text-base leading-relaxed">
                                        Atendimento: Segunda a sábado das 09:00
                                        as 17:00
                                    </p>

                                    <Link
                                        href={contact.location}
                                        target="_blank"
                                        className="rounded-lg cursor-pointer mb-8 flex flex-row gap-5 items-center w-full max-w-[370px] "
                                    >
                                        <FaLocationDot className=" text-[32px] text-orange-500 " />

                                        <h5 className="text-orange-500">
                                            Shopping 18, loja 33. Goiânia - GO
                                        </h5>
                                    </Link>

                                    <Link
                                        href={whatsAppDirect}
                                        target="_blank"
                                        className="rounded-lg cursor-pointer mb-8 flex flex-row gap-5 items-center w-full max-w-[370px]"
                                    >
                                        <FaWhatsapp className="text-[32px] text-green-500" />
                                        <h5 className="text-green-500">
                                            WhatsApp
                                        </h5>
                                    </Link>

                                    <Link
                                        href={contact.Instagram}
                                        target="_blank"
                                        className="rounded-lg cursor-pointer mb-8 flex flex-row gap-5 items-center w-full max-w-[370px] "
                                    >
                                        <FaInstagram className="text-[32px] text-pink-500" />
                                        <h5 className="text-pink-500">
                                            Instagram
                                        </h5>
                                    </Link>
                                </div>
                            </div>

                            <div className="w-full px-4 lg:w-1/2 xl:w-5/12">
                                <div className="relative rounded-lg bg-white p-8 shadow-lg sm:p-12">
                                    <form
                                        onSubmit={(event) => {
                                            event.preventDefault()
                                            handleSubmit()
                                        }}
                                    >
                                        <div className="mb-6">
                                            <input
                                                type="text"
                                                placeholder="Seu nome"
                                                className="text-body-color border-[f0f0f0] focus:border-primary w-full rounded border py-3 px-[14px] text-base outline-none focus-visible:shadow-none"
                                                value={formValues.name}
                                                onChange={(event) =>
                                                    setFormValues(
                                                        (prevState) => ({
                                                            ...prevState,
                                                            name: event.target
                                                                .value,
                                                        })
                                                    )
                                                }
                                            />
                                        </div>
                                        <div className="mb-6">
                                            <textarea
                                                maxLength={30}
                                                placeholder="Mensagem"
                                                className="text-body-color border-[f0f0f0] focus:border-primary w-full resize-none rounded border py-3 px-[14px] text-base outline-none focus-visible:shadow-none"
                                                value={formValues.message}
                                                onChange={(event) =>
                                                    setFormValues(
                                                        (prevState) => ({
                                                            ...prevState,
                                                            message:
                                                                event.target
                                                                    .value,
                                                        })
                                                    )
                                                }
                                            ></textarea>
                                        </div>

                                        <button
                                            type="submit"
                                            className={`bg-primary border-primary w-full rounded border p-3 text-white transition-all ease-in-out hover:bg-opacity-90 disabled:bg-gray-300 disabled:cursor-not-allowed disabled:opacity-55 disabled:border-none flex itens-center justify-center gap-5`}
                                            disabled={disabledButton}
                                        >
                                            Enviar
                                        </button>
                                    </form>
                                    <div>
                                        <SemicircleTopRight />
                                        <DotsTopRight />
                                        <DotsBottomLeft />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
            {/* contact start end */}
            <div className="w-[70%] h-[2px] bg-gradient-to-r from-blue-400 to-violet-500"></div>
            {/* Location */}
            <div className="flex justify-center mt-20" id="maps">
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15289.340293818097!2d-49.27552844458006!3d-16.660107800000006!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x935ef3dee867b6e5%3A0x281a107b92823af0!2sSHOPPING%20DEZOITO!5e0!3m2!1spt-BR!2sbr!4v1705348088065!5m2!1spt-BR!2sbr"
                    allowFullScreen={false}
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    className="w-screen sm:mx-36 mx-10 h-[30rem]"
                ></iframe>
            </div>
        </>
    )

    // return (
    //     <div className="md:relative  md:mx-20 mx-2">
    //         <Image
    //             width={480}
    //             height={480}
    //             src={mockStore.images.hero}
    //             className="md:absolute md:-top-20 md:-left-40   w-[1020px]"
    //             alt=""
    //         />

    //         <section className="md:relative md:ml-auto mt-20  md:w-2/3 w-full grid grid-cols-2  gap-4 bg-zinc-200 p-5 rounded-lg shadow-2xl">
    //             <Link
    //                 href={`https://api.whatsapp.com/send?l=pt_br?phone=${contact.WhatsApp}&text=Ol%C3%A1%2C+....`}
    //                 target="_blank"
    //                 className="bg-white  mb-5 rounded-lg flex flex-row gap-5 items-center justify-center h-40 cursor-pointer"
    //             >
    //                 <FaWhatsapp className="text-[32px] text-green-500" />
    //                 <h5 className="text-green-500">Fale conosco</h5>
    //             </Link>

    //             <Link
    //                 href={`https://www.instagram.com/${contact.Instagram}`}
    //                 target="_blank"
    //                 className="bg-white  mb-5 rounded-lg flex flex-row gap-5 items-center justify-center h-40 cursor-pointer"
    //             >
    //                 <FaInstagram className="text-[32px] text-pink-500" />
    //                 <h5>Nos siga no Instagram</h5>
    //             </Link>

    //             <div className="flex flex-row items-center justify-evenly bg-white col-span-2 rounded-lg  h-40">
    //                 <Link
    //                     href={contact.location}
    //                     target="_blank"
    //                     className="flex flex-1 h-full flex-col items-center justify-center  gap-5  cursor-pointer"
    //                 >
    //                     <FaLocationDot className="text-[32px] items-center justify-center " />
    //                     <h5>Venha nos visitar</h5>
    //                 </Link>

    //                 <div className="flex flex-1 flex-col h-full items-left justify-center gap-2 ">
    //                     <p>Shopping 18, loja 33</p>
    //                     <p>Segunda a Sábado </p>
    //                     <p>das 8:00 as 17:00</p>
    //                 </div>
    //             </div>
    //         </section>
    //     </div>
    // )
}
