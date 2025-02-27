import React from "react";
import InnerPageLayout from "../layouts/InnerPageLayout";
import BookSlider from "../components/Slider";
import SingleBookInformations from "../components/SingleBookInformations";
import { BannerProps, Book } from "../types/interfaces";

interface BookPresentationProps {
    book: Book;
    similarBooks: Book[];
}

const BookPresentation: React.FC<BookPresentationProps> = ({
    book,
    similarBooks,
}) => {
    const getImageHeight = () => {
        if (book.category === "kids") {
            return 200;
        }
        return 400;
    };
    const banner: BannerProps = {
        title: "Nos Livres",
    };

    return (
        <InnerPageLayout banner={banner}>
            <div className="container-fluid">
                <SingleBookInformations book={book} />
                {similarBooks.length > 5 && (
                    <>
                        <div className="text-center">
                            <h3
                                className="mt-5 text-primary"
                                style={{ fontWeight: 700 }}
                            >
                                Autres ouvrages
                            </h3>
                            <h5>qui pourraient vous intéresser</h5>
                        </div>

                        <div
                            className="row mt-3 py-4 mb-5"
                            style={{ padding: 70 }}
                        >
                            <BookSlider
                                books={similarBooks}
                                slideNumber={5}
                                imageHeight={getImageHeight()}
                            />
                        </div>
                    </>
                )}
            </div>
        </InnerPageLayout>
    );
};

export default BookPresentation;
