import React from "react";
import { motion } from "framer-motion";
import { Link } from "@inertiajs/react";
import { Author } from "../types/interfaces";
import DefaultAuthorImage from "../assets/img/default.png";

interface AuthorItemProps {
    index: number;
    author: Author;
    height?: number;
}

const AuthorItem: React.FC<AuthorItemProps> = ({ index, author, height }) => {
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
            className="book-card mb-3"
            style={{ backgroundColor: "rgb(240, 240, 240)" }}
        >
            <Link href={`/author/${author.slug}`} type="button">
                <img
                    src={author.photo || DefaultAuthorImage}
                    className="img-fluid img-responsive"
                    alt={author.name}
                    style={{
                        objectFit: "cover",
                        width: "100%",
                        padding: 5,
                        height: height ? height : "250px",
                    }}
                />
            </Link>
            <div className="card-body text-center informations py-2">
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
                {/* <p className="text-muted my-1">
                    {book.author.length > 15
                        ? `${book.author.substring(0, 15)}...`
                        : book.author}
                </p> */}
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
                    style={{ fontSize: 16, fontWeight: 600 }}
                >
                    {author.name && author.name.length > 18
                        ? `${author.name.substring(0, 18)}...`
                        : author.name}
                </h5>
            </div>
        </motion.div>
    );
};

export default AuthorItem;
