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
        current_page: number;
        last_page: number;
        per_page: number;
        total: number;
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
        current_page: 1,
        last_page: 1,
        per_page: 12,
        total: 0,
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
        initialBooks.current_page || 1
    );
    const [lastPage, setLastPage] = useState(initialBooks.last_page || 1);
    const [loading, setLoading] = useState(false);
    const [hasMore, setHasMore] = useState(
        (initialBooks.current_page || 1) < (initialBooks.last_page || 1)
    );

    useEffect(() => {
        // Ici, nous devons gérer les mises à jour lorsque `initialBooks` change (par exemple, suite à une navigation Inertia ou un filtre)
        // Si la page actuelle des `initialBooks` est supérieure à la `currentPage` stockée,
        // cela signifie qu'Inertia a chargé de nouveaux livres pour la page suivante.
        if ((initialBooks.current_page || 1) > currentPage) {
            setDisplayedBooks((prevBooks) => [
                ...prevBooks,
                ...(initialBooks.data || []),
            ]);
        } else if ((initialBooks.current_page || 1) === 1) {
            // Si c'est la première page, ou un changement de filtre qui réinitialise la pagination,
            // nous remplaçons les livres affichés.
            setDisplayedBooks(initialBooks.data || []);
        }
        setCurrentPage(initialBooks.current_page || 1);
        setLastPage(initialBooks.last_page || 1);
        setHasMore(
            (initialBooks.current_page || 1) < (initialBooks.last_page || 1)
        );
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

    console.log("Displayed Books:", displayedBooks);

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
