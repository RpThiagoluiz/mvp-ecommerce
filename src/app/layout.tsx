import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

import { Footer } from './components/Footer'
import { Navbar } from './components/Navbar'
import { Wrapper } from './layout/Wrapper'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
    title: 'Loja Teste # Catalogo',
    description: 'Calça infantis do 0 ao 16 anos',
}

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <html lang="pt-br">
            <body className={`${inter.className} bg-[#E5E5E5]`}>
                <Navbar />
                <Wrapper>{children}</Wrapper>
                <Footer />
            </body>
        </html>
    )
}
