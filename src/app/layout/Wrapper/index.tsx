type Wrapper = {
    children: React.ReactNode
    extraStyles?: React.ComponentProps<'div'>['className']
}

export function Wrapper({ children, extraStyles }: Wrapper) {
    return <div className={` h-[1850px]  ${extraStyles}`}>{children}</div>
}
