import React, { useState, useEffect } from "react";
import { Post } from "../types/interfaces";
import InnerPageLayout from "../layouts/InnerPageLayout";
import PostGridItem from "../components/PostGridItem";
import { Link } from "@inertiajs/react";

interface BlogProps {
    posts: Post[];
}

const Blog: React.FC<BlogProps> = ({ posts }) => {
    const POSTS_PER_PAGE = 6;
    const [displayedPosts, setDisplayedPosts] = useState(POSTS_PER_PAGE);
    const [isLoading, setIsLoading] = useState(false);
    const [initialLoading, setInitialLoading] = useState(true);

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

    useEffect(() => {
        // Simuler un chargement initial
        const timer = setTimeout(() => {
            setInitialLoading(false);
        }, 1000);

        return () => clearTimeout(timer);
    }, []);

    const loadMore = () => {
        setIsLoading(true);

        // Simuler un délai de chargement pour montrer l'effet de chargement
        setTimeout(() => {
            setDisplayedPosts((prev) =>
                Math.min(prev + POSTS_PER_PAGE, posts.length)
            );
            setIsLoading(false);
        }, 800);
    };

    const hasMorePosts = displayedPosts < posts.length;

    // Générer des skeletons pour le chargement initial
    const renderSkeletons = () => {
        return Array(POSTS_PER_PAGE)
            .fill(0)
            .map((_, index) => (
                <PostGridItem
                    key={`skeleton-${index}`}
                    post={{} as Post}
                    isLoading={true}
                />
            ));
    };

    return (
        <InnerPageLayout
            banner={{
                title: "Actualité",
            }}
            title="Blog"
        >
            <div className="container mt-5 p-5">
                <div className="row">
                    {/* Featured Hero Post */}
                    {!initialLoading && posts.length > 0 && (
                        <div className="col-12 mb-5 pb-4 border-bottom border-light">
                            <div className="card border-0 bg-transparent">
                                <div className="row g-0 align-items-center">
                                    <div className="col-lg-7 position-relative">
                                        <div className="position-relative overflow-hidden rounded-4 shadow-sm" style={{ height: "400px" }}>
                                            <Link href={`/posts/${posts[0].slug}`} className="d-block h-100 w-100">
                                                <img 
                                                    src={posts[0].featured_image || "/images/placeholder.jpg"} 
                                                    className="w-100 h-100 object-fit-cover hover-zoom" 
                                                    alt={posts[0].title} 
                                                    style={{ transition: "transform 0.6s ease" }}
                                                    onMouseEnter={(e) => e.currentTarget.style.transform = "scale(1.05)"}
                                                    onMouseLeave={(e) => e.currentTarget.style.transform = "scale(1)"}
                                                />
                                            </Link>
                                            {posts[0].categories && posts[0].categories.length > 0 && (
                                                <div className="position-absolute top-0 start-0 m-4 z-index-2">
                                                    <span className="badge bg-primary px-3 py-2 rounded-pill fw-medium shadow-sm fs-6" style={{ letterSpacing: '0.5px' }}>
                                                        {posts[0].categories[0].name}
                                                    </span>
                                                </div>
                                            )}
                                        </div>
                                    </div>
                                    <div className="col-lg-5 ps-lg-5 mt-4 mt-lg-0">
                                        <div className="text-muted small mb-3 fw-medium d-flex align-items-center fs-6">
                                            <i className="far fa-calendar-alt me-2 text-primary"></i>
                                            {formatDate(posts[0].published_at)}
                                        </div>
                                        <h2 className="fw-bold mb-4 display-6" style={{ lineHeight: '1.2' }}>
                                            <Link href={`/posts/${posts[0].slug}`} className="text-dark text-decoration-none hover-primary transition-colors">
                                                {posts[0].title}
                                            </Link>
                                        </h2>
                                        <div className="fs-5 text-muted mb-4" style={{ lineHeight: '1.7', display: '-webkit-box', WebkitLineClamp: 3, WebkitBoxOrient: 'vertical', overflow: 'hidden' }}
                                             dangerouslySetInnerHTML={{ __html: posts[0].content }} />
                                             
                                        <Link href={`/posts/${posts[0].slug}`} className="btn btn-primary rounded-pill px-4 py-2 fw-medium mt-2 d-inline-flex align-items-center">
                                            Lire l'article complet <i className="fas fa-arrow-right ms-2 mt-1"></i>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}

                    {/* Blog Grid */}
                    <div className="row mt-4">
                        <div className="col-12 mb-4">
                            <h3 className="fw-bold fs-4 mb-0">Tous nos articles</h3>
                        </div>
                        {initialLoading
                            ? renderSkeletons()
                            : posts
                                  .slice(1, displayedPosts)
                                  .map((post) => (
                                      <PostGridItem key={post.id} post={post} />
                                  ))}

                        {isLoading &&
                            Array(POSTS_PER_PAGE)
                                .fill(0)
                                .map((_, index) => (
                                    <PostGridItem
                                        key={`loading-more-${index}`}
                                        post={{} as Post}
                                        isLoading={true}
                                    />
                                ))}
                    </div>
                </div>

                {hasMorePosts && !initialLoading && (
                    <div className="text-center mt-5 pt-3">
                        <button
                            className="btn btn-outline-primary rounded-pill px-5 py-3 fw-bold shadow-sm d-inline-flex align-items-center transition-all hover-lift"
                            onClick={loadMore}
                            disabled={isLoading}
                        >
                            {isLoading ? (
                                <>
                                    <span
                                        className="spinner-border spinner-border-sm me-3"
                                        role="status"
                                        aria-hidden="true"
                                    ></span>
                                    Chargement des pépites...
                                </>
                            ) : (
                                <>
                                    Charger plus d'articles <i className="fas fa-chevron-down ms-2"></i>
                                </>
                            )}
                        </button>
                    </div>
                )}
            </div>
            
            <style>
                {`
                    .hover-primary:hover {
                        color: var(--bs-primary) !important;
                    }
                    .transition-colors {
                        transition: color 0.3s ease;
                    }
                    .transition-all {
                        transition: all 0.3s ease;
                    }
                    .hover-lift:hover {
                        transform: translateY(-3px);
                        box-shadow: 0 10px 20px rgba(0,113,189,0.15) !important;
                    }
                    .z-index-2 {
                        z-index: 2;
                    }
                `}
            </style>
        </InnerPageLayout>
    );
};

export default Blog;
