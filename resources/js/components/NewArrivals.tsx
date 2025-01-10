import React from "react";
import BookCover from "../assets/img/cover.png";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const NewArrivals: React.FC = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
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
            <h4>
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
                    <div className="px-2">
                        <div className="card">
                            <img
                                src={BookCover}
                                className="card-img-top"
                                alt="Livre"
                            />
                            <div className="card-body">
                                <h5>Le prix de la bêtise</h5>
                                <p className="text-muted">David Enghewing</p>
                            </div>
                        </div>
                    </div>
                    <div className="px-2">
                        <div className="card">
                            <img
                                src={BookCover}
                                className="card-img-top"
                                alt="Livre"
                            />
                            <div className="card-body">
                                <h5>Le prix de la bêtise</h5>
                                <p className="text-muted">David Enghewing</p>
                            </div>
                        </div>
                    </div>
                    <div className="px-2">
                        <div className="card">
                            <img
                                src={BookCover}
                                className="card-img-top"
                                alt="Livre"
                            />
                            <div className="card-body">
                                <h5>Le prix de la bêtise</h5>
                                <p className="text-muted">David Enghewing</p>
                            </div>
                        </div>
                    </div>
                    <div className="px-2">
                        <div className="card">
                            <img
                                src={BookCover}
                                className="card-img-top"
                                alt="Livre"
                            />
                            <div className="card-body">
                                <h5>Le prix de la bêtise</h5>
                                <p className="text-muted">David Enghewing</p>
                            </div>
                        </div>
                    </div>
                </Slider>
            </div>
        </div>
    );
};

export default NewArrivals;
