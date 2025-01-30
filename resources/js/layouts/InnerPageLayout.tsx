import React, { ReactNode } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Banner from "../components/Banner";
import { BannerProps } from "../types/interfaces";

interface InnerPageLayoutProps {
    children: ReactNode;
    banner?: BannerProps;
    displayBanner?: boolean;
}

const InnerPageLayout: React.FC<InnerPageLayoutProps> = ({
    children,
    banner,
    displayBanner = true,
}) => {
    return (
        <div className="min-vh-100 d-flex flex-column">
            <Navbar />
            {displayBanner && (
                <Banner
                    title={banner?.title}
                    description={banner?.description}
                    backgroundImage={banner?.backgroundImage}
                    textAlign={banner?.textAlign || "center"}
                    className={banner?.className}
                />
            )}
            <main className="flex-grow-1">{children}</main>
            <Footer />
        </div>
    );
};

export default InnerPageLayout;
