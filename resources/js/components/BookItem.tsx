import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Link } from "@inertiajs/react";
import { Book } from "../types/interfaces";

interface BookItemProps {
    index: number;
    book: Book;
    height?: number;
}

const BookItem: React.FC<BookItemProps> = ({ index, book, height }) => {
    const [isMobile, setIsMobile] = useState(false);

    // Détecter si l'appareil est mobile
    useEffect(() => {
        const checkIfMobile = () => {
            setIsMobile(window.innerWidth < 768);
        };

        // Vérifier au chargement
        checkIfMobile();

        // Vérifier au redimensionnement
        window.addEventListener("resize", checkIfMobile);

        // Nettoyer l'écouteur d'événement
        return () => window.removeEventListener("resize", checkIfMobile);
    }, []);

    const authorNames = book.authors.map((author) => author.name).join(", ");
    const truncatedAuthors =
        authorNames.length > 15
            ? `${authorNames.substring(0, 15)}...`
            : authorNames;

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
                duration: 0.5,
                delay: index * 0.1,
            }}
            whileHover={{
                scale: 1.05,
                transition: { duration: 0.2 },
            }}
            className="book-card mb-3 mx-auto"
            style={{
                backgroundColor: "rgb(240, 240, 240)",
                maxWidth: "100%",
                width: "100%",
                boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
                borderRadius: "8px",
                overflow: "hidden",
                height: "100%",
                display: "flex",
                flexDirection: "column",
            }}
        >
            <Link
                href={`/book/${book.id}`}
                type="button"
                className="d-block text-center flex-grow-1"
                style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                }}
            >
                <img
                    src={book.cover}
                    className="img-fluid"
                    alt={book.title}
                    style={{
                        objectFit: isMobile ? "contain" : "cover",
                        width: "100%",
                        padding: isMobile ? "10px" : "5px",
                        height: isMobile
                            ? "auto"
                            : height
                            ? `${height}px`
                            : "auto",
                        maxHeight: isMobile
                            ? "none"
                            : height
                            ? `${height}px`
                            : "200px",
                    }}
                />
            </Link>
            <div className="card-body text-center informations py-2">
                <hr
                    style={{
                        border: "none",
                        height: "2px",
                        width: "50%",
                        margin: "auto",
                        background:
                            "linear-gradient(to right, transparent, #d0d0d0 50%, transparent)",
                    }}
                />
                <p
                    className="text-muted my-1 px-2"
                    style={{
                        fontSize: isMobile ? "0.7rem" : "0.8rem",
                        overflow: "hidden",
                        textOverflow: "ellipsis",
                        whiteSpace: "nowrap",
                    }}
                >
                    {book.category === "school" && book.collection
                        ? book.collection.name
                        : truncatedAuthors}
                </p>
                <hr
                    style={{
                        border: "none",
                        height: "2px",
                        width: "50%",
                        margin: "auto",
                        background:
                            "linear-gradient(to right, transparent, #d0d0d0 50%, transparent)",
                    }}
                />

                <h5
                    className="my-1 mx-2"
                    style={{
                        fontSize: isMobile ? "0.8rem" : "0.9rem",
                        fontWeight: 700,
                        overflow: "hidden",
                        textOverflow: "ellipsis",
                        whiteSpace: "nowrap",
                    }}
                >
                    {book.title}
                </h5>
            </div>
        </motion.div>
    );
};

export default BookItem;
