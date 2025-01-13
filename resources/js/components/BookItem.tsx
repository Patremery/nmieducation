import React from "react";
import BookCover from "../assets/img/cover.png";
import { motion } from "framer-motion";
import { Link } from "@inertiajs/react";
import { Book } from "../types/interfaces";

interface BookItemProps {
    index: number;
    book: Book;
}

const BookItem: React.FC<BookItemProps> = ({ index, book }) => {
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
            className="book-card"
        >
            <Link href={`/book/${book.id}`} type="button">
                <img
                    src={book.cover}
                    className="card-img-top"
                    alt="Livre"
                    style={{ objectFit: "contain" }}
                />
            </Link>
            <div
                className="card-body text-center informations py-3"
                style={{ backgroundColor: "rgb(240, 240, 240)" }}
            >
                <hr
                    style={{
                        border: "none",
                        height: "3px",
                        width: "50%",
                        margin: "auto",
                        background:
                            "linear-gradient(to right, transparent, #d0d0d0 50%, transparent)",
                    }}
                />
                <p className="text-muted my-1">
                    {book.author.length > 15
                        ? `${book.author.substring(0, 15)}...`
                        : book.author}
                </p>
                <hr
                    style={{
                        border: "none",
                        height: "3px",
                        width: "50%",
                        margin: "auto",
                        background:
                            "linear-gradient(to right, transparent, #d0d0d0 50%, transparent)",
                    }}
                />

                <h5
                    className="my-1 mx-2"
                    style={{ fontSize: 18, fontWeight: 600 }}
                >
                    {book.title}
                </h5>
            </div>
        </motion.div>
    );
};

export default BookItem;
