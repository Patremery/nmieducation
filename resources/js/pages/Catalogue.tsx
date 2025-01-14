import React from "react";
import { motion } from "framer-motion";
import NewArrivals from "../components/NewArrivals";
import Filters from "../components/Filters";
import SchoolBooks from "../components/SchoolBooks";
import GeneralLiterature from "../components/GeneralLiterature";
import EbookSection from "../components/EbookSection";
import InnerPageLayout from "../layouts/InnerPageLayout";
import { Book } from "../types/interfaces";
import KidsBooks from "../components/KidsBooks";

interface CatalogueProps {
    books: Book[];
}

const Catalogue: React.FC<CatalogueProps> = ({ books }) => {
    const apiBooks = books.data;
    console.log("API Books: ", apiBooks);
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2, // Délai entre chaque enfant
            },
        },
    };

    const newBooks = () => {
        return apiBooks.filter((book) => book.new === "Yes");
    };

    const schoolBooks = () => {
        return apiBooks.filter((book) => book.category === "school");
    };

    const generalLiterature = () => {
        return apiBooks.filter((book) => book.category === "literature");
    };

    const kidsBooks = () => {
        return apiBooks.filter((book) => book.category === "kids");
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.5,
            },
        },
    };

    return (
        <InnerPageLayout title="Nos Livres">
            <motion.div
                className="container mt-5"
                variants={containerVariants}
                initial="hidden"
                animate="visible"
            >
                <motion.div variants={itemVariants}>
                    <NewArrivals books={newBooks()} />
                </motion.div>

                <motion.div variants={itemVariants}>
                    <Filters />
                </motion.div>

                <motion.div variants={itemVariants}>
                    <SchoolBooks books={schoolBooks()} />
                </motion.div>

                <motion.div variants={itemVariants}>
                    <GeneralLiterature books={generalLiterature()} />
                </motion.div>

                <motion.div variants={itemVariants}>
                    <KidsBooks books={kidsBooks()} />
                </motion.div>

                <motion.div variants={itemVariants}>
                    <EbookSection />
                </motion.div>
            </motion.div>
        </InnerPageLayout>
    );
};

export default Catalogue;
