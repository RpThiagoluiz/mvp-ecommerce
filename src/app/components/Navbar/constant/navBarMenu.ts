export const navBarMenu = [
    { name: 'Inicio', url: '/' },
    { name: 'Produtos', url: '/products' },
    { name: 'Contato', url: '/contact' },
] as const

export type NavBarMenu = {
    name: string
    url: string
    subMenu?: string[]
}
