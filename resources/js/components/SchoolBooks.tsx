import React from "react";
import BookCover from "../assets/img/cover.png";
import BookItem from "./BookItem";

const SchoolBooks: React.FC = () => {
    return (
        <div className="catalogue-section">
            <h4 className="sectionTitle">Manuels Scolaires</h4>
            <hr />
            <div className="row mt-4">
                {Array.from({ length: 6 }).map((_, index) => (
                    <div className="col-md-2">
                        <BookItem key={index} />
                    </div>
                ))}
            </div>
            <div className="text-end mt-3">
                <a href="#" className="text-primary">
                    Plus de Manuels Scolaires →
                </a>
            </div>
        </div>
    );
};

export default SchoolBooks;
