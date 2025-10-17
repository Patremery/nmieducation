import React from "react";
import { BannerProps, Book } from "../types/interfaces";
import InnerPageLayout from "../layouts/InnerPageLayout";
import { motion } from "framer-motion";
import NewArrivals from "../components/NewArrivals";
import EbookSection from "../components/EbookSection";
import GridDisplay1 from "../components/GridDisplay1";
import CallToAction from "../components/CallToAction";
import HomeGridDisplay2 from "../components/HomeGridDisplay2";
import FeaturedBooks from "../components/FeaturedBooks";
import BookExcerpt from "../components/BookExcerpt";

interface HomeProps {
    books: Book[];
}

const Home: React.FC<HomeProps> = ({ books }) => {
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2,
            },
        },
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
    const newBooks = () => {
        return books.filter((book) => book.new === "Yes");
    };
    const literatureBooks = () => {
        return books.filter((book) => book.category === "literature");
    };

    return (
        <InnerPageLayout title="Accueil" displayBanner={false}>
            <motion.div
                className="container"
                variants={containerVariants}
                initial="hidden"
                animate="visible"
            >
                <motion.div variants={itemVariants} className="mb-5">
                    <FeaturedBooks />
                </motion.div>
                <motion.div variants={itemVariants}>
                    <NewArrivals books={newBooks()} />
                </motion.div>
                <motion.div variants={itemVariants}>
                    <BookExcerpt books={literatureBooks()} />
                </motion.div>
                <motion.div variants={itemVariants}>
                    <CallToAction
                        title="Découvrez notre univers littéraire riche et varié"
                        description="Nous sommes fiers de promouvoir la diversité culturelle et de soutenir les auteurs camerounais. Notre approche innovante de l'édition garantit des ouvrages modernes et adaptés aux besoins de tous."
                        buttonText="Contactez-nous"
                        buttonLink="/contact"
                        backgroundColor="rgb(3 125 211)"
                        textColor="black"
                        titleColor="white"
                    />
                </motion.div>
                <motion.div variants={itemVariants}>
                    <HomeGridDisplay2
                        title="A Propos de NMI Education"
                        subtitle="L'histoire d'un parcours exceptionnel dans l'édition du manuel scolaire."
                        description={`<p class="mb-4 fs-5"> En 2002, l'entreprise NMI Education fait ses premiers pas en qualité de représentant et distributeur de la Cambridge University Press. Trois ans plus tard, elle s'engage totalement dans la production éditoriale, faisant du manuel scolaire son cheval de bataille.</p>
                        <p class="mb-4 fs-5">Le porteur d'idée M. NFORGWEI Rogers, grâce à sa formation titanesque et son expérience professionnelle avérées, a fait de NMI Education un empire qui s'érige aujourd'hui comme l'un des leaders incontestables dans le domaine de l'édition au Cameroun.</p>`}
                        videoUrl="https://www.youtube.com/embed/cxu-CefkDB8?si=uN0ncpBS65pSUCHI"
                    />
                </motion.div>
                <motion.div variants={itemVariants}>
                    <EbookSection />
                </motion.div>
                <motion.div variants={itemVariants}>
                    <GridDisplay1
                        title="Plus qu'une maison d'édition"
                        subtitle="NMI Education est fier de promouvoir les talents littéraires camerounais et africains."
                        description="Nous mettons en valeur une diversité d'auteurs et d'ouvrages, du roman à la littérature jeunesse, en passant par les essais. La maison d'édition NMI Education s'engage à promouvoir la diversité culturelle et à donner une voix à tous les auteurs, quelles que soient leurs origines ou leurs convictions. En publiant des œuvres variées et en mettant en avant des talents émergents, nous contribuons à enrichir le paysage littéraire camerounais et africain."
                    />
                </motion.div>
                <motion.div variants={itemVariants}>
                    <CallToAction
                        title="Vous avez un projet éditorial ?"
                        description="Nous sommes à la recherche de nouveaux talents. Si vous êtes un auteur, un éditeur ou un passionné de littérature, n'hésitez pas à nous contacter."
                        buttonText="Contactez-nous"
                        buttonLink="/contact"
                        backgroundColor="rgb(224 224 224)"
                        textColor="grey"
                        titleColor="black"
                    />
                </motion.div>
            </motion.div>
        </InnerPageLayout>
    );
};

export default Home;
