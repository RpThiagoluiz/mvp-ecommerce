import Image from 'next/image'

export function NavBar() {
    return (
        <div className="navbar bg-zinc-50">
            <div className="flex-1">
                <Image src="/Logo.png" width={43} height={43} alt="wp-dsad" />
                {/* <a className="btn btn-ghost text-xl">SUA lOGO</a> */}
            </div>
            <ul className="menu menu-horizontal px-1">
                <li className="text-primary">
                    <a className="hover:!text-primary">Home</a>
                </li>
                <li className="text-primary">
                    <a>Contato</a>
                </li>
                <li className="text-primary">
                    <a>Localização</a>
                </li>
            </ul>
        </div>
    )
}
