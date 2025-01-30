import React from "react";

interface Slide {
    id: number;
    image: string;
    title: string;
    subtitle: string;
}

interface HeroSliderProps {
    slides: Slide[];
}

const HeroSlider: React.FC<HeroSliderProps> = ({ slides }) => {
    return (
        <div className="position-relative">
            <div
                id="heroCarousel"
                className="carousel slide"
                data-bs-ride="carousel"
            >
                {/* Carousel Indicators */}
                <div className="carousel-indicators">
                    {slides.map((slide, index) => (
                        <button
                            key={slide.id}
                            type="button"
                            data-bs-target="#heroCarousel"
                            data-bs-slide-to={index}
                            className={index === 0 ? "active" : ""}
                            aria-current={index === 0 ? "true" : "false"}
                            aria-label={`Slide ${index + 1}`}
                        ></button>
                    ))}
                </div>

                {/* Carousel Items */}
                <div className="carousel-inner">
                    {slides.map((slide, index) => (
                        <div
                            key={slide.id}
                            className={`carousel-item ${
                                index === 0 ? "active" : ""
                            }`}
                        >
                            <div
                                className="hero-banner"
                                style={{
                                    height: "400px",
                                    backgroundImage: `url(${slide.image})`,
                                    backgroundSize: "cover",
                                    backgroundPosition: "center",
                                }}
                            >
                                <div className="position-absolute top-50 start-0 translate-middle-y p-5 text-white">
                                    <h1 className="display-4">
                                        {slide.title}
                                        <br />
                                        {slide.subtitle}
                                    </h1>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Carousel Controls */}
                <button
                    className="carousel-control-prev"
                    type="button"
                    data-bs-target="#heroCarousel"
                    data-bs-slide="prev"
                >
                    <span
                        className="carousel-control-prev-icon"
                        aria-hidden="true"
                    ></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button
                    className="carousel-control-next"
                    type="button"
                    data-bs-target="#heroCarousel"
                    data-bs-slide="next"
                >
                    <span
                        className="carousel-control-next-icon"
                        aria-hidden="true"
                    ></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
        </div>
    );
};

export default HeroSlider;
