import React from "react";

interface Slide {
    id: number;
    image: string;
    title: string;
    subtitle: string;
    slogan?: string;
}

interface HeroSliderProps {
    slides: Slide[];
}

const HeroSlider: React.FC<HeroSliderProps> = ({ slides }) => {
    return (
        <div className="position-relative mb-2">
            <div
                id="heroCarousel"
                className="carousel slide"
                data-bs-ride="carousel"
                style={{ height: "500px" }}
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
                <div className="carousel-inner h-100">
                    {slides.map((slide, index) => (
                        <div
                            key={slide.id}
                            className={`carousel-item h-100 ${
                                index === 0 ? "active" : ""
                            }`}
                        >
                            <div
                                className="hero-banner w-100 h-100"
                                style={{
                                    backgroundImage: `url(${slide.image})`,
                                    backgroundSize: "cover",
                                    backgroundPosition: "center",
                                }}
                            >
                                <div
                                    className="position-absolute top-50 start-0 translate-middle-y text-white"
                                    style={{ padding: 100 }}
                                >
                                    <p
                                        className="m-0 text-white"
                                        style={{ fontSize: 24 }}
                                    >
                                        {slide.title}
                                    </p>
                                    <h2 className="display-4 font-weight-600">
                                        {slide.subtitle}
                                    </h2>

                                    {slide.slogan && (
                                        <p
                                            className="display-5 text-white"
                                            style={{
                                                fontFamily:
                                                    "'Dancing Script', cursive",
                                                fontSize: "2.5rem",
                                            }}
                                        >
                                            {slide.slogan}
                                        </p>
                                    )}
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
                    <span className="visually-hidden">Précédent</span>
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
                    <span className="visually-hidden">Suivant</span>
                </button>
            </div>
        </div>
    );
};

export default HeroSlider;
