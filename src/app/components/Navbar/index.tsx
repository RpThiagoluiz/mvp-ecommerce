'use client'

import { useState } from 'react'
import Image from 'next/image'
import { BsCart } from 'react-icons/bs'
import { BiMenuAltRight } from 'react-icons/bi'
import { VscChromeClose } from 'react-icons/vsc'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Navigation } from './components/Navigation'
import { MobileNavigation } from './components/MobileNavigation'
import { useControlNavBar } from './hook/useControlNavBar'
import { Logo } from 'whitelabel/test'

export function Navbar() {
    const [mobileMenu, setMobileMenu] = useState(false)

    const { showNavBar } = useControlNavBar({ mobileMenu })
    const currentPath = usePathname()

    const cartItems = [1, 2, 3, 5, 6, 7, 8]

    const handlerMobileMenu = () => {
        setMobileMenu((prevState) => !prevState)
    }

    return (
        <nav
            className={`w-full h-[50px] md:h-[80px] bg-zinc-100 flex items-center justify-between z-20 sticky top-0 transition-transform duration-300 ${showNavBar}`}
        >
            <div className="w-full px-5 md:px-10 mx-auto h-[60px] flex items-center justify-between ">
                <Link href="/">
                    <Image
                        src={Logo}
                        alt="LOGO CLIENTE"
                        width={40}
                        height={40}
                    />
                </Link>
                <Navigation />
                {mobileMenu && (
                    <MobileNavigation handlerMobileMenu={handlerMobileMenu} />
                )}

                <div
                    className={`flex items-center gap-2 ${
                        currentPath === '/cart'
                            ? 'text-blue-600'
                            : 'text-zinc-600'
                    }`}
                >
                    <Link
                        href="/cart"
                        className="w-8 md:w-12 h-8 md:h-12 rounded-full flex justify-center items-center hover:bg-black/[0.05] cursor-pointer relative"
                    >
                        <BsCart className="text-[15px] md:text-[20px]" />
                        {cartItems.length > 0 && (
                            <div className="h-[14px] md:h-[18px] min-w-[14px] md:min-w-[18px] rounded-full bg-red-600 absolute top-1 left-5 md:left-7 text-white text-[10px] md:text-[12px] flex justify-center items-center px-[2px] md:px-[5px]">
                                {cartItems.length}
                            </div>
                        )}
                    </Link>

                    <div className="w-8 md:w-12 h-8 md:h-12 rounded-full flex md:hidden justify-center items-center hover:bg-black/[0.05] cursor-pointer relative -mr-2">
                        {mobileMenu ? (
                            <VscChromeClose
                                className="text-[16px]"
                                onClick={() => setMobileMenu(false)}
                            />
                        ) : (
                            <BiMenuAltRight
                                className="text-[20px]"
                                onClick={() => setMobileMenu(true)}
                            />
                        )}
                    </div>
                </div>
            </div>
        </nav>
    )
}
