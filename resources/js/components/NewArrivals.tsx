import React from "react";
import BookCover from "../assets/img/cover.png";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import BookItem from "./BookItem";

const NewArrivals: React.FC = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        dotsClass: "slick-dots custom-dots",
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                },
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                },
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                },
            },
        ],
    };

    return (
        <div className="nouveautes mb-5">
            <h4 className="sectionTitle">
                <span className="badge bg-danger">Nouveautés</span>
            </h4>
            <div
                style={{
                    padding: 100,
                    backgroundColor: "#f0f0f0",
                    paddingTop: 30,
                    paddingBottom: 100,
                }}
            >
                <Slider {...settings}>
                    {Array.from({ length: 4 }).map((_, index) => (
                        <div className="px-2">
                            <BookItem key={index} />
                        </div>
                    ))}
                </Slider>
            </div>
        </div>
    );
};

// Composants pour les flèches personnalisées
const SampleNextArrow = (props: any) => {
    const { onClick } = props;
    return (
        <div
            className="custom-arrow next-arrow"
            onClick={onClick}
            style={{
                position: "absolute",
                right: "-30px",
                top: "50%",
                transform: "translateY(-50%)",
                cursor: "pointer",
                zIndex: 2,
            }}
        >
            <i className="fas fa-arrow-right"></i>
        </div>
    );
};

const SamplePrevArrow = (props: any) => {
    const { onClick } = props;
    return (
        <div
            className="custom-arrow prev-arrow"
            onClick={onClick}
            style={{
                position: "absolute",
                left: "-30px",
                top: "50%",
                transform: "translateY(-50%)",
                cursor: "pointer",
                zIndex: 2,
            }}
        >
            <i className="fas fa-arrow-left"></i>
        </div>
    );
};

export default NewArrivals;
