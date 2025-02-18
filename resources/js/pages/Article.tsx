import React from "react";
import { Post } from "../types/interfaces";
import InnerPageLayout from "../layouts/InnerPageLayout";

interface ArticleProps {
    post: Post;
}

const Article: React.FC<ArticleProps> = ({ post }) => {
    return (
        <InnerPageLayout
            banner={{
                title: post.title,
                className: "p-5 display-7 font-weight-600",
                //image: post.featured_image,
            }}
        >
            <div className="container mt-5 p-5">
                <div className="row">
                    <div className="col-9">
                        <div>
                            {post.featured_image && (
                                <img
                                    src={post.featured_image}
                                    alt={post.title}
                                    className="img-fluid mb-4"
                                />
                            )}
                            <h3 className="mb-4 text-primary font-weight-600">
                                {post.title}
                            </h3>

                            <div className="post-content">
                                <style jsx>{`
                                    .post-content img {
                                        max-width: 100%;
                                        height: auto;
                                        display: block;
                                        margin: 1rem auto;
                                    }
                                `}</style>
                                <div
                                    dangerouslySetInnerHTML={{
                                        __html: post.content,
                                    }}
                                />
                            </div>
                        </div>
                    </div>
                    <div className="col-3">
                        <h2>Articles récents</h2>
                    </div>
                </div>
            </div>
        </InnerPageLayout>
    );
};

export default Article;
