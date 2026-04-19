import { useEffect, useState } from 'react'

function WorkSlider({ title, images }) {
    const [currentIndex, setCurrentIndex] = useState(0)

    useEffect(() => {
        if (!images || images.length === 0) return

        const interval = setInterval(() => {
            setCurrentIndex((prev) => (prev + 1) % images.length)
        }, 5000)

        return () => clearInterval(interval)
    }, [images])

    const goPrev = () => {
        setCurrentIndex((prev) => (prev - 1 + images.length) % images.length)
    }

    const goNext = () => {
        setCurrentIndex((prev) => (prev + 1) % images.length)
    }

    if (!images || images.length === 0) return null

    return (
        <section className="work-section">
            <h2 className="work-section-title">{title}</h2>

            <div className="work-slider">
                <button className="slider-btn" onClick={goPrev} aria-label="Imagen anterior">
                    ‹
                </button>

                <div className="slider-image-wrapper">
                    <div
                        className="slider-track"
                        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
                    >
                        {images.map((image, index) => (
                            <div className="slider-slide" key={index}>
                                <img
                                    src={image}
                                    alt={`${title} ${index + 1}`}
                                    className="slider-image"
                                />
                            </div>
                        ))}
                    </div>
                </div>

                <button className="slider-btn" onClick={goNext} aria-label="Imagen siguiente">
                    ›
                </button>
            </div>

            <p className="slider-counter">
                {currentIndex + 1} / {images.length}
            </p>
        </section>
    )
}

export default WorkSlider