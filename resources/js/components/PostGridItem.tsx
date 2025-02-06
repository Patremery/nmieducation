import React from "react";
import parse from "html-react-parser";
import { Post } from "../types/interfaces";

const PostGridItem = ({ post }: { post: Post }) => {
    return (
        <div className="col-md-4 mb-4" key={post.id}>
            <div className="card">
                {post.featured_image && (
                    <img
                        src={`${post.featured_image}`}
                        className="card-img-top"
                        alt={post.title}
                        style={{
                            height: "200px",
                            objectFit: "cover",
                        }}
                    />
                )}
                <div className="card-body">
                    <h5 className="card-title">{parse(post.title)}</h5>
                    <p className="card-text">
                        {post.content.length > 100
                            ? parse(post.content.substring(0, 100) + "...")
                            : parse(post.content)}
                    </p>
                    <a href={`/posts/${post.slug}`} className="btn btn-primary">
                        Lire plus
                    </a>
                </div>
            </div>
        </div>
    );
};

export default PostGridItem;
