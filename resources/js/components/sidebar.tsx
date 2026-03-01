import React from "react";
import { Post } from "../types/interfaces";
import PostListItems from "./PostListItems";

const Sidebar = ({
    latestPosts,
    similarPosts,
}: {
    latestPosts: Post[];
    similarPosts: Post[];
}) => {
    return (
        <div className="sidebar rounded-4 overflow-hidden">
            <div className="p-4 bg-white shadow-sm rounded-4 mb-4 border border-light">
                <div className="d-flex align-items-center mb-4">
                    <div className="bg-primary rounded-pill me-3" style={{ width: '4px', height: '24px' }}></div>
                    <h4 className="mb-0 fw-bold fs-5">Articles récents</h4>
                </div>

                <div className="recent-posts d-flex flex-column gap-2">
                    {latestPosts.slice(0, 5).map((post) => (
                        <PostListItems key={post.id} post={post} />
                    ))}
                </div>
            </div>
            
            {/* You can add another widget here, e.g. Newsletter, Tags, etc. */}
            <div className="p-4 bg-light rounded-4 border border-light text-center">
                 <div className="mb-3">
                     <i className="far fa-envelope text-primary fs-1 mb-2"></i>
                 </div>
                 <h5 className="fw-bold fs-5 mb-3">Restez informés</h5>
                 <p className="text-muted small mb-4">Abonnez-vous à notre newsletter pour recevoir les dernières actualités littéraires.</p>
                 <div className="input-group mb-2">
                    <input type="email" className="form-control rounded-pill-start border-0 shadow-sm ps-4" placeholder="Votre email..." />
                    <button className="btn btn-primary rounded-pill-end shadow-sm px-3" type="button">
                        <i className="fas fa-paper-plane"></i>
                    </button>
                 </div>
                 <style>
                     {`
                     .rounded-pill-start {
                         border-top-left-radius: 50rem !important;
                         border-bottom-left-radius: 50rem !important;
                     }
                     .rounded-pill-end {
                         border-top-right-radius: 50rem !important;
                         border-bottom-right-radius: 50rem !important;
                     }
                     `}
                 </style>
            </div>
        </div>
    );
};

export default Sidebar;
