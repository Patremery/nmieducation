import React from "react";
import parse from "html-react-parser";
import { Post } from "../types/interfaces";
import { Link } from "@inertiajs/react";

interface PostListItemsProps {
    post: Post;
    isLoading?: boolean;
}

const PostListItems = ({ post, isLoading = false }: PostListItemsProps) => {
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

    const cardHoverStyle = {
        transform: "translateY(-5px)",
        boxShadow: "0 10px 20px rgba(0,0,0,0.1)",
    };

    // Composant de chargement (skeleton)
    if (isLoading) {
        return (
            <div className="col-md-4 mb-4">
                <div className="card shadow-sm" style={cardStyle}>
                    <div
                        className="card-img-top bg-light animate-pulse"
                        style={{ height: "200px" }}
                    ></div>
                    <div className="card-body">
                        <div
                            className="h5 card-title bg-light animate-pulse mb-3"
                            style={{ height: "24px", width: "80%" }}
                        ></div>
                        <div
                            className="card-text bg-light animate-pulse mb-3"
                            style={{ height: "60px" }}
                        ></div>
                        <div
                            className="bg-light animate-pulse"
                            style={{ height: "38px", width: "120px" }}
                        ></div>
                    </div>
                </div>
            </div>
        );
    }

    return (
        <div className="col-md-4 mb-4" key={post.id}>
            <div
                className="card h-100 border-0"
                style={cardStyle}
                onMouseEnter={(e) => {
                    Object.assign(e.currentTarget.style, cardHoverStyle);
                    const img = e.currentTarget.querySelector("img");
                    if (img) {
                        img.style.transform = "scale(1.05)";
                    }
                }}
                onMouseLeave={(e) => {
                    e.currentTarget.style.transform = "";
                    e.currentTarget.style.boxShadow =
                        "0 4px 6px rgba(0,0,0,0.05)";
                    const img = e.currentTarget.querySelector("img");
                    if (img) {
                        img.style.transform = "";
                    }
                }}
            >
                <div
                    className="card-img-container"
                    style={{ height: "200px", backgroundColor: "#f8f9fa" }}
                >
                    <Link
                        href={`/posts/${post.slug}`}
                        className="d-block h-100"
                    >
                        <img
                            src={
                                post.featured_image || "/images/placeholder.jpg"
                            }
                            className="card-img-top h-100 w-100"
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
                <div className="card-body d-flex flex-column">
                    <h5 className="card-title">
                        <Link
                            href={`/posts/${post.slug}`}
                            className="text-dark text-decoration-none"
                        >
                            {parse(limitTitle(post.title))}
                        </Link>
                    </h5>
                    <p className="card-text" style={{ fontStyle: "italic" }}>
                        {stripHtmlAndLimit(post.content)}
                    </p>
                    <Link
                        href={`/posts/${post.slug}`}
                        className="btn btn-primary mt-auto"
                    >
                        Lire plus <i className="fas fa-angles-right fa-sm"></i>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default PostListItems;
