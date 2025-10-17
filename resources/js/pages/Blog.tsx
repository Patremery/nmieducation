import React, { useState, useEffect } from "react";
import { Post } from "../types/interfaces";
import InnerPageLayout from "../layouts/InnerPageLayout";
import PostGridItem from "../components/PostGridItem";

interface BlogProps {
    posts: Post[];
}

const Blog: React.FC<BlogProps> = ({ posts }) => {
    const POSTS_PER_PAGE = 6;
    const [displayedPosts, setDisplayedPosts] = useState(POSTS_PER_PAGE);
    const [isLoading, setIsLoading] = useState(false);
    const [initialLoading, setInitialLoading] = useState(true);

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
                    {initialLoading
                        ? renderSkeletons()
                        : posts
                              .slice(0, displayedPosts)
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

                {hasMorePosts && !initialLoading && (
                    <div className="text-center mt-4">
                        <button
                            className="btn btn-link"
                            onClick={loadMore}
                            disabled={isLoading}
                        >
                            {isLoading ? (
                                <>
                                    <span
                                        className="spinner-border spinner-border-sm me-2"
                                        role="status"
                                        aria-hidden="true"
                                    ></span>
                                    Chargement...
                                </>
                            ) : (
                                "Charger plus d'articles..."
                            )}
                        </button>
                    </div>
                )}
            </div>
        </InnerPageLayout>
    );
};

export default Blog;
