import React, { ReactNode } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Banner from "../components/Banner";

interface InnerPageLayoutProps {
    children: ReactNode;
    title?: string;
}

const InnerPageLayout: React.FC<InnerPageLayoutProps> = ({
    children,
    title,
}) => {
    return (
        <div className="min-vh-100 d-flex flex-column">
            <Navbar />
            <Banner title={title} />
            <main className="flex-grow-1">{children}</main>
            <Footer />
        </div>
    );
};

export default InnerPageLayout;
