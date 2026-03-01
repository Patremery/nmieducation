import React from "react";
import { Post } from "../types/interfaces";
import { Link } from "@inertiajs/react";

interface PostListItemsProps {
    post: Post;
    isLoading?: boolean;
}

const PostListItems = ({
    post,
    isLoading = false,
}: PostListItemsProps) => {
    
    // Date formatter
    const formatDate = (dateString: string | undefined) => {
        if (!dateString) return "";
        const options: Intl.DateTimeFormatOptions = { 
            year: 'numeric', 
            month: 'long', 
            day: 'numeric' 
        };
        return new Date(dateString).toLocaleDateString('fr-FR', options);
    };

    // Component styles
    const itemStyle = {
        transition: "all 0.3s ease",
        borderRadius: "12px",
        border: "1px solid transparent",
    };

    const itemHoverStyle = {
        backgroundColor: "#f8f9fa",
        border: "1px solid rgba(0,0,0,0.05)",
        transform: "translateX(5px)",
    };

    // Loading skeleton
    if (isLoading) {
        return (
            <div className="d-flex mb-4 align-items-center">
                <div
                    className="bg-light animate-pulse rounded-3 flex-shrink-0"
                    style={{ width: "90px", height: "90px" }}
                ></div>
                <div className="ms-3 flex-grow-1">
                    <div
                        className="bg-light animate-pulse mb-2 rounded-pill"
                        style={{ height: "14px", width: "40%" }}
                    ></div>
                    <div
                        className="bg-light animate-pulse mb-2"
                        style={{ height: "20px", width: "100%" }}
                    ></div>
                    <div
                        className="bg-light animate-pulse"
                        style={{ height: "20px", width: "70%" }}
                    ></div>
                </div>
            </div>
        );
    }

    return (
        <div 
            className="d-flex mb-3 p-2 align-items-center bg-white" 
            style={itemStyle}
            onMouseEnter={(e) => {
                Object.assign(e.currentTarget.style, itemHoverStyle);
                const img = e.currentTarget.querySelector("img");
                if (img) img.style.transform = "scale(1.08)";
            }}
            onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = "transparent";
                e.currentTarget.style.border = "1px solid transparent";
                e.currentTarget.style.transform = "translateX(0)";
                const img = e.currentTarget.querySelector("img");
                if (img) img.style.transform = "scale(1)";
            }}
        >
            <div 
                className="overflow-hidden rounded-3 flex-shrink-0 position-relative shadow-sm" 
                style={{ width: "95px", height: "95px", backgroundColor: "#f8f9fa" }}
            >
                <Link href={`/posts/${post.slug}`} className="d-block h-100">
                    <img
                        src={post.featured_image || "/images/placeholder.jpg"}
                        alt={post.title}
                        className="w-100 h-100 object-fit-cover"
                        style={{ transition: "transform 0.5s ease" }}
                        onError={(e) => {
                            e.currentTarget.src = "/images/placeholder.jpg";
                        }}
                    />
                </Link>
            </div>
            
            <div className="ms-3 flex-grow-1 d-flex flex-column justify-content-center">
                {post.categories && post.categories.length > 0 && (
                     <div className="mb-1">
                        <span className="text-primary fw-bold text-uppercase" style={{ fontSize: '0.65rem', letterSpacing: '0.8px' }}>
                            {post.categories[0].name}
                        </span>
                     </div>
                )}
                
                <h6 className="mb-1 fw-bold fs-6" style={{ lineHeight: '1.4', display: '-webkit-box', WebkitLineClamp: 2, WebkitBoxOrient: 'vertical', overflow: 'hidden' }}>
                    <Link
                        href={`/posts/${post.slug}`}
                        className="text-dark text-decoration-none hover-primary transition-colors"
                    >
                        {post.title}
                    </Link>
                </h6>
                
                <div className="text-muted" style={{ fontSize: '0.75rem' }}>
                    <i className="far fa-calendar-alt me-1"></i> {formatDate(post.published_at)}
                </div>
            </div>
        </div>
    );
};

export default PostListItems;
