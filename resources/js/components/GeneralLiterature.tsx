import React from "react";
import BookItem from "./BookItem";
import { Book } from "../types/interfaces";

const GeneralLiterature: React.FC<{ books: Book[] }> = ({ books }) => {
    return (
        <div className="literature-section mt-5">
            <h4 className="sectionTitle">Littérature générale</h4>
            <hr />
            <div className="row mt-4">
                {books.slice(0, 6).map((book, index) => (
                    <div className="col-md-2">
                        <BookItem index={index} book={book} />
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
