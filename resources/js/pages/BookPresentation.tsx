import React from "react";
import InnerPageLayout from "../layouts/InnerPageLayout";
import BookSlider from "../components/Slider";
import SingleBookInformations from "../components/SingleBookInformations";
import { BannerProps, Book } from "../types/interfaces";
import { usePage } from "@inertiajs/react";

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

    const { props } = usePage();
    const flash = props.flash as { success?: string; error?: string };

    return (
        <InnerPageLayout banner={banner}>
            <div className="container-fluid">
                {flash?.success && (
                    <div className="alert alert-success mt-3">
                        {flash.success}
                    </div>
                )}
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
