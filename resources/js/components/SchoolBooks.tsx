import React from "react";
import BookItem from "./BookItem";
import { Book } from "../types/interfaces";

const SchoolBooks: React.FC<{ books: Book[] }> = ({ books }) => {
    return (
        <div className="catalogue-section">
            <h4 className="sectionTitle">Manuels Scolaires</h4>
            <hr />
            <div className="row mt-4">
                {books.map((book, index) => (
                    <div className="col-md-2">
                        <BookItem index={index} book={book} />
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
