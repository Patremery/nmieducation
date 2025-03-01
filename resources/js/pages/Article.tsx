import React from "react";
import { Post } from "../types/interfaces";
import InnerPageLayout from "../layouts/InnerPageLayout";
import Sidebar from "../components/sidebar";

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
    // Styles pour le contenu de l'article
    const postContentStyles = {
        img: {
            maxWidth: "100%",
            height: "auto",
            display: "block",
            margin: "1rem auto",
        },
    };

    return (
        <InnerPageLayout
            banner={{
                title: post.title,
            }}
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
                                    `}
                                </style>
                                <div
                                    dangerouslySetInnerHTML={{
                                        __html: post.content,
                                    }}
                                />
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
