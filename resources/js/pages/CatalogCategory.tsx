import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Filters from "../components/Filters";
import EbookSection from "../components/EbookSection";
import InnerPageLayout from "../layouts/InnerPageLayout";
import ItemGrid from "../components/ItemGrid";
import { InfiniteScroll } from "@inertiajs/react"; // Importer InfiniteScroll
import {
    Author,
    BannerProps,
    BookLanguage,
    Collection,
} from "../types/interfaces";

interface CatalogCategoryProps {
    code: string;
    title: string;
    books: {
        data: any[];
        links: any[];
        meta: {
            current_page: number;
            from: number;
            last_page: number;
            path: string;
            per_page: number;
            to: number;
            total: number;
        };
    };
    authors: Author[];
    languages: BookLanguage[];
    classrooms: string[];
    themes: string[];
    collections: Collection[];
    subjects: string[];
}

const CatalogCategory: React.FC<CatalogCategoryProps> = ({
    code,
    title,
    books,
    authors,
    languages,
    classrooms,
    themes,
    collections,
    subjects,
}) => {
    const banner: BannerProps = {
        title: "Notre Catalogue",
    };

    const getDisplayHeight = () => {
        if (["kids", "catalog"].includes(code)) {
            return 150;
        }

        return 270;
    };

    return (
        <InnerPageLayout banner={banner}>
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="container mt-5"
            >
                <h4
                    className="sectionTitle text-center py-5 text-primary"
                    style={{ fontSize: 40, fontWeight: 600 }}
                >
                    {title}
                </h4>
                <Filters
                    authors={authors}
                    categoryCode={code}
                    languages={languages}
                    classrooms={classrooms}
                    themes={themes}
                    collections={collections}
                    subjects={subjects}
                />

                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.2 }}
                    className="pb-5"
                >
                    <InfiniteScroll
                        data="books"
                        loading={() => "Loading..."}
                        preserve-url
                    >
                        <ItemGrid
                            items={books.data}
                            title={code}
                            height={getDisplayHeight()}
                            itemsToShow={books.data.length}
                        />
                    </InfiniteScroll>
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
