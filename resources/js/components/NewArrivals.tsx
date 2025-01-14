import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import BookSlider from "./Slider";
import { Book } from "../types/interfaces";

const NewArrivals: React.FC<{ books: Book[] }> = ({ books }) => {
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
                className="text-center"
            >
                <BookSlider books={books} slideNumber={4} />
            </div>
        </div>
    );
};

export default NewArrivals;
