// resources/js/components/ItemSection.tsx
import React from "react";
import ItemGrid from "./ItemGrid";
import { Book } from "../types/interfaces";
import { Link } from "@inertiajs/react";

interface CategoryLineProps {
    title: string;
    code: string;
    items: Book[];
    itemsToShow?: number;
    height?: number;
}

const CategoryLine: React.FC<CategoryLineProps> = ({
    title,
    code,
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
                <Link
                    href={`/catalogue/category/${code}`}
                    className="text-primary"
                >
                    Plus de {title} →
                </Link>
            </div>
        </div>
    );
};

export default CategoryLine;
