// resources/js/components/GeneralLiterature.tsx
import React from "react";
import ItemGrid from "./ItemGrid";
import { Book } from "../types/interfaces";
import CategoryLine from "./CategoryLine";
interface SchoolBooksProps {
    books: Book[];
    title?: string;
}

const SchoolBooks: React.FC<SchoolBooksProps> = ({ books, title }) => {
    return (
        <>
            <CategoryLine
                title="Manuels Scolaires"
                items={books}
                itemsToShow={6}
            />
        </>
    );
};

export default SchoolBooks;
