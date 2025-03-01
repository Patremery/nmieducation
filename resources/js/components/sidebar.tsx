import React from "react";
import { Post } from "../types/interfaces";
import PostGridItem from "./PostGridItem";
import PostListItems from "./PostListItems";

const Sidebar = ({
    latestPosts,
    similarPosts,
}: {
    latestPosts: Post[];
    similarPosts: Post[];
}) => {
    return (
        <div className="sidebar p-3 bg-light rounded">
            <h4 className="mb-3">Articles récents</h4>
            <hr className="mb-3" />

            <div className="recent-posts">
                {latestPosts.map((post) => (
                    <PostListItems key={post.id} post={post} />
                ))}
            </div>
        </div>
    );
};

export default Sidebar;
