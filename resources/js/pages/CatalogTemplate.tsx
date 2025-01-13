import React from "react";
import { motion } from "framer-motion";
import Filters from "../components/Filters";
import SchoolBooks from "../components/SchoolBooks";
import EbookSection from "../components/EbookSection";
import InnerPageLayout from "../layouts/InnerPageLayout";

interface CatalogTemplateProps {
    title: string;
    books: any[];
    category: string;
}

const CatalogTemplate: React.FC<CatalogTemplateProps> = ({
    title,
    books,
    category,
}) => {
    return (
        <InnerPageLayout title={title}>
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="container mt-5"
            >
                <Filters />
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.2 }}
                >
                    <SchoolBooks books={books} />
                </motion.div>
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.4 }}
                >
                    <EbookSection />
                </motion.div>
            </motion.div>
        </InnerPageLayout>
    );
};

export default CatalogTemplate;
