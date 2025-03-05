import React from "react";
import BookItem from "./BookItem";
import Slider from "react-slick";
import { Book } from "../types/interfaces";

interface SliderProperties {
    slideNumber: number;
    books: Book[];
    imageHeight?: number;
}

const BookSlider = ({
    slideNumber,
    books,
    imageHeight = 300,
}: SliderProperties) => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: slideNumber,
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
    const getImageHeight = (category: string) => {
        if (category === "kids") {
            return 200;
        }
        return 270;
    };
    return (
        <>
            {books.length > 0 ? (
                <Slider {...settings}>
                    {books.map((book, index) => (
                        <div key={index} className="px-2">
                            <BookItem
                                index={index}
                                book={book}
                                height={getImageHeight(book.category)}
                            />
                        </div>
                    ))}
                </Slider>
            ) : (
                <div>Aucun livre trouvé</div>
            )}
        </>
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

export default BookSlider;
