export const navBarMenu = [
    { name: 'Home', url: '/' },
    { name: 'Contato', url: '/contact' },
    { name: 'Localização', url: '/location' },
] as const

export type NavBarMenu = {
    name: string
    url: string
    subMenu?: string[]
}
