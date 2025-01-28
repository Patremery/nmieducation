import React, { ReactNode } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Banner from "../components/Banner";
import { BannerProps } from "../types/interfaces";

interface InnerPageLayoutProps {
    children: ReactNode;
    banner?: BannerProps;
}

const InnerPageLayout: React.FC<InnerPageLayoutProps> = ({
    children,
    banner,
}) => {
    return (
        <div className="min-vh-100 d-flex flex-column">
            <Navbar />
            <Banner
                title={banner?.title}
                description={banner?.description}
                backgroundImage={banner?.backgroundImage}
                textAlign={banner?.textAlign || "center"}
            />
            <main className="flex-grow-1">{children}</main>
            <Footer />
        </div>
    );
};

export default InnerPageLayout;
