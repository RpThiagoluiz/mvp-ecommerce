import { useState } from 'react'
import Link from 'next/link'
import { BsChevronDown } from 'react-icons/bs'
import { navBarMenu, type NavBarMenu } from '../constant/navBarMenu'

type Props = {
    handlerMobileMenu: () => void
}

export function MobileNavigation({ handlerMobileMenu }: Props) {
    const [showSubMenu, setShowSubMenu] = useState(false)

    const onClickSubMenu = () => {
        setShowSubMenu(false)
        handlerMobileMenu()
    }

    return (
        <ul className="flex flex-col md:hidden font-bold absolute top-[50px] left-0 w-1/2 h-[calc(100vh-50px)] bg-white border-t text-blue-600">
            {navBarMenu.map((el: NavBarMenu) =>
                !!el.subMenu ? (
                    <li
                        key={el.url}
                        className="cursor-pointer py-4 px-5 border-b flex flex-col relative"
                        onClick={() => setShowSubMenu(!showSubMenu)}
                    >
                        <div className="flex justify-between items-center">
                            {el.name}
                            <BsChevronDown size={14} />
                        </div>

                        {showSubMenu && (
                            <ul className="bg-black/[0.05] -mx-5 mt-4 -mb-4">
                                {el.subMenu.map((sub) => {
                                    return (
                                        <Link
                                            key={sub}
                                            href={`/`}
                                            onClick={onClickSubMenu}
                                        >
                                            <li className="py-4 px-8 border-t flex justify-between">
                                                {sub}
                                            </li>
                                        </Link>
                                    )
                                })}
                            </ul>
                        )}
                    </li>
                ) : (
                    <li className="py-4 px-5 border-b" key={el.url}>
                        <Link href={el.url} onClick={handlerMobileMenu}>
                            {el.name}
                        </Link>
                    </li>
                )
            )}
        </ul>
    )
}
