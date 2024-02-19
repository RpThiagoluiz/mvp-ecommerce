import { FaHeart } from 'react-icons/fa'

type HeaderProps = {
    text: string
}

export function Header({ text }: HeaderProps) {
    return (
        <div className="text-center bg-gradient-to-r from-blue-600 via-green-500 to-indigo-400 inline-block text-transparent bg-clip-text ">
            <h2 className="text-3xl md:text-5xl font-bold ">{text}</h2>
        </div>
    )
}
