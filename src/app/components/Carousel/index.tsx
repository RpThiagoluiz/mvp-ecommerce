import Image from 'next/image'

export function Carousel() {
    return (
        <div className="carousel carousel-center  p-5 mt-5 space-x-4 bg-neutral">
            <div className="carousel-item">
                <Image
                    width={350}
                    height={350}
                    src="https://daisyui.com/images/stock/photo-1559703248-dcaaec9fab78.jpg"
                    className="rounded-box"
                    alt=""
                />
            </div>
            <div className="carousel-item">
                <Image
                    width={350}
                    height={350}
                    src="https://daisyui.com/images/stock/photo-1565098772267-60af42b81ef2.jpg"
                    className="rounded-box"
                    alt=""
                />
            </div>
            <div className="carousel-item">
                <Image
                    width={350}
                    height={350}
                    src="https://daisyui.com/images/stock/photo-1572635148818-ef6fd45eb394.jpg"
                    className="rounded-box"
                    alt=""
                />
            </div>
            <div className="carousel-item">
                <Image
                    width={350}
                    height={350}
                    src="https://daisyui.com/images/stock/photo-1494253109108-2e30c049369b.jpg"
                    className="rounded-box"
                    alt=""
                />
            </div>
            <div className="carousel-item">
                <Image
                    width={350}
                    height={350}
                    src="https://daisyui.com/images/stock/photo-1550258987-190a2d41a8ba.jpg"
                    className="rounded-box"
                    alt=""
                />
            </div>
            <div className="carousel-item">
                <Image
                    width={350}
                    height={350}
                    src="https://daisyui.com/images/stock/photo-1559181567-c3190ca9959b.jpg"
                    className="rounded-box"
                    alt=""
                />
            </div>
            <div className="carousel-item">
                <Image
                    width={350}
                    height={350}
                    src="https://daisyui.com/images/stock/photo-1601004890684-d8cbf643f5f2.jpg"
                    className="rounded-box"
                    alt=""
                />
            </div>
        </div>
    )
}
