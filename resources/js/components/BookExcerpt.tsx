// components/BookExcerpt.tsx
import { useState } from "react";
import { Link } from "@inertiajs/react";
import { Book } from "../types/interfaces";

const BookExcerpt = ({ books }: { books: Book[] }) => {
    // Prendre seulement les 5 premiers livres
    const limitedBooks = books.slice(0, 5);
    const [currentIndex, setCurrentIndex] = useState(0);

    const nextSlide = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === limitedBooks.length - 1 ? 0 : prevIndex + 1
        );
    };

    const prevSlide = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === 0 ? limitedBooks.length - 1 : prevIndex - 1
        );
    };

    const currentExcerpt = limitedBooks[currentIndex];

    return (
        <div className="position-relative px-5">
            <h2 className="mb-1 font-weight-600 text-primary">Extraits</h2>
            <div className="border-top border-2 mb-4 text-primary"></div>

            <div className="row align-items-center px-5">
                <div className="col-md-4">
                    <img
                        src={currentExcerpt.cover}
                        alt={currentExcerpt.title}
                        className="img-fluid"
                        width="80%"
                    />
                </div>
                <div className="col-md-8">
                    <h2 className="mb-3 font-weight-600">
                        {currentExcerpt.title}
                    </h2>
                    <h5 className="mb-4 text-muted">
                        {currentExcerpt.authors
                            .map((author) => author.name)
                            .join(", ")}
                    </h5>
                    <p className="mb-4">{currentExcerpt.description}</p>
                    <Link
                        href={`/book/${currentExcerpt.slug}`}
                        className="text-primary"
                    >
                        Lire la suite →
                    </Link>
                </div>
            </div>

            {/* Contrôles du carousel */}
            <button
                className="carousel-control-prev"
                type="button"
                onClick={prevSlide}
                style={{
                    position: "absolute",
                    //left: "-50px",
                    top: "50%",
                    transform: "translateY(-50%)",
                    backgroundColor: "#0d6efd",
                    borderRadius: "50%",
                    width: "40px",
                    height: "40px",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    border: "none",
                }}
            >
                <span
                    className="carousel-control-prev-icon"
                    aria-hidden="true"
                ></span>
                <span className="visually-hidden">Précédent</span>
            </button>
            <button
                className="carousel-control-next"
                type="button"
                onClick={nextSlide}
                style={{
                    position: "absolute",
                    //right: "-50px",
                    top: "50%",
                    transform: "translateY(-50%)",
                    backgroundColor: "#0d6efd",
                    borderRadius: "50%",
                    width: "40px",
                    height: "40px",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    border: "none",
                }}
            >
                <span
                    className="carousel-control-next-icon"
                    aria-hidden="true"
                ></span>
                <span className="visually-hidden">Suivant</span>
            </button>

            {/* Indicateurs (optionnel) */}
            <div className="d-flex justify-content-center mt-4">
                {limitedBooks.map((_, i) => (
                    <button
                        key={i}
                        className={`btn btn-sm rounded-circle mx-1 ${
                            i === currentIndex ? "btn-primary" : "btn-secondary"
                        }`}
                        style={{ width: "10px", height: "10px", padding: "0" }}
                        onClick={() => setCurrentIndex(i)}
                    />
                ))}
            </div>
        </div>
    );
};

export default BookExcerpt;
