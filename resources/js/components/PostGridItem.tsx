import React from "react";
import parse from "html-react-parser";
import { Post } from "../types/interfaces";
import { Link } from "@inertiajs/react";

interface PostGridItemProps {
    post: Post;
    isLoading?: boolean;
}

const PostGridItem = ({ post, isLoading = false }: PostGridItemProps) => {
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

    // Date formatter
    const formatDate = (dateString: string) => {
        if (!dateString) return "";
        const options: Intl.DateTimeFormatOptions = { 
            year: 'numeric', 
            month: 'long', 
            day: 'numeric' 
        };
        return new Date(dateString).toLocaleDateString('fr-FR', options);
    };

    // Styles
    const cardStyle = {
        transition: "all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)",
        height: "100%",
        overflow: "hidden",
        boxShadow: "0 5px 15px rgba(0,0,0,0.03)",
        border: "1px solid rgba(0,0,0,0.05)",
        borderRadius: "16px",
    };

    const cardHoverStyle = {
        transform: "translateY(-8px)",
        boxShadow: "0 15px 30px rgba(0,0,0,0.08)",
        border: "1px solid rgba(0,0,0,0.08)",
    };

    // Loading Skeleton
    if (isLoading) {
        return (
            <div className="col-md-6 col-lg-4 mb-5">
                <div className="card" style={cardStyle}>
                    <div
                        className="card-img-top bg-light animate-pulse object-fit-cover"
                        style={{ height: "240px" }}
                    ></div>
                    <div className="card-body p-4">
                        <div
                            className="bg-light animate-pulse mb-3 rounded-pill"
                            style={{ height: "20px", width: "40%" }}
                        ></div>
                        <div
                            className="h4 card-title bg-light animate-pulse mb-3"
                            style={{ height: "28px", width: "90%" }}
                        ></div>
                        <div
                            className="card-text bg-light animate-pulse mb-4"
                            style={{ height: "60px" }}
                        ></div>
                        <div className="d-flex align-items-center mt-auto">
                           <div className="rounded-circle bg-light animate-pulse me-3" style={{ width: "40px", height: "40px" }}></div>
                           <div className="bg-light animate-pulse rounded-pill" style={{ height: "15px", width: "80px" }}></div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

    return (
        <div className="col-md-6 col-lg-4 mb-5" key={post.id}>
            <div
                className="card h-100 bg-white"
                style={cardStyle}
                onMouseEnter={(e) => {
                    Object.assign(e.currentTarget.style, cardHoverStyle);
                    const img = e.currentTarget.querySelector("img");
                    if (img) {
                        img.style.transform = "scale(1.05)";
                    }
                }}
                onMouseLeave={(e) => {
                    e.currentTarget.style.transform = "translateY(0)";
                    e.currentTarget.style.boxShadow = "0 5px 15px rgba(0,0,0,0.03)";
                    e.currentTarget.style.border = "1px solid rgba(0,0,0,0.05)";
                    const img = e.currentTarget.querySelector("img");
                    if (img) {
                        img.style.transform = "scale(1)";
                    }
                }}
            >
                <div
                    className="card-img-container position-relative overflow-hidden"
                    style={{ height: "240px", backgroundColor: "#f8f9fa" }}
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
                                transition: "transform 0.6s ease",
                            }}
                            onError={(e) => {
                                e.currentTarget.src = "/images/placeholder.jpg";
                            }}
                        />
                    </Link>
                    {/* Category Badge overlay */}
                    {post.categories && post.categories.length > 0 && (
                        <div className="position-absolute top-0 start-0 m-3 z-index-2">
                            <span className="badge bg-primary px-3 py-2 rounded-pill fw-medium shadow-sm" style={{ letterSpacing: '0.5px' }}>
                                {post.categories[0].name}
                            </span>
                        </div>
                    )}
                </div>
                <div className="card-body p-4 d-flex flex-column">
                    <div className="text-muted small mb-2 fw-medium d-flex align-items-center">
                        <i className="far fa-calendar-alt me-2"></i>
                        {formatDate(post.published_at)}
                    </div>
                    <h4 className="card-title fw-bold mb-3 overflow-hidden" style={{ display: '-webkit-box', WebkitLineClamp: 2, WebkitBoxOrient: 'vertical', lineHeight: '1.4' }}>
                        <Link
                            href={`/posts/${post.slug}`}
                            className="text-dark text-decoration-none hover-primary transition-colors"
                        >
                            {parse(limitTitle(post.title, 80))}
                        </Link>
                    </h4>
                    <p className="card-text text-muted mb-4" style={{ display: '-webkit-box', WebkitLineClamp: 3, WebkitBoxOrient: 'vertical',  overflow: 'hidden', lineHeight: '1.6' }}>
                        {stripHtmlAndLimit(post.content, 120)}
                    </p>
                    
                    <div className="mt-auto d-flex align-items-center justify-content-between pt-3 border-top border-light">
                         <div className="d-flex align-items-center">
                            <div className="rounded-circle bg-light d-flex align-items-center justify-content-center me-3" style={{ width: "40px", height: "40px", color: 'var(--bs-primary)' }}>
                                <i className="fas fa-feather-alt"></i>
                            </div>
                            <span className="fw-medium small text-dark">NMI Édition</span>
                         </div>
                        
                        <Link
                            href={`/posts/${post.slug}`}
                            className="btn btn-sm btn-outline-primary rounded-pill px-3 fw-medium"
                        >
                            Lire <i className="fas fa-arrow-right ms-1 fa-sm"></i>
                        </Link>
                    </div>
                </div>
            </div>
            <style>
                {`
                    .hover-primary:hover {
                        color: var(--bs-primary) !important;
                    }
                    .transition-colors {
                        transition: color 0.3s ease;
                    }
                    .z-index-2 {
                        z-index: 2;
                    }
                `}
            </style>
        </div>
    );
};

export default PostGridItem;
