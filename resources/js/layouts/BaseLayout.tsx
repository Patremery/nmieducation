import React, { ReactNode } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

interface BaseLayoutProps {
    children: ReactNode;
}

const BaseLayout: React.FC<BaseLayoutProps> = ({ children }) => {
    return (
        <div className="min-vh-100 d-flex flex-column">
            <Navbar />
            <main className="flex-grow-1">{children}</main>
            <Footer />
        </div>
    );
};

export default BaseLayout;
