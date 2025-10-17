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
        <InnerPageLayout title={book.title} banner={banner}>
            <div className="container p-5">
                <SingleBookInformations book={book} />
            </div>
            {/* {similarBooks.length > 5 && (
                <div
                    className="container-fluid p-4"
                    style={{ backgroundColor: "#FFFFFF" }}
                >
                    <div className="text-center mt-4 mt-md-5">
                        <h3
                            className="text-primary"
                            style={{ fontWeight: 700 }}
                        >
                            Autres ouvrages
                        </h3>
                        <h5>qui pourraient vous intéresser</h5>
                    </div>

                    <div className="row mt-3 py-3 py-md-4 mb-4 mb-md-5 px-2 px-md-4 px-lg-5">
                        <BookSlider
                            books={similarBooks}
                            slideNumber={similarBooks.length > 5 ? 6 : 5}
                            imageHeight={getImageHeight()}
                        />
                    </div>
                </div>
            )} */}
        </InnerPageLayout>
    );
};

export default BookPresentation;
