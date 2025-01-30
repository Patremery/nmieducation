import React from "react";
import BannerImage from "../assets/img/banner.jpg";
import { BannerProps } from "../types/interfaces";

const Banner: React.FC<BannerProps> = ({
    title,
    description,
    backgroundImage = BannerImage,
    textAlign,
    className,
}) => {
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
                    url(${backgroundImage})`,
                backgroundSize: "cover, 20px 20px, cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
                backgroundBlendMode: "-moz-initial",
                padding: "70px 0",
                color: "white",
                position: "relative",
            }}
        >
            <h1
                style={{
                    position: "relative",
                    zIndex: 1,
                    fontSize: 30,
                    textAlign: textAlign,
                }}
            >
                {title}
            </h1>
            <div className="row px-5 mx-5">
                <div className={className} style={{ textAlign: textAlign }}>
                    {description}
                </div>
            </div>
        </div>
    );
};

export default Banner;
