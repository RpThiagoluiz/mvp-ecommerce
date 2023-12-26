import Link from 'next/link'
import { FaInstagram, FaWhatsapp, FaFacebook } from 'react-icons/fa'
import { socialMedia } from 'whitelabel/test'

export function Footer() {
    return (
        <footer className="flex flex-col  w-full p-1 pt-5 mt-5 bg-cyan-50">
            <Link
                href={`https://api.whatsapp.com/send?l=pt_br?phone=${socialMedia.WhatsApp}&text=Ol%C3%A1%2C+....`}
                target="_blank"
                className="flex flex-row gap-5 items-center card justify-center h-20 bg-base-300"
            >
                <FaWhatsapp className="text-[32px] text-green-500" />
                <h5>Fale conosco!</h5>
            </Link>
            <div className="divider text-gray-500">Redes Sociais</div>

            <div className="flex flex-row gap-5 h-32 items-center justify-center bg-inherit">
                <Link
                    href={`https://www.instagram.com/${socialMedia.Instagram}`}
                    target="_blank"
                >
                    <FaInstagram className="text-[32px] text-pink-500" />
                </Link>

                <Link
                    href={`https://www.facebook.com/${socialMedia.Facebook}`}
                    target="_blank"
                >
                    <FaFacebook className="text-[32px] text-blue-500" />
                </Link>
            </div>
        </footer>
    )
}
