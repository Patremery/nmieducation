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
    books: any[];
    authors: Author[];
    languages: BookLanguage[];
    classrooms: string[];
    themes: string[];
    collections: Collection[];
    subjects: string[];
    currentPage: number;
    lastPage: number;
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
    currentPage: initialCurrentPage,
    lastPage: initialLastPage,
}) => {
    const banner: BannerProps = {
        title: "Notre Catalogue",
    };

    const [displayedBooks, setDisplayedBooks] = useState(books);
    const [currentPage, setCurrentPage] = useState(initialCurrentPage);
    const [lastPage, setLastPage] = useState(initialLastPage);
    const [loading, setLoading] = useState(false);
    const [hasMore, setHasMore] = useState(
        initialCurrentPage < initialLastPage
    );

    useEffect(() => {
        // Si la nouvelle page est supérieure à la page actuelle, cela signifie qu'Inertia a chargé de nouveaux livres.
        // Nous les ajoutons à la liste existante.
        if (initialCurrentPage > currentPage) {
            setDisplayedBooks((prevBooks) => [...prevBooks, ...books]);
        } else {
            // Sinon, c'est un chargement initial ou un changement de filtre qui remplace les livres.
            setDisplayedBooks(books);
        }
        setCurrentPage(initialCurrentPage);
        setLastPage(initialLastPage);
        setHasMore(initialCurrentPage < initialLastPage);
    }, [books, initialCurrentPage, initialLastPage]);

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
                onFinish: () => setLoading(false),
            }
        );
    };

    useEffect(() => {
        const handleScroll = () => {
            if (
                window.innerHeight + document.documentElement.scrollTop >=
                    document.documentElement.offsetHeight - 100 && // -100 pour charger un peu avant la fin
                hasMore &&
                !loading
            ) {
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
                {!hasMore && (
                    <p className="text-center">
                        Tous les livres ont été affichés.
                    </p>
                )}
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
