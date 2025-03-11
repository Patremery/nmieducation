import React, { useEffect } from "react";
import { Carousel } from "bootstrap";
interface PageItemsGridProps {
    items: any[];
}

const PageItemsGrid = ({ items }: PageItemsGridProps) => {
    useEffect(() => {
        const carouselElement = document.getElementById("teamCarousel");
        if (carouselElement) {
            new Carousel(carouselElement);
        }
    }, []);

    return (
        <div
            id="teamCarousel"
            className="carousel slide"
            data-bs-ride="carousel"
        >
            {/* Carousel Items */}
            <div className="carousel-inner">
                {Array.from({ length: Math.ceil(items.length / 4) }).map(
                    (_, groupIndex) => (
                        <div
                            key={groupIndex}
                            className={`carousel-item ${
                                groupIndex === 0 ? "active" : ""
                            }`}
                        >
                            <div className="d-flex justify-content-center gap-4">
                                {items
                                    .slice(groupIndex * 4, (groupIndex + 1) * 4)
                                    .map((item) => (
                                        <div
                                            key={item.id}
                                            className="text-center"
                                        >
                                            <img
                                                src={item.image}
                                                alt={item.title}
                                                className="rounded-circle mb-3"
                                                style={{
                                                    width: "150px",
                                                    height: "150px",
                                                    objectFit: "cover",

                                                    borderColor: "grey",
                                                    borderWidth: "5px",
                                                    borderStyle: "solid",
                                                }}
                                            />
                                            <h4 className="mb-1 font-weight-600">
                                                {item.title}
                                            </h4>
                                            <p className="small text-muted fs-6">
                                                {item.description}
                                            </p>
                                        </div>
                                    ))}
                            </div>
                        </div>
                    )
                )}
            </div>
        </div>
    );
};

export default PageItemsGrid;
