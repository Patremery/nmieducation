import React from "react";
import ItemGrid from "./ItemGrid";
import { Book } from "../types/interfaces";

const KidsBooks: React.FC<{ books: Book[] }> = ({ books }) => {
    return (
        <ItemGrid
            title="Littérature Jeunesse"
            items={books}
            itemsToShow={6}
            height={150}
        />
    );
};

export default KidsBooks;
