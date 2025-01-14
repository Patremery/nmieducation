import React from "react";
import { motion } from "framer-motion";
import Filters from "../components/Filters";
import EbookSection from "../components/EbookSection";
import InnerPageLayout from "../layouts/InnerPageLayout";
import ItemGrid from "../components/ItemGrid";

interface CatalogCategoryProps {
    code: string;
    books: any[];
}

const CatalogCategory: React.FC<CatalogCategoryProps> = ({ code, books }) => {
    return (
        <InnerPageLayout title={code}>
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
                    <ItemGrid
                        items={books.data}
                        title={code}
                        itemsToShow={12}
                    />
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

export default CatalogCategory;
