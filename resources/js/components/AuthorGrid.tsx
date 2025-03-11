// resources/js/components/ItemGrid.tsx
import React, { useState, useEffect } from "react";
import AuthorItem from "./AuthorItem";
import { Author } from "../types/interfaces";

interface AuthorGridProps {
    authors: Author[];
    height?: number;
}

const AuthorGrid: React.FC<AuthorGridProps> = ({ authors, height }) => {
    const [selectedLetter, setSelectedLetter] = useState<string>("");
    const [filteredAuthors, setFilteredAuthors] = useState<Author[]>(authors);
    const [itemsToShow, setItemsToShow] = useState<number>(12);

    // Filter authors based on the selected letter
    useEffect(() => {
        if (selectedLetter) {
            const filtered = authors.filter((author) =>
                author.name
                    ?.toUpperCase()
                    .startsWith(selectedLetter.toUpperCase())
            );
            setFilteredAuthors(filtered);
        } else {
            setFilteredAuthors(authors);
        }
    }, [selectedLetter, authors]);

    const alphabet = Array.from(Array(26)).map((_, i) =>
        String.fromCharCode(i + 65)
    );

    return (
        <div className="literature-section p-5">
            <div className="alphabet-filter d-flex justify-content-center align-items-center mb-4">
                <div className="d-flex flex-wrap">
                    {alphabet.map((letter) => (
                        <button
                            key={letter}
                            onClick={() => setSelectedLetter(letter)}
                            className={`btn btn-outline-primary btn-sm m-1 ${
                                selectedLetter === letter ? "active" : ""
                            }`}
                        >
                            {letter}
                        </button>
                    ))}
                    <button
                        onClick={() => setSelectedLetter("")}
                        className="btn btn-outline-secondary m-1"
                    >
                        Tous
                    </button>
                </div>
            </div>

            <div className="row">
                {filteredAuthors.slice(0, itemsToShow).map((author, index) => (
                    <div key={author.id} className="col-md-2">
                        <AuthorItem
                            index={index}
                            author={author}
                            height={height}
                        />
                    </div>
                ))}
            </div>

            {filteredAuthors.length > itemsToShow && (
                <div className="text-center mt-4">
                    <button
                        className="btn btn-primary"
                        onClick={() => setItemsToShow(itemsToShow + 12)}
                    >
                        Voir plus
                    </button>
                </div>
            )}
        </div>
    );
};

export default AuthorGrid;
