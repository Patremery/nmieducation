import React from "react";
import BannerImage from "../assets/img/banner.jpg";
import { BannerProps } from "../types/interfaces";

const Banner: React.FC<BannerProps> = ({
    title,
    description,
    backgroundImage = BannerImage,
    textAlign,
    className,
    padding = "100px 0",
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
                padding: padding,
                color: "white",
                position: "relative",
            }}
        >
            <div className="container">
                {title && (
                    <h1
                        style={{
                            position: "relative",
                            zIndex: 1,
                            fontSize: 30,
                            textAlign: textAlign,
                            marginBottom: description ? "1.5rem" : "0",
                        }}
                    >
                        {title}
                    </h1>
                )}
                {description && (
                    <div className="row">
                        <div
                            className={className}
                            style={{ textAlign: textAlign }}
                        >
                            {description}
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Banner;
