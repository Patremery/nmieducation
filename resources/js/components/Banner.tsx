import React from "react";
import BannerImage from "../assets/img/banner.jpg";

interface BannerProps {
    title?: string;
}

const Banner: React.FC<BannerProps> = ({ title }) => {
    return (
        <div
            className="banner"
            style={{
                backgroundImage: `
                    linear-gradient(
                        rgba(0, 0, 0, 0.7),
                        rgba(0, 0, 0, 0.7)
                    ),
                    radial-gradient(
                        rgba(255, 255, 255, 0.1) 2px,
                        transparent 2px
                    ),
                    url(${BannerImage})`,
                backgroundSize: "cover, 20px 20px, cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
                backgroundBlendMode: "-moz-initial",
                padding: "70px 0",
                textAlign: "center",
                color: "white",
                position: "relative",
            }}
        >
            <h1 style={{ position: "relative", zIndex: 1, fontSize: 30 }}>
                {title}
            </h1>
        </div>
    );
};

export default Banner;
