import React from "react";
import InnerPageLayout from "../layouts/InnerPageLayout";
import { Author, BannerProps, Book } from "../types/interfaces";
import SingleAuthorInformations from "../components/SingleAuthorInformations";
import BookSlider from "../components/Slider";

interface ViewAuthorProps {
    author: Author;
    books: Book[];
}

const ViewAuthor: React.FC<ViewAuthorProps> = ({ author, books }) => {
    const banner: BannerProps = {
        title: "Nos Auteurs",
    };

    return (
        <InnerPageLayout title={author.name} banner={banner}>
            <div className="container p-5">
                <SingleAuthorInformations author={author} books={books} />
            </div>
            {books.length > 5 && (
                <div
                    className="container-fluid p-4"
                    style={{ backgroundColor: "#FFFFFF" }}
                >
                    <div className="text-center mt-4 mt-md-5">
                        <h3
                            className="text-primary"
                            style={{ fontWeight: 700 }}
                        >
                            Les ouvrages
                        </h3>
                        <h5>de l'auteur</h5>
                    </div>

                    <div className="row mt-3 py-3 py-md-4 mb-4 mb-md-5 px-2 px-md-4 px-lg-5">
                        <BookSlider
                            books={books}
                            slideNumber={6}
                            imageHeight={300}
                        />
                    </div>
                </div>
            )}
        </InnerPageLayout>
    );
};

export default ViewAuthor;
