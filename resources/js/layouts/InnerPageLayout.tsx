import React, { ReactNode } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Banner from "../components/Banner";
import { BannerProps } from "../types/interfaces";
import Head from "../components/Head";

export interface InnerPageLayoutProps {
    children: ReactNode;
    banner?: BannerProps;
    displayBanner?: boolean;
    /**
     * SEO payload produced by `App\Services\SeoService` (see `useSeo`). Every key
     * except `children` is forwarded to `<Head>`; unknown keys are ignored there.
     */
    [key: string]: unknown;
}

const InnerPageLayout: React.FC<InnerPageLayoutProps> = ({
    children,
    banner,
    displayBanner = true,
    ...seo
}) => {
    return (
        <>
            <Head {...seo} />
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
                <main
                    className="flex-grow-1"
                    style={{ backgroundColor: "#F7F7F7" }}
                >
                    {children}
                </main>
                <Footer />
            </div>
        </>
    );
};

export default InnerPageLayout;
