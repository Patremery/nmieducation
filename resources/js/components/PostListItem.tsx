import React, { useEffect, useState } from "react";
import parse from "html-react-parser";
import { Post } from "../types/interfaces";
import { Link } from "@inertiajs/react";

interface PostListItemProps {
    post: Post;
    isLoading?: boolean;
}

const PostListItem = ({ post, isLoading = false }: PostListItemProps) => {
    const [isMobile, setIsMobile] = useState(false);

    // Détecter si l'appareil est mobile
    useEffect(() => {
        const checkIfMobile = () => {
            setIsMobile(window.innerWidth < 768);
        };

        // Vérifier au chargement
        checkIfMobile();

        // Vérifier au redimensionnement
        window.addEventListener("resize", checkIfMobile);

        // Nettoyer l'écouteur d'événement
        return () => window.removeEventListener("resize", checkIfMobile);
    }, []);

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

    const stripHtmlAndLimit = (htmlContent: string, limit: number = 60) => {
        const tempElement = document.createElement("div");
        tempElement.innerHTML = htmlContent;
        const textContent =
            tempElement.textContent || tempElement.innerText || "";

        if (textContent.length <= limit) return textContent;
        return textContent.substring(0, limit) + "...";
    };

    // Styles pour les effets de survol avec padding adaptatif
    const itemStyle = {
        transition: "all 0.3s ease",
        borderBottom: "1px solid #eee",
        padding: isMobile ? "0.5rem 0.25rem" : "0.75rem",
        marginBottom: isMobile ? "0.5rem" : "0.75rem",
    };

    const itemHoverStyle = {
        backgroundColor: "#f9f9f9",
    };

    // Composant de chargement (skeleton)
    if (isLoading) {
        return (
            <div
                className="mb-3"
                style={{
                    ...itemStyle,
                    padding: isMobile ? "0.5rem 0.25rem" : "0.75rem",
                    marginBottom: isMobile ? "0.5rem" : "0.75rem",
                }}
            >
                <div className="row g-2">
                    <div className="col-4 col-sm-3">
                        <div
                            className="bg-light animate-pulse rounded"
                            style={{
                                height: isMobile ? "50px" : "60px",
                                width: "100%",
                            }}
                        ></div>
                    </div>
                    <div className="col-8 col-sm-9">
                        <div
                            className="h6 bg-light animate-pulse mb-2"
                            style={{ height: "18px", width: "80%" }}
                        ></div>
                        <div
                            className="bg-light animate-pulse d-none d-sm-block"
                            style={{ height: "32px", width: "100%" }}
                        ></div>
                    </div>
                </div>
            </div>
        );
    }

    // Calculer les limites de caractères en fonction de la taille d'écran
    const getTitleLimit = () => {
        return {
            xs: 30, // Pour les très petits écrans
            sm: 40, // Pour les petits écrans
            md: 50, // Pour les écrans moyens
            lg: 65, // Pour les grands écrans
        };
    };

    const titleLimits = getTitleLimit();
    const currentLimit = isMobile ? titleLimits.xs : titleLimits.md;

    return (
        <div
            style={itemStyle}
            onMouseEnter={(e) => {
                Object.assign(e.currentTarget.style, itemHoverStyle);
            }}
            onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = "";
            }}
        >
            <div className="row g-2 align-items-center">
                {post.featured_image && (
                    <div className="col-4 col-sm-3">
                        <Link href={`/posts/${post.slug}`}>
                            <img
                                src={
                                    post.featured_image ||
                                    "/images/placeholder.jpg"
                                }
                                className="img-fluid rounded"
                                alt={post.title}
                                style={{
                                    height: isMobile ? "50px" : "60px",
                                    width: "100%",
                                    objectFit: "cover",
                                }}
                                onError={(e) => {
                                    e.currentTarget.src =
                                        "/images/placeholder.jpg";
                                }}
                            />
                        </Link>
                    </div>
                )}
                <div
                    className={
                        post.featured_image ? "col-8 col-sm-9" : "col-12"
                    }
                >
                    <h6 className="mb-1 post-title-responsive">
                        <Link
                            href={`/posts/${post.slug}`}
                            className="text-dark text-decoration-none"
                        >
                            {parse(limitTitle(post.title, currentLimit))}
                        </Link>
                    </h6>
                    <small className="text-muted d-none d-sm-block">
                        {stripHtmlAndLimit(post.content, isMobile ? 40 : 60)}
                    </small>
                </div>
            </div>
            <style>
                {`
                @media (max-width: 576px) {
                    .post-title-responsive {
                        font-size: 0.9rem;
                        margin-bottom: 0;
                    }
                }
                @media (min-width: 576px) and (max-width: 768px) {
                    .post-title-responsive {
                        font-size: 1rem;
                    }
                }
                `}
            </style>
        </div>
    );
};

export default PostListItem;
