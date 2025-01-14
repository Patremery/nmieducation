// resources/js/components/ItemSection.tsx
import React from "react";
import ItemGrid from "./ItemGrid";
import { Book } from "../types/interfaces";

interface CategoryLineProps {
    title: string;
    items: Book[];
    itemsToShow?: number;
    height?: number;
}

const CategoryLine: React.FC<CategoryLineProps> = ({
    title,
    items,
    itemsToShow = 6,
    height = 300,
}) => {
    return (
        <div className="item-section">
            <h4 className="sectionTitle">{title}</h4>
            <hr />
            <ItemGrid items={items} itemsToShow={itemsToShow} height={height} />
            <div className="text-end mt-3">
                <a href="#" className="text-primary">
                    Plus de {title} →
                </a>
            </div>
        </div>
    );
};

export default CategoryLine;
