import React, { useState, useEffect } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import BookSlider from "./Slider";
import { Book } from "../types/interfaces";

const NewArrivals: React.FC<{ books: Book[] }> = ({ books }) => {
    const [isMobile, setIsMobile] = useState(false);

    // Détecter si l'appareil est mobile
    useEffect(() => {
        const checkIfMobile = () => {
            setIsMobile(window.innerWidth < 768);
        };

        // Vérifier au chargement
        checkIfMobile();

        // Vérifier au redimensionnement
        window.addEventListener("resize", checkIfMobile);

        // Nettoyer l'écouteur d'événement
        return () => window.removeEventListener("resize", checkIfMobile);
    }, []);

    // Styles adaptés selon la taille de l'écran
    const containerStyle = {
        padding: isMobile ? "15px" : "100px",
        backgroundColor: "#f0f0f0",
        paddingTop: isMobile ? "20px" : "30px",
        paddingBottom: isMobile ? "50px" : "100px",
    };

    return (
        <div className="nouveautes mb-5">
            <h4 className="sectionTitle">
                <span className="badge bg-danger">Nouveautés</span>
            </h4>
            <div style={containerStyle} className="text-center">
                <BookSlider books={books} slideNumber={isMobile ? 2 : 5} />
            </div>
        </div>
    );
};

export default NewArrivals;
