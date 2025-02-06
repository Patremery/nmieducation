import React, { useState } from "react";
import { Post } from "../types/interfaces";
import InnerPageLayout from "../layouts/InnerPageLayout";
import PostGridItem from "../components/PostGridItem";

interface BlogProps {
    posts: Post[];
}

const Blog: React.FC<BlogProps> = ({ posts }) => {
    const POSTS_PER_PAGE = 3;
    const [displayedPosts, setDisplayedPosts] = useState(POSTS_PER_PAGE);

    const loadMore = () => {
        setDisplayedPosts((prev) =>
            Math.min(prev + POSTS_PER_PAGE, posts.length)
        );
    };

    const hasMorePosts = displayedPosts < posts.length;

    return (
        <InnerPageLayout
            banner={{
                title: "Actualité",
            }}
        >
            <div className="container mt-5 p-5">
                <div className="row">
                    {posts.slice(0, displayedPosts).map((post) => (
                        <PostGridItem key={post.id} post={post} />
                    ))}
                </div>

                {hasMorePosts && (
                    <div className="text-center mt-4">
                        <button className="btn btn-primary" onClick={loadMore}>
                            Charger plus d'articles
                        </button>
                    </div>
                )}
            </div>
        </InnerPageLayout>
    );
};

export default Blog;
