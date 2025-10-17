import React, { useState } from "react";
import { Post } from "../types/interfaces";
import InnerPageLayout from "../layouts/InnerPageLayout";
import Sidebar from "../components/sidebar";
import {
    FaFacebookF,
    FaTwitter,
    FaLinkedinIn,
    FaWhatsapp,
    FaLink,
    FaCheck,
} from "react-icons/fa";

interface ArticleProps {
    post: Post;
    latestPosts: Post[];
    similarPosts: Post[];
}

const Article: React.FC<ArticleProps> = ({
    post,
    latestPosts,
    similarPosts,
}) => {
    const [linkCopied, setLinkCopied] = useState(false);

    // Styles pour le contenu de l'article
    const postContentStyles = {
        img: {
            maxWidth: "100%",
            height: "auto",
            display: "block",
            margin: "1rem auto",
        },
    };

    // Fonction pour partager sur les réseaux sociaux
    const sharePost = (platform: string) => {
        const url = window.location.href;
        const title = post.title;
        let shareUrl = "";

        switch (platform) {
            case "facebook":
                shareUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
                    url
                )}`;
                break;
            case "twitter":
                shareUrl = `https://twitter.com/intent/tweet?url=${encodeURIComponent(
                    url
                )}&text=${encodeURIComponent(title)}`;
                break;
            case "linkedin":
                shareUrl = `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(
                    url
                )}`;
                break;
            case "whatsapp":
                shareUrl = `https://api.whatsapp.com/send?text=${encodeURIComponent(
                    title + " " + url
                )}`;
                break;
            case "copy":
                navigator.clipboard.writeText(url).then(() => {
                    setLinkCopied(true);
                    setTimeout(() => setLinkCopied(false), 2000);
                });
                return;
            default:
                return;
        }

        window.open(shareUrl, "_blank", "width=600,height=400");
    };

    return (
        <InnerPageLayout
            banner={{
                title: post.title,
            }}
            title={post.title}
        >
            <div className="container py-4 py-md-5">
                <div className="row">
                    {/* Colonne principale qui prend toute la largeur sur mobile et 8/12 sur desktop */}
                    <div className="col-12 col-md-8 mb-4 mb-md-0">
                        <div>
                            {post.featured_image && (
                                <img
                                    src={post.featured_image}
                                    alt={post.title}
                                    className="img-fluid mb-4 rounded"
                                    height={300}
                                />
                            )}
                            <h3 className="mb-4 text-primary font-weight-600">
                                {post.title}
                            </h3>

                            {/* Options de partage en haut de l'article */}
                            <div className="share-options mb-4">
                                <div className="d-flex align-items-center">
                                    <span className="me-3 text-muted">
                                        Partager:
                                    </span>
                                    <div className="social-share-buttons">
                                        <button
                                            className="btn btn-sm share-btn facebook-btn"
                                            onClick={() =>
                                                sharePost("facebook")
                                            }
                                            aria-label="Partager sur Facebook"
                                        >
                                            <FaFacebookF />
                                        </button>
                                        <button
                                            className="btn btn-sm share-btn twitter-btn"
                                            onClick={() => sharePost("twitter")}
                                            aria-label="Partager sur Twitter"
                                        >
                                            <FaTwitter />
                                        </button>
                                        <button
                                            className="btn btn-sm share-btn linkedin-btn"
                                            onClick={() =>
                                                sharePost("linkedin")
                                            }
                                            aria-label="Partager sur LinkedIn"
                                        >
                                            <FaLinkedinIn />
                                        </button>
                                        <button
                                            className="btn btn-sm share-btn whatsapp-btn"
                                            onClick={() =>
                                                sharePost("whatsapp")
                                            }
                                            aria-label="Partager sur WhatsApp"
                                        >
                                            <FaWhatsapp />
                                        </button>
                                        <button
                                            className="btn btn-sm share-btn copy-btn"
                                            onClick={() => sharePost("copy")}
                                            aria-label="Copier le lien"
                                        >
                                            {linkCopied ? (
                                                <FaCheck />
                                            ) : (
                                                <FaLink />
                                            )}
                                        </button>
                                    </div>
                                </div>
                            </div>

                            <div className="post-content">
                                <style>
                                    {`
                                    .post-content img {
                                        max-width: 100%;
                                        height: auto;
                                        display: block;
                                        margin: 1rem auto;
                                    }
                                    
                                    .post-content {
                                        font-size: 1rem;
                                        line-height: 1.6;
                                    }
                                    
                                    @media (max-width: 768px) {
                                        .post-content {
                                            font-size: 0.95rem;
                                        }
                                    }

                                    .share-options {
                                        border-top: 1px solid #eee;
                                        border-bottom: 1px solid #eee;
                                        padding: 15px 0;
                                    }

                                    .social-share-buttons {
                                        display: flex;
                                        gap: 10px;
                                    }

                                    .share-btn {
                                        width: 36px;
                                        height: 36px;
                                        border-radius: 50%;
                                        display: flex;
                                        align-items: center;
                                        justify-content: center;
                                        color: white;
                                        transition: all 0.3s ease;
                                        border: none;
                                    }

                                    .share-btn:hover {
                                        transform: translateY(-3px);
                                        box-shadow: 0 4px 8px rgba(0,0,0,0.1);
                                    }

                                    .facebook-btn {
                                        background-color: #3b5998;
                                    }

                                    .twitter-btn {
                                        background-color: #1da1f2;
                                    }

                                    .linkedin-btn {
                                        background-color: #0077b5;
                                    }

                                    .whatsapp-btn {
                                        background-color: #25d366;
                                    }

                                    .copy-btn {
                                        background-color: #6c757d;
                                    }

                                    @media (max-width: 576px) {
                                        .share-options {
                                            flex-direction: column;
                                            align-items: flex-start;
                                        }
                                        
                                        .social-share-buttons {
                                            margin-top: 10px;
                                        }
                                    }
                                    `}
                                </style>
                                <div
                                    dangerouslySetInnerHTML={{
                                        __html: post.content,
                                    }}
                                />
                            </div>

                            {/* Options de partage en bas de l'article */}
                            <div className="share-options mt-5">
                                <div className="d-flex align-items-center">
                                    <span className="me-3 text-muted">
                                        Partager cet article:
                                    </span>
                                    <div className="social-share-buttons">
                                        <button
                                            className="btn btn-sm share-btn facebook-btn"
                                            onClick={() =>
                                                sharePost("facebook")
                                            }
                                            aria-label="Partager sur Facebook"
                                        >
                                            <FaFacebookF />
                                        </button>
                                        <button
                                            className="btn btn-sm share-btn twitter-btn"
                                            onClick={() => sharePost("twitter")}
                                            aria-label="Partager sur Twitter"
                                        >
                                            <FaTwitter />
                                        </button>
                                        <button
                                            className="btn btn-sm share-btn linkedin-btn"
                                            onClick={() =>
                                                sharePost("linkedin")
                                            }
                                            aria-label="Partager sur LinkedIn"
                                        >
                                            <FaLinkedinIn />
                                        </button>
                                        <button
                                            className="btn btn-sm share-btn whatsapp-btn"
                                            onClick={() =>
                                                sharePost("whatsapp")
                                            }
                                            aria-label="Partager sur WhatsApp"
                                        >
                                            <FaWhatsapp />
                                        </button>
                                        <button
                                            className="btn btn-sm share-btn copy-btn"
                                            onClick={() => sharePost("copy")}
                                            aria-label="Copier le lien"
                                        >
                                            {linkCopied ? (
                                                <FaCheck />
                                            ) : (
                                                <FaLink />
                                            )}
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-12 col-md-4">
                        <Sidebar
                            latestPosts={latestPosts}
                            similarPosts={similarPosts}
                        />
                    </div>
                </div>
            </div>
        </InnerPageLayout>
    );
};

export default Article;
