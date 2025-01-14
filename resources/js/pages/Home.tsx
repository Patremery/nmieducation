import React from "react";
import { Book } from "../types/interfaces";
import Catalogue from "../pages/catalogue";

interface HomeProps {
    books: Book[];
}

const Home: React.FC<HomeProps> = ({ books }) => {
    return <Catalogue books={books} />;
};

export default Home;
