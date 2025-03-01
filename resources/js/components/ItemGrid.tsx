import React from "react";
import BookItem from "./BookItem";
import { Book } from "../types/interfaces";

interface ItemGridProps {
    title?: string;
    items: Book[];
    itemsToShow?: number;
    height?: number;
}

const ItemGrid: React.FC<ItemGridProps> = ({
    items,
    itemsToShow = 6,
    height = 250,
}) => {
    return (
        <div className="literature-section">
            <div className="row row-cols-2 row-cols-sm-3 row-cols-md-4 row-cols-lg-6 g-3">
                {items.slice(0, itemsToShow).map((book, index) => (
                    <div key={index} className="col">
                        <BookItem index={index} book={book} height={height} />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ItemGrid;
