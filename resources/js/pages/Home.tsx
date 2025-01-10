import React from "react";
import Navbar from "../components/Navbar";
import Banner from "../components/Banner";
import NewArrivals from "../components/NewArrivals";
import Filters from "../components/Filters";
import SchoolBooks from "../components/SchoolBooks";
import GeneralLiterature from "../components/GeneralLiterature";
import EbookSection from "../components/EbookSection";
import Footer from "../components/Footer";

const App: React.FC = () => {
    return (
        <div>
            <Navbar />
            <Banner />
            <div className="container mt-5">
                <NewArrivals />
                <Filters />
                <SchoolBooks />
                <GeneralLiterature />
                <EbookSection />
            </div>
            <Footer />
        </div>
    );
};

export default App;
