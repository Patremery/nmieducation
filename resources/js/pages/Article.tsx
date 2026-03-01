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

    return (
        <InnerPageLayout
            banner={{
                title: post.title,
            }}
            title={post.title}
        >
            {/* Article Hero Header */}
            <div className="bg-white pb-5 border-bottom border-light">
                <div className="container pt-4 pt-md-5">
                    <div className="row justify-content-center">
                        <div className="col-12 col-lg-10 text-center mb-5">
                            {post.categories && post.categories.length > 0 && (
                                <span className="badge bg-primary px-3 py-2 rounded-pill fw-medium mb-4 fs-6 text-uppercase shadow-sm" style={{ letterSpacing: '1px' }}>
                                    {post.categories[0].name}
                                </span>
                            )}
                            <h1 className="display-4 fw-bold mb-4 text-dark" style={{ lineHeight: '1.2' }}>
                                {post.title}
                            </h1>
                            <div className="d-flex align-items-center justify-content-center text-muted fs-5 fw-medium">
                                <span className="me-4"><i className="far fa-calendar-alt me-2 text-primary"></i> {formatDate(post.published_at)}</span>
                                <span className="d-flex align-items-center">
                                    <div className="rounded-circle bg-light d-flex align-items-center justify-content-center me-2" style={{ width: "30px", height: "30px", color: 'var(--bs-primary)' }}>
                                        <i className="fas fa-feather-alt fa-sm"></i>
                                    </div>
                                    NMI Édition
                                </span>
                            </div>
                        </div>
                        
                        {post.featured_image && (
                            <div className="col-12 mb-5">
                                <div className="rounded-4 overflow-hidden shadow-sm" style={{ maxHeight: "600px" }}>
                                    <img
                                        src={post.featured_image}
                                        alt={post.title}
                                        className="w-100 object-fit-cover"
                                        style={{ height: "100%", maxHeight: "600px" }}
                                    />
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>

            {/* Article Body */}
            <div className="container py-5">
                <div className="row justify-content-center">
                    <div className="col-12 col-lg-8 mb-5 mb-lg-0">
                        {/* Top Share Bar */}
                        <div className="share-options-modern mb-5 pb-4 border-bottom border-light">
                            <div className="d-flex align-items-center justify-content-between flex-wrap gap-3">
                                <span className="text-muted fw-bold text-uppercase fs-6" style={{ letterSpacing: '1px' }}>
                                    Partager l'article
                                </span>
                                <div className="social-share-buttons">
                                    <button
                                        className="btn share-btn facebook-btn"
                                        onClick={() => sharePost("facebook")}
                                        title="Partager sur Facebook"
                                    >
                                        <FaFacebookF />
                                    </button>
                                    <button
                                        className="btn share-btn twitter-btn"
                                        onClick={() => sharePost("twitter")}
                                        title="Partager sur X (Twitter)"
                                    >
                                        <FaTwitter />
                                    </button>
                                    <button
                                        className="btn share-btn linkedin-btn"
                                        onClick={() => sharePost("linkedin")}
                                        title="Partager sur LinkedIn"
                                    >
                                        <FaLinkedinIn />
                                    </button>
                                    <button
                                        className="btn share-btn whatsapp-btn"
                                        onClick={() => sharePost("whatsapp")}
                                        title="Partager sur WhatsApp"
                                    >
                                        <FaWhatsapp />
                                    </button>
                                    <button
                                        className="btn share-btn copy-btn"
                                        onClick={() => sharePost("copy")}
                                        title="Copier le lien"
                                    >
                                        {linkCopied ? <FaCheck /> : <FaLink />}
                                    </button>
                                </div>
                            </div>
                        </div>

                        {/* Content */}
                        <div className="post-content">
                            <style>
                                {`
                                /* Magazine Quality Typography */
                                .post-content {
                                    font-size: 1.15rem; /* ~18.4px */
                                    line-height: 1.8;
                                    color: #333333;
                                    font-family: inherit;
                                }
                                
                                .post-content p {
                                    margin-bottom: 1.8rem;
                                    color: inherit;
                                }
                                
                                .post-content strong, .post-content b {
                                    color: #111111;
                                    font-weight: 700;
                                }
                                
                                .post-content h1, .post-content h2, .post-content h3, .post-content h4, .post-content h5 {
                                    color: #111111;
                                    font-weight: 700;
                                    margin-top: 3rem;
                                    margin-bottom: 1.2rem;
                                    line-height: 1.3;
                                }
                                
                                .post-content h2 { font-size: 2rem; }
                                .post-content h3 { font-size: 1.6rem; }
                                
                                .post-content img {
                                    max-width: 100%;
                                    height: auto;
                                    display: block;
                                    margin: 3rem auto;
                                    border-radius: 12px;
                                    box-shadow: 0 5px 25px rgba(0,0,0,0.06);
                                }
                                
                                .post-content blockquote {
                                    border-left: 4px solid var(--bs-primary);
                                    padding: 1.5rem 2rem;
                                    margin: 2.5rem 0;
                                    background-color: #f8f9fa;
                                    border-radius: 0 12px 12px 0;
                                    font-size: 1.25rem;
                                    font-style: italic;
                                    color: #444;
                                }
                                
                                .post-content ul, .post-content ol {
                                    margin-bottom: 1.8rem;
                                    padding-left: 1.5rem;
                                }
                                
                                .post-content li {
                                    margin-bottom: 0.5rem;
                                }
                                
                                .post-content a {
                                    color: var(--bs-primary);
                                    text-decoration: underline;
                                    text-decoration-thickness: 1px;
                                    text-underline-offset: 4px;
                                    transition: all 0.2s ease;
                                }
                                
                                .post-content a:hover {
                                    color: var(--bs-primary-dark);
                                    text-decoration-thickness: 2px;
                                }
                                
                                @media (max-width: 768px) {
                                    .post-content {
                                        font-size: 1.05rem; /* ~16.8px */
                                        line-height: 1.7;
                                    }
                                }

                                /* Modern Social Sharing Buttons */
                                .share-options-modern {
                                    margin-top: 10px;
                                }

                                .social-share-buttons {
                                    display: flex;
                                    gap: 12px;
                                    flex-wrap: wrap;
                                }

                                .share-btn {
                                    width: 42px;
                                    height: 42px;
                                    border-radius: 50%;
                                    display: inline-flex;
                                    align-items: center;
                                    justify-content: center;
                                    color: white !important;
                                    transition: all 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275);
                                    border: none;
                                    font-size: 1.1rem;
                                }

                                .share-btn:hover {
                                    transform: translateY(-4px) scale(1.05);
                                    box-shadow: 0 8px 15px rgba(0,0,0,0.15);
                                }

                                .facebook-btn { background-color: #1877F2; }
                                .twitter-btn { background-color: #000000; }
                                .linkedin-btn { background-color: #0A66C2; }
                                .whatsapp-btn { background-color: #25D366; }
                                .copy-btn { background-color: #6c757d; }
                                `}
                            </style>
                            <div
                                dangerouslySetInnerHTML={{
                                    __html: post.content,
                                }}
                            />
                        </div>

                        {/* Bottom Tags & Share */}
                        <div className="mt-5 pt-4 border-top border-light d-flex flex-column flex-sm-row justify-content-between align-items-start align-items-sm-center gap-4">
                            {post.tags && post.tags.length > 0 ? (
                                <div className="d-flex flex-wrap gap-2">
                                    <span className="text-muted fw-bold me-2 mt-1">Tags:</span>
                                    {post.tags.map(tag => (
                                        <span key={tag.id} className="badge bg-light text-dark border px-3 py-2 rounded-pill">
                                            #{tag.name}
                                        </span>
                                    ))}
                                </div>
                            ) : <div></div>}

                            <div className="social-share-buttons">
                                <button className="btn share-btn facebook-btn" onClick={() => sharePost("facebook")} title="Partager sur Facebook"><FaFacebookF /></button>
                                <button className="btn share-btn twitter-btn" onClick={() => sharePost("twitter")} title="Partager sur X"><FaTwitter /></button>
                                <button className="btn share-btn linkedin-btn" onClick={() => sharePost("linkedin")} title="Partager sur LinkedIn"><FaLinkedinIn /></button>
                            </div>
                        </div>
                    </div>

                    <div className="col-12 col-lg-4 mt-5 mt-lg-0 ps-lg-5">
                        <div className="position-sticky" style={{ top: "100px", zIndex: 10 }}>
                            <Sidebar
                                latestPosts={latestPosts}
                                similarPosts={similarPosts}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </InnerPageLayout>
    );
};

export default Article;
