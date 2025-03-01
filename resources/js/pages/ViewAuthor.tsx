import React from "react";
import InnerPageLayout from "../layouts/InnerPageLayout";
import { Author, BannerProps, Book } from "../types/interfaces";
import SingleAuthorInformations from "../components/SingleAuthorInformations";

interface ViewAuthorProps {
    author: Author;
    books: Book[];
}

const ViewAuthor: React.FC<ViewAuthorProps> = ({ author, books }) => {
    return (
        <InnerPageLayout>
            <div className="container-fluid px-2 px-md-4">
                <SingleAuthorInformations author={author} />
            </div>
        </InnerPageLayout>
    );
};

export default ViewAuthor;
