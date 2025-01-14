// resources/js/components/GeneralLiterature.tsx
import React from "react";
import ItemGrid from "./ItemGrid";
import { Book } from "../types/interfaces";

const SchoolBooks: React.FC<{ books: Book[] }> = ({ books }) => {
    return <ItemGrid title="Manuels Scolaires" items={books} itemsToShow={6} />;
};

export default SchoolBooks;
