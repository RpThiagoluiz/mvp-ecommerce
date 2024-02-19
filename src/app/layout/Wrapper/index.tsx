type Wrapper = {
    children: React.ReactNode
    extraStyles?: React.ComponentProps<'div'>['className']
}

export function Wrapper({ children, extraStyles }: Wrapper) {
    return <div className={` min-h-[940px]   ${extraStyles}`}>{children}</div>
}
