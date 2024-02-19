interface Props {
    params: { id: string }
}

export default function ProductDetails({ params }: Props) {
    return (
        <div>
            <h1>{params.id}</h1>
        </div>
    )
}
