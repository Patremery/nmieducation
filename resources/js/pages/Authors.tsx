import React, { useEffect } from "react";
import { motion } from "framer-motion";
import EbookSection from "../components/EbookSection";
import InnerPageLayout from "../layouts/InnerPageLayout";
import { Author, BannerProps } from "../types/interfaces";
import AuthorGrid from "../components/AuthorGrid";

interface AuthorsProps {
    title: string;
    authors: Author[];
}

const Authors: React.FC<AuthorsProps> = ({ title, authors }) => {
    const banner: BannerProps = {
        title: title,
    };
    return (
        <InnerPageLayout banner={banner}>
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="container mt-5"
            >
                {/*  <h4
                    className="sectionTitle text-center py-5 text-primary"
                    style={{ fontSize: 40, fontWeight: 600 }}
                >
                    {title}
                </h4> */}

                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.2 }}
                >
                    <AuthorGrid authors={authors} />
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

export default Authors;
