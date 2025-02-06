import React from "react";
import { Team } from "../types/interfaces";

interface TeamCarouselProps {
    members: Team[];
}

const TeamCarousel: React.FC<TeamCarouselProps> = ({ members }) => {
    return (
        <div
            id="teamCarousel"
            className="carousel slide"
            data-bs-ride="carousel"
        >
            {/* Carousel Indicators */}
            <div className="carousel-indicators">
                {members.map((_, index) => (
                    <button
                        key={index}
                        type="button"
                        data-bs-target="#teamCarousel"
                        data-bs-slide-to={index}
                        className={index === 0 ? "active" : ""}
                        aria-current={index === 0 ? "true" : "false"}
                        aria-label={`Slide ${index + 1}`}
                    ></button>
                ))}
            </div>

            {/* Carousel Items */}
            <div className="carousel-inner">
                {/* Group members in sets of 4 */}
                {Array.from({ length: Math.ceil(members.length / 4) }).map(
                    (_, groupIndex) => (
                        <div
                            key={groupIndex}
                            className={`carousel-item ${
                                groupIndex === 0 ? "active" : ""
                            }`}
                        >
                            <div className="d-flex justify-content-center gap-4">
                                {members
                                    .slice(groupIndex * 4, (groupIndex + 1) * 4)
                                    .map((member) => (
                                        <div
                                            key={member.id}
                                            className="text-center"
                                        >
                                            <img
                                                src={member.photo}
                                                alt={member.name}
                                                className="rounded-circle mb-3"
                                                style={{
                                                    width: "120px",
                                                    height: "120px",
                                                    objectFit: "cover",
                                                }}
                                            />
                                            <h5 className="mb-1">
                                                {member.name}
                                            </h5>
                                            <p className="small text-muted">
                                                {member.position}
                                            </p>
                                        </div>
                                    ))}
                            </div>
                        </div>
                    )
                )}
            </div>

            {/* Carousel Controls */}
            <button
                className="carousel-control-prev"
                type="button"
                data-bs-target="#teamCarousel"
                data-bs-slide="prev"
            >
                <span
                    className="carousel-control-prev-icon"
                    aria-hidden="true"
                ></span>
                <span className="visually-hidden">Previous</span>
            </button>
            <button
                className="carousel-control-next"
                type="button"
                data-bs-target="#teamCarousel"
                data-bs-slide="next"
            >
                <span
                    className="carousel-control-next-icon"
                    aria-hidden="true"
                ></span>
                <span className="visually-hidden">Next</span>
            </button>
        </div>
    );
};

export default TeamCarousel;
