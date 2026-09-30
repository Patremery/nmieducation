import React from "react";
import InnerPageLayout from "../layouts/InnerPageLayout";
import {
    Author,
    BannerProps,
    Book,
    BreadcrumbItem,
} from "../types/interfaces";
import SingleAuthorInformations from "../components/SingleAuthorInformations";
import BookSlider from "../components/Slider";
import Breadcrumb from "../components/Breadcrumb";
import ItemGrid from "../components/ItemGrid";

interface ViewAuthorProps {
    author: Author;
    books: Book[];
}

const ViewAuthor: React.FC<ViewAuthorProps> = ({ author, books }) => {
    const banner: BannerProps = {
        title: "Nos Auteurs",
    };

    const breadcrumbItems: BreadcrumbItem[] = [
        { label: "Accueil", href: "/" },
        { label: "Nos Auteurs", href: "/authors" },
        { label: author.name },
    ];

    return (
        <InnerPageLayout title={author.name} banner={banner}>
            <div className="container pt-4 px-5">
                <Breadcrumb items={breadcrumbItems} />
            </div>
            <div className="container p-5">
                <SingleAuthorInformations author={author} books={books} />
            </div>
            {books.length > 0 && (
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
                        {books.length > 6 ? (
                            <BookSlider
                                books={books}
                                slideNumber={6}
                                imageHeight={300}
                            />
                        ) : (
                            <ItemGrid items={books} height={300} />
                        )}
                    </div>
                </div>
            )}
        </InnerPageLayout>
    );
};

export default ViewAuthor;
