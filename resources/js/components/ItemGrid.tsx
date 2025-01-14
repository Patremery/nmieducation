// resources/js/components/ItemGrid.tsx
import React from "react";
import BookItem from "./BookItem";
import { Book } from "../types/interfaces";

interface ItemGridProps {
    title: string;
    items: Book[];
    itemsToShow?: number;
    height?: number;
}

const ItemGrid: React.FC<ItemGridProps> = ({
    title,
    items,
    itemsToShow = 6,
    height = 300,
}) => {
    return (
        <div className="literature-section">
            <h4 className="sectionTitle">{title}</h4>
            <hr />
            <div className="row mt-4">
                {items.slice(0, itemsToShow).map((book, index) => (
                    <div key={index} className="col-md-2">
                        <BookItem index={index} book={book} height={height} />
                    </div>
                ))}
            </div>
            <div className="text-end mt-3">
                <a href="#" className="text-primary">
                    Plus de {title} →
                </a>
            </div>
        </div>
    );
};

export default ItemGrid;
