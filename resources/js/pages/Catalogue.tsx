import React from "react";
import { motion } from "framer-motion";
import NewArrivals from "../components/NewArrivals";
import Filters from "../components/Filters";
import EbookSection from "../components/EbookSection";
import InnerPageLayout from "../layouts/InnerPageLayout";
import { BannerProps, Book } from "../types/interfaces";
import CategoryLine from "../components/CategoryLine";

interface CatalogueProps {
    books: Book[];
}

const Catalogue: React.FC<CatalogueProps> = ({ books }) => {
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
        return books.filter((book) => book.new === "Yes");
    };

    const schoolBooks = () => {
        return books.filter((book) => book.category === "school");
    };

    const generalLiterature = () => {
        return books.filter((book) => book.category === "literature");
    };

    const kidsBooks = () => {
        return books.filter((book) => book.category === "kids");
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
    const banner: BannerProps = {
        title: "Nos Livres",
    };
    return (
        <InnerPageLayout banner={banner}>
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
                    <h2 className="text-center mb-5">
                        <span
                            className="text-primary"
                            style={{ fontWeight: 600 }}
                        >
                            Catalogue
                        </span>
                    </h2>
                    {/* <Filters /> */}
                </motion.div>

                <motion.div variants={itemVariants}>
                    <CategoryLine
                        title="Manuels Scolaires"
                        code="school"
                        items={schoolBooks()}
                        itemsToShow={6}
                    />
                </motion.div>

                <motion.div variants={itemVariants}>
                    <CategoryLine
                        title="Littérature Générale"
                        code="literature"
                        items={generalLiterature()}
                        itemsToShow={6}
                    />
                </motion.div>

                <motion.div variants={itemVariants}>
                    <CategoryLine
                        title="Littérature Jeunesse"
                        code="kids"
                        items={kidsBooks()}
                        itemsToShow={6}
                        height={150}
                    />
                </motion.div>

                <motion.div variants={itemVariants}>
                    <EbookSection />
                </motion.div>
            </motion.div>
        </InnerPageLayout>
    );
};

export default Catalogue;
