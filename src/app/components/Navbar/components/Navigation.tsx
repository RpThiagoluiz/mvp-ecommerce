import React, { useState } from 'react'
import { BsChevronDown } from 'react-icons/bs'
import Link from 'next/link'
import { navBarMenu, type NavBarMenu } from '../constant/navBarMenu'

export const Navigation = () => {
    const [showSubMenu, setShowSubMenu] = useState(false)
    const onMouseEnter = () => setShowSubMenu(true)
    const onMouseLeave = () => setShowSubMenu(false)

    return (
        <ul className="hidden md:flex items-center gap-8 font-medium text-black">
            {navBarMenu.map((el: NavBarMenu) =>
                !!el.subMenu ? (
                    <li
                        key={el.url}
                        onMouseEnter={onMouseEnter}
                        onMouseLeave={onMouseLeave}
                        className="cursor-pointer flex items-center gap-2 relative"
                    >
                        {el.name}
                        <BsChevronDown size={14} />
                        {showSubMenu && (
                            <ul className="bg-white absolute top-6 left-2 min-w-[250px] px-1 py-1 text-black shadow-lg">
                                {el.subMenu.map((sub) => (
                                    <Link href="/" key={sub}>
                                        <li className="h-12 flex justify-between items-center px-3 hover:bg-black/[0.03] rounded-md">
                                            {sub}
                                            <span className="opacity-70 text-sm px-2">
                                                ({sub})
                                            </span>
                                        </li>
                                    </Link>
                                ))}
                            </ul>
                        )}
                    </li>
                ) : (
                    <li key={el.url} className="cursor-pointer ">
                        {el.url && <Link href={el.url}>{el.name}</Link>}
                    </li>
                )
            )}
        </ul>
    )
}
