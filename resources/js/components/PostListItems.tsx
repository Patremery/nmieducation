import React from "react";
import parse from "html-react-parser";
import { Post } from "../types/interfaces";
import { Link } from "@inertiajs/react";
import { FaCalendarAlt, FaEye, FaArrowRight } from "react-icons/fa";

interface PostListItemsProps {
    post: Post;
    isLoading?: boolean;
    layout?: "card" | "horizontal";
}

const PostListItems = ({
    post,
    isLoading = false,
    layout = "card",
}: PostListItemsProps) => {
    const limitTitle = (title: string, limit: number = 65) => {
        const tempElement = document.createElement("div");
        tempElement.innerHTML = title;
        const textContent =
            tempElement.textContent || tempElement.innerText || "";

        if (textContent.length <= limit) return title;

        let charCount = 0;
        let cutIndex = 0;

        for (let i = 0; i < title.length; i++) {
            if (title[i] === "<") {
                while (i < title.length && title[i] !== ">") i++;
            } else if (title[i] !== ">") {
                charCount++;
                if (charCount === limit) {
                    cutIndex = i + 1;
                    break;
                }
            }
        }

        if (cutIndex > 0) {
            return title.substring(0, cutIndex) + "...";
        }

        return title.substring(0, limit) + "...";
    };

    const stripHtmlAndLimit = (htmlContent: string, limit: number = 100) => {
        const tempElement = document.createElement("div");
        tempElement.innerHTML = htmlContent;
        const textContent =
            tempElement.textContent || tempElement.innerText || "";

        if (textContent.length <= limit) return textContent;
        return textContent.substring(0, limit) + "...";
    };

    // Styles pour les effets de survol
    const cardStyle = {
        transition: "all 0.3s ease",
        height: "100%",
        overflow: "hidden",
        boxShadow: "0 4px 6px rgba(0,0,0,0.05)",
    };

    const horizontalStyle = {
        transition: "all 0.3s ease",
        overflow: "hidden",
        boxShadow: "0 4px 6px rgba(0,0,0,0.05)",
        borderRadius: "8px",
    };

    const horizontalHoverStyle = {
        boxShadow: "0 10px 20px rgba(0,0,0,0.1)",
    };

    // Composant de chargement (skeleton)
    if (isLoading) {
        return (
            <div className="col-12 mb-4">
                <div
                    className="d-flex bg-white shadow-sm"
                    style={horizontalStyle}
                >
                    <div
                        className="bg-light animate-pulse"
                        style={{ width: "30%", minHeight: "150px" }}
                    ></div>
                    <div className="p-3 flex-grow-1">
                        <div
                            className="h5 bg-light animate-pulse mb-3"
                            style={{ height: "24px", width: "80%" }}
                        ></div>
                        <div
                            className="bg-light animate-pulse mb-3"
                            style={{ height: "60px" }}
                        ></div>
                        <div className="d-flex justify-content-between">
                            <div
                                className="bg-light animate-pulse"
                                style={{ height: "20px", width: "120px" }}
                            ></div>
                            <div
                                className="bg-light animate-pulse"
                                style={{ height: "20px", width: "80px" }}
                            ></div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

    // Affichage horizontal

    return (
        <div className="col-12 mb-4" key={post.id}>
            <div
                className="d-flex flex-column flex-md-row bg-white shadow-sm"
                style={horizontalStyle}
                onMouseEnter={(e) => {
                    Object.assign(e.currentTarget.style, horizontalHoverStyle);
                    const img = e.currentTarget.querySelector("img");
                    if (img) {
                        img.style.transform = "scale(1.05)";
                    }
                }}
                onMouseLeave={(e) => {
                    e.currentTarget.style.boxShadow =
                        "0 4px 6px rgba(0,0,0,0.05)";
                    const img = e.currentTarget.querySelector("img");
                    if (img) {
                        img.style.transform = "";
                    }
                }}
            >
                <div
                    className="post-img-container overflow-hidden"
                    style={{
                        flex: "0 0 auto",
                        width: "100%",
                        maxHeight: "250px",
                        padding: "10px",
                    }}
                >
                    <Link
                        href={`/posts/${post.slug}`}
                        className="d-block h-100 border-radius-lg"
                    >
                        <img
                            src={
                                post.featured_image || "/images/placeholder.jpg"
                            }
                            className="w-100"
                            alt={post.title}
                            style={{
                                objectFit: "cover",
                                transition: "transform 0.5s ease",
                            }}
                            onError={(e) => {
                                e.currentTarget.src = "/images/placeholder.jpg";
                            }}
                        />
                    </Link>
                </div>
                <div className="p-2 d-flex flex-column justify-content-between flex-grow-1">
                    <div>
                        <h6 className="mb-2">
                            <Link
                                href={`/posts/${post.slug}`}
                                className="text-dark text-decoration-none"
                            >
                                {parse(limitTitle(post.title, 60))}
                            </Link>
                        </h6>
                    </div>
                    <div className="d-flex justify-content-between align-items-center">
                        {/* <div className="post-meta d-flex align-items-center">
                            <span
                                className="me-3 d-flex align-items-center text-muted"
                                style={{ fontSize: "0.85rem" }}
                            >
                                <FaCalendarAlt className="me-1" />
                                {(post as any).created_at
                                    ? new Date(
                                          (post as any).created_at
                                      ).toLocaleDateString()
                                    : "Date non disponible"}
                            </span>
                        </div> */}
                        <Link
                            href={`/posts/${post.slug}`}
                            className="btn btn-sm btn-outline-primary d-flex align-items-center"
                        >
                            Lire <FaArrowRight className="ms-1" size={12} />
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PostListItems;

// Ajout de styles CSS pour la mise en page responsive
const styles = `
@media (min-width: 768px) {
    .post-img-container {
        width: 30% !important;
        max-height: none !important;
        height: auto !important;
    }
}

@media (max-width: 767px) {
    .post-img-container {
        height: 180px !important;
    }
}
`;

// Ajouter les styles au document
if (typeof document !== "undefined") {
    const styleElement = document.createElement("style");
    styleElement.textContent = styles;
    document.head.appendChild(styleElement);
}
