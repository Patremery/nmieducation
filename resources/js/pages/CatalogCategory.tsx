import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Filters from "../components/Filters";
import EbookSection from "../components/EbookSection";
import InnerPageLayout from "../layouts/InnerPageLayout";
import ItemGrid from "../components/ItemGrid";
import { router } from "@inertiajs/react";
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
        links: any[]; // Ajout pour la structure complète si nécessaire
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
    books: initialBooks = {
        data: [],
        links: [],
        meta: {
            current_page: 1,
            from: 0,
            last_page: 1,
            path: "",
            per_page: 12,
            to: 0,
            total: 0,
        },
    },
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

    const [displayedBooks, setDisplayedBooks] = useState(
        initialBooks.data || []
    );
    const [currentPage, setCurrentPage] = useState(
        initialBooks.meta.current_page || 1
    );
    const [lastPage, setLastPage] = useState(initialBooks.meta.last_page || 1);
    const [loading, setLoading] = useState(false);
    const [hasMore, setHasMore] = useState(
        (initialBooks.meta.current_page || 1) <
            (initialBooks.meta.last_page || 1)
    );

    useEffect(() => {
        const newCurrentPage = initialBooks.meta.current_page || 1;
        const newLastPage = initialBooks.meta.last_page || 1;
        const newHasMore = newCurrentPage < newLastPage;

        // Si la nouvelle page actuelle est supérieure à l'ancienne, nous ajoutons les nouveaux livres.
        if (newCurrentPage > currentPage) {
            setDisplayedBooks((prevBooks) => [
                ...prevBooks,
                ...(initialBooks.data || []),
            ]);
        } else if (newCurrentPage === 1) {
            // Si c'est la première page (ou un reset via les filtres), nous remplaçons les livres.
            setDisplayedBooks(initialBooks.data || []);
        }

        setCurrentPage(newCurrentPage);
        setLastPage(newLastPage);
        setHasMore(newHasMore);
    }, [initialBooks]);

    const fetchMoreBooks = () => {
        if (loading || !hasMore) return;

        setLoading(true);
        const nextPage = currentPage + 1;

        router.get(
            window.location.pathname,
            { page: nextPage },
            {
                preserveScroll: true,
                preserveState: true,
                onFinish: () => {
                    setLoading(false);
                },
            }
        );
    };

    useEffect(() => {
        const handleScroll = () => {
            const scrollThresholdMet =
                window.innerHeight + document.documentElement.scrollTop >=
                document.documentElement.offsetHeight - 100; // -100 pour charger un peu avant la fin

            if (scrollThresholdMet && hasMore && !loading) {
                fetchMoreBooks();
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, [currentPage, lastPage, loading, hasMore]);

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
                >
                    <ItemGrid
                        items={displayedBooks}
                        title={code}
                        height={getDisplayHeight()}
                        itemsToShow={12}
                    />
                </motion.div>
                {loading && <p className="text-center">Chargement...</p>}

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
