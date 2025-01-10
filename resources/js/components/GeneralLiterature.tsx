import React from "react";
import BookCover from "../assets/img/cover.png";
import BookItem from "./BookItem";

const GeneralLiterature: React.FC = () => {
    return (
        <div className="literature-section mt-5">
            <h4 className="sectionTitle">Littérature générale</h4>
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
                    Plus d'ouvrages jeunesse →
                </a>
            </div>
        </div>
    );
};

export default GeneralLiterature;
