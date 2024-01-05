import { FaHeart } from 'react-icons/fa'

type HeaderProps = {
    text: string
}

export function Header({ text }: HeaderProps) {
    return (
        <div className="h-20 mt-5 mb-5 flex flex-row gap-5 items-center justify-center bg-[#FCA311]">
            <FaHeart className="text-pink-500 animate-ping" />
            <h2 className="text-stone-500 font-semibold">{text}</h2>
            <FaHeart className="text-pink-500 animate-ping" />
        </div>
    )
}
