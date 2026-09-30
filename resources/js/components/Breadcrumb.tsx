import React from "react";
import { Link } from "@inertiajs/react";
import { BreadcrumbItem } from "../types/interfaces";

interface BreadcrumbProps {
    items: BreadcrumbItem[];
    className?: string;
}

const Breadcrumb: React.FC<BreadcrumbProps> = ({ items, className }) => {
    if (items.length === 0) {
        return null;
    }

    return (
        <nav aria-label="breadcrumb" className={className}>
            <ol className="breadcrumb mb-0">
                {items.map((item, index) => {
                    const isLast = index === items.length - 1;

                    return (
                        <li
                            key={`${item.label}-${index}`}
                            className={`breadcrumb-item${
                                isLast ? " active" : ""
                            }`}
                            aria-current={isLast ? "page" : undefined}
                        >
                            {isLast || !item.href ? (
                                item.label
                            ) : (
                                <Link href={item.href}>{item.label}</Link>
                            )}
                        </li>
                    );
                })}
            </ol>
        </nav>
    );
};

export default Breadcrumb;
