import React from "react";
import ItemGrid from "./ItemGrid";
import { Book } from "../types/interfaces";
import CategoryLine from "./CategoryLine";

const GeneralLiterature: React.FC<{ books: Book[] }> = ({ books }) => {
    return (
        <>
            <CategoryLine
                title="Littérature Générale"
                items={books}
                itemsToShow={6}
            />
        </>
    );
};

export default GeneralLiterature;
